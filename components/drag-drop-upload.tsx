"use client"

import { useRef, useState } from "react"
import { Upload, FileText, X, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface DragDropUploadProps {
  onFileSelect?: (file: File) => void
  acceptedFormats?: string[]
  maxSize?: number // in bytes
}

export function DragDropUpload({
  onFileSelect,
  acceptedFormats = ["pdf", "jpg", "jpeg", "png"],
  maxSize = 5 * 1024 * 1024, // 5MB default
}: DragDropUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const validateFile = (f: File): boolean => {
    // Check file size
    if (f.size > maxSize) {
      setError(`File size exceeds ${maxSize / 1024 / 1024}MB limit`)
      return false
    }

    // Check file type
    const extension = f.name.split(".").pop()?.toLowerCase()
    if (!extension || !acceptedFormats.includes(extension)) {
      setError(`Invalid file type. Accepted: ${acceptedFormats.join(", ")}`)
      return false
    }

    return true
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const droppedFiles = e.dataTransfer.files
    if (droppedFiles.length > 0) {
      const f = droppedFiles[0]
      if (validateFile(f)) {
        setFile(f)
        setError(null)
        onFileSelect?.(f)
        simulateUpload()
      }
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const f = e.target.files[0]
      if (validateFile(f)) {
        setFile(f)
        setError(null)
        onFileSelect?.(f)
        simulateUpload()
      }
    }
  }

  const simulateUpload = () => {
    setUploadProgress(0)
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 200)
  }

  const removeFile = () => {
    setFile(null)
    setError(null)
    setUploadProgress(0)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-4">
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileSelect}
        accept={acceptedFormats.map((fmt) => `.${fmt}`).join(",")}
        className="hidden"
      />

      {!file ? (
        <motion.div
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          animate={{
            backgroundColor: isDragging ? "rgba(59, 130, 246, 0.05)" : "transparent",
            borderColor: isDragging ? "rgb(59, 130, 246)" : "rgb(229, 231, 235)",
          }}
          className="rounded-xl border-2 border-dashed p-8 transition-colors"
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <motion.div
              animate={{ scale: isDragging ? 1.1 : 1 }}
              className="rounded-full bg-primary/10 p-4"
            >
              <Upload className="h-8 w-8 text-primary" />
            </motion.div>

            <div>
              <p className="mb-1 text-lg font-semibold">Drag your policy document here</p>
              <p className="text-sm text-muted-foreground">or click to browse</p>
            </div>

            <Button
              onClick={() => fileInputRef.current?.click()}
              variant="outline"
              type="button"
            >
              Select File
            </Button>

            <p className="text-xs text-muted-foreground">
              Supported: {acceptedFormats.join(", ").toUpperCase()} • Max {maxSize / 1024 / 1024}MB
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-xl border border-primary/30 bg-primary/5 p-4"
        >
          {/* File Info */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
            </div>
            <button
              onClick={removeFile}
              className="rounded-lg p-2 hover:bg-muted transition-colors"
              aria-label="Remove file"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Progress Bar */}
          {uploadProgress < 100 && (
            <motion.div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold">Analyzing document...</span>
                <span className="text-muted-foreground">{Math.round(uploadProgress)}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${uploadProgress}%` }}
                  className="h-full bg-primary transition-all"
                />
              </div>
            </motion.div>
          )}

          {/* Success State */}
          {uploadProgress >= 100 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 p-3 rounded-lg">
                <CheckCircle className="h-4 w-4" />
                <span>Document uploaded successfully!</span>
              </div>

              <Button className="w-full" size="sm">
                Analyze Policy
              </Button>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Error State */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function DragDropUploadCard() {
  return (
    <Card>
      <CardContent>
        <DragDropUpload
          acceptedFormats={["pdf", "jpg", "jpeg", "png"]}
          maxSize={10 * 1024 * 1024}
        />
      </CardContent>
    </Card>
  )
}

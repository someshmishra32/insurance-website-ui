import { createAdminClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

// Validation functions
function validateName(name: string): string | null {
  if (!name || !name.trim()) {
    return "Name is required"
  }
  if (name.trim().length < 3) {
    return "Name must be at least 3 characters long"
  }
  if (!/^[a-zA-Z\s.]+$/.test(name.trim())) {
    return "Name can only contain letters, spaces, and dots"
  }
  return null
}

function validateEmail(email: string): string | null {
  if (!email || !email.trim()) {
    return "Email is required"
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (!emailRegex.test(email.trim())) {
    return "Please enter a valid email address"
  }
  return null
}

function validatePhone(phone: string): string | null {
  if (!phone || !phone.trim()) {
    return "Mobile number is required"
  }
  const cleanPhone = phone.replace(/[^0-9]/g, '')
  if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
    return "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9"
  }
  return null
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createAdminClient()
    const body = await request.json()

    const { name, email, phone, insuranceType, currentCoverage, specificNeeds, sourcePage, utm } = body

    // Enhanced validation
    const nameError = validateName(name)
    const emailError = validateEmail(email)
    const phoneError = validatePhone(phone)

    if (nameError || emailError || phoneError) {
      return NextResponse.json(
        {
          error: "Validation failed",
          fieldErrors: {
            name: nameError,
            email: emailError,
            phone: phoneError
          }
        },
        { status: 400 }
      )
    }

    if (!insuranceType || !sourcePage) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Clean phone number (remove spaces, dashes, etc.)
    const cleanPhone = phone.replace(/[^0-9]/g, '')

    // Insert lead into database
    const { data, error } = await supabase
      .from("leads")
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: cleanPhone,
        insurance_type: insuranceType,
        current_coverage: currentCoverage || null,
        specific_needs: specificNeeds || null,
        source_page: sourcePage,
        utm_source: utm?.source || null,
        utm_medium: utm?.medium || null,
        utm_campaign: utm?.campaign || null,
        ip_address: request.ip || request.headers.get('x-forwarded-for') || null,
        user_agent: request.headers.get('user-agent') || null,
      })
      .select()
      .single()

    if (error) {
      console.error("[v0] Lead insertion error:", error)

      // Handle duplicate email
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email has already been registered. We'll be in touch soon!" },
          { status: 409 },
        )
      }

      return NextResponse.json({ error: "Failed to submit lead" }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      leadId: data.id,
    })
  } catch (error) {
    console.error("[v0] Lead API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

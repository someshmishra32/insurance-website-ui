// Analytics utility functions for client-side tracking

// Generate or retrieve session ID
export function getSessionId(): string {
  if (typeof window === "undefined") return ""

  let sessionId = sessionStorage.getItem("session_id")
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
    sessionStorage.setItem("session_id", sessionId)
  }
  return sessionId
}

// Parse UTM parameters from URL
export function getUTMParams(): Record<string, string> {
  if (typeof window === "undefined") return {}

  const params = new URLSearchParams(window.location.search)
  return {
    source: params.get("utm_source") || "",
    medium: params.get("utm_medium") || "",
    campaign: params.get("utm_campaign") || "",
    content: params.get("utm_content") || "",
    term: params.get("utm_term") || "",
  }
}

// Detect device type
export function getDeviceType(): string {
  if (typeof window === "undefined") return "unknown"

  const ua = navigator.userAgent
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet"
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return "mobile"
  }
  return "desktop"
}

// Detect browser
export function getBrowser(): string {
  if (typeof window === "undefined") return "unknown"

  const ua = navigator.userAgent
  if (ua.includes("Firefox")) return "Firefox"
  if (ua.includes("Chrome")) return "Chrome"
  if (ua.includes("Safari")) return "Safari"
  if (ua.includes("Edge")) return "Edge"
  return "Other"
}

// Track page view
export async function trackPageView() {
  if (typeof window === "undefined") return

  try {
    const response = await fetch("/api/analytics/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "page_view",
        data: {
          pagePath: window.location.pathname,
          pageTitle: document.title,
          referrer: document.referrer,
          sessionId: getSessionId(),
          userAgent: navigator.userAgent,
          utm: getUTMParams(),
          deviceType: getDeviceType(),
          browser: getBrowser(),
        },
      }),
    })

    if (!response.ok) {
      // Analytics failure should not break the UI
      return
    }
  } catch (error) {
    // Don't log to console in production
  }
}

// Track conversion event
export async function trackConversionEvent(
  eventType: string,
  eventLabel?: string,
  eventValue?: number,
  leadId?: string,
  metadata?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return

  try {
    const response = await fetch("/api/analytics/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "conversion_event",
        data: {
          eventType,
          eventLabel,
          eventValue,
          pagePath: window.location.pathname,
          sessionId: getSessionId(),
          leadId,
          metadata,
        },
      }),
    })

    if (!response.ok) {
      // Analytics failure should not break the UI
      return
    }
  } catch (error) {
    // Don't log to console in production
  }
}

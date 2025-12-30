import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const body = await request.json()

    const { type, data } = body

    if (type === "page_view") {
      const { error } = await supabase.from("page_views").insert({
        page_path: data.pagePath,
        page_title: data.pageTitle,
        referrer: data.referrer,
        session_id: data.sessionId,
        user_agent: data.userAgent,
        utm_source: data.utm?.source || null,
        utm_medium: data.utm?.medium || null,
        utm_campaign: data.utm?.campaign || null,
        utm_content: data.utm?.content || null,
        utm_term: data.utm?.term || null,
        device_type: data.deviceType,
        browser: data.browser,
      })

      if (error) {
        // Log silently without cluttering console
        return NextResponse.json({ success: true })
      }
    } else if (type === "conversion_event") {
      const { error } = await supabase.from("conversion_events").insert({
        event_type: data.eventType,
        event_label: data.eventLabel || null,
        event_value: data.eventValue || null,
        page_path: data.pagePath,
        session_id: data.sessionId,
        lead_id: data.leadId || null,
        metadata: data.metadata || null,
      })

      if (error) {
        // Log silently without cluttering console
        return NextResponse.json({ success: true })
      }
    } else {
      return NextResponse.json({ error: "Invalid tracking type" }, { status: 400 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    // Analytics failures should be silent and non-blocking
    return NextResponse.json({ success: true })
  }
}

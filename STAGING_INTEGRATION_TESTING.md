# 🧪 Staging Integration Testing Guide - Step by Step

**Phase**: 4b - Staging Integration Testing  
**Status**: Ready to Execute  
**Duration**: 45-60 minutes  
**Target**: Verify webhook integration, cache revalidation, and full content sync  

---

## 🎯 Testing Objectives

By the end of these tests, you will have verified:

✅ Webhook receiver is accessible and working  
✅ Webhook signature verification works correctly  
✅ All event types are processed (publish, update, delete, etc.)  
✅ Cache invalidation triggers automatically  
✅ Dashboard metrics update correctly  
✅ Content syncs from Strapi to Next.js  
✅ Error handling is robust  
✅ System can handle concurrent requests  

---

## 📋 Pre-Testing Checklist

Before starting tests, verify:

- [ ] Staging environment deployed (from QUICKSTART_STAGING.md)
- [ ] `curl` command available
- [ ] Access to Strapi Admin panel
- [ ] Environment variables configured (`.env.staging.local`)
- [ ] Webhook endpoint publicly accessible
- [ ] Server logs accessible
- [ ] Test content ready to publish

---

## 🧪 Test Suite (6 test groups)

### Test Group 1: Health Checks (5 min)

**Purpose**: Verify basic connectivity and endpoints

#### Test 1.1: Frontend Health Check
```bash
curl -I https://your-staging-url.com

# Expected Response: 200 OK
# Check headers:
# - content-type: text/html
# - cache-control: public
```

**Verification**:
- ✅ Homepage loads without 500 errors
- ✅ All headers present
- ✅ Response time <1 second

#### Test 1.2: Webhook Endpoint Health
```bash
curl https://your-staging-url.com/api/webhooks/strapi

# Expected Response:
# {
#   "status": "ok",
#   "message": "Webhook receiver is running",
#   "timestamp": "2026-01-04T..."
# }
```

**Verification**:
- ✅ Returns 200 OK
- ✅ Contains "status": "ok"
- ✅ Timestamp is recent

#### Test 1.3: ISR Revalidation Health
```bash
curl https://your-staging-url.com/api/revalidate

# Expected Response:
# {
#   "status": "ok",
#   "message": "ISR revalidation endpoint is running",
#   "timestamp": "2026-01-04T..."
# }
```

**Verification**:
- ✅ Returns 200 OK
- ✅ Contains "status": "ok"
- ✅ Ready for revalidation requests

---

### Test Group 2: Signature Verification (10 min)

**Purpose**: Verify that invalid signatures are rejected

#### Test 2.1: Missing Signature Header
```bash
curl -X POST https://your-staging-url.com/api/webhooks/strapi \
  -H "Content-Type: application/json" \
  -d '{"event":"entry.publish","model":"blog","entry":{"id":1}}'

# Expected Response: 401 Unauthorized
# Body: {"error":"...","success":false}
```

**Verification**:
- ✅ Returns 401 status
- ✅ Includes error message
- ✅ Does not process event

#### Test 2.2: Invalid Signature
```bash
curl -X POST https://your-staging-url.com/api/webhooks/strapi \
  -H "Content-Type: application/json" \
  -H "x-strapi-webhook-signature: invalid-signature-12345" \
  -d '{"event":"entry.publish","model":"blog","entry":{"id":1}}'

# Expected Response: 401 Unauthorized
```

**Verification**:
- ✅ Rejects invalid signature
- ✅ Logs security event
- ✅ No event processing

---

### Test Group 3: Webhook Event Processing (20 min)

**Purpose**: Verify all event types are handled correctly

**Setup**: Generate valid signature for testing
```bash
# Set your webhook secret
WEBHOOK_SECRET="your_actual_webhook_secret"
STAGING_URL="your-staging-url.com"

# Function to generate valid signature
generate_signature() {
  local payload="$1"
  echo -n "$payload" | openssl dgst -sha256 -hmac "$WEBHOOK_SECRET" | sed 's/^.* //'
}

# Test payload
PAYLOAD='{"event":"entry.publish","model":"blog","createdAt":"2026-01-04T12:00:00Z","entry":{"id":1,"documentId":"blog-1","slug":"test-post","title":"Test Post","language":"en"}}'

# Generate signature
SIGNATURE=$(generate_signature "$PAYLOAD")

# Send webhook
curl -X POST https://$STAGING_URL/api/webhooks/strapi \
  -H "Content-Type: application/json" \
  -H "x-strapi-webhook-signature: $SIGNATURE" \
  -d "$PAYLOAD"
```

#### Test 3.1: Blog Publish Event
```bash
# Expected Response: 200 OK
# {
#   "success": true,
#   "event": "entry.publish",
#   "model": "blog"
# }
```

**Verification**:
- ✅ Webhook accepts event
- ✅ Returns success message
- ✅ Check logs: Webhook received and processed
- ✅ Check logs: Cache tags revalidated

#### Test 3.2: Blog Update Event
```bash
PAYLOAD='{"event":"entry.update","model":"blog","createdAt":"2026-01-04T12:01:00Z","entry":{"id":1,"documentId":"blog-1","slug":"test-post"}}'
SIGNATURE=$(generate_signature "$PAYLOAD")

curl -X POST https://$STAGING_URL/api/webhooks/strapi \
  -H "Content-Type: application/json" \
  -H "x-strapi-webhook-signature: $SIGNATURE" \
  -d "$PAYLOAD"

# Expected: 200 OK, success message
```

**Verification**:
- ✅ Update event processed
- ✅ Cache updated for changed post

#### Test 3.3: Blog Delete Event
```bash
PAYLOAD='{"event":"entry.delete","model":"blog","createdAt":"2026-01-04T12:02:00Z","entry":{"id":1,"documentId":"blog-1","slug":"test-post"}}'
SIGNATURE=$(generate_signature "$PAYLOAD")

curl -X POST https://$STAGING_URL/api/webhooks/strapi \
  -H "Content-Type: application/json" \
  -H "x-strapi-webhook-signature: $SIGNATURE" \
  -d "$PAYLOAD"

# Expected: 200 OK, success message
```

**Verification**:
- ✅ Delete event processed
- ✅ All related caches cleared

#### Test 3.4: Other Models
Test with other content models (compliance-rule, disclaimer, etc.):
```bash
# Compliance Rule
{"event":"entry.publish","model":"compliance-rule","entry":{"id":1,"slug":"rule-1"}}

# Disclaimer
{"event":"entry.publish","model":"disclaimer","entry":{"id":1,"slug":"disc-1"}}
```

---

### Test Group 4: Cache Revalidation (10 min)

**Purpose**: Verify ISR cache invalidation works

#### Test 4.1: Path-based Revalidation
```bash
curl -X POST https://your-staging-url.com/api/revalidate \
  -H "Content-Type: application/json" \
  -H "x-revalidate-secret: your_revalidate_secret" \
  -d '{
    "paths": ["/blog", "/learn", "/compare"]
  }'

# Expected Response: 200 OK
# {
#   "success": true,
#   "revalidated": true,
#   "pathsCount": 3,
#   "message": "Successfully revalidated 3 items"
# }
```

**Verification**:
- ✅ Returns success
- ✅ Path count correct
- ✅ Response time <1 second

#### Test 4.2: Tag-based Revalidation
```bash
curl -X POST https://your-staging-url.com/api/revalidate \
  -H "Content-Type: application/json" \
  -H "x-revalidate-secret: your_revalidate_secret" \
  -d '{
    "tags": ["blog:list", "blog:latest", "blog:1"]
  }'

# Expected Response: 200 OK
# {
#   "success": true,
#   "revalidated": true,
#   "tagsCount": 3,
#   "message": "Successfully revalidated 3 items"
# }
```

**Verification**:
- ✅ Tags revalidated
- ✅ Correct count
- ✅ Fast execution

#### Test 4.3: Mixed Revalidation
```bash
curl -X POST https://your-staging-url.com/api/revalidate \
  -H "Content-Type: application/json" \
  -H "x-revalidate-secret: your_revalidate_secret" \
  -d '{
    "paths": ["/blog"],
    "tags": ["blog:list", "blog:latest"]
  }'

# Expected Response: 200 OK with both counts
```

---

### Test Group 5: End-to-End Content Sync (15 min)

**Purpose**: Verify full workflow from Strapi to frontend

#### Step 1: Create Test Content in Strapi
1. Log in to Strapi Admin: `https://staging-cms.example.com/admin`
2. Navigate to Blog collection
3. Create new blog post:
   - **Title**: "E2E Test Post - Jan 4"
   - **Slug**: "e2e-test-post"
   - **Content**: "This is a test post for E2E verification"
   - **Author**: "Test User"
4. Publish immediately

**Expected**: Within 10 seconds, webhook should trigger

#### Step 2: Verify on Frontend
```bash
# After ~10 seconds, check if post appears
curl https://your-staging-url.com/blog

# Search for title or slug in HTML
grep -i "e2e-test-post" <response>
```

**Verification**:
- ✅ Post appears on blog listing page
- ✅ Post has correct title
- ✅ Post is accessible via slug

#### Step 3: Edit Content in Strapi
1. Go back to blog post
2. Change title: "E2E Test Post - UPDATED"
3. Save & republish

**Expected**: Within 10 seconds, changes should appear

#### Step 4: Verify Update on Frontend
```bash
# Check if updated title appears
curl https://your-staging-url.com/blog | grep -i "UPDATED"
```

**Verification**:
- ✅ Updated content appears
- ✅ Change reflected quickly
- ✅ No stale content

#### Step 5: Delete Content in Strapi
1. Delete the test blog post
2. Confirm deletion

**Expected**: Post should disappear from website

#### Step 6: Verify Deletion
```bash
# Post should no longer appear
curl https://your-staging-url.com/blog | grep -i "e2e-test-post"

# Should return empty/not found
```

**Verification**:
- ✅ Post removed from listings
- ✅ Page no longer accessible
- ✅ Cache cleared

---

### Test Group 6: Error Handling (5 min)

**Purpose**: Verify system handles errors gracefully

#### Test 6.1: Malformed JSON
```bash
SIGNATURE=$(generate_signature "invalid")

curl -X POST https://your-staging-url.com/api/webhooks/strapi \
  -H "Content-Type: application/json" \
  -H "x-strapi-webhook-signature: $SIGNATURE" \
  -d 'not-json'

# Expected: 400 Bad Request
```

#### Test 6.2: Missing Fields
```bash
PAYLOAD='{"event":"entry.publish"}'
SIGNATURE=$(generate_signature "$PAYLOAD")

curl -X POST https://your-staging-url.com/api/webhooks/strapi \
  -H "Content-Type: application/json" \
  -H "x-strapi-webhook-signature: $SIGNATURE" \
  -d "$PAYLOAD"

# Expected: 400 Bad Request
```

#### Test 6.3: Unknown Event Type
```bash
PAYLOAD='{"event":"unknown.event","model":"blog","entry":{"id":1}}'
SIGNATURE=$(generate_signature "$PAYLOAD")

curl -X POST https://your-staging-url.com/api/webhooks/strapi \
  -H "Content-Type: application/json" \
  -H "x-strapi-webhook-signature: $SIGNATURE" \
  -d "$PAYLOAD"

# Expected: 200 OK with success message (graceful handling)
```

---

## 📊 Test Results Template

```
═══════════════════════════════════════════════════════════════
STAGING INTEGRATION TEST RESULTS
═══════════════════════════════════════════════════════════════

Date: [Date]
Tester: [Name]
Environment: [Staging URL]

TEST GROUP 1: Health Checks ✅/❌
├─ 1.1 Frontend Health Check: [PASS/FAIL]
├─ 1.2 Webhook Health Check: [PASS/FAIL]
└─ 1.3 Revalidation Health: [PASS/FAIL]

TEST GROUP 2: Signature Verification ✅/❌
├─ 2.1 Missing Signature: [PASS/FAIL]
└─ 2.2 Invalid Signature: [PASS/FAIL]

TEST GROUP 3: Event Processing ✅/❌
├─ 3.1 Blog Publish: [PASS/FAIL]
├─ 3.2 Blog Update: [PASS/FAIL]
├─ 3.3 Blog Delete: [PASS/FAIL]
└─ 3.4 Other Models: [PASS/FAIL]

TEST GROUP 4: Cache Revalidation ✅/❌
├─ 4.1 Path Revalidation: [PASS/FAIL]
├─ 4.2 Tag Revalidation: [PASS/FAIL]
└─ 4.3 Mixed Revalidation: [PASS/FAIL]

TEST GROUP 5: E2E Content Sync ✅/❌
├─ 5.1 Create Test: [PASS/FAIL]
├─ 5.2 Verification: [PASS/FAIL]
├─ 5.3 Update Test: [PASS/FAIL]
├─ 5.4 Update Verification: [PASS/FAIL]
├─ 5.5 Delete Test: [PASS/FAIL]
└─ 5.6 Delete Verification: [PASS/FAIL]

TEST GROUP 6: Error Handling ✅/❌
├─ 6.1 Malformed JSON: [PASS/FAIL]
├─ 6.2 Missing Fields: [PASS/FAIL]
└─ 6.3 Unknown Event: [PASS/FAIL]

═══════════════════════════════════════════════════════════════

OVERALL RESULT: [✅ ALL PASS / ⚠️ WITH ISSUES / ❌ FAILED]

Issues Found (if any):
1. [Issue 1]
2. [Issue 2]

Resolutions:
1. [Resolution 1]
2. [Resolution 2]

Performance Metrics:
- Average Response Time: [X ms]
- Webhook Processing Time: [X ms]
- Cache Revalidation Time: [X ms]

Sign-off:
- Tester: ________________  Date: __________
- QA Lead: _______________ Date: __________
```

---

## ✅ Success Criteria

All tests pass when:

✅ All health checks return 200 OK  
✅ Signature verification rejects invalid signatures  
✅ All event types process successfully  
✅ Cache revalidation completes <1 sec  
✅ E2E content sync works within 10 seconds  
✅ Errors handled gracefully  
✅ No unhandled exceptions in logs  
✅ Performance metrics acceptable  

---

## 🎯 Next Steps After Testing

**If ALL tests pass** ✅
1. Document test results
2. Get approval for production
3. Proceed to Phase 5: Production Deployment
4. Follow PHASE_5_PRODUCTION_PLANNING.md

**If tests fail** ⚠️
1. Document failures
2. Review logs for root cause
3. Fix identified issues
4. Re-run failed tests
5. Once fixed, proceed to Phase 5

---

## 📞 Troubleshooting

**Webhook not receiving?**
- Check URL is publicly accessible
- Verify signature matches in Strapi config
- Check firewall allows incoming connections

**Content not syncing?**
- Check webhook logs in Strapi
- Verify cache tags are correct
- Check server logs for errors

**Cache not invalidating?**
- Verify ISR_REVALIDATE_SECRET matches
- Check revalidation endpoint is accessible
- Review cache tag generation logic

---

## ⏱️ Total Time

- Health Checks: 5 min
- Signature Tests: 10 min
- Event Processing: 20 min
- Cache Revalidation: 10 min
- E2E Content Sync: 15 min
- Error Handling: 5 min

**Total: 65 minutes** (with buffer ~90 minutes)

---

**Ready to Test?** Run the test groups in order and document results!

After all tests pass → Proceed to Phase 5 Production Deployment


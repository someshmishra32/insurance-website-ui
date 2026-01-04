#!/bin/bash

# =========================================
# Staging Deployment Script
# =========================================
# Automates the staging deployment process
# Usage: ./deploy-staging.sh
# =========================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_DIR="/home/somesh/Codework/insurance-website-ui"
ENV_FILE=".env.staging.local"
BUILD_DIR="$PROJECT_DIR/.next"
LOG_FILE="$PROJECT_DIR/deploy.log"

# Functions
print_header() {
    echo -e "\n${BLUE}========================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}========================================${NC}\n"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

log_message() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

# Step 1: Pre-deployment Checks
check_prerequisites() {
    print_header "Step 1: Pre-Deployment Checks"

    # Check if project directory exists
    if [ ! -d "$PROJECT_DIR" ]; then
        print_error "Project directory not found: $PROJECT_DIR"
        exit 1
    fi
    print_success "Project directory found"
    log_message "Project directory verified"

    # Check if environment file exists
    if [ ! -f "$PROJECT_DIR/$ENV_FILE" ]; then
        print_warning "Environment file not found: $ENV_FILE"
        print_info "Creating from template..."
        cp "$PROJECT_DIR/.env.staging" "$PROJECT_DIR/$ENV_FILE"
        print_warning "IMPORTANT: Update $ENV_FILE with your staging credentials"
        exit 1
    fi
    print_success "Environment file found"
    log_message "Environment file verified"

    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed"
        exit 1
    fi
    NODE_VERSION=$(node -v)
    print_success "Node.js found: $NODE_VERSION"
    log_message "Node.js version: $NODE_VERSION"

    # Check if npm is installed
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed"
        exit 1
    fi
    NPM_VERSION=$(npm -v)
    print_success "npm found: $NPM_VERSION"
    log_message "npm version: $NPM_VERSION"

    # Check git status
    cd "$PROJECT_DIR"
    if [ -z "$(git status --porcelain)" ]; then
        print_success "Git status: clean"
        log_message "Git status: clean"
    else
        print_warning "Git status: uncommitted changes"
        print_info "Uncommitted changes:"
        git status --short
        log_message "Warning: uncommitted changes"
    fi
}

# Step 2: Environment Validation
validate_environment() {
    print_header "Step 2: Environment Validation"

    cd "$PROJECT_DIR"

    # Check required environment variables
    REQUIRED_VARS=(
        "NEXT_PUBLIC_STRAPI_URL"
        "STRAPI_TOKEN"
        "STRAPI_WEBHOOK_SECRET"
        "ISR_REVALIDATE_SECRET"
    )

    source "$ENV_FILE"

    for var in "${REQUIRED_VARS[@]}"; do
        if [ -z "${!var}" ]; then
            print_error "Required variable not set: $var"
            exit 1
        fi
        # Mask sensitive values in output
        if [[ "$var" == *"SECRET"* ]] || [[ "$var" == *"TOKEN"* ]] || [[ "$var" == *"KEY"* ]]; then
            VALUE="***"
        else
            VALUE="${!var}"
        fi
        print_success "✓ $var = $VALUE"
        log_message "Env var verified: $var"
    done

    print_success "All required environment variables set"
}

# Step 3: Clean Previous Build
clean_build() {
    print_header "Step 3: Clean Previous Build"

    cd "$PROJECT_DIR"

    if [ -d "$BUILD_DIR" ]; then
        print_info "Removing previous build..."
        rm -rf "$BUILD_DIR"
        print_success "Previous build removed"
        log_message "Previous build cleaned"
    else
        print_info "No previous build found"
    fi

    if [ -d "node_modules" ]; then
        print_warning "Node modules directory exists (keeping for reuse)"
    fi
}

# Step 4: Install Dependencies
install_dependencies() {
    print_header "Step 4: Install Dependencies"

    cd "$PROJECT_DIR"

    print_info "Installing dependencies..."
    log_message "Installing dependencies"

    if npm install --production; then
        print_success "Dependencies installed successfully"
        log_message "Dependencies installed"
    else
        print_error "Failed to install dependencies"
        log_message "ERROR: Dependency installation failed"
        exit 1
    fi

    print_success "npm dependencies ready"
}

# Step 5: Build Project
build_project() {
    print_header "Step 5: Build Project"

    cd "$PROJECT_DIR"

    print_info "Building for staging environment..."
    log_message "Starting build process"

    if NEXT_PUBLIC_ENVIRONMENT=staging npm run build; then
        print_success "Build completed successfully"
        log_message "Build successful"
    else
        print_error "Build failed"
        log_message "ERROR: Build process failed"
        exit 1
    fi

    # Verify build artifacts
    if [ -d "$BUILD_DIR" ]; then
        CACHE_SIZE=$(du -sh "$BUILD_DIR" | cut -f1)
        print_success "Build cache size: $CACHE_SIZE"
        log_message "Build cache size: $CACHE_SIZE"
    fi
}

# Step 6: Verify Build
verify_build() {
    print_header "Step 6: Verify Build"

    cd "$PROJECT_DIR"

    # Check if build was successful
    if [ ! -f ".next/BUILD_ID" ]; then
        print_error "BUILD_ID file not found - build may have failed"
        exit 1
    fi

    BUILD_ID=$(cat .next/BUILD_ID)
    print_success "Build ID: $BUILD_ID"
    log_message "Build ID: $BUILD_ID"

    # Check build manifest
    if [ -f ".next/build-manifest.json" ]; then
        print_success "Build manifest found"
        PAGES_COUNT=$(grep -o '"pages"' .next/build-manifest.json | wc -l)
        print_info "Pages compiled: Check next.config.mjs"
        log_message "Build manifest verified"
    fi

    print_success "Build verification passed"
}

# Step 7: Generate Deployment Summary
generate_summary() {
    print_header "Step 7: Deployment Summary"

    cd "$PROJECT_DIR"

    TIMESTAMP=$(date +'%Y-%m-%d %H:%M:%S')
    GIT_COMMIT=$(git rev-parse --short HEAD 2>/dev/null || echo "unknown")
    GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "unknown")

    SUMMARY_FILE="$PROJECT_DIR/staging-deployment-$(date +%s).txt"

    cat > "$SUMMARY_FILE" << EOF
========================================
STAGING DEPLOYMENT SUMMARY
========================================

Timestamp: $TIMESTAMP
Git Commit: $GIT_COMMIT
Git Branch: $GIT_BRANCH
Node Version: $NODE_VERSION
npm Version: $NPM_VERSION

========================================
DEPLOYMENT STATUS: ✓ SUCCESS
========================================

Build Configuration:
  - Environment: staging
  - Build Cache: $CACHE_SIZE
  - Build ID: $BUILD_ID

Next Steps:
  1. Review deployment summary (this file)
  2. Run local tests: npm run dev
  3. Deploy to staging server
  4. Configure Strapi webhooks
  5. Run integration tests

Webhook Configuration:
  - Endpoint: https://staging.insurance-website.com/api/webhooks/strapi
  - Secret: (check .env.staging.local)

Revalidation Configuration:
  - Endpoint: https://staging.insurance-website.com/api/revalidate
  - Secret: (check .env.staging.local)

========================================
GENERATED: $TIMESTAMP
========================================
EOF

    print_success "Deployment summary saved: $SUMMARY_FILE"
    log_message "Deployment summary generated"

    # Display summary
    cat "$SUMMARY_FILE"
}

# Step 8: Post-Deployment Instructions
post_deployment() {
    print_header "Step 8: Post-Deployment Instructions"

    cat << 'EOF'

✓ BUILD COMPLETE AND READY FOR DEPLOYMENT

Next Steps:

1. TEST LOCALLY:
   cd /home/somesh/Codework/insurance-website-ui
   npm run start

2. DEPLOY TO STAGING:

   Option A: Vercel
   ├─ vercel deploy --prod --env-file=.env.staging.local

   Option B: Self-Hosted (Docker)
   ├─ docker build -t insurance-staging:latest .
   ├─ docker tag insurance-staging:latest your-registry/insurance-staging:latest
   └─ docker push your-registry/insurance-staging:latest

   Option C: Self-Hosted (Node)
   ├─ scp -r .next staging-server:/app/
   ├─ ssh staging-server
   ├─ cd /app && npm install --production
   └─ NODE_ENV=production npm start

3. CONFIGURE STRAPI WEBHOOKS:
   ├─ Log in to Strapi Admin: https://staging-cms.example.com/admin
   ├─ Settings → Webhooks
   ├─ Create new webhook:
   │  ├─ Name: "Next.js ISR Revalidation"
   │  ├─ URL: https://staging.insurance-website.com/api/webhooks/strapi
   │  ├─ Events: All entry events (publish, unpublish, create, update, delete)
   │  └─ Headers: x-strapi-webhook-signature = $STRAPI_WEBHOOK_SECRET
   └─ Test webhook (should get 200 OK)

4. RUN INTEGRATION TESTS:
   ├─ Test webhook endpoint: curl https://staging.insurance-website.com/api/webhooks/strapi
   ├─ Publish test content in Strapi
   ├─ Verify content appears on staging website
   ├─ Edit content and verify update
   └─ Check logs for webhook events

5. VERIFY DEPLOYMENT:
   ├─ Check all pages load: https://staging.insurance-website.com
   ├─ Test all navigation links
   ├─ Verify API endpoints work
   ├─ Check for console errors
   └─ Monitor webhook logs

6. PERFORMANCE CHECK:
   ├─ Measure page load time
   ├─ Test with load: ab -n 100 -c 10 https://staging.insurance-website.com/
   ├─ Monitor memory usage
   └─ Check error logs

Issues Found? Check PHASE_3D_TESTING_GUIDE.md for detailed testing procedures.

EOF

    print_success "Deployment ready for next phase"
}

# Main Execution
main() {
    print_header "STAGING DEPLOYMENT SCRIPT"

    echo -e "${YELLOW}Project: insurance-website-ui${NC}"
    echo -e "${YELLOW}Environment: staging${NC}"
    echo -e "${YELLOW}Date: $(date)${NC}\n"

    log_message "========================================="
    log_message "Staging deployment started"
    log_message "========================================="

    # Execute steps
    check_prerequisites
    validate_environment
    clean_build
    install_dependencies
    build_project
    verify_build
    generate_summary
    post_deployment

    log_message "========================================="
    log_message "Staging deployment completed successfully"
    log_message "========================================="

    print_header "✓ DEPLOYMENT COMPLETE"
}

# Run main function
main "$@"

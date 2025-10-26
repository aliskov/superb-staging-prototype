#!/bin/bash

echo "🔍 Running pre-push checks..."

# Type check
echo "📝 Type checking..."
npm run type-check || { echo "❌ Type check failed"; exit 1; }

# Tests with coverage
echo "🧪 Running tests..."
npm run test:coverage || { echo "❌ Tests failed"; exit 1; }

# Build
echo "🏗️  Building..."
npm run build || { echo "❌ Build failed"; exit 1; }

echo "✅ All checks passed! Safe to push."

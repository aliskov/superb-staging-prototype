# Superb Staging - Prototype

AI-native staging management platform for luxury real estate.

## 🚀 Live Demo

**Production:** https://prototype-5haafqc3g-alek-liskovs-projects.vercel.app

## 🏗️ Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS (luxury neutral palette)
- **Testing:** Vitest (unit/integration), Playwright (E2E)
- **CI/CD:** GitHub Actions + Vercel
- **Deployment:** Vercel with automatic deployments

## 🎨 Design Philosophy

Subtle, sophisticated luxury design with:
- Charcoal blacks (#1a1a1a)
- Elegant gold accents (#b8934c)
- Premium silver tones (#8e8e8e)
- Refined cream backgrounds (#f8f7f4)

## 📦 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testing

```bash
# Run all tests
npm test

# Unit tests only
npm run test:unit

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# Coverage report (requires 80%+)
npm run test:coverage

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🚢 Deployment

### Automatic Deployments

Every push to `main` triggers:
1. ✅ Type checking
2. ✅ Linting
3. ✅ Full test suite with coverage
4. ✅ Build verification
5. 🚀 Production deployment (only if all tests pass)

### Manual Deployment

```bash
npm run build
vercel --prod
```

## 🔐 GitHub Secrets (for CI/CD)

Required secrets for GitHub Actions:

- `VERCEL_TOKEN` - Vercel API token
- `VERCEL_ORG_ID` - `team_R7FGEFC25BLJOlcwA4MV64o9`
- `VERCEL_PROJECT_ID` - `prj_hptLu1CjyDNgwOVPkHTFdbLHPB6x`

## 📁 Project Structure

```
prototype/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Dashboard
│   ├── projects/          # Projects list
│   ├── inventory/         # Inventory catalog
│   └── analytics/         # Analytics & reporting
├── utils/                 # Shared utilities
├── tests/                 # Test suites
│   ├── unit/             # Unit tests
│   ├── integration/      # Integration tests
│   └── e2e/              # End-to-end tests
├── .github/workflows/     # CI/CD pipelines
└── docs/                  # Documentation
```

## 🎯 Features

### Current (Prototype)
- ✅ Dashboard with key metrics
- ✅ Projects management view
- ✅ Inventory catalog with damage tracking
- ✅ Analytics and reporting
- ✅ Responsive design
- ✅ Luxury neutral UI

### Planned
- 🔜 Supabase backend
- 🔜 Authentication system
- 🔜 Real-time updates
- 🔜 QuickBooks integration
- 🔜 HubSpot CRM sync
- 🔜 AI virtual staging
- 🔜 Mobile app (React Native)

## 📊 Testing Requirements

All code must maintain:
- 80%+ line coverage
- 80%+ function coverage
- 75%+ branch coverage

Pull requests failing these thresholds will be blocked.

## 🔄 Workflow

1. **Feature Branch:** Create from `main`
2. **Write Tests:** TDD approach required
3. **Pull Request:** Triggers preview deployment
4. **Code Review:** Team reviews changes
5. **Merge:** Auto-deploys to production if tests pass

## 📝 License

Proprietary - Superb Staging © 2025

## 🤝 Contributing

This is a private project. For access or questions, contact the team.

# OpenCart UI Automation — Playwright + TypeScript + Cucumber BDD

A **portfolio starter framework** demonstrating BDD feature files, Gherkin Scenario Outline, Cucumber step definitions, Playwright Page Object Model, isolated browser contexts, hooks, assertions, screenshots on failure, tags, and GitHub Actions CI.

> **Status: starter / unverified against the live demo.** The public OpenCart demo can change or be unavailable. Run the tests and update selectors before claiming successful test coverage. This repository is a learning/portfolio exercise, not professional client work.

## Setup

Requirements: Node.js 22+.

```bash
npm install
npx playwright install chromium
cp .env.example .env  # On Windows PowerShell: Copy-Item .env.example .env
npm run typecheck
npm test
```

Run tagged smoke tests: `npm run test:smoke`
Run with browser visible: `npm run test:headed`

## Structure

- `features/`: readable BDD scenarios
- `src/steps/`: Gherkin step bindings
- `src/pages/`: POM abstractions
- `src/support/`: custom Cucumber World and browser hooks
- `.github/workflows/`: continuous integration

## Known limitations / roadmap

- Selectors and expected products must be verified against the current demo environment.
- No login/checkout scenarios yet: public demo availability and test accounts must be verified first.
- Add API-level validations, fixtures, test data, cross-browser matrix, and accessibility checks after the baseline works.
- Never commit credentials, tokens, or generated reports.

## Interview talking points

Be able to explain World vs Playwright fixtures, lifecycle hooks, POM, Scenario Outline, isolation, tags, and why screenshots are captured on failure.

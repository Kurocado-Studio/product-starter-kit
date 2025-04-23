# Kurocado Studio Product Starter Kit

## Overview

The **Product Starter Kit** bundles everything you need to kick off a new product — from a design
system pipeline (Figma → Token Studio → Tailwind → React) to CI/CD, linting, testing, and semantic
release. It is already configured with the
[engineering styleguide](https://kurocado-studio.github.io/platform/styleguide.html) and is designed
to help you go from "0 to Hello World" in five minutes or less.

Ideal for rapid prototyping or scaling new products with solid foundations.

## Quick Start

| [![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/Kurocado-Studio/product-starter-kit/tree/main) | [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Kurocado-Studio/product-starter-kit/tree/main&project-name=product-starter-react-template&repository-name=product-starter-react-template&branch=main) |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Features

- **Design System Pipeline**  
  Figma → Token Studio → Tailwind → React using CSS variables, see the
  [Design System on GitHub](https://github.com/Kurocado-Studio/design-system)

- **Engineering Styleguide installed**

  - [CommitLint](https://kurocado-studio.github.io/platform/how-to-install-commitlint.html)
  - [ESLint](https://kurocado-studio.github.io/platform/how-to-install-eslint.html)
  - [Prettier](https://kurocado-studio.github.io/platform/how-to-install-prettier.html)
  - [Semantic Release](https://kurocado-studio.github.io/platform/how-to-install-semantic-release.html)

- **Pre-wired with CI/CD pipelines**

  - [Code Quality pipeline](https://kurocado-studio.github.io/platform/lint.html)
  - [Semantic Release pipeline](https://kurocado-studio.github.io/platform/release.html)
  - Optional,
    [Writerside Documentation pipeline](https://kurocado-studio.github.io/platform/document.html)

## Setup Guide

### Prerequisites

- An account with [Vercel](https://vercel.com)
- An account with [Figma](https://www.figma.com)
- [Token Studio plugin](https://docs.tokens.studio)
- A
  [personal access token](https://docs.tokens.studio/token-storage-and-sync/sync-provider-github#2-personal-access-token)
  from [GitHub](https://github.com)
- Token Studio
  [as a sync provider](https://docs.tokens.studio/token-storage-and-sync/sync-provider-github) to
  GitHub

Follow these steps to get up and running:

1. **Deploy to Vercel** by clicking the button above.
2. Name your project.
3. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Kurocado-Studio/product-starter-kit.git
   cd product-starter-kit
   pnpm install
   ```

4. **Run the app:**

   - `pnpm run dev` — starts the React app
   - `pnpm run storybook` — starts Storybook on port `6007`

5. **Design Token Setup:**

   - Open Figma
   - Install the [Token Studio](https://tokens.studio/) plugin if you haven’t already
   - Set up Token Studio as a
     [sync provider with GitHub](https://docs.tokens.studio/token-storage-and-sync/sync-provider-github)
   - Tokens are located in `src/tokens/tokens.json`

6. **Workflow:**

   - Import tokens into Figma
   - Make changes (e.g., to the `Card` component)
   - Sync changes back to GitHub using
     [Token Studio Sync](https://docs.tokens.studio/token-storage-and-sync/sync-push-pull-changes)
   - Pull the latest changes into your codebase
   - Restart the app to apply updates

### Have a JetBrains IDE?

Use the [Documentation](https://kurocado-studio.github.io/platform/document.html) pipeline via
[GitHub Pages](https://pages.github.com) using
[Writerside Jetbrains Plugin](https://plugins.jetbrains.com/plugin/20158-writerside)

- Go to Repository Settings
  - Navigate to your GitHub repository.
  - Click on the **Settings** tab.
- **Enable GitHub Pages**
  - Scroll down to the **Pages** section in the left sidebar.
  - Under **Build and deployment**, select **GitHub Actions** as the source.
- Add the workflow to the main `ci.yaml` file, here is an example:

  ```yaml
  name: CI/CD Pipeline

  permissions:
    contents: write
    id-token: write
    pages: write
    pull-requests: write

  jobs:
    document:
      needs: lint
      uses: kurocado-studio/dev-ops/.github/workflows/workflow.document.yml@main
      secrets:
        GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      with:
        instance_id: dcs # id needs to be dcs
  ```

- This will enable the [Documentation](https://kurocado-studio.github.io/platform/document.html)
  pipeline

### ️ Step-by-Step Repository Setup

1. **Clone the Repository**

   Open your terminal and run:

   ```bash
   git clone https://github.com/Kurocado-Studio/product-starter-kit.git
   cd product-starter-kit
   ```

2. **Install Dependencies**

   The project uses `pnpm` as its package manager. If you don't have it installed, you can install
   it globally with:

   ```bash
   npm install -g pnpm
   ```

   Then, install the project's dependencies:

   ```bash
   pnpm install
   ```

3. **Run the Development Server**

   To start the development server, run:

   ```bash
   pnpm dev
   ```

   This will launch the application, typically accessible at `http://localhost:5173` in your
   browser.

4. **Run Storybook**

   To start Storybook, run:

   ```bash
   pnpm storybook
   ```

   This will launch Storybook on port `http://localhost:6007`

### Running Tests

To execute the project's tests, use:

```bash
pnpm test
```

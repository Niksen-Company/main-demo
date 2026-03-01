# Copilot Instructions

## Project Overview
This is a demo repository used to showcase GitHub features. It consists of a static web page (`index.html`) styled with [Primer CSS](https://primer.style/css/) and two GitHub Actions workflows.

## Tech Stack
- **HTML**: All web content is written in plain HTML (`index.html`).
- **CSS**: Use [@primer/css](https://primer.style/css/) (version pinned in `package.json`) for styling. Do not introduce other CSS frameworks or custom stylesheets.
- **GitHub Actions**: Workflows are defined in `.github/workflows/`.

## Coding Conventions
- Keep HTML valid and well-formed; the `proof-html` workflow validates all HTML files on every push.
- Use semantic HTML elements where appropriate.
- Do not add JavaScript unless explicitly required.
- Keep dependencies minimal; only add new `package.json` entries when strictly necessary.

## Testing & Validation
- HTML is validated automatically by the **Proof HTML** workflow (`.github/workflows/proof-html.yml`). Ensure any HTML changes remain valid before opening a PR.
- There is no JavaScript test suite; validation is done via the CI workflow.

## Repository Structure
- `index.html` – The main web page rendered by this repository.
- `package.json` – Declares the `@primer/css` dependency.
- `README.md` – Project overview.
- `.github/workflows/auto-assign.yml` – Automatically assigns new issues and PRs.
- `.github/workflows/proof-html.yml` – Validates HTML on every push.

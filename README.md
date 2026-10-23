# DePaul University Security Daemons 
## Application Security & DevSecOps Fundamentals Lab



> **Important:** All exercises are meant to run on your local machine using the tech stack that is preinstalled
> update the stack as you please AT YOUR OWN RISK.

---

## Table of Contents

- [Technology Stack](#technology-stack)
- [What We Will Cover](#what-we-will-cover)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
    - [Windows](#windows)
    - [macOS](#macos)
    - [Linux](#linux)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [Troubleshooting](#troubleshooting)
- [Security and Responsible Use](#security-and-responsible-use)

---


## Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript Backend Runtime |
| Express.js | Web application and API framework |
| SQLite | Lightweight database |
| better-sqlite3 | SQLite database driver for Node.js |
| npm | Dependency and package management |
| HTML, CSS, JS | Developmental Languages |


This stack keeps the lab lightweight and easy to run on personal laptops without requiring a separate database server.

## What We Will Cover

### 1. SQL Injection (SQLi)

Understand how unsafe database queries can expose or manipulate application data, and why parameterized queries are essential.

### 2. Cross-Site Scripting (XSS)

Explore how untrusted input can become executable browser content and learn about output encoding, safe DOM handling, and content security policies.

### 3. API Security

Discuss authentication versus authorization, improper access controls, request validation, and common API security weaknesses.

### 4. Database Security

Cover least privilege, safe query construction, database file protection, and secure handling of application data.

### 5. Input Validation and Sanitization

Learn how to validate data according to expected types, formats, and business rules, while using context-appropriate output encoding.

### 6. DevSecOps Fundamentals

Connect secure coding and testing to the development lifecycle, including dependency management, security checks, and secure configuration.

---

## Prerequisites

Before the workshop, install:

- [Node.js](https://nodejs.org/) — choose the current LTS release.
- npm — included with Node.js.
- [Git](https://git-scm.com/downloads) — recommended for cloning the repository.
- A code editor, such as [Visual Studio Code](https://code.visualstudio.com/).

Verify your installation:

```bash
node --version
npm --version
git --version
```

The commands should print version numbers. If a command is not recognized, reopen your terminal after installation and try again.

---

## Installation and Setup

### Windows

Use PowerShell or the integrated terminal in Visual Studio Code.

**1. Install Node.js**

Download the current LTS installer from [nodejs.org](https://nodejs.org/). Follow the installer prompts and ensure Node.js is added to your PATH.

**2. Open the project**

If using Git:

```powershell
git clone https://github.com/mdyahyaa0104/AppSec-DevSecOps-Fundamentals.git
cd <REPOSITORY_DIRECTORY>
```

Alternatively, download and extract the repository ZIP, then open its directory in your terminal.

**3. Install dependencies**

```powershell
npm install
```

This installs the dependencies declared in `package.json`, including Express and better-sqlite3.

**4. Configure the environment**

Edit `.env` with your local configuration values.

**5. Start the application**

Use the start command documented by the project. For example:

```powershell
npm start
```

### macOS

Use Terminal or the integrated terminal in Visual Studio Code.

**1. Install Node.js**

Download the current LTS installer from [nodejs.org](https://nodejs.org/), or use an existing Node.js version manager.

**2. Open the project**

```bash
git clone https://github.com/mdyahyaa0104/AppSec-DevSecOps-Fundamentals.git
cd <REPOSITORY_DIRECTORY>
```

**3. Install dependencies**

```bash
npm install
```

If better-sqlite3 cannot use a prebuilt binary, install Apple's command-line developer tools:

```bash
xcode-select --install
```

Then retry the installation.

**4. Configure the environment**

```bash
cp .env.example .env
```

Edit `.env` using your preferred editor.

**5. Start the application**

```bash
npm start
```

If your project defines a development script, use `npm run dev` instead.

### Linux

These instructions use Ubuntu/Debian as the example. Other distributions may use different package managers.

**1. Install Node.js**

Install the current LTS release using the official [Node.js installation guidance](https://nodejs.org/en/download).

Verify the installation:

```bash
node --version
npm --version
```

**2. Install build prerequisites if needed**

SQLite's Node.js driver may require native build tools if a compatible prebuilt binary is unavailable.

For Ubuntu/Debian:

```bash
sudo apt update
sudo apt install -y build-essential python3
```

**3. Open the project**

```bash
git clone https://github.com/mdyahyaa0104/AppSec-DevSecOps-Fundamentals.git
cd <REPOSITORY_DIRECTORY>
```

**4. Install dependencies**

```bash
npm install
```

**5. Configure the environment**

```bash
cp .env.example .env
```

Edit `.env` with your local settings.

**6. Start the application**

```bash
npm start
```

Use `npm run dev` if that is the development script defined in `package.json`.

---

## Environment Configuration

The repository provides `.env` as a template for local settings.

Copy this file to `.env` and adjust the values if needed.

**Configuration rules:**

- Keep `.env` in `.gitignore`.
- Never commit passwords, API keys, access tokens, or other secrets.
- Do not place sensitive information in the example file.
- Keep local database files and generated artifacts out of version control when appropriate.

The example variables must match the configuration actually read by the application.

## Running the Application

After installation:

1. Confirm dependencies installed successfully.
2. Confirm `.env` exists and contains valid local settings.
3. Start the application using its configured npm script.
4. Open the local URL printed in the terminal, commonly `http://localhost:3000`.
5. Follow the lab instructions to explore the application and its security controls.

The exact URL, routes, available exercises, and npm scripts depend on the implementation in this repository.

---

## Troubleshooting

### `node` or `npm` is not recognized

- Confirm Node.js is installed.
- Reopen your terminal.
- Check that Node.js is included in your PATH.
- Run `node --version` and `npm --version` again.

### `npm install` fails on better-sqlite3

- Verify your Node.js version.
- Retry using a supported Node.js LTS release.
- Install the platform-specific build prerequisites listed above.
- Read the complete npm error output before attempting additional fixes.

### `npm init -y` reports an invalid package name

Package names cannot contain certain characters, including `&` and spaces. If initializing a package manually, use a lowercase, hyphen-separated name.

do

```bash
npm init 
```

to manually initialize your package.json file.

If the repository already includes `package.json`, you normally do not need to run `npm init` at all.

---

## Security and Responsible Use

This is an educational security lab. Vulnerability demonstrations should be limited to the intentionally vulnerable exercises and systems you are authorized to test.

The purpose is to understand vulnerabilities, reproduce them safely in a controlled environment, and implement effective mitigations.

**Learn the attack. Understand the weakness. Build the defense.**

---

## AI Disclaimer 

This Lab and Event does not use AI except for the following cases: Planning & Organizing Information and Creating User Manuals.

---

*Maintained by SecDaemons for educational use.*

# Legal Document - Frontend

A modern, responsive frontend application for the Legal Document built with React.js. This application provides a seamless user interface for a legal assistant tool that helps users search and summarize legal documents.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Installation](#-installation)
- [Available Scripts](#-available-scripts)
- [Server Repository](#-server-repository)

## ✨ Features

- **List of Legal Documents**: Has multiple categories legal documents
- **Elastic Search**: It has a global search box where users can search and view the document with the power of elastic search

## 🛠️ Tech Stack

- **React.js** - UI Framework
- **Tailwind CSS** - Styling
- **RTK Query** - Data fetching and caching
- **Redux Toolkit** - State management

## 🚀 Getting Started

### Prerequisites

- Node.js >= 22.x
- yarn or npm
- Running backend server (see [Server Repository](#-server-repository))

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_BASE_URL=api_base_url
```

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/tusharahmmed/acme-frontend.git

# Navigate to project directory
cd acme-frontend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Configure your .env file with API settings

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run preview
```

## 🔗 Server Repository

This frontend connects to the Legal Document backend API.

**Backend Repository**: [https://github.com/tusharahmmed/acme-server](https://github.com/tusharahmmed/acme-server)

### Server Details

- **API Base URL**: `http://localhost:5000`
- **Tech Stack**: Node.js, Express, TypeScript, Elastic Search

---

**Built with ❤️ using React.js, Redux-Toolkit, and Tailwind CSS**

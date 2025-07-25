# Document Extraction Tool

A smart PDF document extraction tool designed to parse unstructured agricultural and environmental reports, extract key information with high accuracy, and present structured results through a clean and interactive interface.

---

## Implementation Approach

The tool follows a modular, intelligent extraction workflow:

1. **PDF Parsing (Backend):** Documents are parsed using `pdf-parse` to extract raw text.
2. **LLM Function Calling:** Raw text is processed using OpenAI's Chat Completions API with function calling and predefined schemas.
3. **Schema Normalization:** Extracted data is transformed into consistent JSON with sections like `summary`, `activities`, `monitoring`, `outreach`, and `geographicAreas`.
4. **Frontend Display:** Extracted results are visualized using Tables or Chart.js and organized in a clean, responsive interface using TailwindCSS.

---

## Tech Stack

### Backend
- Node.js v20+
- TypeScript
- pdf-parse for text extraction
- OpenAI API for intelligent data extraction

### Frontend
- React with Next.js
- TypeScript
- Chart.js for data visualization
- react-dropzone for file upload
- TailwindCSS for styling

---

## Setup & Usage Instructions

### Prerequisites

- Node.js v20 or higher
- npm or yarn
- OpenAI API Key

---

## Backend Setup

```bash
# Clone the repo
git clone https://github.com/mesantiago/document-extraction-tool-demo.git
cd document-extraction-tool/backend

# Install dependencies
yarn install
```

## Backend Configuration
Create a .env file inside the backend/ directory by copying the .env.sample file and adjust the values like the openai key
```bash
cp .env.sample .env
```

## Running the Backend

```bash
# Start in development mode
yarn dev

# Or build and run
yarn build
yarn start

```

---

## Frontend Setup
```bash
cd ../frontend

# Install frontend dependencies
yarn install
```

## Frontend Configuration
Create a .env.local file inside the frontend/ directory by copying the .env.sample file and adjust the values like the openai key
```bash
cp .env.sample .env.local
```

## Running the Frontend

```bash
# Start in development mode
yarn dev

# Or build and run
yarn build
yarn start

```

---

## Project Structure

```
backend/
├── dist/
├── src/
│   ├── config/
│   ├── connectors/
│   ├── controllers/
│   ├── helpers/
│   ├── interfaces/
│   ├── middlewars/
│   ├── routes/
│   ├── app.ts
│   └── server.ts
├── uploads/
├── .env
├── package.json

frontend/
├── public/
├── src/
│   ├── app/
│   ├── interfaces/
│   ├── services/
│   └── ui/
│       ├── charts/
│       └── tabs/
├── .env.local
└── package.json
```
---

## Features
- Drag-and-drop PDF uploads
- Intelligent extraction using LLMs
- Schema-based JSON output
- Dynamic charts using Chart.js
- Responsive UI built with TailwindCSS
# Extraction Logic

This document outlines the core logic used in the Document Extraction Tool to transform unstructured PDF reports into structured JSON data using a combination of PDF parsing and OpenAI’s function calling API.

---

## 1. Overview

The extraction process is designed to:
- Parse raw text from uploaded PDF documents
- Try to remove headers and footers if possible
- Use OpenAI’s LLM with function calling to extract structured information
- Normalize the output into a consistent schema for downstream use (visualization, export, etc.)

---

## 2. PDF Parsing

I used the `pdf-parse` library to extract raw text content from PDF files.

**Key points:**
- All pages are extracted
- Tried to remove headers and footers but is not guaranteed
- The full text is then passed to the openai api
- Code for parsing can be found on [backend/src/helpers/document.helper.ts](https://github.com/mesantiago/document-extraction-tool-demo/blob/main/backend/src/helpers/document.helper.ts)

## 3. OpenAI's LLM function calling

Called OpenAI Chat Completions API using a defined function schema. This schema enforces structured output from the LLM.

**Key points:**
- Code for sending the text and retrieving response from OpenAI api can be found on [backend/src/connectors/openai.ts](https://github.com/mesantiago/document-extraction-tool-demo/blob/main/backend/src/connectors/openai.ts).
- Prompt and the detailed function schema can be found on [backend/src/config/openai.ts](https://github.com/mesantiago/document-extraction-tool-demo/blob/main/backend/src/config/openai.ts).

## 4. Sample Output
```
{
  "overview": "The Basket Creek-Hickahala Creek Watershed Plan (HUC 080302040403, MWS 9105) is a comprehensive effort to restore and maintain ...",
  "summary": {
    "totalGoals": 10,
    "totalBMPs": 6,
    "completionRate": 0
  },
  "goals": [
    {
      "description": "Coordinate with partners to determine priority areas for pollutant reduction",
      "expectedOutcome": "Target priority areas for BMPs",
      "planTimelineSchedule": [1, 2]
    },
    ...
  ],
  "bmps": [
    {
      "name": "Fencing",
      "unit": "ft",
      "unitCount": 10000,
      "unitCost": 2.33,
      "totalCost": 23300
    },
    ...
  ],
  "implementation": [
    {
      "activity": "Develop, execute, and implement Subgrant Agreement",
      "timeline": [1, 1]
    },
    ...
  ],
  "monitoring": [
    {
      "parameter": "Dissolved Oxygen",
      "threshold": "Daily Avg 5.0 mg/L; Instantaneous 4.0 mg/L",
      "notes": "Measures aquatic health, organic enrichment impact"
    },
    ...
  ],
  "outreach": [
    {
      "activity": "Water Model Presentations – Enviroscapes and aquifer model training",
      "audience": "Students, teachers, general public",
      "deliveryMethod": "In-person, interactive"
    },
    ...
  ],
  "geographicAreas": [
    {
        "name": "Basket Creek-Hickahala Creek Watershed",
        "type": "HUC-12 Subwatershed",
        "priorityLevel": null,
        "notes": "Primary project focus, Tate County, 35,085 acres"
    },
    ...
  ]
}
```
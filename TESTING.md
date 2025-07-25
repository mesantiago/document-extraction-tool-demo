# Testing Strategy

This document outlines the manual testing approach used for the Document Extraction Tool. Given the AI-driven and user-facing nature of the project, manual testing was used to verify functionality, validate output accuracy, and ensure a smooth user experience across both backend and frontend components.

---

## 1. Objectives

The primary goals of testing were to:

- Ensure reliable PDF uploads and parsing
- Verify correct and complete data extraction from diverse documents
- Confirm that extracted data matches the intended schema
- Validate user interface behavior for uploading, viewing, and interacting with results

---

## 2. Manual Testing Approach

### Backend Testing

#### Functional Areas Tested:
- **PDF parsing:** Confirmed that various PDF documents could be successfully parsed using `pdf-parse`
- **OpenAI integration:** Manually reviewed extracted results to confirm consistency, accuracy, and structure
- **Schema output:** Checked that the extracted JSON followed the defined schema (`summary`, `goals`, `bmps`, etc.)
- **Error handling:** Tested behavior for pdf parsing and OpenAI failures

#### Test Method:
- Uploaded different types of agricultural/environmental reports
- Logged raw extraction results for review
- Compared output against expected values based on document content

---

### Frontend Testing

#### Functional Areas Tested:
- **File upload via drag-and-drop** using `react-dropzone`
- **Response rendering:** Ensured extracted data was displayed clearly after submission
- **Chart rendering:** Verified data visualization using Chart.js (e.g., counts, categories, and groupings)
- **UI behavior:** Manually checked component responsiveness, loading indicators, error messages, and layout on multiple screen sizes

#### Browsers Tested:
- Chrome (Desktop)
- Edge (Desktop)

#### Devices:
- macOS laptop
- Developer tools to simulate mobile view

---

## 3. Documents Used for Testing

- Picked 5 documents from [Mississippi Watershed Plans](https://www.mdeq.ms.gov/wp-content/uploads/SurfaceWaterBasinMgtNonPointSourceBranch/Watershed_Plans/MS_Watershed_Plans.htm) with different document structure and file sizes.

---

## 4. Known Limitations (Manual Observations)

- OpenAI may produce slight variation in structure for semantically similar content
- Inconsistent handling of poorly formatted tables or scanned PDFs
- No automatic validation against a reference dataset
- No automated test coverage for future regression detection

---

## 5. Future Testing Recommendations

- Add automated unit tests for API endpoints
- Mock OpenAI responses to simulate consistent test cases
- Add schema validation checks post-extraction
- Integrate visual regression tests for frontend charts

---

## Summary

Manual testing has been used throughout development to ensure the tool works reliably across different types of documents and use cases. While the current approach has proven effective for iterative development, adding automated testing will be beneficial as the project grows in complexity or usage.

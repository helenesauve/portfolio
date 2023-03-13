import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import PDF from "./Hero/helene-sauve-cv.pdf";

function Resume() {
  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
        <Viewer fileUrl={PDF} />
      </Worker>
    </div>
  );
}

export default Resume;

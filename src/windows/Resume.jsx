import { useState } from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  const filePath = "files/resume.pdf";
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLoadSuccess = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleLoadError = (error) => {
    setIsLoading(false);
    setError(error);
    console.error("Failed to load PDF:", error);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href={filePath}
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <div className="bg-white h-full overflow-auto flex items-center justify-center">
        {isLoading && !error && (
          <div className="p-8 text-gray-600">Loading PDF...</div>
        )}
        
        {error && (
          <div className="p-8 text-red-600">
            <p className="font-semibold mb-2">Failed to load PDF</p>
            <p className="text-sm">{error.message || "An error occurred while loading the document."}</p>
          </div>
        )}

        {!error && (
          <Document
            file={filePath}
            onLoadSuccess={handleLoadSuccess}
            onLoadError={handleLoadError}
            loading=""
          >
            <Page pageNumber={1} renderTextLayer renderAnnotationLayer />
          </Document>
        )}
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;

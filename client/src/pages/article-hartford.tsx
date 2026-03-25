import { useState, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, ChevronLeft, ChevronRight, Newspaper } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import companyLogo from "@assets/custom-sign_1770907979564.jpg";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PDF_PATH = "/electrical-contractor-hartford-healthare-2024.pdf";

export default function ArticleHartford() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-muted/40 flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="sm" data-testid="button-back-home">
                <ArrowLeft className="mr-1.5 h-4 w-4" />
                Back
              </Button>
            </Link>
            <img
              src={companyLogo}
              alt="Custom Electric Inc"
              className="h-8 w-auto rounded-md object-cover hidden sm:block"
              data-testid="img-logo"
            />
            <div className="hidden sm:block">
              <p className="font-semibold text-sm leading-tight">Electrical Contractor Magazine</p>
              <p className="text-xs text-muted-foreground leading-tight flex items-center gap-1">
                <Newspaper className="h-3 w-3" />
                June 2024
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Page navigation */}
            {numPages > 0 && (
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setPageNumber(p => Math.max(1, p - 1))}
                  disabled={pageNumber <= 1}
                  data-testid="button-prev-page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm text-muted-foreground px-2 whitespace-nowrap" data-testid="text-page-indicator">
                  {pageNumber} / {numPages}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setPageNumber(p => Math.min(numPages, p + 1))}
                  disabled={pageNumber >= numPages}
                  data-testid="button-next-page"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
            <a href={PDF_PATH} download="Electrical_Contractor_Hartford_HealthCare_2024.pdf" data-testid="button-download-pdf">
              <Button size="sm">
                <Download className="mr-1.5 h-3.5 w-3.5" />
                Download
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* PDF Viewer */}
      <main className="flex-1 flex flex-col items-center py-8 px-4">
        {loading && (
          <div className="flex flex-col items-center justify-center h-64 gap-3 text-muted-foreground" data-testid="status-loading">
            <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            <p className="text-sm">Loading article...</p>
          </div>
        )}

        <Document
          file={PDF_PATH}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(err) => console.error("PDF load error:", err)}
          className="flex flex-col items-center"
          data-testid="pdf-document"
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="shadow-md rounded-md overflow-hidden"
            width={Math.min(window.innerWidth - 48, 900)}
            data-testid={`pdf-page-${pageNumber}`}
          />
        </Document>

        {/* Bottom page navigation */}
        {numPages > 0 && (
          <div className="flex items-center gap-3 mt-8" data-testid="section-bottom-nav">
            <Button
              variant="outline"
              onClick={() => setPageNumber(p => Math.max(1, p - 1))}
              disabled={pageNumber <= 1}
              data-testid="button-prev-page-bottom"
            >
              <ChevronLeft className="mr-1.5 h-4 w-4" />
              Previous Page
            </Button>
            <span className="text-sm text-muted-foreground" data-testid="text-page-indicator-bottom">
              Page {pageNumber} of {numPages}
            </span>
            <Button
              variant="outline"
              onClick={() => setPageNumber(p => Math.min(numPages, p + 1))}
              disabled={pageNumber >= numPages}
              data-testid="button-next-page-bottom"
            >
              Next Page
              <ChevronRight className="ml-1.5 h-4 w-4" />
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

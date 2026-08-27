"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { FiDownload, FiEye } from "react-icons/fi";
import { useI18n } from "@/lib/i18n";

type PdfPreviewModalProps = {
  documentTitle: string;
  eyebrow: string;
  file: string;
  triggerLabel: string;
  downloadLabel: string;
  triggerVariant?: "link" | "button";
};

export function PdfPreviewModal({
  documentTitle,
  eyebrow,
  file,
  triggerLabel,
  downloadLabel,
  triggerVariant = "button",
}: PdfPreviewModalProps) {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const triggerStyles =
    triggerVariant === "link"
      ? "font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink underline decoration-signal decoration-2 underline-offset-8 transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
      : "inline-flex min-h-11 items-center justify-center gap-2 border border-line bg-panel px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal";

  return (
    <>
      <button className={triggerStyles} onClick={() => setIsOpen(true)} type="button">
        {triggerVariant === "button" ? <FiEye aria-hidden="true" className="h-4 w-4" /> : null}
        {triggerLabel}
      </button>

      {isOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-[120] grid place-items-center overflow-hidden bg-canvas/90 p-4 backdrop-blur-md sm:p-6"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setIsOpen(false);
                }
              }}
            >
              <div
                aria-labelledby={titleId}
                aria-modal="true"
                className="relative flex h-[calc(100svh-2rem)] max-h-[960px] w-full max-w-4xl flex-col overflow-hidden border border-line bg-panel shadow-signal sm:h-[calc(100svh-3rem)]"
                role="dialog"
              >
                <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                      {`// ${eyebrow}`}
                    </p>
                    <h2
                      className="mt-1 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-ink"
                      id={titleId}
                    >
                      {documentTitle}
                    </h2>
                  </div>
                  <button
                    aria-label={`${t.pdf.close}: ${documentTitle}`}
                    className="grid h-9 w-9 place-items-center border border-line font-mono text-lg text-muted transition-colors hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
                    onClick={() => setIsOpen(false)}
                    type="button"
                  >
                    x
                  </button>
                </div>

                <div className="relative min-h-0 flex-1 bg-canvas p-3 sm:p-5">
                  <iframe
                    className="h-full w-full border border-line bg-ink"
                    src={`${file}#toolbar=0&navpanes=0&view=FitH`}
                    title={documentTitle}
                  />
                </div>

                <div className="flex justify-end border-t border-line px-4 py-4 sm:px-5">
                  <a
                    className="inline-flex min-h-10 items-center justify-center gap-2 border border-signal bg-signal px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-canvas transition-colors hover:bg-transparent hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
                    download
                    href={file}
                  >
                    <FiDownload aria-hidden="true" className="h-4 w-4" />
                    {downloadLabel}
                  </a>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

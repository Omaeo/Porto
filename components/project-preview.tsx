"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { FiChevronLeft, FiChevronRight, FiEye } from "react-icons/fi";
import { useI18n } from "@/lib/i18n";

type ProjectPreviewProps = {
  project: {
    number: string;
    title: string;
    year: string;
    status: string;
    preview: {
      description: string;
      images: readonly string[];
    };
  };
};

export function ProjectPreview({ project }: ProjectPreviewProps) {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const titleId = useId();
  const totalImages = project.preview.images.length;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (event.key === "ArrowLeft") {
        setCurrentImage((image) => (image - 1 + totalImages) % totalImages);
      }

      if (event.key === "ArrowRight") {
        setCurrentImage((image) => (image + 1) % totalImages);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, totalImages]);

  const openModal = () => {
    setCurrentImage(0);
    setIsOpen(true);
  };

  const showPreviousImage = () => {
    setCurrentImage((image) => (image - 1 + totalImages) % totalImages);
  };

  const showNextImage = () => {
    setCurrentImage((image) => (image + 1) % totalImages);
  };

  return (
    <>
      <button
        className="inline-flex min-h-10 items-center justify-center gap-2 border border-line bg-panel px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        onClick={openModal}
        type="button"
      >
        <FiEye aria-hidden="true" className="h-4 w-4" />
        {t.projects.preview}
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
                className="flex max-h-[calc(100svh-2rem)] w-full max-w-6xl flex-col overflow-hidden border border-line bg-panel shadow-signal sm:max-h-[calc(100svh-3rem)]"
                role="dialog"
              >
                <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                      {`// ${t.projects.previewEyebrow}`}
                    </p>
                    <h2
                      className="mt-1 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-ink"
                      id={titleId}
                    >
                      {project.number} / {project.title}
                    </h2>
                  </div>
                  <button
                    aria-label={`${t.projects.closePreview}: ${project.title}`}
                    className="grid h-9 w-9 shrink-0 place-items-center border border-line font-mono text-lg text-muted transition-colors hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
                    onClick={() => setIsOpen(false)}
                    type="button"
                  >
                    x
                  </button>
                </div>

                <div className="min-h-0 overflow-y-auto lg:grid lg:grid-cols-[minmax(0,1.55fr)_minmax(19rem,0.75fr)]">
                  <div className="flex min-h-0 flex-col border-b border-line bg-canvas p-4 sm:p-5 lg:border-b-0 lg:border-r">
                    <div className="relative aspect-[14/9] overflow-hidden border border-line bg-panel">
                      <Image
                        alt={`${project.title} ${t.projects.imageAlt} ${currentImage + 1}`}
                        className="object-contain"
                        fill
                        priority
                        sizes="(min-width: 1024px) 65vw, 100vw"
                        src={project.preview.images[currentImage]}
                      />

                      {totalImages > 1 ? (
                        <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between sm:inset-x-4">
                          <button
                            aria-label={t.projects.previousImage}
                            className="grid h-10 w-10 place-items-center border border-line bg-canvas/90 text-ink backdrop-blur-sm transition-colors hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
                            onClick={showPreviousImage}
                            type="button"
                          >
                            <FiChevronLeft aria-hidden="true" className="h-5 w-5" />
                          </button>
                          <button
                            aria-label={t.projects.nextImage}
                            className="grid h-10 w-10 place-items-center border border-line bg-canvas/90 text-ink backdrop-blur-sm transition-colors hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
                            onClick={showNextImage}
                            type="button"
                          >
                            <FiChevronRight aria-hidden="true" className="h-5 w-5" />
                          </button>
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2" role="group" aria-label={t.projects.chooseImage}>
                        {project.preview.images.map((image, index) => (
                          <button
                            aria-label={`${t.projects.showImage} ${index + 1}`}
                            aria-pressed={currentImage === index}
                            className={`h-1.5 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal ${
                              currentImage === index ? "w-8 bg-signal" : "w-4 bg-muted/40 hover:bg-muted"
                            }`}
                            key={image}
                            onClick={() => setCurrentImage(index)}
                            type="button"
                          />
                        ))}
                      </div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                        {String(currentImage + 1).padStart(2, "0")} / {String(totalImages).padStart(2, "0")}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col p-5 sm:p-7">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                      {project.year} / {project.status}
                    </p>
                    <h3 className="mt-4 font-mono text-2xl font-semibold uppercase leading-tight tracking-[-0.05em] text-ink sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
                      {project.preview.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

import { PdfPreviewModal } from "@/components/ui/pdf-preview-modal";
import { portfolio } from "@/data/portfolio";
import { useI18n } from "@/lib/i18n";

export function CvModal() {
  const { t } = useI18n();

  return (
    <PdfPreviewModal
      documentTitle={`${portfolio.name} CV`}
      downloadLabel={t.pdf.downloadCv}
      eyebrow={t.pdf.cvEyebrow}
      file={portfolio.cv.file}
      triggerLabel="CV"
      triggerVariant="link"
    />
  );
}

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import type { Cert } from "@/types/certificate";

interface CertificatePreviewProps {
  selected: Cert | null;
  setSelected: React.Dispatch<React.SetStateAction<Cert | null>>;
}

function CertificatePreview({
  selected,
  setSelected,
}: CertificatePreviewProps) {
  return (
    <Dialog
      open={selected !== null}
      onOpenChange={(open) => {
        if (!open) {
          setSelected(null);
        }
      }}
    >
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>
            {selected?.title}
          </DialogTitle>
        </DialogHeader>

        {selected && (
          <div className="flex flex-col gap-4">
            <img
              src={`${import.meta.env.BASE_URL}certificates/${selected.mediaUrl}`}
              alt={selected.title}
              className="
                max-h-[50vh]
                rounded-lg
                object-contain
                border
              "
            />

            <p className="text-muted-foreground">
              {selected.description}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default CertificatePreview;
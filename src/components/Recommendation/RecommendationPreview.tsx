import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Recommendation } from "@/types/recommendation";

interface Props {
  recommendation: Recommendation | null;
  setRecommendation: React.Dispatch<
    React.SetStateAction<Recommendation | null>
  >;
}

function RecommendationPreview({
  recommendation,
  setRecommendation,
}: Props) {
  return (
    <Dialog
      open={recommendation !== null}
      onOpenChange={(open) => {
        if (!open) setRecommendation(null);
      }}
    >
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Recommendation
          </DialogTitle>
        </DialogHeader>

        {recommendation && (
          <div className="space-y-6">
            <div className="flex gap-1">
              {"⭐".repeat(recommendation.rating)}
            </div>

            <p className="leading-8 text-muted-foreground">
              "{recommendation.description}"
            </p>

            <div className="border-t pt-4">
              <h3 className="font-semibold">
                {recommendation.name}
              </h3>

              <p className="text-muted-foreground">
                {recommendation.role}
              </p>

              <p className="text-muted-foreground">
                {recommendation.company}
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default RecommendationPreview;
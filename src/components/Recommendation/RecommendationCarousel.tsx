import recommendations from "@/data/Recommedations";
import RecommendationCard from "./RecommendationCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { Recommendation } from "@/types/recommendation";
import{Dialog, DialogContent, DialogTitle} from '@/components/ui/dialog'
import { DialogHeader } from "../ui/dialog";

function RecommendationCarousel() {
    const [selectedRecommendation, setSelectedRecommendation] = useState<Recommendation| null>(null);
  return (
    <div>
    <Carousel className="w-full">
      <CarouselContent>
        {recommendations.map((recommendation) => (
          <CarouselItem
            key={recommendation.id}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <RecommendationCard
               key={recommendation.id}
               recommendation={recommendation}
               setSelectedRecommendation={setSelectedRecommendation}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    <Dialog
  open={selectedRecommendation !== null}
  onOpenChange={(open) => {
    if (!open) setSelectedRecommendation(null);
  }}
>
  <DialogContent className="max-w-2xl">
    {selectedRecommendation && (
      <>
        <DialogHeader>
          <DialogTitle>
            Recommendation from {selectedRecommendation.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="border-t pt-4">{selectedRecommendation.description}</p>

          <div className="border-t pt-4">
            <h3>{selectedRecommendation.name}</h3>

            <p>{selectedRecommendation.role}</p>

            <p>{selectedRecommendation.company}</p>
          </div>
        </div>
      </>
    )}
  </DialogContent>
</Dialog>
    </div>
  );
}

export default RecommendationCarousel;
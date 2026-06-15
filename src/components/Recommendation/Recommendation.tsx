import { useState } from "react";
import RecommendationCarousel from "./RecommendationCarousel";
import { ExternalLink } from "lucide-react";


function Recommendations() {
  return (
    <section id="recommendations" className="space-y-8">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-bold">
          What People Say
        </h2>
        <div className="h-px flex-1 bg-border" />
        <a
          href="https://www.linkedin.com/in/niteesh-pal/details/recommendations/"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-primary hover:underline font-mono flex items-center gap-1 shrink-0"
          data-testid="link-github-all"
        >
          All recommendations <ExternalLink className="h-3 w-3" />
        </a>
        
      </div>

      <RecommendationCarousel/>
    </section>
  );
}

export default Recommendations;
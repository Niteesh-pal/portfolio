import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { Recommendation } from "@/types/recommendation";
import StarRating from "./StarRating";
import { Button } from "../ui/button";
import { FaLinkedinIn } from "react-icons/fa";

interface RecommendationCardProps {
   recommendation: Recommendation;
  setSelectedRecommendation: React.Dispatch<
    React.SetStateAction<Recommendation | null>>;
}

function RecommendationCard({
  recommendation,
  setSelectedRecommendation
}: RecommendationCardProps) {
  return (
    <motion.div
      whileHover={{
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Card className="h-full">
        <CardContent className="space-y-4 p-6">
          <StarRating rating={recommendation.rating} />
            <div className="inline">
          <p className="text-muted-foreground max-h-[190px] line-clamp-6 overflow-hidden">
            "{recommendation.description}"
          </p>
          <Button
            variant="link"
            className="w-fit p-0 hover:cursor-pointer"
            onClick={() => setSelectedRecommendation(recommendation)}
        >
            Read More
        </Button>
        </div>

                  <div>
                      <h3 className="font-semibold">
                        {
                            recommendation.linkedinUrl ?
                                <a
                              href={recommendation.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:cursor-pointer hover:underline hover:text-primary hover:underline-offset-4"
                          >{recommendation.name}</a>: <span>{recommendation.name}</span>
                            
                        }
                          
                      </h3>

                      <p className="text-sm text-muted-foreground">
                          {recommendation.role}
                      </p>

            <p className="text-sm text-muted-foreground">
              {recommendation.company}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default RecommendationCard;
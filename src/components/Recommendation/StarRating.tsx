import { Star } from "lucide-react";

interface StarRatingProps {
  rating: 1 | 2 | 3 | 4 | 5;
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, idx) => (
        <Star
          key={idx}
          className="size-4 fill-yellow-400 text-yellow-400"
        />
      ))}
    </div>
  );
}

export default StarRating;  
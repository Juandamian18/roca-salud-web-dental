
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  comment: string;
  rating: number;
}

const ReviewCard = ({ name, comment, rating }: ReviewCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6 pb-4">
        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-muted-foreground mb-4">{comment}</p>
        <p className="font-semibold text-right">- {name}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;

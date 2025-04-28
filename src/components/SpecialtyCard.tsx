
import React from 'react';
import { Heart } from 'lucide-react';

interface SpecialtyCardProps {
  name: string;
}

const SpecialtyCard = ({ name }: SpecialtyCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-card hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
      <div className="bg-accent p-3 rounded-full mb-3">
        <Heart className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-medium text-gray-800 text-center">{name}</h3>
    </div>
  );
};

export default SpecialtyCard;

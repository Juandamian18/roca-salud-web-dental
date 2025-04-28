
import React from 'react';
import { Building } from 'lucide-react';

interface LocationCardProps {
  title: string;
  address: string;
}

const LocationCard = ({ title, address }: LocationCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
      <div className="bg-accent p-4 rounded-full mb-4">
        <Building className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-semibold text-lg mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{address}</p>
    </div>
  );
};

export default LocationCard;

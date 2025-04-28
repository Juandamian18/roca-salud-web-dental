
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SpecialtyCardProps {
  name: string;
  Icon: LucideIcon;
}

const SpecialtyCard = ({ name, Icon }: SpecialtyCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-card hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
      <div className="bg-accent p-3 rounded-full mb-3">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-medium text-gray-800 text-center text-sm md:text-base">{name}</h3>
    </div>
  );
};

export default SpecialtyCard;

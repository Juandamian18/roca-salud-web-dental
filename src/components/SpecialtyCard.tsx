
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardContent } from './ui/card';

interface SpecialtyCardProps {
  name: string;
  Icon: LucideIcon;
  description: string;
}

const SpecialtyCard = ({ name, Icon, description }: SpecialtyCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-col items-center space-y-3 pt-6">
        <div className="bg-accent p-3 rounded-full">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-semibold text-gray-800 text-lg text-center">{name}</h3>
      </CardHeader>
      <CardContent className="text-center text-muted-foreground text-sm">
        {description}
      </CardContent>
    </Card>
  );
};

export default SpecialtyCard;

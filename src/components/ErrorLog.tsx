import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { colors } from '../styles/theme';

type ErrorLogProps = {
  errors: string[];
};

export const ErrorLog: React.FC<ErrorLogProps> = ({ errors }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (errors.length === 0) return null;

  return (
    <div className="w-full mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300"
      >
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        {errors.length} Error{errors.length !== 1 ? 's' : ''}
      </button>
      
      {isOpen && (
        <div className={`mt-2 p-4 ${colors.background.secondary} rounded-lg border border-red-900`}>
          {errors.map((error, index) => (
            <p key={index} className="text-sm text-red-400">{error}</p>
          ))}
        </div>
      )}
    </div>
  );
};
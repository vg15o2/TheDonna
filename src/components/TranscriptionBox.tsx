import React from 'react';
import { colors } from '../styles/theme';

type TranscriptionBoxProps = {
  title: string;
  text: string;
};

export const TranscriptionBox: React.FC<TranscriptionBoxProps> = ({ title, text }) => {
  return (
    <div className="w-full">
      <h3 className={`text-sm font-medium ${colors.text.secondary} mb-2`}>{title}</h3>
      <div className={`w-full h-32 ${colors.background.secondary} rounded-lg ${colors.border.primary} border p-4 overflow-y-auto`}>
        <p className={colors.text.primary}>{text || 'No content yet...'}</p>
      </div>
    </div>
  );
};
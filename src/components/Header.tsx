import React from 'react';
import { Bot } from 'lucide-react';
import { colors } from '../styles/theme';

export const Header = () => (
  <div className="text-center mb-12">
    <div className="flex items-center justify-center gap-3 mb-4">
      <Bot className={`w-12 h-12 ${colors.text.accent}`} />
      <h1 className={`text-4xl font-bold ${colors.text.primary}`}>DONNA</h1>
    </div>
    <p className={colors.text.secondary}>Interactive Voice Assistant</p>
  </div>
);
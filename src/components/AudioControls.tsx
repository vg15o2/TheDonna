import React from 'react';
import { Mic, MicOff } from 'lucide-react';
import { AudioVisualizer } from './AudioVisualizer';
import { colors } from '../styles/theme';

type AudioControlsProps = {
  isListening: boolean;
  onToggle: () => void;
};

export const AudioControls: React.FC<AudioControlsProps> = ({ isListening, onToggle }) => (
  <div className="flex flex-col items-center gap-4">
    <button
      onClick={onToggle}
      className={`p-4 rounded-full transition-colors ${
        isListening ? colors.button.danger : colors.button.primary
      }`}
    >
      {isListening ? (
        <MicOff className="w-6 h-6 text-white" />
      ) : (
        <Mic className="w-6 h-6 text-white" />
      )}
    </button>
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${
        isListening ? 'bg-red-500' : 'bg-gray-600'
      }`} />
      <span className={`text-sm ${colors.text.secondary}`}>
        {isListening ? 'Listening...' : 'Click to start'}
      </span>
    </div>
    <AudioVisualizer isListening={isListening} />
  </div>
);
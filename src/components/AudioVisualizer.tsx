import React from 'react';
import { colors } from '../styles/theme';

type AudioVisualizerProps = {
  isListening: boolean;
};

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({ isListening }) => {
  return (
    <div className="flex items-center justify-center gap-1 h-8">
      {isListening && (
        <>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-1 ${colors.text.accent} rounded-full animate-pulse`}
              style={{
                height: `${Math.random() * 24 + 8}px`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};
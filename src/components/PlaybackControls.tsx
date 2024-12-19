import React from 'react';
import { Volume2 } from 'lucide-react';
import { colors } from '../styles/theme';

type PlaybackControlsProps = {
  onPlay: () => void;
  hasResponse: boolean;
};

export const PlaybackControls: React.FC<PlaybackControlsProps> = ({ onPlay, hasResponse }) => (
  <div className="flex justify-center">
    <button
      onClick={onPlay}
      disabled={!hasResponse}
      className={`flex items-center gap-2 px-4 py-2 ${colors.background.accent} hover:bg-[#243B53] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed ${colors.text.primary}`}
    >
      <Volume2 className="w-4 h-4" />
      <span>Play Response</span>
    </button>
  </div>
);
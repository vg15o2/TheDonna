import React, { useState } from 'react';
import { Header } from './components/Header';
import { AudioControls } from './components/AudioControls';
import { TranscriptionBox } from './components/TranscriptionBox';
import { PlaybackControls } from './components/PlaybackControls';
import { ErrorLog } from './components/ErrorLog';
import { colors } from './styles/theme';

function App() {
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [response, setResponse] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const toggleListening = () => {
    setIsListening(!isListening);
    // Add actual audio capture logic here
  };

  const playResponse = () => {
    // Add speech synthesis logic here
  };

  return (
    <div className={`min-h-screen ${colors.background.primary} bg-gradient-to-b from-[#0B1120] to-[#0F172A]`}>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Header />

        <div className="space-y-8">
          <AudioControls isListening={isListening} onToggle={toggleListening} />

          <div className="space-y-6">
            <TranscriptionBox title="Transcription" text={transcription} />
            <TranscriptionBox title="Donna's Response" text={response} />
          </div>

          <PlaybackControls onPlay={playResponse} hasResponse={!!response} />
          <ErrorLog errors={errors} />

          <footer className={`text-center text-sm ${colors.text.secondary} mt-12`}>
            <p>Powered by Whisper, Mistral, and Azure TTS</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
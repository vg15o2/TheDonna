# Donna
## Real-Time Speech Processing with Whisper, Mistral, and Azure TTS

This script captures real-time audio, transcribes it using Whisper, generates a response using the Mistral API, and synthesizes speech using Azure Cognitive Services.

## Prerequisites

Ensure you have the necessary Python packages installed:

```bash
pip install asyncio openai-whisper mistralai azure-cognitiveservices-speech sounddevice numpy
```

```python
import asyncio
import whisper
from mistralai.client import MistralClient
import azure.cognitiveservices.speech as speechsdk
import sounddevice as sd
import numpy as np

# Set API keys
mistral_api_key = "API_KEY"
azure_speech_key = "API_KEY"
azure_service_region = "eastus"

# Initialize Mistral client
mistral_client = MistralClient(api_key=mistral_api_key)

# Load Whisper ASR model
whisper_model = whisper.load_model("base")

async def record_audio(duration: int = 10, sample_rate: int = 16000):
    """Record audio from the microphone."""
    print("Hi im listening..")
    audio_data = sd.rec(int(duration * sample_rate), samplerate=sample_rate, channels=1, dtype='float32')
    sd.wait()
    print("gotcha.")
    return np.squeeze(audio_data)

async def transcribe_audio(audio, sample_rate: int = 16000):
    """Transcribe audio using Whisper."""
    print("Transcribing now")
    audio = audio.astype(np.float32)
    result = whisper_model.transcribe(audio, fp16=False, language="en")
    print("almost there")
    return result['text'].strip()

async def generate_response(text: str):
    """Generate a response using the Mistral API."""
    print("Generating response with Mistral...")
    try:
        messages = [{"role": "user", "content": text}]
        response = mistral_client.chat(
            model="mistral-tiny",
            messages=messages
        )
        reply = response.choices[0].message.content
        print("Response generated.")
        return reply
    except Exception as e:
        print(f"Error generating response: {e}")
        return "I'm sorry, I couldn't generate a response."

def synthesize_speech(text: str):
    """Synthesize speech using Azure Cognitive Services."""
    print("Synthesizing speech")
    
    # Basic speech configuration
    speech_config = speechsdk.SpeechConfig(
        subscription=azure_speech_key, 
        region=azure_service_region
    )
    
    # Create the base synthesizer
    synthesizer = speechsdk.SpeechSynthesizer(
        speech_config=speech_config
    )
    
    try:
        # Simple synchronous synthesis
        result = synthesizer.speak_text_async(text).get()
        
        # Check the result
        if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
            print("Speech synthesis succeeded")
        else:
            print(f"Speech synthesis failed: {result.reason}")
            
    except Exception as ex:
        print(f"Speech synthesis failed with error: {str(ex)}")

async def main():
    try:
        audio_data = await record_audio()
        transcription = await transcribe_audio(audio_data)
        print(f"Transcribed Text: {transcription}")
        
        response = await generate_response(transcription)
        print(f"Generated Response: {response}")
        
        # Call the synchronous speech synthesis
        synthesize_speech(response)
        
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    asyncio.run(main())
```

## Features

1. **Audio Recording**: Captures real-time audio using `sounddevice`.
2. **Transcription**: Uses OpenAI Whisper to transcribe recorded speech.
3. **AI Response Generation**: Calls the Mistral API to generate text responses.
4. **Text-to-Speech**: Uses Azure Cognitive Services to convert responses into speech.

## Notes

- Ensure you have valid API keys for Mistral and Azure before running the script.
- Whisper might require additional dependencies (`ffmpeg`).
- The script runs asynchronously to handle audio recording and processing efficiently.


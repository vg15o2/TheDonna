# TheDonna
interactive assistant

This code implements a voice-based chatbot using the following components:

**1.Audio Recording:**
  Uses the sounddevice library to record audio from the microphone.
  The recorded audio is processed as a NumPy array.
**2.Speech-to-Text (ASR):**
  Employs the Whisper model (base version) to transcribe the recorded audio into text.
  The transcription process converts the raw audio input into a string of text.
**3.Text-to-Response:**
  Utilizes the Mistral API (via MistralClient) to generate a conversational response based on the transcribed text.
  Messages are sent in a chat-like format to the API, which responds with generated content.
**4.Text-to-Speech (TTS):**
  Integrates Azure Cognitive Services for speech synthesis.
  Converts the text response into speech and plays it back to the user.
**5.Asynchronous Workflow:**
  The entire process is managed asynchronously using Python's asyncio, ensuring non-blocking operations for recording, transcription, and generating responses.
**6.API Keys and Configuration:**
  Contains API keys for Mistral and Azure Cognitive Services, and specifies the Azure region.
**7.Execution:**
  The main function orchestrates the workflow:
    Records audio.
    Transcribes the recorded audio into text.
    Generates a response based on the text input.
    Synthesizes and plays back the response.
**8.Error Handling:**
 Includes basic error handling for response generation and speech synthesis to manage exceptions during runtime.

**Use Case:**
This program facilitates an interactive voice chatbot that listens to the user, processes the input, generates a contextually relevant reply, and delivers the reply as synthesized speech.

# Gemini Clone App

A simple Gemini Clone app built using HTML, CSS, JavaScript, React.js, and Vite that fetches AI-generated responses via API calls.

## Features

- Fetch AI-generated responses via API
- User-friendly chat interface
- Responsive design for seamless experience on all devices
- Dynamic UI using React.js and Vite for fast performance

## Technologies Used

- HTML
- CSS
- JavaScript
- React.js
- Vite
- API Fetching (e.g., Gemini API, OpenAI API, etc.)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gemini-clone.git
   ```
2. Navigate to the project folder:
   ```bash
   cd gemini-clone
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Enter your query in the chatbox.
2. Click the "Send" button.
3. View AI-generated responses.

## API Key Setup

1. Sign up for an API key from your preferred AI service (e.g., Gemini API, OpenAI API).
2. Add your API key in `gemini.js`:
   ```
   const apiKey=your_api_key_here
   ```
3. Install 
   ```bash
   npm install @google/generative-ai
   ```
4. Use the key in:
   ```JavaScript
   const genAI = new GoogleGenerativeAI(apiKey);
   ```

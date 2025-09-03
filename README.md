# VS Code AI Comment Generator

A Visual Studio Code extension that generates concise, one-line comments for selected code using OpenAI’s GPT models. Perfect for developers who want to quickly document their code or get AI-assisted suggestions.

---

## Features

- Highlight any code in the editor and generate a clear, concise comment above it.
- Powered by OpenAI GPT-4o-mini.
- Works with multiple programming languages.
- Simple integration with VS Code commands.

---

## Installation

1. Clone this repository:

```bash`
git clone https://github.com/leilaBellama/vscode-extension-ai-comments.git
cd vscode-extension-ai-comments

2. Install dependencies:

npm install

3. Set your OpenAI API key:

macOS/Linux:

export OPENAI_API_KEY="your_openai_api_key_here"


Windows PowerShell:

$env:OPENAI_API_KEY="your_openai_api_key_here"

4. Launch the extension development host in VS Code:

Press F5 to open a new VS Code window with the extension loaded.

---

## Usage:

1. Open a code file in VS Code.

2. Highlight a block of code.

3. Open the Command Palette (Ctrl+Shift+P / Cmd+Shift+P) and select:

AI: Generate Code Comment

4. The AI-generated comment will be inserted above your selected code.

---

## Technologies Used

Languages: TypeScript, JavaScript

Tools: VS Code API, Node.js, npm

APIs: OpenAI GPT-4o-mini

import * as vscode from "vscode";
import OpenAI from "openai";
// import * as dotenv from "dotenv";

// // Load environment variables from .env
// dotenv.config();

// Now process.env.OPENAI_API_KEY is available
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY_comments,
});


// ✅ Helper function to fetch AI-generated comment
async function getAIComment(code: string): Promise<string> {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that writes concise, clear code comments.",
        },
        {
          role: "user",
          content: `Write a one-line comment for the following code:\n${code}`,
        },
      ],
    });

    return response.choices[0].message?.content?.trim() || "No comment generated.";
  } catch (error: any) {
    vscode.window.showErrorMessage("Error fetching AI comment: " + error.message);
    return "Error generating comment.";
  }
}

// ✅ Main entry point for the extension
export function activate(context: vscode.ExtensionContext) {
  console.log("AI Comment Generator extension is now active!");

  // Register a new command
  let disposable = vscode.commands.registerCommand(
    "extension.generateComment",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showInformationMessage("No active editor window.");
        return;
      }

      const selection = editor.selection;
      const code = editor.document.getText(selection);

      if (code.trim().length === 0) {
        vscode.window.showWarningMessage("Please select some code first.");
        return;
      }

      // Fetch AI-generated comment
      const comment = await getAIComment(code);

      // Insert the comment above the selected code
      editor.edit((editBuilder) => {
        editBuilder.insert(selection.start, `// ${comment}\n`);
      });
    }
  );

  // Push command to extension subscriptions
  context.subscriptions.push(disposable);
}

// ✅ Cleanup when extension is deactivated
export function deactivate() {}

import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
	console.log("Congratulations, Rusted Warfare Support is now active!");

	const disposable = vscode.commands.registerCommand(
		"extension.helloWorld",
		() => {
			vscode.window.showInformationMessage(
				"Hello World from Rusted Warfare Support!",
			);
		},
	);

	context.subscriptions.push(disposable);
}

export function deactivate() {}

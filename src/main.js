import * as vscode from 'vscode';

/**
 * @param {import('vscode').ExtensionContext} context
 */
export function activate(context) {
	console.log('Congratulations, Rusted Warfare Support is now active!');

	const disposable = vscode.commands.registerCommand(
		'extension.helloWorld',
		() => {
			vscode.window.showInformationMessage(
				'Hello World from Rusted Warfare Support!',
			);
		},
	);

	context.subscriptions.push(disposable);
}

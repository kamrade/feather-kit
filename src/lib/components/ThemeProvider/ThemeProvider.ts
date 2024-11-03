export type CSSVariables = Record<string, (string | number)>;
export type CSSVariableBinding = Record<string, string>

// Converts ts Record to string, to use as style in the HTMLElement
export const getStyleVariablesString = (styles: CSSVariables, binding: CSSVariableBinding, needToAddPx: string[]) => {

	let output = '';

	for (const [prop, value] of Object.entries(styles)) {
		Object.keys(binding).map((p) => {
			if (prop === p) {
				output += `--${binding[p]}: `
				output += typeof value === 'number' ? value.toString() : value;
				output += needToAddPx.includes(binding[p]) ? 'px;' : ';';
			}
		});
		output += `--${prop}: `;
		output += typeof value === 'number' ? value.toString() : value;
		output += needToAddPx.includes(prop) ? 'px;' : ';';
	}
	return output;
}

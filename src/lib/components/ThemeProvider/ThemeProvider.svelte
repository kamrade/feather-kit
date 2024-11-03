<script lang="ts">
	import { getStyleVariablesString, type CSSVariables, type CSSVariableBinding } from '~lib';
	export let styleVariables: CSSVariables;
	export let bindings: CSSVariableBinding = {};
	export let needToAddPx: string[] = [];
</script>

<div style={ getStyleVariablesString(styleVariables, bindings, needToAddPx) }>
	<slot/>
</div>

<script lang="ts">
	import { ThemeProvider, defaultCSSVariables } from '~lib';
	import MenuShowcase from './sections/MenuShowcase.svelte';
</script>

<ThemeProvider styleVariables={defaultCSSVariables}>
	<h1>Welcome to your library project</h1>
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

	<MenuShowcase/>
</ThemeProvider>

<style>
  :global {
		html, body {
      font-family: sans-serif;
    }

    :root {
      --textColorBase100: #2a2a2c;
			--textColorSecondary100: #727274;
			--textColorMuted100: #afafaf;
			--textColorPrimary100: #4C90DF;
      --textColorPrimary200: #3a77be;
      --textColorPrimary300: #2a64a8;
			--textColorInverted100: #ffffff;

      --bgControl100: #ffffff;
      --bgControl200: #f5f5f5;
      --bgControl300: #e9e9e9;
      --bgControl400: #e1e1e1;

			--lineColorBase100: #e5e5e5;
    }
	}



</style>

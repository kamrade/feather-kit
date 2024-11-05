<script lang="ts">
	import { MenuSection } from '~lib';
	import { menuOptions, menuOptionsHandlers } from './menu-data';
	import type { SvelteComponent } from 'svelte';

	let childRef: SvelteComponent;

	const handleClickOnOption = () => {
		childRef?.hideDropdown?.();
	}

</script>

<MenuSection  label="UIKit. Opens by click" {menuOptions} bind:this={childRef}>
	<span slot="control" style="color: blue">
		Custom toggler. Opens by click
	</span>

	<span slot="list">
		{#each menuOptions as menuLink}
			{#if !menuLink.link && !menuLink.handler}
				<h3 class="sub-title">{menuLink.label}</h3>
			{:else}
				<a href={menuLink.link} style="color: red" on:click={handleClickOnOption}>
					<div class:option-wrapper={menuOptions.length > 1} >
						{menuLink.label}
					</div>
				</a>
			{/if}
		{/each}
	</span>
</MenuSection>


<MenuSection  label="UIKit. Opens by click" menuOptions={menuOptionsHandlers} />

<MenuSection label="UIKit. Opens by hover" {menuOptions} showOnHover={true} />



<script lang="ts">

	import type { IMenuItem } from '~lib';

	export let menuOption: IMenuItem
	export let menuOptionClick: () => void;

	const handleOptionClick = (handler?: () => void) => {
		setTimeout( () => menuOptionClick?.());
		handler?.();
	}

</script>

{#if !menuOption.link && !menuOption.handler}
	<div class="menu-option-label">
		<h3 class="sub-title">{menuOption.label}</h3>
	</div>
{:else if !menuOption.handler && menuOption.link}
	<a href={menuOption.link} on:mouseup={() => handleOptionClick(menuOption.handler)}>
		<div class="menu-option">
			{menuOption.label}
		</div>
	</a>
{:else if menuOption.handler}
	<div class="menu-option" on:mouseup={() => handleOptionClick(menuOption.handler)} role="menuitem" tabindex="-1">
		{menuOption.label}
	</div>
{/if}

<style lang="scss">

	.menu-option-label {
    padding: .5rem .5rem;
		.sub-title {
      text-transform: uppercase;
			letter-spacing: 1px;
			color: var(--textColorSecondary100);
      font-size: 12px;
      padding: 0;
      margin: 0;
      font-weight: 400;
		}
	}

	.menu-option {
    cursor: pointer;
		padding: .25rem .5rem;
		border-radius: var(--borderRadiusBase80);
		&:hover {
			background: var(--bgControl200);
		}
	}

</style>

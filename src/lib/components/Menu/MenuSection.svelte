<script lang="ts">
	import { Dropdown, type IMenuItem } from "~lib";
	import MenuToggler from './MenuToggler.svelte';
	import MenuOption from './MenuOption.svelte';

	export let label = "Menu Item";
	export let menuOptions: (IMenuItem)[];
	export let showOnHover = false;

	export function hideDropdown() {
		if (isMenuVisible) {
			hideMenu();
		}
	}

	let menuWrapperElement: HTMLDivElement | null;
	let menuDropdownElement: HTMLDivElement | null;
	let menuInner: HTMLDivElement;
	let isMenuVisible = false;
	let contentHeight = 0;

	$: contentHeight = menuInner?.getBoundingClientRect().height || 0;

	const showMenu = () => (isMenuVisible = true);
	const hideMenu = () => (isMenuVisible = false);

	const handleMouseEnter = () => {
		if (showOnHover) {
			if (!isMenuVisible) {
				showMenu();
			}
		}
	};

	const handleTogglerClick = () => {
		if (!showOnHover) {
			if (!isMenuVisible) {
				showMenu();
			} else {
				hideMenu();
			}
		}
	};

	// this mouseleave will probably never trigger. So just in case.
	const handleMouseLeaveMenuWrapper = (e: MouseEvent) => {
		if (showOnHover) {
			let contains = menuDropdownElement?.contains(e.relatedTarget as HTMLElement);
			let equal = menuDropdownElement === e.relatedTarget as HTMLElement;
			if (!contains && !equal) {
				hideMenu();
			}
		}
	};
</script>

<div
	role="menu"
	tabindex="-1"
	class="dropdown-toggler"
	class:dropdown-toggler-hover={isMenuVisible}
	bind:this={menuWrapperElement}
	on:mouseleave={handleMouseLeaveMenuWrapper}
>

		<span
			role="button"
			tabindex="-1"
			on:mouseenter={handleMouseEnter}
			on:mouseup={handleTogglerClick}
		>
			{#if !$$slots.control}
				<MenuToggler>
					{label}
				</MenuToggler>
			{:else}
				<slot name="control" />
			{/if}
		</span>


	<Dropdown
		bind:menuElement={menuDropdownElement}
		parentElement={menuWrapperElement}

		appearanceOnHover={showOnHover}
		isVisible={isMenuVisible}
		hideMenu={hideMenu}
		contentHeight={contentHeight}
		minWidth={300}
	>
		<div class="menu" bind:this={menuInner}>

			{#if !$$slots.list}
				{#each menuOptions as menuOption}
					<MenuOption {menuOption} menuOptionClick={hideMenu} />
				{/each}
			{:else}
				<slot name="list" />
			{/if}

		</div>
	</Dropdown>
</div>

<style lang="scss">
  .dropdown-toggler {
    padding: 0;
    margin: 0;
    display: inline-flex;
  }

  .menu {
    border: 1px solid var(--lineColorBase100);
    padding: .25rem;
    background-color: var(--bgControl100);
		border-radius: var(--borderRadiusBase100);

    .option-wrapper {
      padding: 0.5rem 0;
      &:first-child {
        padding: 0 0 0.5rem 0;
      }
      &:last-child {
        padding: 0.5rem 0 0 0;
      }
    }
  }

</style>

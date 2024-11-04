<script lang="ts">
	import { Dropdown, type IMenuItem } from "~lib";

	export let label = "Menu Item";
	export let menuLinks: (IMenuItem | string)[];

	let menuWrapperElement: HTMLDivElement
	let menuDropdownElement: HTMLDivElement;
	let menu: HTMLDivElement;
	let isMenuVisible = false;
	let contentHeight = 0;

	$: contentHeight = menu?.getBoundingClientRect().height || 0;

	const showMenu = () => (isMenuVisible = true);
	const hideMenu = () => (isMenuVisible = false);

	const mouseEnterHandler = () => {
		if (!isMenuVisible) {
			showMenu();
		}
	};

	const mouseLeaveHoverHandler = (e: MouseEvent) => {
		let contains = menuDropdownElement?.contains(e.relatedTarget as Node);
		let equal = menuDropdownElement === e.relatedTarget;
		if (!contains && !equal) {
			hideMenu();
		}
	};
</script>

<div
	role="menu"
	tabindex="-1"
	class="dropdown-toggler"
	class:dropdown-toggler-hover={isMenuVisible}
	bind:this={menuWrapperElement}
	on:mouseleave={mouseLeaveHoverHandler}
>
	<span
		role="button"
		tabindex="-1"
		on:mouseenter={mouseEnterHandler}
		class="dropdown-toggler-text"
	>
		{label}
	</span>
	<Dropdown
		bind:menuElement={menuDropdownElement}
		appearanceOnHover={true}
		isVisible={isMenuVisible}
		hideMenu={hideMenu}
		parentElement={menuWrapperElement}
		contentHeight={contentHeight}
		minWidth={300}
	>
		<div class="menu" bind:this={menu}>
			{#each menuLinks as menuLink}
				{#if typeof menuLink === "string"}
					<h3 class="sub-title">{menuLink}</h3>
				{:else}
					<a href={menuLink.link} on:click={hideMenu}>
						<div class={menuLinks.length > 1 ? "option-wrapper" : ""}  >
							{menuLink.label}
						</div>
					</a>
				{/if}
			{/each}
		</div>
	</Dropdown>
</div>

<style lang="scss">
  .dropdown-toggler {
    color: var(--textColorSecondary100);
    cursor: pointer;
    padding: 0;
    margin: 0;
    display: inline-flex;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: var(--textColorBase100);
    }

    &.dropdown-toggler-hover {
      color: var(--textColorBase100);
    }

    .dropdown-toggler-text {
      padding: 0.5rem;
    }
  }

  .sub-title {
    padding: 0;
    margin: 0 0 0.5rem 0;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
    color: var(--textColorMuted100);
  }

  .menu {
    border: 1px solid var(--lineColorBase100);
    padding: 1rem;
    background-color: var(--bgControl100);

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

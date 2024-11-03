<script lang="ts">
	import { Dropdown, Link, type IMenuItem } from "~lib";

	export let label = "Menu Item";
	export let menuLinks: (IMenuItem | string)[];

	let menuWrapperElementHover: HTMLDivElement;
	let isHoverMenuVisible = false;
	let menuHoverElement: HTMLDivElement;
	let menu: HTMLDivElement;
	let contentHeight = 0;

	$: contentHeight = menu?.getBoundingClientRect().height || 0;

	const showHoverMenu = () => (isHoverMenuVisible = true);
	const hideHoverMenu = () => (isHoverMenuVisible = false);

	const mouseEnterHandler = () => {
		if (!isHoverMenuVisible) {
			showHoverMenu();
		}
	};

	const mouseLeaveHoverHandler = (e: MouseEvent) => {
		let contains = menuHoverElement?.contains(e.relatedTarget as Node);
		let equal = menuHoverElement === e.relatedTarget;
		if (!contains && !equal) {
			hideHoverMenu();
		}
	};
</script>

<p
	class={`dropdown-toggler ${isHoverMenuVisible ? "dropdown-toggler-hover" : ""}`}
	bind:this={menuWrapperElementHover}
	on:mouseleave={mouseLeaveHoverHandler}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<span on:mouseenter={mouseEnterHandler} class="dropdown-toggler-text">{label}</span>
<Dropdown
	bind:menuElement={menuHoverElement}
	appearanceOnHover={true}
	isVisible={isHoverMenuVisible}
	hideMenu={hideHoverMenu}
	parentElement={menuWrapperElementHover}
	minWidth={300}
	contentHeight={contentHeight}
>
	<div class="menu" bind:this={menu}>
		{#each menuLinks as menuLink}
			{#if typeof menuLink === "string"}
				<h3 class="sub-title">{menuLink}</h3>
			{:else}
				<a href={menuLink.link} on:click={hideHoverMenu}>
					<div class={menuLinks.length > 1 ? "option-wrapper" : ""}  >
						{menuLink.label}
					</div>
				</a>
			{/if}
		{/each}
	</div>
</Dropdown>
</p>

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

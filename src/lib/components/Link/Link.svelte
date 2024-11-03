<script lang="ts">
	export let href: string;
	export let inverted = false;
	export let onClick: (e: MouseEvent) => unknown = () => {};

	import { page } from '$app/stores';
	let currentPath = '';
	let isActive = false;
	$: currentPath = $page.url.pathname;
	$: isActive =
		currentPath === href ||
		(currentPath === '/' && href === '/') ||
		(currentPath !== '/' && href !== '/' && currentPath.includes(href));

	const handleLinkClick = (e: MouseEvent) => {
		onClick?.(e);
	};
</script>

<a
	class={`Link ${inverted ? 'Link-inverted' : ''}
  ${isActive ? 'Link-active' : ''}`}
	{href}
	on:click={handleLinkClick}
>
	<slot />
</a>

<style lang="scss">
  a.Link,
  a:visited.Link,
  a:link.Link {
    text-decoration: none;
    color: var(--textColorPrimary100);
    &:hover {
      text-decoration: none;
      color: var(--textColorPrimary200);
    }
    &.Link-inverted {
      color: var(--textColorInv);

      &:hover {
        color: var(--textColorInvPrimary);
      }
      &.Link-active {
        color: var(--textColorInvPrimary);
      }
    }
    &.Link-active {
      color: var(--textColorInvBase);
    }
  }
</style>

<script lang="ts">
	import { MenuSection } from '~lib';
	import type { IMenuItem } from '~lib';

	let menuLinks: (IMenuItem | string)[] = [
		'UIKit',
		{
			link: '/showcase/dropdowns',
			label: 'Dropdowns'
		}, {
			link: '/showcase/links',
			label: 'Links'
		}, {
			link: '/showcase/checkers',
			label: 'Checkers'
		}, {
			link: '/showcase/text-inputs',
			label: 'Text Inputs'
		}, {
			link: '/showcase/dropdown-with-search',
			label: 'Dropdown with Search'
		}
	]
</script>

<MenuSection label="UIKit" {menuLinks} />

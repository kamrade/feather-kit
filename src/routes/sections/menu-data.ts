import type { IMenuItem } from '~lib';

export const menuLinks: (IMenuItem | string)[] = [
	'UIKit',
	{
		handler: () => console.log('Dropdowns'),
		link: '/showcase/dropdowns',
		label: 'Dropdowns'
	}, {
		link: '/showcase/links',
		label: 'Links'
	}, {
		link: '/showcase/checkers',
		label: 'Checkers'
	}, {
		handler: () => console.log('Text Inputs'),
		link: '/showcase/text-inputs',
		label: 'Text Inputs'
	}, {
		link: '/showcase/dropdown-with-search',
		label: 'Dropdown with Search'
	}
]

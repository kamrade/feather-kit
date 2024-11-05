import type { IMenuItem } from '~lib';

export const menuOptions: (IMenuItem)[] = [{
		label: 'UIKit',
	}, {
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

export const menuOptionsHandlers: (IMenuItem)[] = [{
	label: 'UIKit',
}, {
	handler: () => console.log('Dropdowns'),
	label: 'Dropdowns'
}, {
	handler: () => console.log('Links'),
	label: 'Links'
}, {
	handler: () => console.log('Checkers'),
	label: 'Checkers'
}, {
	handler: () => console.log('Text Inputs'),
	label: 'Text Inputs'
}, {
	handler: () => console.log('Dropdown with Search'),
	label: 'Dropdown with Search'
}
]

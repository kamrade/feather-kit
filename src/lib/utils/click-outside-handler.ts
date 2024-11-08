export const clickOutsideHandler = (event: MouseEvent, className: string, handler: () => void) => {
	if( !((event.target as HTMLElement).closest('.' + className)) ) {
		handler?.();
	}
}

export const clickOutsideObject = (event: MouseEvent, element: (HTMLElement | null), handler: () => void) => {

	const target = event.target as HTMLElement;

	if ( !(element?.contains(target)) || target.nodeName === 'BODY' ) {
		handler?.();
	}
}

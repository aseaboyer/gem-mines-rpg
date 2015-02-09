function Tooltip ( el, t, x, y ) {
	return {
		element: el,
		pos: {
			x: x,
			y: y
		},
		text: t,
		changePosition: function ( x, y ) {
			this.pos.x = x;
			this.pos.y = y;
		},
	};
}
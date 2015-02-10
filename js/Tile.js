function Tile ( grd, x, y, size, color, g, id, special ) {
	var x = x || 0;
	var y = y || 0;
	var special = special || "";
	
	var newTile = document.createElement( "div" );
	newTile.classList.add( 'tile' );
	newTile.style.top = ( y * size ) + "px";
	newTile.style.left = ( x * size ) + "px";
	newTile.dataset.gemColor = color;
	if( special != "" ) {
		newTile.dataset.special = special;
	}
	newTile.dataset.id = id;
	newTile.id = 'tile-' + id;
	newTile.dataset.x = x;
	newTile.dataset.y = y;
	newTile.addEventListener( "mousedown", function( e ){
		if( e.which == 1 ) {
			g.startDrag( this );
		}
	}, false);
	if( special == "finish" ) {
		// Create the tooltip
		var tt = new Tooltip( 'tile-' + id, 
			"This is an end tile. Open paths to guide the hero to the end.",
			( ( y + 1 ) * size ) + "px", ( ( x + 1 ) * size ) + "px" );
		g.tooltips.push( tt ); // add it to the game object
		var ttID = ( g.tooltips.length - 1 ); // apply that ID so we can use it in the hover functions
		
		newTile.addEventListener( "mouseover", function( e ){
			g.showToolTip( ttID );
		}, false);
		newTile.addEventListener( "mouseout", function( e ){
			g.hideToolTip( ttID );
		}, false);
	}
	grd.appendChild( newTile );
	
	//console.log( "Tile #" + id + " created" );
	
	return {
		element: newTile,
		x: x,
		y: y,
		id: id,
		gemColor: color,
		flipTile: function ( newColor ) {
			// apply new color
			this.element.dataset.gemColor = newColor;
			this.gemColor = newColor;
		},
		clearTile: function ( ) {
			var und;
			this.element.dataset.gemColor = und;
			this.gemColor = und;
		},
		selectTile: function ( ) {
			this.element.classList.add( 'active' );
		},
		deselectTile: function ( ) {
			this.element.classList.remove( 'active' );
		},
		addClass: function ( newClass ) {
			this.element.classList.add( newClass );
		},
		removeClass: function ( newClass ) {
			this.element.classList.remove( newClass );
		},
	};
};
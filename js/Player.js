function Player ( grd, size, g ) {
	var x = 0;
	var y = 0;
	
	var playerTile = document.createElement( "div" );
	playerTile.classList.add( 'player' );
	playerTile.style.top = "0px";
	playerTile.style.left = "0px";
	playerTile.dataset.facing = 'south';
	playerTile.id = "player";
	playerTile.dataset.x = x;
	playerTile.dataset.y = y;
	grd.appendChild( playerTile );
	
	// Create the tooltip
	var tt = new Tooltip( 'player', 
		"This is the player. Drag paths from the player to the end gem to finish the level.",
		( size ) + "px", ( size ) + "px" );
	g.tooltips.push( tt ); // add it to the game object
	var ttID = ( g.tooltips.length - 1 ); // apply that ID so we can use it in the hover functions
	
	playerTile.addEventListener( "mouseover", function( e ){
		g.showToolTip( ttID );
	}, false);
	playerTile.addEventListener( "mouseout", function( e ){
		g.hideToolTip( ttID );
	}, false);
	
	return {
		element: playerTile,
		facing: 'south',
		moving: false,
		steps: 0,
		tooltipID: ttID,
		position: {
			x: 0,
			y: 0,
			from: {
				x: 0,
				y: 0
			},
			change: function ( x, y, size ) {
				var playerObj = document.getElementById( "player" );
				
				if( y < this.y ) { // change facing direction, based off previous position
					this.turn( 'north', playerObj );
				} else if( y > this.y ) {
					this.turn( 'south', playerObj );
				} else if( x > this.x ) {
					this.turn( 'east', playerObj );
				} else if( x < this.x ) {
					this.turn( 'west', playerObj );
				}
				
				this.x = x;
				this.y = y;
				
				playerObj.style.top = ( y * size ) + "px";
				playerObj.style.left = ( x * size ) + "px";
				console.log( "Move to: " + ( x * size ) + "px by " + ( y * size ) + "px " + size );
				
				g.tooltips[ ttID ].changePosition( ( ( y + 1 ) * size ) + "px", ( ( x + 1 ) * size ) + "px" );
			},
			turn: function ( dir, playerObj ) {
				this.facing = dir;
				playerObj.dataset.facing = dir;
			},
			update: function ( delta ) {
			
			},
		},
		turn: function ( newDir ) {
			this.facing = newDir;
			this.element.dataset.facing = newDir;
		}
	};
}
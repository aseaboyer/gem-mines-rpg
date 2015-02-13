function Player ( grd, size, g ) {
	var x = 0;
	var y = 0;
	
	var playerTile = document.createElement( "div" );
	playerTile.classList.add( 'player' );
	playerTile.style.left = "0px";
	playerTile.style.top = "0px";
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
		size: size,
		moveSpeed: 0.1,
		steps: 0,
		tooltipID: ttID,
		position: {
			x: 0,
			y: 0,
			actual: {
				x: 0,
				y: 0,
				change: function ( obj, x, y ) {
					this.x = x;
					this.y = y;
					
					var obj = document.getElementById( "player" );
					//console.log( obj );
					obj.element.style.left = x + "px";
					obj.element.style.top = y + "px";
				},
			},
			from: {
				x: 0,
				y: 0
			},
			set: function ( x, y ) {
				this.x = x;
				this.y = y;
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
				//console.log( "Move to: " + ( x * size ) + "px by " + ( y * size ) + "px " + size );
				
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
		},
		findDirection: function ( newDest ) {
		/*	console.log( "Compare:" );
			console.log( this.position );
			console.log( "vs" );
			console.log( newDest );*/
		
			if( newDest.x == this.position.x && newDest.y + 1 == this.position.y ) {
				return "north";
			}
			if( newDest.x - 1 == this.position.x && newDest.y == this.position.y ) {
				return "east";
			}
		/*	if( newDest.x == this.position.x && newDest.y - 1 == this.position.y ) {
				return "south";
			}*/ // default to south
			if( newDest.x + 1 == this.position.x && newDest.y == this.position.y ) {
				return "west";
			}
			return "south"; //default to south?
		},
		move: function ( dest, delta ) {
			var position = this.position.actual;
			
			var newPos = this.lerp( dest, delta );
			
			var diff = {
				x: Math.abs( newPos.x - dest.x ),
				y: Math.abs( newPos.y - dest.y ),
			};
			//console.log( diff );
			if( diff.x < 2 && diff.y < 2 ) {
				newPos = dest;
				
				// @andymakesthings -  need to update tile pos
			}
			
			this.position.actual.x = newPos.x;
			this.position.actual.y = newPos.y;
			var obj = document.getElementById( "player" );
			obj.style.left = newPos.x + "px";
			obj.style.top = newPos.y + "px";
			//console.log( obj.style.left + " should be " + x + "px" );
		},
		lerp: function( b, t ) {
			return {
				x: this.position.actual.x + t * (b.x - this.position.actual.x),
				y: this.position.actual.y + t * (b.y - this.position.actual.y),
			};
		},
	};
}
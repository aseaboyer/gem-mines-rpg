function Player ( grd, size, color, g, id ) {
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
	
	//console.log( "PLAYER created" );
	
	return {
		element: playerTile,
		facing: 'south',
		moving: false,
		steps: 0,
		position: {
			x: 0,
			y: 0,
			from: {
				x: 0,
				y: 0
			},
			change: function ( x, y, size ) {
				this.x = x;
				this.y = y;
				
				var playerObj = document.getElementById( "player" );
				playerObj.style.top = ( y * size ) + "px";
				playerObj.style.left = ( x * size ) + "px";
				console.log( "Move to: " + ( x * size ) + "px by " + ( y * size ) + "px " + size );
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
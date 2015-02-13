function Time ( ) {
	return {
		current: 0,
		last: 0,
		delta: 0,
		init: function ( ) {
			var currentTime = Date.now();
			this.last = currentTime;
			this.current = currentTime;
			this.delta = 0;
		},
		update: function ( ) {
			this.last = this.current;
			this.current = Date.now();
			this.delta = (this.current - this.last) * 0.01; // get the ms
			//console.log( "Time: " + this.delta );
		}
	}
}
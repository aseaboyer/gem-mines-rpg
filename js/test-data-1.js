var levelData = {
	dimmensions: {
		"x": 4,
		"y": 3,
	},
	playerStart: {
		"x": 0,
		"y": 0,
		"facing": "south"
	},
	colors: [
		'purple', 'red', 'yellow',
	],
	tiles: [
		{
			"x": 0,
			"y": 0,
			"type": "playerStart",
			"edges": {
				"n": true,
				"e": false,
				"s": false,
				"w": true,
			}
		},
		{
			"x": 1,
			"y": 0,
			"type": "randomGem",
			"edges": {
				"n": true,
				"e": false,
				"s": false,
				"w": false,
			}
		},
		{
			"x": 2,
			"y": 0,
			"type": "randomGem",
			"edges": {
				"n": true,
				"e": false,
				"s": false,
				"w": false,
			}
		},
		{
			"x": 3,
			"y": 0,
			"type": "randomGem",
			"edges": {
				"n": true,
				"e": false,
				"s": false,
				"w": false,
			}
		},
		{
			"x": 4,
			"y": 0,
			"type": "randomGem",
			"edges": {
				"n": true,
				"e": true,
				"s": false,
				"w": false,
			}
		},
		
		{
			"x": 0,
			"y": 1,
			"type": "randomGem",
			"edges": {
				"n": false,
				"e": false,
				"s": false,
				"w": true,
			}
		},
		{
			"x": 1,
			"y": 1,
			"type": "randomGem",
			"edges": {
				"n": false,
				"e": false,
				"s": false,
				"w": false,
			}
		},
		{
			"x": 2,
			"y": 1,
			"type": "randomGem",
			"edges": {
				"n": false,
				"e": false,
				"s": false,
				"w": false,
			}
		},
		{
			"x": 3,
			"y": 1,
			"type": "randomGem",
			"edges": {
				"n": false,
				"e": false,
				"s": false,
				"w": false,
			}
		},
		{
			"x": 4,
			"y": 1,
			"type": "randomGem",
			"edges": {
				"n": false,
				"e": true,
				"s": false,
				"w": false,
			}
		},
		
		{
			"x": 0,
			"y": 2,
			"type": "randomGem",
			"edges": {
				"n": false,
				"e": false,
				"s": true,
				"w": true,
			}
		},
		{
			"x": 1,
			"y": 2,
			"type": "randomGem",
			"edges": {
				"n": false,
				"e": false,
				"s": true,
				"w": false,
			}
		},
		{
			"x": 2,
			"y": 2,
			"type": "randomGem",
			"edges": {
				"n": false,
				"e": false,
				"s": true,
				"w": false,
			}
		},
		{
			"x": 3,
			"y": 2,
			"type": "randomGem",
			"edges": {
				"n": false,
				"e": false,
				"s": true,
				"w": false,
			}
		},
		{
			"x": 4,
			"y": 2,
			"type": "playerEnd",
			"edges": {
				"n": false,
				"e": true,
				"s": true,
				"w": false,
			}
		},
	]
};
class Circle {
	constructor(x, y, dx, dy, radius, ctx, canvas, growSpeed, maxRadius) {
		this.x 			= x			// X coordinate
		this.y 			= y			// Y coordinate
		this.dx 		= dx		// X velocity
		this.dy 		= dy		// Y velocity
		this.radius 	= radius	// Radius
		this.minRadius 	= radius	// Minimum radius, the size it has been created with
		this.c			= ctx
		this.canvas 	= canvas
		this.growSpeed	= growSpeed
		this.maxRadius  = maxRadius // Maximum radius
		this.color  	= colorArray[Math.floor(Math.random() * colorArray.length)]
	}

	// Draws 
	draw = () => {
		this.c.beginPath()
		this.c.arc(this.x, this.y, this.radius, Math.PI * 2, false)
		this.c.fillStyle = this.color
		this.c.stroke()
	}

	// Changes circles place by its velocity
	update = () => {
		// Change x velocity of circle if it hits x edge of the canvas
		if(this.x+this.radius > this.canvas.width || this.x-this.radius < 0) {
			this.dx = -this.dx
		}
		// Change y velocity of circle if it hits y edge of the canvas
		if(this.y+this.radius > this.canvas.height || this.y-this.radius < 0) {
			this.dy = -this.dy
		}
		// Velocity "logic"
		this.x += this.dx
		this.y += this.dy
		

		//
		//
		// MOUSE TRACKING DOESNT WORK IF
		// CIRCLE CALSS IS IN ANOTHER FILE WITH MOUSE EVENT
		//
		// If circle is closer than 50 pixels of mouse then
		// grow its radius by 1 pixel to max of 100
		// if(this.mouse.x - this.x < 50 && this.mouse.x - this.x > -50 && 
		// 	this.mouse.y - this.y < 50 && this.mouse.y - this.y > -50) {
		// 	// If radius size is not going to be more than maxRadius,
		// 	// then add growSpeed value to radius.
		// 	// Else set radius to maxRadius
		// 	if(this.radius+this.growSpeed < this.maxRadius) {
		// 		this.radius += this.growSpeed
		// 	} else {
		// 		this.radius = this.maxRadius
		// 	}
		// } 
		// If circle goes farther than 50 pixels from mouse
		// then shrink it by 1 pixel back to 30 pixel radius
		// else {
		// 	// If radius size is not going to be less than minRadius,
		// 	// then reduse radius by growSpeed value.
		// 	// Else set radius to be the original radius
		// 	if(this.radius-this.growSpeed > this.minRadius) {
		// 		this.radius -= this.growSpeed
		// 	} else {
		// 		this.radius = this.minRadius
		// 	}
		// }
		
		this.draw()
	}
}

// Color array for circles
var colorArray = [
	'#9C4AFF',
	'#8C43E6',
	'#7638C2',
	'#5E2C99',
	'#492378'
]

export default Circle
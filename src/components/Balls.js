import React, { useState, useEffect, useRef } from 'react'
 import Circle from './Circle'
import '../css/Balls.css'

const Balls = () => {
	const canvasRef 					= useRef(null)
	const [ canvasSize, setCanvasSize ] = useState({ width: "100%", height: "100%"})
	const [ mouse, setMouse ]			= useState({x: 0, y: 0})
	
	
	// Array for circles
	let circles = []
	// Settings/conf for circles
	let circlesAmount = 600 	// How many circles will be printed
	let maxRadius 	  = 100 	// Max radius of a circle
	let minRadius 	  = 15 		// Min radius of a circle
	let size 		  = 10 		// 
	let speed 		  = 2 		// Speed of balls	
	let growSpeed     =	5 		// How fast circles change size close mouse

	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')
		// Create 100 circles with random velocities and coordinates
		for(let i = 0; i < circlesAmount; i++) {
			let rndSize = Math.random() * size + minRadius
			let x 		= Math.random() * (canvas.width-rndSize*2)+rndSize
			let y 		= Math.random() * (canvas.height-rndSize*2)+rndSize
			let dx 		= (Math.random() - 0.5) * speed
			let dy 		= (Math.random() - 0.5) * speed

			circles.push(new Circle(x, y, dx, dy, rndSize, ctx, canvas, growSpeed, maxRadius))
		}


		const animate = () => {
			requestAnimationFrame(animate)
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			for(var i = 0; i < circles.length; i++) {
				circles[i].update()
			}
		}
		animate()
	}, [])

	// Handles mouse movement on canvas
	const handleMouseMove = (e) => {
		setMouse({x: e.clientX, y: e.clientY})
	}

	return(
		<canvas
			ref={canvasRef}
			width={window.innerWidth}
			height={window.innerHeight}
			onMouseMove={handleMouseMove}
		></canvas>
	)
}
export default Balls
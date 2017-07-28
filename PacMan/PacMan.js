			var pacmanCentralAngle = 1/6			
			var fps=60
			var pacmanRadius = 20
			var c = document.getElementById("PacMan");
			var ctx = c.getContext("2d");
			var canvasWidth = c.width;
			var canvasHeight = c.height;
			var pacmanX=canvasWidth/2
			var pacmanY=canvasHeight/2
			setInterval(function() {
				draw()
				move() 
			},1000/fps);
			function draw() {
			ctx.beginPath();
			ctx.arc(pacmanX,pacmanY, pacmanRadius, Math.PI*pacmanCentralAngle, Math.PI*pacmanCentralAngle*-1)
			ctx.lineTo(pacmanX, pacmanY)
			ctx.closePath() 
			ctx.fillStyle = "Yellow";
			ctx.fill()}
			function move(){}
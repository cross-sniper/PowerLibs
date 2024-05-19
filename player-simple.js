load("raylib")
// calls itself uppon start, so add this after every other lib
// you want to have loaded
const Player = new function(){
	this.x = 0
	this.y = 0
	this.speed = 200
	this.width = 20
	this.height = 20
	// eighter use a global blue, or the representation of it
	// i'm avoiding hard coding this directly, so you can customize BLUE to
	// whatever you want, be it a sligtly discolored one, or a full BLUE one
	// - cross-sniper
	this.color = BLUE || {r:0,g:0,b:255,a:255}
	this.move = function(dt){
		// dt - short for Delta Time, time between frames,
		// if you want consistant movement across all framerate/fps values
		// use them(call raylib.GetFrameTime() to get the Delta Time)
		// - cross-sniper
		if(raylib.IsKeyDown(raylib.KEY_W)){
			this.y -= this.speed * dt
		}
		if(raylib.IsKeyDown(raylib.KEY_S)){
			this.y += this.speed * dt
		}
		if(raylib.IsKeyDown(raylib.KEY_A)){
			this.x -= this.speed * dt
		}
		if(raylib.IsKeyDown(raylib.KEY_D)){
			this.x += this.speed * dt
		}
	}
	this.draw = function(){
		raylib.DrawRectangle(this.x,this.y,this.height,this.width,this.color)
	}
    this.getCollisionRect = function(){
        // Returns the collision rectangle for the player
        return {
            x1: this.x,
            y1: this.y,
            x2: this.width,
            y2: this.height
        };
    };
}()

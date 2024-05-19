load("raylib")

// this allows you to interact with the camera
// you should be able to call
// raylib.EndCam()
// raylib.BeginCam()
// after calling camControler.setup({})
// but before calling raylib.BeginCam(),
// be sure to call setTarget(player),
// if you want to focus on your player object, if you have one
// - cross-sniper
const camControler = {
	setup: function(attrs){
		cameraVars = {
		    offsetX: attrs.offsetX||0,
		    offsetY: attrs.offsetY||0,
		    targetX: attrs.targetX||0,
		    targetY: attrs.targetY||0,
		    rotation: attrs.rotation||0,
		    zoom: attrs.zoom || 1
		}

		// Initialize the camera
		raylib.initCamera(cameraVars);
	},
	setTarget: function(target){
		winSize = raylib.GetScreenSize()
	    raylib.updateCameraOffset(
	    	{
	    		x:winSize.width / 2,
	    		y:winSize.height / 2,
	    	}
	    )
	    raylib.updateCameraTarget(
	    	{
	    		x:target.x,
	    		y:target.y,
	    	}
	    );
	}
}

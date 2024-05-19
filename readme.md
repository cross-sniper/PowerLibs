# PowerLibs
PowerLibs is a collection of game-specific libs and drop-in javascript code for
[`mix`](https://github.com/cross-sniper/mix)

## attention
some modules/js "bundles" may require other libs to be compiled along with mix,
e.g:

player-simple.js requires you to have raylib(~/.mix/libs/raylib.so) allready compiled,
as it loads it on the first line
`load("raylib")`

## included

- `colors.js`
-- a list of colors you must likely will use
-- add or remove them as you see fit
-- inclusion: `require("colors.js")`

- `player-simple.js`
-- a simple player character implementation, good if you dont know how to make one
-- you can customize it to your heart's content
-- inclusion: `require("player-simple.js")`

- `camera-controler.js`
-- a simple camera controler, allows you to setup and use the camera easily
-- makes the camera usefull for:
-- `raylib.EndCam()`
-- `raylib.BeginCam()`
-- inclusion: `require("camera-controler.js")`
-- functions:
* setup
-- sets up the camera
- args:
```javascript
{// anything after the "||" is a default value
    offsetX: <value>||0,
    offsetY: <value>||0,
    targetX: <value>||0,
    targetY: <value>||0,
    rotation: <value>||0,
    zoom: <value> || 1
}
```

* setTarget
-- makes the camera target a specific thing
- args:
```json
{
	x:<value>,
	y:<value>
}
```


## how to add them
in a `main.js` file(or any file for that matter), just have it like:

```javascript
require("<name>") // name must contain the .js if valid
// to access them, you need to know what the js file defined, unlike libs
// which usualy have them set as a part of the module/lib's name
// e.g:
/*load("file")
e = file.read("example.txt")
*/
```

## what load and require have in different
- load looks for the file in the following directories:
-- ~/.mix/libs
-- ./libs
-- ./ # current directory

imagine you want to load the file api, like before
```javascript
load("file")
```
it looks for a `file.so` on the directories mentioned earlier, when it finds it,
it looks for a `dukopen_file` function, and calls it

require looks for the file with the exact name, attempts to read the text it has,
if it success on that, it evaluates it

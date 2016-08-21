# Photoshop-Point-Position
A Script that modifies the content of a Text Layer into its position in cm on the canvas.
Source code:
<code>
// Position Script For PS CS6 /n
// Remember current unit settings and then set units to Centimeters
// the value expected by this script
var originalUnit = preferences.rulerUnits
preferences.rulerUnits = Units.CM
//Take the active document
var docRef = app.activeDocument
//Take the active layer
var artLayerRef = docRef.activeLayer
artLayerRef.kind = LayerKind.TEXT
// Set the contents of the text layer to the position of the origin of the layer.
var textItemRef = artLayerRef.textItem
textItemRef.contents = Math.floor(textItemRef.position[0] * 100) / 100 + " " + Math.floor(textItemRef.position[1] * 100) / 100
// Release references
docRef = null
artLayerRef = null
textItemRef = null
// Restore original ruler unit setting
app.preferences.rulerUnits = originalUnit
</code>
Steps to make it work in Adobe Photoshop CS6:
  1. Copy the Source Code into a txt file.
  2. Save file as .jsx
  3. Put in folder: Adobe Photoshop CS6 (64 Bit)\Presets\Scripts
  4. In Photoshop press File->Scripts->Browse
  5. Select your script from the folder
  
Bonus point: For easyer use make a Action to access it with a keybind.

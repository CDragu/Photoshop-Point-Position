// Position Script For PS CS6
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

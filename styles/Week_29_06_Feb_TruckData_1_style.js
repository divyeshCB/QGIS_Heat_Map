var size = 0;
var placement = 'point';

var style_Week_29_06_Feb_TruckData_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("''");
    var labelFont = "7.800000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#2e2c2c";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("round(\"Increased_FUEL_RATE\",2)") !== null) {
        labelText = String(feature.get("round(\"Increased_FUEL_RATE\",2)"));
    }
    
    var style = [ new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];;

    return style;
};

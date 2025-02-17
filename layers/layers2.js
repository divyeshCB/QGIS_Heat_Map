var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Week_21_28_Jan_TruckData_1 = new ol.format.GeoJSON();
var features_Week_21_28_Jan_TruckData_1 = format_Week_21_28_Jan_TruckData_1.readFeatures(json_Week_21_28_Jan_TruckData_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Week_21_28_Jan_TruckData_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Week_21_28_Jan_TruckData_1.addFeatures(features_Week_21_28_Jan_TruckData_1);
var lyr_Week_21_28_Jan_TruckData_1 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Week_21_28_Jan_TruckData_1, 
                radius: 2 * 2,
                gradient: ['#000080',  
                    '#002aff',  
                    '#0094ff',  
                    '#00ff91',  
                    '#4aff00', 
                    '#d4ff00',  
                    '#ffaa00',  
                    '#ff5500',  
                    '#c00000',  
                    '#800000'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Increased_FUEL_RATE';
        var featureWeight = feature.get(weightField);
        var maxWeight = 699;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'Week_21_28_Jan_TruckData'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Week_21_28_Jan_TruckData_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Week_21_28_Jan_TruckData_1];

var wms_layers = [];

var format_District_0 = new ol.format.GeoJSON();
var features_District_0 = format_District_0.readFeatures(json_District_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_0.addFeatures(features_District_0);
var lyr_District_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District_0, 
                style: style_District_0,
                interactive: true,
                title: '<img src="styles/legend/District_0.png" /> District'
            });
var format_Forest_1 = new ol.format.GeoJSON();
var features_Forest_1 = format_Forest_1.readFeatures(json_Forest_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Forest_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Forest_1.addFeatures(features_Forest_1);
var lyr_Forest_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Forest_1, 
                style: style_Forest_1,
                interactive: true,
                title: '<img src="styles/legend/Forest_1.png" /> Forest'
            });

lyr_District_0.setVisible(true);lyr_Forest_1.setVisible(true);
var layersList = [lyr_District_0,lyr_Forest_1];
lyr_District_0.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'Area': 'Area', 'District': 'District', 'Pop2012': 'Pop2012', });
lyr_Forest_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'NAME': 'NAME', });
lyr_District_0.set('fieldImages', {'PROVINCE_N': '', 'Area': '', 'District': '', 'Pop2012': '', });
lyr_Forest_1.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'NAME': '', });
lyr_District_0.set('fieldLabels', {'PROVINCE_N': 'no label', 'Area': 'no label', 'District': 'no label', 'Pop2012': 'no label', });
lyr_Forest_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'NAME': 'no label', });
lyr_Forest_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
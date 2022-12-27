var wms_layers = [];
var format_2019_0 = new ol.format.GeoJSON();
var features_2019_0 = format_2019_0.readFeatures(json_2019_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2019_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_2019_0.addFeatures(features_2019_0);var lyr_2019_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2019_0, 
                style: style_2019_0,
    title: '2019<br />\
    <img src="styles/legend/2019_0_0.png" /> Balantak<br />\
    <img src="styles/legend/2019_0_1.png" /> Balantak Selatan<br />\
    <img src="styles/legend/2019_0_2.png" /> Balantak Utara<br />\
    <img src="styles/legend/2019_0_3.png" /> Batui<br />\
    <img src="styles/legend/2019_0_4.png" /> Batui Selatan<br />\
    <img src="styles/legend/2019_0_5.png" /> Bualemo<br />\
    <img src="styles/legend/2019_0_6.png" /> Bunta<br />\
    <img src="styles/legend/2019_0_7.png" /> Kintom<br />\
    <img src="styles/legend/2019_0_8.png" /> Lamala<br />\
    <img src="styles/legend/2019_0_9.png" /> Lobu<br />\
    <img src="styles/legend/2019_0_10.png" /> Luwuk<br />\
    <img src="styles/legend/2019_0_11.png" /> Luwuk Selatan<br />\
    <img src="styles/legend/2019_0_12.png" /> Luwuk Timur<br />\
    <img src="styles/legend/2019_0_13.png" /> Luwuk Utara<br />\
    <img src="styles/legend/2019_0_14.png" /> Mantoh<br />\
    <img src="styles/legend/2019_0_15.png" /> Masama<br />\
    <img src="styles/legend/2019_0_16.png" /> Moilong<br />\
    <img src="styles/legend/2019_0_17.png" /> Nambo<br />\
    <img src="styles/legend/2019_0_18.png" /> Nuhon<br />\
    <img src="styles/legend/2019_0_19.png" /> Pagimana<br />\
    <img src="styles/legend/2019_0_20.png" /> Simpang Raya<br />\
    <img src="styles/legend/2019_0_21.png" /> Toili<br />\
    <img src="styles/legend/2019_0_22.png" /> Toili Barat<br />\
    <img src="styles/legend/2019_0_23.png" /> <br />'
        });var format_RSUmum_1 = new ol.format.GeoJSON();
var features_RSUmum_1 = format_RSUmum_1.readFeatures(json_RSUmum_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSUmum_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RSUmum_1.addFeatures(features_RSUmum_1);var lyr_RSUmum_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RSUmum_1, 
                style: style_RSUmum_1,
                title: '<img src="styles/legend/RSUmum_1.png" /> RS Umum'
            });

lyr_2019_0.setVisible(true);lyr_RSUmum_1.setVisible(true);
var layersList = [lyr_2019_0,lyr_RSUmum_1];
lyr_2019_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'RS Umum': 'RS Umum', 'RS Khusus': 'RS Khusus', 'Posyandu': 'Posyandu', 'Bersalin': 'Bersalin', 'Puskesmas': 'Puskesmas', 'Klinik': 'Klinik', 'Polindes': 'Polindes', });
lyr_RSUmum_1.set('fieldAliases', {'RS Umum': 'RS Umum', });
lyr_2019_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'RS Umum': 'TextEdit', 'RS Khusus': 'TextEdit', 'Posyandu': 'TextEdit', 'Bersalin': 'TextEdit', 'Puskesmas': 'TextEdit', 'Klinik': 'TextEdit', 'Polindes': 'TextEdit', });
lyr_RSUmum_1.set('fieldImages', {'RS Umum': 'TextEdit', });
lyr_2019_0.set('fieldLabels', {'Kecamatan': 'header label', 'RS Umum': 'inline label', 'RS Khusus': 'inline label', 'Posyandu': 'inline label', 'Bersalin': 'inline label', 'Puskesmas': 'inline label', 'Klinik': 'inline label', 'Polindes': 'inline label', });
lyr_RSUmum_1.set('fieldLabels', {'RS Umum': 'header label', });
lyr_RSUmum_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
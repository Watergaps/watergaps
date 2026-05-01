ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([7675328.894285, 3737770.316189, 8547225.026982, 4422831.563308]);
var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_MapzenGlobalTerrain_2 = new ol.layer.Tile({
            'title': 'Mapzen Global Terrain',
            'opacity': 0.217000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'
            })
        });
var format_TDwatershedexorheicstreams_3 = new ol.format.GeoJSON();
var features_TDwatershedexorheicstreams_3 = format_TDwatershedexorheicstreams_3.readFeatures(json_TDwatershedexorheicstreams_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TDwatershedexorheicstreams_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TDwatershedexorheicstreams_3.addFeatures(features_TDwatershedexorheicstreams_3);
var lyr_TDwatershedexorheicstreams_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TDwatershedexorheicstreams_3, 
                style: style_TDwatershedexorheicstreams_3,
                popuplayertitle: 'TD watershed exorheic streams',
                interactive: true,
                title: '<img src="styles/legend/TDwatershedexorheicstreams_3.png" /> TD watershed exorheic streams'
            });
var format_TDwatershedendorheicstreams_4 = new ol.format.GeoJSON();
var features_TDwatershedendorheicstreams_4 = format_TDwatershedendorheicstreams_4.readFeatures(json_TDwatershedendorheicstreams_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TDwatershedendorheicstreams_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TDwatershedendorheicstreams_4.addFeatures(features_TDwatershedendorheicstreams_4);
var lyr_TDwatershedendorheicstreams_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TDwatershedendorheicstreams_4, 
                style: style_TDwatershedendorheicstreams_4,
                popuplayertitle: 'TD watershed endorheic streams',
                interactive: true,
                title: '<img src="styles/legend/TDwatershedendorheicstreams_4.png" /> TD watershed endorheic streams'
            });
var format_TDreach_5 = new ol.format.GeoJSON();
var features_TDreach_5 = format_TDreach_5.readFeatures(json_TDreach_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TDreach_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TDreach_5.addFeatures(features_TDreach_5);
var lyr_TDreach_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TDreach_5, 
                style: style_TDreach_5,
                popuplayertitle: 'TD reach',
                interactive: true,
                title: '<img src="styles/legend/TDreach_5.png" /> TD reach'
            });
var format_PourpointsPPintotheTD_6 = new ol.format.GeoJSON();
var features_PourpointsPPintotheTD_6 = format_PourpointsPPintotheTD_6.readFeatures(json_PourpointsPPintotheTD_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PourpointsPPintotheTD_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PourpointsPPintotheTD_6.addFeatures(features_PourpointsPPintotheTD_6);
var lyr_PourpointsPPintotheTD_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PourpointsPPintotheTD_6, 
                style: style_PourpointsPPintotheTD_6,
                popuplayertitle: 'Pour points (PP) into the TD',
                interactive: true,
                title: '<img src="styles/legend/PourpointsPPintotheTD_6.png" /> Pour points (PP) into the TD'
            });
var format_PointsupstreamofPP_7 = new ol.format.GeoJSON();
var features_PointsupstreamofPP_7 = format_PointsupstreamofPP_7.readFeatures(json_PointsupstreamofPP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointsupstreamofPP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointsupstreamofPP_7.addFeatures(features_PointsupstreamofPP_7);
var lyr_PointsupstreamofPP_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PointsupstreamofPP_7, 
                style: style_PointsupstreamofPP_7,
                popuplayertitle: 'Points upstream of PP',
                interactive: true,
                title: '<img src="styles/legend/PointsupstreamofPP_7.png" /> Points upstream of PP'
            });
var format_PointsdownstreamofPP_8 = new ol.format.GeoJSON();
var features_PointsdownstreamofPP_8 = format_PointsdownstreamofPP_8.readFeatures(json_PointsdownstreamofPP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointsdownstreamofPP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointsdownstreamofPP_8.addFeatures(features_PointsdownstreamofPP_8);
var lyr_PointsdownstreamofPP_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PointsdownstreamofPP_8, 
                style: style_PointsdownstreamofPP_8,
                popuplayertitle: 'Points downstream of PP',
                interactive: true,
                title: '<img src="styles/legend/PointsdownstreamofPP_8.png" /> Points downstream of PP'
            });

lyr_ESRITopo_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(true);lyr_MapzenGlobalTerrain_2.setVisible(true);lyr_TDwatershedexorheicstreams_3.setVisible(true);lyr_TDwatershedendorheicstreams_4.setVisible(true);lyr_TDreach_5.setVisible(true);lyr_PourpointsPPintotheTD_6.setVisible(true);lyr_PointsupstreamofPP_7.setVisible(true);lyr_PointsdownstreamofPP_8.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_OpenTopoMap_1,lyr_MapzenGlobalTerrain_2,lyr_TDwatershedexorheicstreams_3,lyr_TDwatershedendorheicstreams_4,lyr_TDreach_5,lyr_PourpointsPPintotheTD_6,lyr_PointsupstreamofPP_7,lyr_PointsdownstreamofPP_8];
lyr_TDwatershedexorheicstreams_3.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'MAP_NAME': 'MAP_NAME', 'MAIN_RIV': 'MAIN_RIV', 'LENGTH': 'LENGTH', 'STREAM_IND': 'STREAM_IND', 'GLACIAL': 'GLACIAL', 'MAIN_BAS': 'MAIN_BAS', 'MAIN_BAS_N': 'MAIN_BAS_N', 'TD_STREAM': 'TD_STREAM', 'TD_WATERSH': 'TD_WATERSH', 'KML_FOLDER': 'KML_FOLDER', 'DIR_NAME': 'DIR_NAME', 'ENDORHEIC': 'ENDORHEIC', 'LINE_STYLE': 'LINE_STYLE', 'LINE_COLOR': 'LINE_COLOR', 'LINE_WIDTH': 'LINE_WIDTH', 'BG_COLOR': 'BG_COLOR', 'BG_WIDTH': 'BG_WIDTH', 'FONT_SIZE': 'FONT_SIZE', 'FONT_COLOR': 'FONT_COLOR', 'FONT_CHARS': 'FONT_CHARS', 'RIVER_NAME': 'RIVER_NAME', 'MAIN_RIV_N': 'MAIN_RIV_N', });
lyr_TDwatershedendorheicstreams_4.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'MAP_NAME': 'MAP_NAME', 'MAIN_RIV': 'MAIN_RIV', 'LENGTH': 'LENGTH', 'STREAM_IND': 'STREAM_IND', 'MAIN_BAS': 'MAIN_BAS', 'MAIN_BAS_N': 'MAIN_BAS_N', 'TD_WATERSH': 'TD_WATERSH', 'KML_FOLDER': 'KML_FOLDER', 'DIR_NAME': 'DIR_NAME', 'ENDORHEIC': 'ENDORHEIC', 'LINE_STYLE': 'LINE_STYLE', 'LINE_COLOR': 'LINE_COLOR', 'LINE_WIDTH': 'LINE_WIDTH', 'BG_COLOR': 'BG_COLOR', 'BG_WIDTH': 'BG_WIDTH', 'FONT_SIZE': 'FONT_SIZE', 'FONT_COLOR': 'FONT_COLOR', 'FONT_CHARS': 'FONT_CHARS', 'GLACIAL': 'GLACIAL', 'RIVER_NAME': 'RIVER_NAME', 'MAIN_RIV_N': 'MAIN_RIV_N', 'TD_STREAM': 'TD_STREAM', });
lyr_TDreach_5.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'MAP_NAME': 'MAP_NAME', 'MAIN_RIV': 'MAIN_RIV', 'ENDORHEIC': 'ENDORHEIC', 'TD_LENGTH': 'TD_LENGTH', 'CONTINENT': 'CONTINENT', 'STREAM_IND': 'STREAM_IND', 'MAIN_RIV_N': 'MAIN_RIV_N', 'TD_INDEX_N': 'TD_INDEX_N', 'TD_STREAM': 'TD_STREAM', 'LENGTH': 'LENGTH', 'MAIN_BAS': 'MAIN_BAS', 'MAIN_BAS_N': 'MAIN_BAS_N', 'LINE_STYLE': 'LINE_STYLE', 'LINE_COLOR': 'LINE_COLOR', 'LINE_WIDTH': 'LINE_WIDTH', 'FONT_SIZE': 'FONT_SIZE', 'FONT_COLOR': 'FONT_COLOR', 'FONT_CHARS': 'FONT_CHARS', 'GRAND_ID': 'GRAND_ID', 'CONTOUR_VI': 'CONTOUR_VI', 'GLACIAL': 'GLACIAL', });
lyr_PourpointsPPintotheTD_6.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'MAP_NAME': 'MAP_NAME', 'DATABASE_I': 'DATABASE_I', 'STREAM_IND': 'STREAM_IND', 'TD_WATERSH': 'TD_WATERSH', 'TD_STREAM': 'TD_STREAM', 'GLACIAL': 'GLACIAL', 'MAIN_BAS': 'MAIN_BAS', 'MAIN_BAS_N': 'MAIN_BAS_N', 'AE_ELEV_DE': 'AE_ELEV_DE', 'ME_ELEV_DE': 'ME_ELEV_DE', 'AVG_SLOPE_': 'AVG_SLOPE_', 'AE_ELEV_MA': 'AE_ELEV_MA', 'TD_INDEX_N': 'TD_INDEX_N', 'PP': 'PP', 'PP_RELAT': 'PP_RELAT', 'VISUAL': 'VISUAL', 'TECTO_FEAT': 'TECTO_FEAT', 'TECTO_GROU': 'TECTO_GROU', 'GENERAL_LI': 'GENERAL_LI', 'Lithology': 'Lithology', 'COMB_STR_S': 'COMB_STR_S', 'COMB_STR_1': 'COMB_STR_1', 'DIS_M3_PYR': 'DIS_M3_PYR', 'AVG_ELEV_M': 'AVG_ELEV_M', 'CONTINENT': 'CONTINENT', 'DEM': 'DEM', 'ELEVATION': 'ELEVATION', 'ENDORHEIC': 'ENDORHEIC', 'MAIN_RIV': 'MAIN_RIV', 'MAIN_RIV_N': 'MAIN_RIV_N', 'X': 'X', 'Y': 'Y', 'KML_FOLDER': 'KML_FOLDER', 'POINT_SYMB': 'POINT_SYMB', 'FONT_NAME': 'FONT_NAME', 'FONT_SIZE': 'FONT_SIZE', 'FONT_COLOR': 'FONT_COLOR', 'FONT_CHARS': 'FONT_CHARS', 'FONT_WEIGH': 'FONT_WEIGH', });
lyr_PointsupstreamofPP_7.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'MAP_NAME': 'MAP_NAME', 'DATABASE_I': 'DATABASE_I', 'STREAM_IND': 'STREAM_IND', 'TD_WATERSH': 'TD_WATERSH', 'TD_STREAM': 'TD_STREAM', 'GLACIAL': 'GLACIAL', 'MAIN_BAS': 'MAIN_BAS', 'MAIN_BAS_N': 'MAIN_BAS_N', 'AE_ELEV_DE': 'AE_ELEV_DE', 'ME_ELEV_DE': 'ME_ELEV_DE', 'AVG_SLOPE_': 'AVG_SLOPE_', 'AE_ELEV_MA': 'AE_ELEV_MA', 'TD_INDEX_N': 'TD_INDEX_N', 'PP': 'PP', 'PP_RELAT': 'PP_RELAT', 'VISUAL': 'VISUAL', 'TECTO_FEAT': 'TECTO_FEAT', 'TECTO_GROU': 'TECTO_GROU', 'GENERAL_LI': 'GENERAL_LI', 'Lithology': 'Lithology', 'COMB_STR_S': 'COMB_STR_S', 'COMB_STR_1': 'COMB_STR_1', 'DIS_M3_PYR': 'DIS_M3_PYR', 'AVG_ELEV_M': 'AVG_ELEV_M', 'CONTINENT': 'CONTINENT', 'DEM': 'DEM', 'ELEVATION': 'ELEVATION', 'ENDORHEIC': 'ENDORHEIC', 'MAIN_RIV': 'MAIN_RIV', 'MAIN_RIV_N': 'MAIN_RIV_N', 'X': 'X', 'Y': 'Y', 'KML_FOLDER': 'KML_FOLDER', 'POINT_SYMB': 'POINT_SYMB', 'FONT_NAME': 'FONT_NAME', 'FONT_SIZE': 'FONT_SIZE', 'FONT_COLOR': 'FONT_COLOR', 'FONT_CHARS': 'FONT_CHARS', 'FONT_WEIGH': 'FONT_WEIGH', });
lyr_PointsdownstreamofPP_8.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'MAP_NAME': 'MAP_NAME', 'DATABASE_I': 'DATABASE_I', 'STREAM_IND': 'STREAM_IND', 'TD_WATERSH': 'TD_WATERSH', 'TD_STREAM': 'TD_STREAM', 'GLACIAL': 'GLACIAL', 'MAIN_BAS': 'MAIN_BAS', 'MAIN_BAS_N': 'MAIN_BAS_N', 'AE_ELEV_DE': 'AE_ELEV_DE', 'ME_ELEV_DE': 'ME_ELEV_DE', 'AVG_SLOPE_': 'AVG_SLOPE_', 'AE_ELEV_MA': 'AE_ELEV_MA', 'TD_INDEX_N': 'TD_INDEX_N', 'PP': 'PP', 'PP_RELAT': 'PP_RELAT', 'VISUAL': 'VISUAL', 'TECTO_FEAT': 'TECTO_FEAT', 'TECTO_GROU': 'TECTO_GROU', 'GENERAL_LI': 'GENERAL_LI', 'Lithology': 'Lithology', 'COMB_STR_S': 'COMB_STR_S', 'COMB_STR_1': 'COMB_STR_1', 'DIS_M3_PYR': 'DIS_M3_PYR', 'AVG_ELEV_M': 'AVG_ELEV_M', 'CONTINENT': 'CONTINENT', 'DEM': 'DEM', 'ELEVATION': 'ELEVATION', 'ENDORHEIC': 'ENDORHEIC', 'MAIN_RIV': 'MAIN_RIV', 'MAIN_RIV_N': 'MAIN_RIV_N', 'X': 'X', 'Y': 'Y', 'KML_FOLDER': 'KML_FOLDER', 'POINT_SYMB': 'POINT_SYMB', 'FONT_NAME': 'FONT_NAME', 'FONT_SIZE': 'FONT_SIZE', 'FONT_COLOR': 'FONT_COLOR', 'FONT_CHARS': 'FONT_CHARS', 'FONT_WEIGH': 'FONT_WEIGH', });
lyr_TDwatershedexorheicstreams_3.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'MAP_NAME': 'TextEdit', 'MAIN_RIV': 'Range', 'LENGTH': 'Range', 'STREAM_IND': 'TextEdit', 'GLACIAL': 'TextEdit', 'MAIN_BAS': 'TextEdit', 'MAIN_BAS_N': 'TextEdit', 'TD_STREAM': 'TextEdit', 'TD_WATERSH': 'TextEdit', 'KML_FOLDER': 'TextEdit', 'DIR_NAME': 'TextEdit', 'ENDORHEIC': 'Range', 'LINE_STYLE': 'TextEdit', 'LINE_COLOR': 'TextEdit', 'LINE_WIDTH': 'Range', 'BG_COLOR': 'TextEdit', 'BG_WIDTH': 'Range', 'FONT_SIZE': 'Range', 'FONT_COLOR': 'TextEdit', 'FONT_CHARS': 'Range', 'RIVER_NAME': 'TextEdit', 'MAIN_RIV_N': 'TextEdit', });
lyr_TDwatershedendorheicstreams_4.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'MAP_NAME': 'TextEdit', 'MAIN_RIV': 'Range', 'LENGTH': 'Range', 'STREAM_IND': 'TextEdit', 'MAIN_BAS': 'TextEdit', 'MAIN_BAS_N': 'TextEdit', 'TD_WATERSH': 'TextEdit', 'KML_FOLDER': 'TextEdit', 'DIR_NAME': 'TextEdit', 'ENDORHEIC': 'Range', 'LINE_STYLE': 'TextEdit', 'LINE_COLOR': 'TextEdit', 'LINE_WIDTH': 'Range', 'BG_COLOR': 'TextEdit', 'BG_WIDTH': 'Range', 'FONT_SIZE': 'Range', 'FONT_COLOR': 'TextEdit', 'FONT_CHARS': 'Range', 'GLACIAL': 'TextEdit', 'RIVER_NAME': 'TextEdit', 'MAIN_RIV_N': 'TextEdit', 'TD_STREAM': 'TextEdit', });
lyr_TDreach_5.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'MAP_NAME': 'TextEdit', 'MAIN_RIV': 'Range', 'ENDORHEIC': 'Range', 'TD_LENGTH': 'Range', 'CONTINENT': 'TextEdit', 'STREAM_IND': 'TextEdit', 'MAIN_RIV_N': 'TextEdit', 'TD_INDEX_N': 'TextEdit', 'TD_STREAM': 'TextEdit', 'LENGTH': 'Range', 'MAIN_BAS': 'TextEdit', 'MAIN_BAS_N': 'TextEdit', 'LINE_STYLE': 'TextEdit', 'LINE_COLOR': 'TextEdit', 'LINE_WIDTH': 'Range', 'FONT_SIZE': 'Range', 'FONT_COLOR': 'TextEdit', 'FONT_CHARS': 'Range', 'GRAND_ID': 'TextEdit', 'CONTOUR_VI': 'Range', 'GLACIAL': 'TextEdit', });
lyr_PourpointsPPintotheTD_6.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'MAP_NAME': 'TextEdit', 'DATABASE_I': 'TextEdit', 'STREAM_IND': 'TextEdit', 'TD_WATERSH': 'TextEdit', 'TD_STREAM': 'TextEdit', 'GLACIAL': 'TextEdit', 'MAIN_BAS': 'TextEdit', 'MAIN_BAS_N': 'TextEdit', 'AE_ELEV_DE': 'Range', 'ME_ELEV_DE': 'Range', 'AVG_SLOPE_': 'TextEdit', 'AE_ELEV_MA': 'Range', 'TD_INDEX_N': 'TextEdit', 'PP': 'TextEdit', 'PP_RELAT': 'TextEdit', 'VISUAL': 'TextEdit', 'TECTO_FEAT': 'TextEdit', 'TECTO_GROU': 'TextEdit', 'GENERAL_LI': 'TextEdit', 'Lithology': 'TextEdit', 'COMB_STR_S': 'TextEdit', 'COMB_STR_1': 'TextEdit', 'DIS_M3_PYR': 'TextEdit', 'AVG_ELEV_M': 'TextEdit', 'CONTINENT': 'TextEdit', 'DEM': 'TextEdit', 'ELEVATION': 'TextEdit', 'ENDORHEIC': 'Range', 'MAIN_RIV': 'Range', 'MAIN_RIV_N': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'KML_FOLDER': 'TextEdit', 'POINT_SYMB': 'TextEdit', 'FONT_NAME': 'TextEdit', 'FONT_SIZE': 'Range', 'FONT_COLOR': 'TextEdit', 'FONT_CHARS': 'Range', 'FONT_WEIGH': 'Range', });
lyr_PointsupstreamofPP_7.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'MAP_NAME': 'TextEdit', 'DATABASE_I': 'TextEdit', 'STREAM_IND': 'TextEdit', 'TD_WATERSH': 'TextEdit', 'TD_STREAM': 'TextEdit', 'GLACIAL': 'TextEdit', 'MAIN_BAS': 'TextEdit', 'MAIN_BAS_N': 'TextEdit', 'AE_ELEV_DE': 'Range', 'ME_ELEV_DE': 'Range', 'AVG_SLOPE_': 'TextEdit', 'AE_ELEV_MA': 'Range', 'TD_INDEX_N': 'TextEdit', 'PP': 'TextEdit', 'PP_RELAT': 'TextEdit', 'VISUAL': 'TextEdit', 'TECTO_FEAT': 'TextEdit', 'TECTO_GROU': 'TextEdit', 'GENERAL_LI': 'TextEdit', 'Lithology': 'TextEdit', 'COMB_STR_S': 'TextEdit', 'COMB_STR_1': 'TextEdit', 'DIS_M3_PYR': 'TextEdit', 'AVG_ELEV_M': 'TextEdit', 'CONTINENT': 'TextEdit', 'DEM': 'TextEdit', 'ELEVATION': 'TextEdit', 'ENDORHEIC': 'Range', 'MAIN_RIV': 'Range', 'MAIN_RIV_N': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'KML_FOLDER': 'TextEdit', 'POINT_SYMB': 'TextEdit', 'FONT_NAME': 'TextEdit', 'FONT_SIZE': 'Range', 'FONT_COLOR': 'TextEdit', 'FONT_CHARS': 'Range', 'FONT_WEIGH': 'Range', });
lyr_PointsdownstreamofPP_8.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'MAP_NAME': 'TextEdit', 'DATABASE_I': 'TextEdit', 'STREAM_IND': 'TextEdit', 'TD_WATERSH': 'TextEdit', 'TD_STREAM': 'TextEdit', 'GLACIAL': 'TextEdit', 'MAIN_BAS': 'TextEdit', 'MAIN_BAS_N': 'TextEdit', 'AE_ELEV_DE': 'Range', 'ME_ELEV_DE': 'Range', 'AVG_SLOPE_': 'TextEdit', 'AE_ELEV_MA': 'Range', 'TD_INDEX_N': 'TextEdit', 'PP': 'TextEdit', 'PP_RELAT': 'TextEdit', 'VISUAL': 'TextEdit', 'TECTO_FEAT': 'TextEdit', 'TECTO_GROU': 'TextEdit', 'GENERAL_LI': 'TextEdit', 'Lithology': 'TextEdit', 'COMB_STR_S': 'TextEdit', 'COMB_STR_1': 'TextEdit', 'DIS_M3_PYR': 'TextEdit', 'AVG_ELEV_M': 'TextEdit', 'CONTINENT': 'TextEdit', 'DEM': 'TextEdit', 'ELEVATION': 'TextEdit', 'ENDORHEIC': 'Range', 'MAIN_RIV': 'Range', 'MAIN_RIV_N': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'KML_FOLDER': 'TextEdit', 'POINT_SYMB': 'TextEdit', 'FONT_NAME': 'TextEdit', 'FONT_SIZE': 'Range', 'FONT_COLOR': 'TextEdit', 'FONT_CHARS': 'Range', 'FONT_WEIGH': 'Range', });
lyr_TDwatershedexorheicstreams_3.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'MAP_NAME': 'no label', 'MAIN_RIV': 'no label', 'LENGTH': 'no label', 'STREAM_IND': 'no label', 'GLACIAL': 'no label', 'MAIN_BAS': 'no label', 'MAIN_BAS_N': 'no label', 'TD_STREAM': 'no label', 'TD_WATERSH': 'no label', 'KML_FOLDER': 'no label', 'DIR_NAME': 'no label', 'ENDORHEIC': 'no label', 'LINE_STYLE': 'no label', 'LINE_COLOR': 'no label', 'LINE_WIDTH': 'no label', 'BG_COLOR': 'no label', 'BG_WIDTH': 'no label', 'FONT_SIZE': 'no label', 'FONT_COLOR': 'no label', 'FONT_CHARS': 'no label', 'RIVER_NAME': 'no label', 'MAIN_RIV_N': 'no label', });
lyr_TDwatershedendorheicstreams_4.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'MAP_NAME': 'no label', 'MAIN_RIV': 'no label', 'LENGTH': 'no label', 'STREAM_IND': 'no label', 'MAIN_BAS': 'no label', 'MAIN_BAS_N': 'no label', 'TD_WATERSH': 'no label', 'KML_FOLDER': 'no label', 'DIR_NAME': 'no label', 'ENDORHEIC': 'no label', 'LINE_STYLE': 'no label', 'LINE_COLOR': 'no label', 'LINE_WIDTH': 'no label', 'BG_COLOR': 'no label', 'BG_WIDTH': 'no label', 'FONT_SIZE': 'no label', 'FONT_COLOR': 'no label', 'FONT_CHARS': 'no label', 'GLACIAL': 'no label', 'RIVER_NAME': 'no label', 'MAIN_RIV_N': 'no label', 'TD_STREAM': 'no label', });
lyr_TDreach_5.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'MAP_NAME': 'no label', 'MAIN_RIV': 'no label', 'ENDORHEIC': 'no label', 'TD_LENGTH': 'no label', 'CONTINENT': 'no label', 'STREAM_IND': 'no label', 'MAIN_RIV_N': 'no label', 'TD_INDEX_N': 'no label', 'TD_STREAM': 'no label', 'LENGTH': 'no label', 'MAIN_BAS': 'no label', 'MAIN_BAS_N': 'no label', 'LINE_STYLE': 'no label', 'LINE_COLOR': 'no label', 'LINE_WIDTH': 'no label', 'FONT_SIZE': 'no label', 'FONT_COLOR': 'no label', 'FONT_CHARS': 'no label', 'GRAND_ID': 'no label', 'CONTOUR_VI': 'no label', 'GLACIAL': 'no label', });
lyr_PourpointsPPintotheTD_6.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'MAP_NAME': 'no label', 'DATABASE_I': 'no label', 'STREAM_IND': 'no label', 'TD_WATERSH': 'no label', 'TD_STREAM': 'no label', 'GLACIAL': 'no label', 'MAIN_BAS': 'no label', 'MAIN_BAS_N': 'no label', 'AE_ELEV_DE': 'no label', 'ME_ELEV_DE': 'no label', 'AVG_SLOPE_': 'no label', 'AE_ELEV_MA': 'no label', 'TD_INDEX_N': 'no label', 'PP': 'no label', 'PP_RELAT': 'no label', 'VISUAL': 'no label', 'TECTO_FEAT': 'no label', 'TECTO_GROU': 'no label', 'GENERAL_LI': 'no label', 'Lithology': 'no label', 'COMB_STR_S': 'no label', 'COMB_STR_1': 'no label', 'DIS_M3_PYR': 'no label', 'AVG_ELEV_M': 'no label', 'CONTINENT': 'no label', 'DEM': 'no label', 'ELEVATION': 'no label', 'ENDORHEIC': 'no label', 'MAIN_RIV': 'no label', 'MAIN_RIV_N': 'no label', 'X': 'no label', 'Y': 'no label', 'KML_FOLDER': 'no label', 'POINT_SYMB': 'no label', 'FONT_NAME': 'no label', 'FONT_SIZE': 'no label', 'FONT_COLOR': 'no label', 'FONT_CHARS': 'no label', 'FONT_WEIGH': 'no label', });
lyr_PointsupstreamofPP_7.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'MAP_NAME': 'no label', 'DATABASE_I': 'no label', 'STREAM_IND': 'no label', 'TD_WATERSH': 'no label', 'TD_STREAM': 'no label', 'GLACIAL': 'no label', 'MAIN_BAS': 'no label', 'MAIN_BAS_N': 'no label', 'AE_ELEV_DE': 'no label', 'ME_ELEV_DE': 'no label', 'AVG_SLOPE_': 'no label', 'AE_ELEV_MA': 'no label', 'TD_INDEX_N': 'no label', 'PP': 'no label', 'PP_RELAT': 'no label', 'VISUAL': 'no label', 'TECTO_FEAT': 'no label', 'TECTO_GROU': 'no label', 'GENERAL_LI': 'no label', 'Lithology': 'no label', 'COMB_STR_S': 'no label', 'COMB_STR_1': 'no label', 'DIS_M3_PYR': 'no label', 'AVG_ELEV_M': 'no label', 'CONTINENT': 'no label', 'DEM': 'no label', 'ELEVATION': 'no label', 'ENDORHEIC': 'no label', 'MAIN_RIV': 'no label', 'MAIN_RIV_N': 'no label', 'X': 'no label', 'Y': 'no label', 'KML_FOLDER': 'no label', 'POINT_SYMB': 'no label', 'FONT_NAME': 'no label', 'FONT_SIZE': 'no label', 'FONT_COLOR': 'no label', 'FONT_CHARS': 'no label', 'FONT_WEIGH': 'no label', });
lyr_PointsdownstreamofPP_8.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'MAP_NAME': 'no label', 'DATABASE_I': 'no label', 'STREAM_IND': 'no label', 'TD_WATERSH': 'no label', 'TD_STREAM': 'no label', 'GLACIAL': 'no label', 'MAIN_BAS': 'no label', 'MAIN_BAS_N': 'no label', 'AE_ELEV_DE': 'no label', 'ME_ELEV_DE': 'no label', 'AVG_SLOPE_': 'no label', 'AE_ELEV_MA': 'no label', 'TD_INDEX_N': 'no label', 'PP': 'no label', 'PP_RELAT': 'no label', 'VISUAL': 'no label', 'TECTO_FEAT': 'no label', 'TECTO_GROU': 'no label', 'GENERAL_LI': 'no label', 'Lithology': 'no label', 'COMB_STR_S': 'no label', 'COMB_STR_1': 'no label', 'DIS_M3_PYR': 'no label', 'AVG_ELEV_M': 'no label', 'CONTINENT': 'no label', 'DEM': 'no label', 'ELEVATION': 'no label', 'ENDORHEIC': 'no label', 'MAIN_RIV': 'no label', 'MAIN_RIV_N': 'no label', 'X': 'no label', 'Y': 'no label', 'KML_FOLDER': 'no label', 'POINT_SYMB': 'no label', 'FONT_NAME': 'no label', 'FONT_SIZE': 'no label', 'FONT_COLOR': 'no label', 'FONT_CHARS': 'no label', 'FONT_WEIGH': 'no label', });
lyr_PointsdownstreamofPP_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
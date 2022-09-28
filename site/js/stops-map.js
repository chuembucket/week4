import unicity from '../data/universitycity.js';


function initStopMap(){
    let map = L.map('stop-map').setView([39.952490105241914, -75.19367702271225], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap',
    }).addTo(map);
    L.geoJSON(unicity, {
        style: {fill: null, color :'black'},
    }).addTo(map);

    return map;
}


function makeStopFeature(stop){
    return {
        'type': 'Feature',
        'properties': {
            "stop_name": stop.stop_name,
            "routes_ids": stop.routes_ids,
            "stop_id": stop.stop_id,
            "wheelchair_boarding": stop.wheelchair_boarding,
        },
        'geometry': stop.geom,
    };
}

function showStopsOnMap(stopstoshow,stopmap){
    const stopFeatureCollection = {
        "type": "FeatureCollection",
        "features": stopstoshow.map(makeStopFeature),
    };
    L.geoJSON(stopFeatureCollection, {
        pointToLayer: (geoJsonPoint, latlng) => L.circleMarker(latlng),
        style:{ color: 'red' },
    }).addTo(stopmap);
}

export{ showStopsOnMap, initStopMap };














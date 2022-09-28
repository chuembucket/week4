import stops from '../data/stops.js';
import { initStopMap, showStopsOnMap } from './stops-map.js';


let stopmap = initStopMap()
showStopsOnMap(stops, stopmap);


//window.stopFeatureCollection = stopFeatureCollection
window.stopmap = stopmap;
window.stops = stops;


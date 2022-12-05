import mapboxgl from 'mapbox-gl'; 
import geojsonData from '../public/My-Ithaca-Omar.geojson?raw';
import coverData from '../public/ithaca_cover.geojson?raw';

const ithaca =  [-76.4972727, 42.4519253];

mapboxgl.accessToken = 'pk.eyJ1Ijoib21hcnNoZWhhdGEiLCJhIjoiY2xiOWlndnV4MDFhazNwczgwcXdua2M2dyJ9.sXu8TbezUeWs2clBsGDsYQ';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: ithaca, // starting position [lng, lat]
  zoom: 15, // starting zoom
});

const showCover = false;

map.on('load', () => {
    let textColor = "black"
    let lineColor = '#e3e3e3' //["get", "felt-color"]
    let lineWidth = 4;
    let haloWidth = 1;
    let coverOpacity = 1

    map.addSource('local-map', {
        'type': 'geojson',
        'data': JSON.parse(geojsonData)
    });
    map.addSource('cover', {
        'type': 'geojson',
        'data': JSON.parse(coverData)
    });

    // Add cover
    if (showCover) {
      
    } else {
      coverOpacity = 0.4
      // Change some colors
      lineColor = '#363636'
      haloWidth = 3;
    }

    map.addLayer({
        'id': 'local-map-cover', 'source': 'cover', 'type': 'fill',
        'layout': { },
        'paint': {
            'fill-color': 'white',
            'fill-opacity': coverOpacity
        }
    });
    

    const placeFilter = ["==",  ["get", "felt-type"], "Place" ]

    // Line layer
    map.addLayer({
        'id': 'local-map-lines', 'source': 'local-map', 'type': 'line',
        'layout': { 'line-join': 'round', 'line-cap': 'round' },
        'paint': {
            'line-color': lineColor,
            'line-width': lineWidth
        }
    });

    // Point layer
    map.addLayer({
        'id': 'local-map-points', 'source': 'local-map', 'type': 'circle',
        'filter': placeFilter,
        'layout': { },
        'paint': {
            'circle-color': ["get", "felt-color"],
            'circle-stroke-color': 'white',
            'circle-stroke-width': 2,
            'circle-radius': 8
        }
    });
    // Text layer
    map.addLayer({
        'id': 'local-map-text', 'source': 'local-map', 'type': 'symbol',
        'filter': placeFilter,
        'layout': { 
          "text-field": ["get", "felt-text"],
          "text-anchor": "left",
          "text-offset": [1, 0],
          "text-ignore-placement": true
        },
        'paint': { 
            'text-color': textColor,
            'text-halo-width': haloWidth,
            'text-halo-color': 'white'
        }
    });
});
//Coordinates and zoom level

var map = L.map('map').setView([39.646763, -74.870229], 10);

//map tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);




/**
 * Things that appear on the map
 * 
 * markers, polygons, etc.
 */

//a marker
var marker = L.marker([39.979262, -75.587269]).addTo(map);

//a circle
var circle = L.circle([39.933799736675866, -75.08021346724827], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 1000 //meters
}).addTo(map);

//a polygon
var polygon = L.polygon([
    [39.801254, -75.349035],
    [38.951428, -74.922081],
    [39.837569, -74.508291]
]).addTo(map);

//popups for objects on the map
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
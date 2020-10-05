// Create a map object
var myMap = L.map("map", {
  center: [15.5994, -28.6731],
  zoom: 3
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Country data
var countries = [
  {
    name: "Manado, Indonesia",
    location: [1.4748, 124.8421],
    mag: 4.8
  },
  {
    name: "New Caledonia",
    location: [-21.8618 ,169.744 ],
    mag: 4.5
  },
  {
    name: "West Chile",
    location:  [ -40.9358, -91.2401],
    mag: 4.5
  },
  {
    name: "Wainpagpu, Indonesia",
    location: [ -9.667, 119.344 ],
    mag: 4.9
  },
  {
    name: "Oarai, Japan",
    location: [36.3021, 140.8268 ],
    mag: 4.9
  },
  {
    name: "Off the coast of Portugal",
    location: [37.5599, -31.8138 ],
    mag: 5
  },
  {
    name: "Tonga",
    location: [-19.4391, -174.0583 ],
    mag: 4.9
  },
  {
    name: "Colombia ",
    location: [4.1988, -71.386 ],
    mag: 4.5
  },
  {
    name: "Peru",
    location: [-5.9836, -76.7288 ],
    mag: 4.7
  },
  {
    name: "Trinidad And Tobago",
    location: [10.9775, -61.5217 ],
    mag: 4.8
  }
];


// Loop through the cities array and create one marker for each city object
for (var i = 0; i < countries.length; i++) {

  // Conditionals for countries mag
  var color = "";
  if (countries[i].mag > 5) {
    color = "yellow";
  }
  else if (countries[i].mag > 4.9) {
    color = "blue";
  }
  else if (countries[i].mag > 4.7) {
    color = "green";
  }
  else {
    color = "red";
  }

  // Add circles to map
  L.circle(countries[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust radius
    radius: countries[i].mag * 100000
  }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>mag: " + countries[i].mag + "</h3>").addTo(myMap);
}

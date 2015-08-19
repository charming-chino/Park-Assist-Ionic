angular.module('gMap')
  .factory('MapOptions', function() {
    var mapOptions = {
      zoom: 17, 
      minZoom: 3,
      maxZoom: 25,
      center: {
        lat: 34.0219,
        lng: -118.4814
      },
      mapTypeId: google.maps.MapTypeId.RoadMap,
      styles: [{
                "stylers": [{
                    "visibility": "on"
                }, {
                    "saturation": -100
                }, {
                    "gamma": 0.54
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "water",
                "stylers": [{
                    "color": "#4d4946"
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "gamma": 0.48
                }]
            }, {
                "featureType": "transit.station",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "gamma": 7.18
                }]
            }],
            setCenter: function (latLngObj) {
              mapOptions.center = latLngObj;
            }
          };
          return mapOptions;
  });
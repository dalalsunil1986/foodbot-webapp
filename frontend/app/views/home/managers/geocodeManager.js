angular.module('app.home.managers')

.service('geocodeManager', function($http, google){
  var uri = 'https://maps.googleapis.com/maps/api/geocode/json?sensor=false&' ;

  //gets the latLng position for address: (returns a promise)
  this.getPosition  = function(addr){ 
    return $http.get(uri+'address='+ addr)
    .then(function(res){
      if(res.status !== 200){
        throw "Address not found"; 
      }
      var loc = res.data.results[0].geometry.location;
      var position = new google.maps.LatLng(loc.lat, loc.lng);
      return position;
    });
  };

  this.getAddress = function(lat, lng){ 
    return $http.get(uri+'latlng='+lat+','+lng); 
  };

});

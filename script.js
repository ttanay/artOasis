
        var map, marker;
        var pos = {
            lat: 28.6213,
            lng: 77.0918
        }
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 16,
          mapTypeId: 'roadmap'
        });

        // HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            map.setCenter(pos);
            marker = new google.maps.Marker({
                position: pos,
                icon: 'assets/img/marker.png',
                draggable: true,
                map: map
            });
            marker.setMap(map);
            displayCoordinates(pos.lat, pos.lng);
            google.maps.event.addListener(marker, 'drag', function(event){
                displayCoordinates(event.latLng.lat(), event.latLng.lng());
            });

          }, function() {
            handleLocationError(true);
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false);
        }
      }
//---------------------------------------------------------
        function handleLocationError(browserHasGeolocation) {
            if(browserHasGeolocation){
                marker = new google.maps.Marker({
                    position: pos,
                    icon: 'assets/img/marker.png',
                    draggable: true,
                    map: map
                });  
            marker.setMap(map);
            displayCoordinates(pos.lat, pos.lng);
            map.setCenter(pos);
            google.maps.event.addListener(marker, 'drag', function(event){
                displayCoordinates(event.latLng.lat(), event.latLng.lng());
            });
            } else{
                alert('Browser does not support Geolocation. Set Location Manually');
                marker = new google.maps.Marker({
                    position: pos,
                    icon: 'assets/img/marker.png',
                    draggable: true,
                    map: map
                });  
            marker.setMap(map);
            displayCoordinates(pos.lat, pos.lng);
            map.setCenter(pos);
            google.maps.event.addListener(marker, 'drag', function(event){
                displayCoordinates(event.latLng.lat(), event.latLng.lng());
            });
            }
        }

        function displayCoordinates(lat, lng) {
            var cords = document.getElementById('cords');
            cords.innerHTML = lat + ', ' + lng;
        }
//--------------------------------------------------------EVENT FOR BUTTON -----------------------------------------
        /*var loc = document.getElementById('locationButton');
        loc.addEventListener*/
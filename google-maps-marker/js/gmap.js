var markerIsDraggable = true;
var zoom = 6;
var coordsLenght = 6;
var defaultLat = 51.165691;
var defaultLng = 10.451526;

var mapOptions = {
    zoom: zoom,
    center: new google.maps.LatLng(defaultLat, defaultLng),
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var geocoder = new google.maps.Geocoder();
var map = new google.maps.Map(document.getElementById('gmap-canvas'), mapOptions);

var marker = new google.maps.Marker({
    position: new google.maps.LatLng(defaultLat, defaultLng),
    draggable: markerIsDraggable
});

google.maps.event.addListener(marker, 'dragend', function (evt) {
    document.getElementById('latitude').value = evt.latLng.lat().toFixed(coordsLenght);
    document.getElementById('longitude').value = evt.latLng.lng().toFixed(coordsLenght);
    geocoder.geocode({
        latLng: evt.latLng
    }, function (result) {
        if (result && result.length > 0) {
            document.getElementById('address').value = result[0].formatted_address;
        }
    });
    map.panTo(marker.getPosition());

});

map.setCenter(marker.position);

marker.setMap(map);

// Search for an address on Google Maps
function addressChanged() {
    var address = document.getElementById("address").value;
    if (geocoder) {
        geocoder.geocode({
            'address': address
        }, function (result, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (result[0].geometry.location_type == "ROOFTOP")
                    map.setZoom(zoom + 4);
                else
                    map.setZoom(zoom);
                map.setCenter(result[0].geometry.location);
                marker.setPosition(result[0].geometry.location);
                document.getElementById('latitude').value = marker.getPosition().lat();
                document.getElementById('longitude').value = marker.getPosition().lng();
            }
        });
    }
}

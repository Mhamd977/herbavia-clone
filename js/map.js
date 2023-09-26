$(document).ready(function () {
    mapboxgl.accessToken = jQuery("#hdnMapAPI").val();
    mapboxgl.setRTLTextPlugin(
      "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"
    );
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v10",
      center: [43.094401054673334, 25.67286081220587],
      zoom: 3,
    });
  
    var geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [43.094401054673334, 25.67286081220587],
          },
        },
      ],
    };
  
    geojson.features.forEach(function (marker) {
      var el = document.createElement("img");
      el.src = "../../images/map-marker.svg";
      el.className = "map-marker-color";
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
    });
  
    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl());
    var el = jQuery("<div>")
      .width(40)
      .height(40)
      .append(function () {
        return jQuery("<span>")
          .addClass("map-marker")
          .append(function () {
            var img = $("<img>").attr("src", "../../images/map-marker.svg"); // Replace with the path to your image
            img.addClass("map-marker-color");
            return img;
          });
      });
  
    $(".view-on-map-btn").click(function (e) {
      var lat = parseFloat($(this).data("lat"));
      var lng = parseFloat($(this).data("lng"));
      map.flyTo({
        center: [lat, lng],
        zoom: 10,
        speed: 1.2,
        curve: 1,
      });
    });
  });
  
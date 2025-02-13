document.getElementById('date').innerHTML = new Date().toDateString();

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 42.6975, lng: 23.3242 } // Example: Sofia, Bulgaria
    });

    const kmlLayer = new google.maps.KmlLayer({
        url: "https://github.com/ElliStoyanova/LinearSiteMap/blob/main/doc.kml",  // Replace with your actual KML file URL
        map: map
    });

    console.log('KML layer: ', kmlLayer)
}
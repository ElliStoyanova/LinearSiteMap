function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 42.6975, lng: 23.3242 } // Example: Sofia, Bulgaria
    });

    // const kmlLayer = new google.maps.KmlLayer({
    //     url: "https://github.com/ElliStoyanova/LinearSiteMap/blob/main/doc.kml",  // Replace with your actual KML file URL
    //     map: map
    // });
    
    // const kmlLayer = new google.maps.KmlLayer({
    //     url: "https://drive.google.com/file/d/1Ule1C1viOZXPO6yMG2WOBLKtpilRvfH4/edit?dl=1",  // Replace with your actual KML file URL
    //     map: map
    // });

    const kmlLayer = new google.maps.KmlLayer({
        url: "https://raw.githubusercontent.com/ElliStoyanova/LinearSiteMap/refs/heads/main/layers/doc.kml",  // Replace with your actual KML file URL
        map: map
    });
    
    const kmlLayerWithTasks = new google.maps.KmlLayer({
        url: "https://raw.githubusercontent.com/ElliStoyanova/LinearSiteMap/refs/heads/main/layers/doc_layer_1_link.kml",  // Replace with your actual KML file URL
        map: map
    });
    
    // const kmlLayer = new google.maps.KmlLayer({
    //     url: "https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml",  // Replace with your actual KML file URL
    //     map: map
    // });

    console.log('KML layer: ', kmlLayer)
}
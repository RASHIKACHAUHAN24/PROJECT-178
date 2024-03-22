let latitude=27.175345211318703, longitude=75.82695549958376;

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:6
});

var img1 = document.querySelector("#taj-mahal")
var img2 = document.querySelector("#hawa-mahal")
var img3 = document.querySelector("#gwalior-fort")
var img4 = document.querySelector("#lotus-temple")

var marker1 = new mapboxgl.Marker({
    element:img1
    })
    .setLngLat([ 78.04266790733689,27.175345211318703])
    .addTo(map);

var marker2 = new mapboxgl.Marker({
    element:img2
    })
    .setLngLat([75.82695549958376,26.924142557180964,])
    .addTo(map);

var marker3 = new mapboxgl.Marker({
    element:img3
    })
    .setLngLat([78.17004286496238,26.23143996426628, ])
    .addTo(map);

var marker4 = new mapboxgl.Marker({
    element:img4
    })
    .setLngLat([77.25920190370903,28.553736996746238, ])
    .addTo(map);





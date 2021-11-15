'use strict'
const urls=[
    'https://kuula.co/share/collection/7kSlH?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1',
    'https://kuula.co/share/NPp6c?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1'
]
function init(){
    loadView(0)
}

function loadView(view){
    document.querySelector('.viewer').innerHTML=`
    <iframe width="100%" height="640" style="width: 100%; height: 640px; border: none; max-width: 100%;" frameborder="0" allowfullscreen allow="xr-spatial-tracking; gyroscope; accelerometer" scrolling="no" src="${urls[view]}"></iframe>`
}
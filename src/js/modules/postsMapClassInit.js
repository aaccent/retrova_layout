import { Map } from "./Map";

export default function postsMapClassInit() {
  if(!document.getElementById('yamapsPosts')) {
    return;
  } else {
    const controls = document.getElementById('maps-controls');
    const btns = document.querySelectorAll('.modal-del-point__results-button');
    const sdekCenter = document.querySelector('.modal-del-point__map[data-sdek-center]')
    const sdekCoords = document.querySelectorAll('.modal-del-point__results-item[data-sdek-coords]');
    let centerCoords,
        coordsArr = [];

    if(sdekCoords.length > 0) {
        coordsArr = Array.from(sdekCoords).map((sdekCoord) => {
            return sdekCoord.dataset.sdekCoords.split(', ');
        })
    }
    
    const mapAccount = new Map('yamapsPosts', {
      // map center:
      center: sdekCenter.dataset.sdekCenter ? sdekCenter.dataset.sdekCenter.split(', ') : [59.956444, 30.301421],

      // map zoom value:
      zoom: 12,

      // placemarks:
      coords: coordsArr,

      // map control elements:
      controls: []
    })

    if(btns.length > 0) {
        btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                const coords = btn.closest('.modal-del-point__results-item').dataset.sdekCoords.split(', ');
                mapAccount.setCenterByCoords(coords);
            })
        })
    }

    if(controls) {
        controls.addEventListener('click', (e) => {
            if(e.target.closest('button')) {
                const buttonId = e.target.closest('button').id;
                if(buttonId === 'custom-zoom-out') {
                    mapAccount.zoomOutHandler();
                } else if( buttonId === 'custom-zoom-in') {
                    mapAccount.zoomInHandler();
                } else if ( buttonId === 'custom-locate') {
                    mapAccount.setGeoLocation();
                } else return;
            }
        })
    }
  }
}

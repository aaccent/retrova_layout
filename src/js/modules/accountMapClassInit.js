import { Map } from "./Map";

export default function accountMapClassInit() {
  if(!document.getElementById('yamapsAccount')) {
    return;
  } else {
    const mapAccount = new Map('yamapsAccount', {
      // map center:
      center: [59.956444, 30.301421],

      // map zoom value:
      zoom: 13,

      // placemarks:
      coords: [],

      // map control elements:
      controls: ['geolocationControl']
    })
  }
}

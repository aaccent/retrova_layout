import { Map } from "./Map";

export default function pickupMapClassInit() {
  if(!document.getElementById('yamapsPickup')) {
    return;
  } else {
    const map = new Map('yamapsPickup', {
      // map center:
      center: [59.956444, 30.301421],

      // map zoom value:
      zoom: 11,

      // placemarks:
      coords: [
        [59.966444, 30.311421]
      ],

      // map control elements:
      controls: []
    })
  }
}

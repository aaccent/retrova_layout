import { Map } from "./Map";

export default function contactsMapClassInit() {

  if(!document.getElementById('yamapsContacts')) {
    return;
  } else {
    const map = new Map('yamapsContacts', {
      // map center:
      center: [59.956444, 30.301421],

      // map zoom value:
      zoom: 13,

      // placemarks:
      coords: [
        [59.966444, 30.311421]
      ],

      // map control elements:
      controls: []
    })
  }
}

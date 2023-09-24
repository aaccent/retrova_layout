import { Map } from "./Map";

export default function postsMapClassInit() {
  if(!document.getElementById('yamapsPosts')) {
    return;
  } else {
    const mapAccount = new Map('yamapsPosts', {
      // map center:
      center: [59.956444, 30.301421],

      // map zoom value:
      zoom: 13,

      // placemarks:
      coords: [],

      // map control elements:
      controls: []
    })
  }
}

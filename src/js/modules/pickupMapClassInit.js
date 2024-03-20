import { Map } from "./Map";

export default function pickupMapClassInit() {
  if(!document.getElementById('yamapsPickup')) {
    return;
  } else {
    const link = document.querySelector('.js-pickup-route');
    const inputs = Array.from(document.querySelectorAll('input[data-pickup-coords]'));

    const coords = inputs.map((input) => {
        return (input.dataset.pickupCoords).split(', ');
    });

    const map = new Map('yamapsPickup', {
      // map center:
      center: [59.956444, 30.301421],

      // map zoom value:
      zoom: 11,

      // placemarks:
      coords: coords,

      // map control elements:
      controls: []
    });

    inputs.forEach((input) => {
      input.addEventListener('input', () => {
        let coords = (input.dataset.pickupCoords).split(', ');
        map.setCenterByCoords(coords);
        link.setAttribute("href", ('https://yandex.ru/maps/?rtext=~' + coords[0].trim()+ ',' + coords[1].trim()));
      })  
    })

    setTimeout(() => {
        inputs[1].parentElement.click();
    }, 1000);

    setTimeout(() => {
        inputs[0].parentElement.click();
    }, 1500);
  }
}

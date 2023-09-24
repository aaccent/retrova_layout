import $ from "jquery";

export class Map {
  constructor(mapId, options) {
    this.mapId = mapId;
    this.options = options;
    this.init();
    this.showInfo();
  }

  async init() {
    await this.injectYMapsScript();
    await this.loadYMaps();
    this.initMap();
  }

  injectYMapsScript() {
    return new Promise((resolve) => {
      const ymapsScript = document.createElement('script');
      ymapsScript.src =
        "https://api-maps.yandex.ru/2.1.68/?apikey=d02525f1-2a0d-4700-a5e1-e4487f06702c&?apikey=d02525f1-2a0d-4700-a5e1-e4487f06702c&load=package.full&lang=ru-RU";
      document.body.appendChild(ymapsScript);
      ymapsScript.addEventListener('load', resolve);
    });
  }

  loadYMaps() {
    return new Promise((resolve) => ymaps.ready(resolve));
  }

  initMap() {
    let geoObjects = [],
      points = this.options.coords,

      getPointData = function (index) {
        return {
          balloonContentHeader: '<font size=3><b><a target="_blank" href="https://yandex.ru">Здесь может быть ваша ссылка</a></b></font>',
          balloonContentBody: '<p>Ваше имя: <input name="login"></p><p>Телефон в формате 2xxx-xxx:  <input></p><p><input type="submit" value="Отправить"></p>',
          balloonContentFooter: '<font size=1>Информация предоставлена: </font> балуном <strong>метки ' + index + '</strong>',
          clusterCaption: 'метка <strong>' + index + '</strong>'
        }
      },

      MyIconLayout = ymaps.templateLayoutFactory.createClass([
        '<div class="ya-placemark">',
          '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64" fill="none">',
            '<circle cx="32" cy="32" r="32" fill="white"/>',
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M25.3191 21.0927C25.2392 21.1774 25.1736 23.5576 25.1736 26.3823V31.5178H24.226C23.1196 31.5178 23.046 31.6505 23.0418 33.6548L23.0391 34.8973H24.1024H25.166L25.2182 39.2211L25.2706 43.5449H27.3081H29.3456L29.4426 39.1714L29.5396 34.7979H30.3802H31.2208L33.3198 38.9726C34.4744 41.2687 35.5137 43.2538 35.6293 43.3839C35.8618 43.6453 39.524 43.6968 39.9228 43.4443C40.0835 43.3425 39.5048 41.9887 38.0081 38.9654C36.8284 36.5823 35.908 34.5579 35.9631 34.4667C36.018 34.3754 36.2224 34.3009 36.4172 34.3009C37.0886 34.3009 39.8654 32.7235 40.3557 32.0636C41.6279 30.3518 41.9801 28.8976 41.6502 26.719C41.2639 24.1691 39.8172 22.4929 37.2027 21.5653C36.0495 21.1564 35.5007 21.111 30.7039 21.0287C27.8223 20.9794 25.399 21.0083 25.3191 21.0927ZM35.4023 25.2062C36.5468 25.5295 37.0975 26.0831 37.4109 27.2256C38.1289 29.8429 36.0883 31.2704 31.4801 31.3744L29.5396 31.4184L29.4862 28.0619L29.4329 24.7056L31.9118 24.813C33.2752 24.8722 34.846 25.0492 35.4023 25.2062Z" fill="#41352B"/>',
          '</svg>',
        '</div>'
      ].join('')),

      getPointOptions = function () {
        return {
          // Опции.
          iconLayout: 'default#imageWithContent',
          // Макет содержимого.
          iconContentLayout: MyIconLayout
        };
      };

    this.clusterer = new ymaps.Clusterer({
      groupByCoordinates: true,
      clusterDisableClickZoom: true,
      clusterOpenBalloonOnClick: false,
    });

    this.clusterer.events.add('click', (e) => {
      const coords = e.get('target').geometry.getCoordinates();
      console.log(coords);
    });

    this.map = new ymaps.Map(this.mapId, {
      center: this.options.center,
      zoom: this.options.zoom,
      controls: this.options.controls,
    });

    // this.map.behaviors.disable('scrollZoom');

    for (var i = 0, len = points.length; i < len; i++) {
      geoObjects[i] = new ymaps.Placemark(points[i], getPointData(i), getPointOptions());
    }

    this.clusterer.add(geoObjects);
    this.map.geoObjects.add(this.clusterer);

    // Создадим пользовательский макет ползунка масштаба.
    let  ZoomLayout = ymaps.templateLayoutFactory.createClass("<div class='ya-scale__btns'>" +
      "<div id='zoom-in' class='btn'><i class='icon-plus'></i></div><br>" +
      "<div id='zoom-out' class='btn'><i class='icon-minus'></i></div>" +
      "</div>", {

      // Переопределяем методы макета, чтобы выполнять дополнительные действия
      // при построении и очистке макета.
      build: function () {
          // Вызываем родительский метод build.
          ZoomLayout.superclass.build.call(this);

          // Привязываем функции-обработчики к контексту и сохраняем ссылки
          // на них, чтобы потом отписаться от событий.
          this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
          this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

          // Начинаем слушать клики на кнопках макета.
          $('#zoom-in').bind('click', this.zoomInCallback);
          $('#zoom-out').bind('click', this.zoomOutCallback);
      },

      clear: function () {
          // Снимаем обработчики кликов.
          $('#zoom-in').unbind('click', this.zoomInCallback);
          $('#zoom-out').unbind('click', this.zoomOutCallback);

          // Вызываем родительский метод clear.
          ZoomLayout.superclass.clear.call(this);
      },

      zoomIn: function () {
        console.log('asd');
        var map = this.getData().control.getMap();
        map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
      },

      zoomOut: function () {
        console.log('asd');
        var map = this.getData().control.getMap();
        map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
      }
    })

    this.zoomControl = new ymaps.control.ZoomControl({options: {layout: ZoomLayout}});

    this.map.controls.add(this.zoomControl, {
      position: {
        bottom: 30,
        right: 10
      }
    });
  }

  showInfo() {
    console.log(this.options);
  }
}

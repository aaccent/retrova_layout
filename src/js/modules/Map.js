import $ from "jquery";

export class Map {
  constructor(mapId, options) {
    this.mapId = mapId;
    this.options = options;
    this.init();
    // this.showInfo();
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
        "https://api-maps.yandex.ru/2.1.68/?apikey=1d478371-a460-4cbc-816d-166582dfc1ae&load=package.full&lang=ru-RU";
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
        return;
      },

      MyIconLayout = ymaps.templateLayoutFactory.createClass([
        '<div class="ya-placemark">',
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">',
            '<circle cx="32" cy="32" r="32" fill="white"/>',
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M25.3191 21.0927C25.2392 21.1774 25.1736 23.5576 25.1736 26.3823V31.5178H24.226C23.1196 31.5178 23.046 31.6505 23.0418 33.6548L23.0391 34.8973H24.1024H25.166L25.2182 39.2211L25.2706 43.5449H27.3081H29.3456L29.4426 39.1714L29.5396 34.7979H30.3802H31.2208L33.3198 38.9726C34.4744 41.2687 35.5137 43.2538 35.6293 43.3839C35.8618 43.6453 39.524 43.6968 39.9228 43.4443C40.0835 43.3425 39.5048 41.9887 38.0081 38.9654C36.8284 36.5823 35.908 34.5579 35.9631 34.4667C36.018 34.3754 36.2224 34.3009 36.4172 34.3009C37.0886 34.3009 39.8654 32.7235 40.3557 32.0636C41.6279 30.3518 41.9801 28.8976 41.6502 26.719C41.2639 24.1691 39.8172 22.4929 37.2027 21.5653C36.0495 21.1564 35.5007 21.111 30.7039 21.0287C27.8223 20.9794 25.399 21.0083 25.3191 21.0927ZM35.4023 25.2062C36.5468 25.5295 37.0975 26.0831 37.4109 27.2256C38.1289 29.8429 36.0883 31.2704 31.4801 31.3744L29.5396 31.4184L29.4862 28.0619L29.4329 24.7056L31.9118 24.813C33.2752 24.8722 34.846 25.0492 35.4023 25.2062Z" fill="#41352B"/>',
          '</svg>',
        '</div>'
      ].join('')),

      getPointOptions = function () {
        return {
          // Опции.
          iconLayout: MyIconLayout,
          // Макет содержимого.
          iconShape: {
          type: 'Circle',
            coordinates: [0, 0],
            radius: window.matchMedia("(max-width: 1024px)").matches ? 20 : 34,
          },
          iconContentLayout: MyIconLayout
        };
      };

    var geolocation = ymaps.geolocation;
    this.geolocation = geolocation;

    this.clusterer = new ymaps.Clusterer({
      groupByCoordinates: true,
      clusterDisableClickZoom: true,
      clusterOpenBalloonOnClick: false,
    });

    this.clusterer.events.add('click', (e) => {
      const coords = e.get('target').geometry.getCoordinates();
      this.map.setCenter(coords, this.map.getZoom(), {duration: 400});
    });

    this.map = new ymaps.Map(this.mapId, {
      center: this.options.center,
      zoom: this.options.zoom,
      controls: this.options.controls,
    },
    {
      searchControlProvider: 'yandex#search'
    }
    );

    this.geolocation.get({
        provider: 'yandex',
        mapStateAutoApply: true
    }).then(function (result) {
        result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
        this.clusterer.add(result.geoObjects);
    });

    this.map.behaviors.disable('scrollZoom');

    for (var i = 0, len = points.length; i < len; i++) {
      geoObjects[i] = new ymaps.Placemark(points[i], {}, getPointOptions());
    }

    this.clusterer.add(geoObjects);
    this.map.geoObjects.add(this.clusterer);

    // Создадим пользовательский макет ползунка масштаба.
    let ZoomLayout = ymaps.templateLayoutFactory.createClass("<div class='ya-scale__btns'>" +
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
        // console.log('asd');
        var map = this.getData().control.getMap();
        map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
      },

      zoomOut: function () {
        // console.log('asd');
        var map = this.getData().control.getMap();
        map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
      }
    })

    this.zoomControl = new ymaps.control.ZoomControl({options: {layout: ZoomLayout}});

    this.map.controls.add(this.zoomControl, {
      position: {
        bottom: '9rem',
        right: '4rem'
      }
    });

    let cityInput = document.getElementById('address-city-1');

    if(cityInput) {
      var suggestView = new ymaps.SuggestView('address-city', {
        results: 5,
        offset: [0, 8]
      });

      cityInput.addEventListener('input', (e) => {
        geocode();
      })

      function geocode() {
        // Забираем запрос из поля ввода.
        var request = $('#suggest').val();
        // Геокодируем введённые данные.
        ymaps.geocode(request).then(function (res) {
            var obj = res.geoObjects.get(0),
              error, hint;
            if (obj) {
                switch (obj.properties.get('metaDataProperty.GeocoderMetaData.precision')) {
                    case 'exact':
                        break;
                    case 'number':
                    case 'near':
                    case 'range':
                        error = 'Неточный адрес, требуется уточнение';
                        hint = 'Уточните номер дома';
                        break;
                    case 'street':
                        error = 'Неполный адрес, требуется уточнение';
                        hint = 'Уточните номер дома';
                        break;
                    case 'other':
                    default:
                        error = 'Неточный адрес, требуется уточнение';
                        hint = 'Уточните адрес';
                }
            } else {
                error = 'Адрес не найден';
                hint = 'Уточните адрес';
            }

            // Если геокодер возвращает пустой массив или неточный результат, то показываем ошибку.
            if (error) {
                // showError(error);
            } else {
                // showResult(obj);
            }
        }, function (e) {
            console.log(e)
        })
      }
    }
  }

  showInfo() {
    console.log(this.options);
  }

  setCenterByCoords(coords) {
    this.map.setCenter(coords, this.map.getZoom(), {duration: 400});
  }

  zoomInHandler() {
    this.map.setZoom(this.map.getZoom() + 1, {checkZoomRange: true});
  }

  zoomOutHandler() {
    this.map.setZoom(this.map.getZoom() - 1, {checkZoomRange: true});
  }

  setGeoLocation() {
    this.geolocation.get({        
        provider: 'yandex',
		mapStateAutoApply: true
	})
		.then(
            function(result) {
                var userCoodinates = result.geoObjects.get(0).geometry.getCoordinates();
                this.map.setCenter(userCoodinates, this.map.getZoom(), {duration: 400});
            },
            function(err) {
                console.log('Ошибка: ' + err)
            }
		);
  }
}

import TileLayer from "ol/layer/Tile";
import OSMSource from "ol/source/OSM";
import XYZ from "ol/source/XYZ";

const layers = [
  {
    id: "Humanitarian",
    title: new TileLayer({
      source: new OSMSource({
        url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
        visible: false,
        opacity: 1,
      }),
    }),
  },

  {
    id: "Watercolour",
    title: new TileLayer({
      source: new XYZ({
        url: "https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",
        attributions:
          'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
      }),
      visible: false,
      opacity: 1,
    }),
  },

  {
    id: "Terrain",
    title: new TileLayer({
      source: new XYZ({
        url: "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
        attributions:
          'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
      }),
      visible: false,
      opacity: 1,
    }),
  },
  {
    id: "CartoDB",
    title: new TileLayer({
      source: new XYZ({
        url: "http://{1-4}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png",
        visible: false,
        opacity:1,
      })
    })
  }
];

export default layers;

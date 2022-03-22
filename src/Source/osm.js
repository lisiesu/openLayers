import OSMSource from "ol/source/OSM";

function osm({url, attributions}) {
    return new OSMSource({url, attributions});
}

export default osm;
import XYZ from "ol/source/XYZ";

function xyz({url, attributions}) {
    return new XYZ({url, attributions})
}

export default xyz;
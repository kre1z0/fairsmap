import sGis from '../assets/sgis';

let layerManager;
const getLayerManager = (connector, map) => {
    if ((!connector || !map) && !layerManager) return null;
    if (layerManager) return layerManager;

    layerManager = new sGis.sp.LayerManager(connector, map);
    return layerManager;
};

export default getLayerManager;

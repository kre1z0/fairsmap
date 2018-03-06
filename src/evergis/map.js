let initedSGis;

const getMap = ({ wrapper = document.createElement('div'), position, resolution }) => {
    if (initedSGis) {
        if (resolution && wrapper && position) {
            initedSGis.map.resolution = resolution;
            initedSGis.map.position = position;
            initedSGis.painter.wrapper = wrapper;
        }
        return initedSGis.map;
    }

    initedSGis = sGis.init({
        wrapper,
        position,
        resolution,
        plugins: [{ name: 'ZoomButtons' }],
    });

    return initedSGis.map;
};

export default getMap;

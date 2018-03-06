export const OBJECTS_SERVICE = 'sber_objects';

let current = {
    feature: null,
    layer: null,
};

export const clickOnMap = e => {
    current.feature && current.feature.clearTempSymbol();
    current.layer && current.layer.redraw();
};

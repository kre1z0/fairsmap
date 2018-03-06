import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Map from '../../components/Map/Map';
import { clickOnMap, OBJECTS_SERVICE } from '../../evergis/helpers';
import getLayerManager from '../../evergis/layer-manager';
import { features } from '../../testData';
import styles from './MapContainer.scss';

class MapContainer extends Component {
    state = {
        center: [37.626279, 55.739145],
    };

    componentDidMount() {
        //DG.FloorsWidget.init({
        //    container: 'root',
        //    width: '100%',
        //    height: '100%',
        //    initData: {
        //        complexId: '141373143573143',
        //    },
        //});
        //console.log('--> features', features);
        //const layerManager = getLayerManager();
        //const sber_service = layerManager.getService(OBJECTS_SERVICE);
    }

    onMapClick = e => {
        clickOnMap();
    };

    render() {
        const { center } = this.state;

        return (
            <div className={styles.mapContainer}>
                <Map
                    center={center}
                    //resolution={map.resolution}
                    //onCenterChange={setCenter}
                    //onResolutionChange={setResolution}
                    onMapClick={this.onMapClick}
                />
            </div>
        );
    }
}

export default MapContainer;

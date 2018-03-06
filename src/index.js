import React from 'react';
import ReactDOM from 'react-dom';

import MapContainer from './containers/MapContainer/MapContainer';
import styles from './scss/main.scss';

ReactDOM.render(<MapContainer />, document.getElementById('root'));

module.hot.accept();

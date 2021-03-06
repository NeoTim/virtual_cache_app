import React, {PropTypes, Component} from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import GoogleMap from 'google-map-react';
import MapMarker from './MapMarker.js';
import {GMapStyle} from '../styles/GMapStyle.js';

 const API_KEY = 'AIzaSyCkxJlKBChQSWZnA2W-9AXH1swCLI_cIC0';
// const API_KEY = require('../../env.js').API_KEY;

export default class GMap extends Component {
	static defaultProps = {
		center: {lng: -118.2851, lat: 34.0224},
		zoom: 0
	};

	shouldComponentUpdate = shallowCompare;

	constructor(props, context) {
		super(props);
		//console.log('Gmap', props);
	}
	render() {
		let markerArray = null;
		if(this.props.markers.length !== 0 )
		{			markerArray= this.props.markers.map(m =>{
				return(<MapMarker
				key={m._id}
				name={m._id}
				lng={m.loc[0]}
				lat={m.loc[1]} />);
		});
		//console.log("markerarray", markerArray);
		}
		return (
			<div style={GMapStyle}  >
				<GoogleMap
					bootstrapURLKeys={{key:API_KEY, language:'en'}}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					onChildClick={this.props.onMarkerClick}>
					{markerArray}
				</GoogleMap>
			</div>
		);
	}
}

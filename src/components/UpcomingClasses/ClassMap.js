import React from 'react'
import GoogleMapReact from 'google-map-react';


import {getGoogleApi} from "../../utils/mapper"

const mapApi = getGoogleApi()

const AnyReactComponent = ({ text }) => <div style={{color: "#fb6594", fontSize: "12px"}}className="map-marker">{text}
  </div>;

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: parseFloat(mapApi.lat),
      lng: parseFloat(mapApi.lng),
      isBrowser: mapApi.isBrowser,
      address: mapApi.address,
      language: "en"
    },
    zoom: 11,
    key: mapApi.api_key,
  };
 
render() {
    return (
      <div style={{ height: '100%', width: '100%', margin: "0 auto" }} className="google-map">
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals
          bootstrapURLKeys={{ key: this.props.key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          language={this.props.language}
        >
          <AnyReactComponent
            lat={parseFloat(mapApi.lat)}
            lng={parseFloat(mapApi.lng)}
            text="Monticello Vineyards"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default SimpleMap;

import React from 'react'
import ReactMapboxGl, { Layer, Feature, ZoomControl, Marker } from 'react-mapbox-gl'
import Office from './../public/marker.png'

const Map = ReactMapboxGl({
    accessToken : process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
})

export const MapCompany = () => {
    return(
        <Map 
        style="mapbox://styles/mapbox/light-v10"
        center={[107.613198, -6.904671]}
        zoom={[16]}
        containerStyle={{
          height: '250px',
          width: '350px',
          borderRadius:'5%'
        }} >
            <ZoomControl/>
            <Marker
            coordinates={[107.613198, -6.904671]}
            anchor='bottom'>
                <img alt='marker' src={Office} width={20}/>

            </Marker>
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[107.613198, -6.904671]} />
            </Layer>
        </Map>
    )
}
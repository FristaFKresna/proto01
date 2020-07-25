import React from 'react'
import ReactMapboxGl, { Layer, Feature, ZoomControl } from 'react-mapbox-gl'

const Map = ReactMapboxGl({
    accessToken : ''
})

export const MapCompany = () => {
    return(
        <Map 
        style="mapbox://styles/mapbox/light-v10"
        containerStyle={{
          height: '300px',
          width: '500px'
        }} >
            <ZoomControl/>
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-6.904671, 107.613198]} />
            </Layer>
        </Map>
    )
}
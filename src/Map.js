import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('./images/marker-icon-2x.png'),
    iconUrl: require('./images/marker-icon.png'),
    shadowUrl: require('./images/marker-shadow.png')
  });

function Map() {

    const markers= [
        {position:[-1.1845463,36.8973349], text:"Skyfall lounge", icon:'markers-icon.png' },
        {position:[-1.044816,37.080175], text:"E-Hub Gaming" },
        {position:[-1.3466284,36.8505029], text:"Xcalibour's lounge" },
        {position:[-1.3409855,36.7156086], text:"Trench Town Entertainment" },
        {position:[-1.2744229,36.820269], text:"Game Loft Studios" },
        {position:[-1.390658,36.7676568], text:"The cruise gamers" },
        {position:[-1.2091276,36.7761866], text:"Amigos Gaming lounge" },
        {position:[-1.2189666,36.6936239], text:"Gravity ENTERTAINMENT" },
        {position:[-1.2142561,36.9063676], text:"Horizon Esports Den" },
        {position:[-1.2834139,36.821622], text:"Game masters" },
        {position:[-1.2820677,36.8200299], text:"Biggys gaming" },
        {position:[-1.1886684,36.8984695], text:"Sonic" },
        {position:[-1.284349,36.82037], text:"Buggys gaming" },
        {position:[-1.2842339,36.8226676], text:"Tric Gaming" },
        {position:[-1.216871,36.8500258], text:"Ashhublimited" },
        {position:[-1.1886684,36.8984695], text:"PLATINUM GAMING HUB" },
        {position:[-1.1886684,36.8984695], text:"Supermax" },
        {position:[-1.2875,36.9497557], text:"Sungura" },
        {position:[-1.2257908,36.887666], text:"Afrik Gaming cafe" },
        {position:[-1.3912137,36.9404585], text:"Centric Gaming" },
        {position:[-1.2913808,36.8227486], text:"TUK ARENA" },
        {position:[-1.275305,36.8486096], text:"Las Vegas gaming centre" },
        {position:[-1.2477401,36.8704068], text:"El Jefe Gaming Hub" },
        {position:[-1.2835564,36.8494732], text:"The Den" },
        {position:[-1.2017712,36.9230897], text:"quest" },
        {position:[-1.0467451,37.0903306], text:"Santiago Gaming Lounge (SGL)" },
        {position:[-1.2094746,36.9021287], text:"Urban Kings Gaming Lounge" },
        {position:[-1.3155414,36.8036002], text:"ItoizGaming" },
        {position:[-1.2907412,36.8606582], text:"Bush bites gaming lounge" }
    ];



  return (
    <MapContainer center={[-1.3031508,36.3058973]} zoom={13} style={{ height: "100vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map(marker=>(
        <Marker position={marker.position}>
        <Popup>
          <div>{marker.text}</div>
        </Popup>
      </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
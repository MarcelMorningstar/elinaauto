import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';

export default function Map() {
    const customIcon = new Icon({
        iconUrl: '/mapicon.png',
        iconSize: [38, 38],
        iconAnchor: [19, 38]
    })

    return (
        <MapContainer className="w-full h-full rounded-3xl" center={[ 56.50164, 27.31949 ]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker className='relative' position={[ 56.50164, 27.31949 ]} icon={customIcon}></Marker>
        </MapContainer>
    )
}

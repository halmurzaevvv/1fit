import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMapEvents } from "react-leaflet/hooks";
import "./Map.css";
import { LayersControl, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import React from "react";
import { Box } from "@mui/material";

const Map = () => {
  const position = [42.871413, 74.587144];

  return (
    <div>
      <Box>
        <MapContainer
          center={[42.869534, 74.606624]}
          zoom={13}
          scrollWheelZoom={true}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <div className="map-btn">
            <LayersControl
              position="topright"
              sx={{
                mt: 5,
              }}
            >
              <LayersControl.BaseLayer checked name="Basic Map">
                <TileLayer
                  attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="Topo Map">
                <TileLayer
                  attribution='Map data: &amp;copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &amp;copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                  url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                />
              </LayersControl.BaseLayer>
            </LayersControl>
          </div>
          <Marker position={position}>
            <Popup>
              ProFitnessAMG <br />
              Фитнес-клуб ProFitnessAMG это современный, комфортный тренажерный
              зал с новейшим профессиональным оборудованием последнего
            </Popup>
          </Marker>
          <Marker position={[42.875036, 74.600455]}>
            <Popup>
              Mind Of Body <br /> Фитнес клуб Mind Of Body на Наурызбай батыра -
              атмосферный фитнес-центр для тех, кто готов стать лучшей версией
              себя. Клуб расположен в центре города,
            </Popup>
          </Marker>
          <Marker position={[42.87859, 74.571112]}>
            <Popup>
              Urban Gym <br /> Urban Gym – современный тренажерный зал площадью
              1400 кв.м, оснащен большим выбором тренажеров от мировых фирм
              производителей. В зале работает
            </Popup>
          </Marker>
          <Marker position={[42.861603, 74.586975]}>
            <Popup>
              Endurance Almaty <br /> Фитнес клуб Endurance Almaty - зал
              площадью 2400 кв. м., рабочая площадь зала 1500 кв. метров. Фишка
              клуба - авторская программа Endurance, направленная на
            </Popup>
          </Marker>
          <Marker position={[42.865167, 74.55504]}>
            <Popup>
              Sport Complex Qazaqstan <br /> Sport Complex Qazaqstan - комплекс
              с историей более 35 лет, сегодня это полноценный фитнес клуб
              семейного типа с бассейном, сауной, тренажерным залом, и
            </Popup>
          </Marker>
          <Marker position={[42.886545, 74.626597]}>
            <Popup>
              Pyramid Center Бассейн <br /> Бассейн Pyramid Pool в Аксае длиной
              25 и шириной 7 метров, температура воды 28 градусов, подогреваемый
              и нескользящий пол. В бассейне имеется сауна хамам,
            </Popup>
          </Marker>
          <Marker position={[42.843756, 74.568031]}>
            <Popup>
              SK FITNESS <br /> Спортивный комплекс SK FITNESS - это бассейн с
              многоступенчатой системой очистки, теплой водой, удобными
              раздевалками и чистыми душевыми.
            </Popup>
          </Marker>
          <Marker position={[42.846446, 74.634835]}>
            <Popup>
              In Clover YDF <br /> Студия In CLOVER на Курмангазы -
              многофункциональный центр развития личности, тела и души. In
              Clover YDF предлагает для вас широкий выбор
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
    </div>
  );
};

export default Map;

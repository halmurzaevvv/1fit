import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import "./Map.css";
import { LayersControl, Marker, Popup, ZoomControl } from "react-leaflet";
import React from "react";
import { Box } from "@mui/material";

const Map = () => {
  const position = [42.871413, 74.587144];

  // {
  //    AudioProcessingEvent.map((item) => (
  //   <Pointer position={item.coordinates>
  //     <Popup>
  //       {item.title}
  //       <Link to={`{API_PRODUCTS/details/${item.id}`}>
  //       ПОДРОБНЕЕ
  //       </Link>
  //     </Popup>
  //   }
  //    ))
  //   }

  return (
    <div>
      <Box>
        <MapContainer
          center={[42.871413, 74.587144]}
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
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
    </div>
  );
};

export default Map;

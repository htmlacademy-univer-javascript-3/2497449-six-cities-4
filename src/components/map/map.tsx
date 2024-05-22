import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';

import useMap from './map-use';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/offers';
import { useAppSelector } from '../../hooks';


const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';

type MapData = {
  offers: Offer[];
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


function Map({ offers }: MapData): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);
  const selectedPoint: null | { title: string } = useAppSelector(
    (state) => state.selectedPoint
  );
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((point) => {

        const marker = new Marker({
          lat: point.city.location.latitude,
          lng: point.city.location.longitude,
        });
        marker
          .setIcon(
            selectedPoint !== null && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });


      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedPoint]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;

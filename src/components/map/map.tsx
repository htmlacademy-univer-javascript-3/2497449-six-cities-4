import {useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from './map-use';
import { Offer} from '../../types/offers';
import { MapClasses } from '../../const';
import { City } from '../../types/offers';


import {Icon, Marker} from 'leaflet';

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';

type MapData = {
  offers: Offer[];
  activeCard: number;
  isMainScreen: boolean;
  city: City;

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


export default function Map(props: MapData): JSX.Element {
  const {offers, activeCard, isMainScreen, city} = props;


  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer: Offer) => {
        const marker = new Marker({
          lat: offer.city.latitude,
          lng: offer.city.longitude,
        });

        marker.setIcon(
          activeCard !== undefined && offer.id === activeCard.toString()
            ? currentCustomIcon
            : defaultCustomIcon
        )
          .addTo(map);
      });
    }
  }, [map, offers, activeCard]);

  useEffect(() => {
    if (map) {
      map.flyTo([city.latitude, city.longitude], city.zoom);
    }
  }, [map, city]);

  return (
    <section className={isMainScreen ? MapClasses.SectionMainMapClass : MapClasses.SectionPropertyMapClass} ref={mapRef}></section>
  );
}

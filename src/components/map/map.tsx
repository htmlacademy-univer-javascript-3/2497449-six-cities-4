import {useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from './map-use';
import { Offer} from '../../types/offers';
import { MapClasses } from '../../const';

import {Icon, Marker} from 'leaflet';

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

type MapData = {
  offers: Offer[];
  activeCard: number;
  isMainScreen: boolean;
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
  const {offers, activeCard, isMainScreen} = props;


  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0].city);

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

  return (
    <section className={isMainScreen ? MapClasses.SectionMainMapClass : MapClasses.SectionPropertyMapClass} ref={mapRef}></section>
  );
}

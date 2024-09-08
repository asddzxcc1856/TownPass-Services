import { defineStore } from 'pinia';
import data from '@/assets/jsons/attractions.json';

export const useAttractionStore = defineStore('attractions', () => {
  /*
    這裡的 key 是 景點的 id，value 是 json 裡景點的資料
   */

  function Rad(d: any) {
    return (d * Math.PI) / 180.0;
  }
  const attractions = data.data;

  const attractionsByName = new Map<string, object>();

  const initAttr = () => {
    attractions.forEach((a) => {
      attractionsByName.set(a.name, a);
    });
  };

  const recommand = (lat: number, lon: number, radius: number) => {
    const Ids: string[] = [];
    for (let i = 0; i < attractions.length; i++) {
      const lat_: number = Rad(lat) - Rad(attractions[i].nlat);
      const lon_: number = Rad(lon) - Rad(attractions[i].elong);

      let distance =
        2 *
        Math.asin(
          Math.sqrt(
            Math.pow(Math.sin(lat_ / 2), 2) +
              Math.cos(Rad(lat)) *
                Math.cos(Rad(attractions[i].nlat)) *
                Math.pow(Math.sin(lon_ / 2), 2)
          )
        );
      distance = distance * 6378.137;
      distance = Math.round(distance * 10000) / 10000;

      if (distance < radius) {
        Ids.push(attractions[i].name);
      }
    }

    return Ids;
  };

  const recommandByNames = (name: string, radius: number) => {
    const a = attractionsByName.get(name);
    const lat = a.nlat;
    const lng = a.elong;

    return recommand(lat, lng, radius);
  };

  return {
    attractions,
    recommand,
    recommandByNames,
    initAttr
  };
});

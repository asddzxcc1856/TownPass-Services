<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useGoogleMapsStore } from '../stores/googleMaps';
import { useAttractionStore } from '../stores/attraction';
import BaseDialog from './atoms/BaseDialog.vue';
import { useRoute, useRouter } from 'vue-router';

const googleMapsStore = useGoogleMapsStore();

const router = useRouter();

function navigateToSchedule(attractionId: string, introduction: string) {
  router.push({
    path: '/schedules',
    query: {
      attractionId: attractionId,
      introduction: introduction
    }
  });
}

const loader = googleMapsStore.loader;
const route = useRoute();

const attractionsStore = useAttractionStore();
let map: google.maps.Map;

const markers = new Array<google.maps.marker.AdvancedMarkerElement>();

const isMapDialogOpen = ref(false);
let currentInfoWindow;

const initMap = async () => {
  let position = { lat: 25.026935204396278, lng: 121.55169233679771 };
  /* let r = googleMapsStore.gettingPosition();
  if (r) {
    r.then((p) => {
      position = { lat: p.coords.latitude, lng: p.coords.latitude };
    }).catch(() => {
      position = { lat: 25.026935204396278, lng: 121.55169233679771 };
    });
  } else {
    position = { lat: 25.026935204396278, lng: 121.55169233679771 };
  } */

  const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
  const { AdvancedMarkerElement } = (await google.maps.importLibrary(
    'marker'
  )) as google.maps.MarkerLibrary;

  // 確保 Google Maps API 已經正確載入
  await loader.load();

  // 初始化地圖
  map = new Map(document.getElementById('map') as HTMLElement, {
    mapId: '71e4c197f6c5dc24',
    center: position,
    zoom: 12
  });

  // 使用 AdvancedMarkerElement 為每個 attraction 創建標記
  attractionsStore.attractions.forEach((attraction) => {
    if (attraction.distric !== route.query.region) {
      return;
    }

    let exist = false;
    attraction.category.forEach((c) => {
      if (route.query.category === c.name) {
        exist = true;
      }
    });

    if (!exist) {
      return;
    }

    exist = false;
    if (route.query.friendlyFilter?.length === 0) {
      exist = true;
    } else {
      attraction.friendly.forEach((f) => {
        if (route.query.friendlyFilter?.indexOf(f.name) !== -1) {
          exist = true;
        }
      });
    }
    if (!exist) {
      return;
    }

    exist = false;
    if (route.query.publicFilter?.length === 0) {
      exist = true;
    } else {
      attraction.service.forEach((s) => {
        if (route.query.publicFilter?.indexOf(s.name) !== -1) {
          exist = true;
        }
      });
    }
    if (!exist) {
      return;
    }

    exist = false;
    if (route.query.targetFilter?.length === 0) {
      exist = true;
    } else {
      attraction.target.forEach((t) => {
        if (route.query.targetFilter?.indexOf(t.name) !== -1) {
          exist = true;
        }
      });
    }
    if (!exist) {
      return;
    }

    // 使用 Array.map() 生成圖片 HTML
    const imagesHtml = attraction.images
      .slice(0, 3)
      .map((image) => `<img src="${image.src}" class="m-2" style="width: 100%" alt="attraction image"/>`)
      .join('');

    const addSchedule = () => {
      router.push({
        name: 'schedules',
        query: {
          attractionId: attraction.name,
          introduction: attraction.introduction
        }
      });
    };
    // Replace the `onclick` handler in `InfoWindow` with a direct function call
    const infowindow = new google.maps.InfoWindow({
      headerContent: attraction.name,
      content: `
    <div class="font-sans text-center justify-center">
      <button id="add-schedule-btn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded shadow-lg transition duration-300 ease-in-out">
        加入行程
      </button>
      <hr class="m-2" />
      <p>${attraction.introduction}</p>
      <hr class="m-2" />
      ${imagesHtml}
    </div>`
    });


    const content = document.createRange().createContextualFragment(`
    <div class="custom-marker">
      <img src="${new URL('@/assets/images/attraction.svg', import.meta.url).href}" style="width: 30px; height: 30px;" alt="attraction icon"/>
    </div>
  `);

    const marker = new AdvancedMarkerElement({
      zIndex: 1,
      map: map,
      position: { lat: attraction.nlat, lng: attraction.elong }, // 使用 attraction 的經緯度
      title: attraction.name,
      // 自定義標記的圖標
      gmpDraggable: false,
      content: content
    });

    // Add click event listener to each marker
    // Open the InfoWindow and attach event listeners when a marker is clicked
    marker.addListener('click', () => {
      if (currentInfoWindow) {
        currentInfoWindow.close();
      }

      infowindow.open(map, marker);
      currentInfoWindow = infowindow;

      // Attach the event listener after the InfoWindow content is rendered
      google.maps.event.addListenerOnce(infowindow, 'domready', () => {
        const addButton = document.getElementById('add-schedule-btn');
        if (addButton) {
          addButton.addEventListener('click', () => {
            navigateToSchedule(attraction.name, attraction.introduction);
          });
        }
      });
    });

    markers.push(marker); // 將標記添加到陣列中
  });
};

onMounted(() => {
  initMap();
});
</script> 

<template>
  <section
    class="google-maps flex flex-col overflow-hidden bg-[rgb(16,22,79)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
  >
    <!-- 主內容區域，顯示主要信息。 -->
    <div class="min-h-[600px] bg-white">
      <div id="map" style="height: 600px"></div>
      <!-- <button @click="initMap">重新初始化地圖</button> -->
    </div>
    <!-- 次要內容區域，顯示其他信息。 -->
  </section>
  <BaseDialog
    v-model="isMapDialogOpen"
    title="是否要開啟 Google Map"
    content="開啟 Google Maps APP 導航?"
    :isAlert="true"
    positiveText="開啟"
    negativeText="取消"
  />
</template>

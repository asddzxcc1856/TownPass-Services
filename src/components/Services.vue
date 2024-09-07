<script setup>
import { ref, reactive } from 'vue';
import { useRoute, useRouter, RouterLink } from 'vue-router';

const route = useRoute();

const router = useRouter();

const friendlyFilter = ref({
  options: [],
  isEmpty: true
});

const publicFilter = ref({
  options: [],
  isEmpty: true
});

const otherFilter = ref({
  options: [],
  isEmpty: true
});

const clearFriendlyFilters = () => {
  friendlyFilter.value.options = [];
  friendlyFilter.value.isEmpty = true;
};

const clearPublicFilters = () => {
  publicFilter.value.options = [];
  publicFilter.value.isEmpty = true;
};

const clearOtherFilters = () => {
  otherFilter.value.options = [];
  otherFilter.value.isEmpty = true;
};

const handleClick = () => {
  router.push({
    name: 'map',
    query: {
      region: route.query.region,
      category: route.query.category,
      friendlyFilter: friendlyFilter.value.options,
      publicFilter: publicFilter.value.options,
      otherFilter: otherFilter.value.options
    }
  });
};

const handleFriendlyClickFilter = (option) => {
  if (friendlyFilter.value.options.includes(option)) {
    friendlyFilter.value.options = friendlyFilter.value.options.filter((item) => item !== option);
  } else {
    friendlyFilter.value.options.push(option);
    friendlyFilter.value.isEmpty = false;
  }
};

const handlePublicClickFilter = (option) => {
  if (publicFilter.value.options.includes(option)) {
    publicFilter.value.options = publicFilter.value.options.filter((item) => item !== option);
  } else {
    publicFilter.value.options.push(option);
    publicFilter.value.isEmpty = false;
  }
};

const handleOtherClickFilter = (option) => {
  if (otherFilter.value.options.includes(option)) {
    otherFilter.value.options = otherFilter.value.options.filter((item) => item !== option);
  } else {
    otherFilter.value.options.push(option);
    otherFilter.value.isEmpty = false;
  }
};
</script>

<template>
  <main
    class="services flex flex-col overflow-hidden bg-[rgb(16,22,79)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
  >
    <section class="flex flex-col">
      <!-- Main section for friendly services options provided. -->

      <div class="mx-4 mt-4 flex flex-col rounded-[25px] bg-white">
        <!-- Grid layout for displaying various friendly service options. -->

        <div class="mx-[29px] mt-[21px] mb-6 flex flex-col items-center justify-center gap-y-[9px]">
          <div
            class="font-sans ml-1.5 flex w-36 items-center justify-center text-center text-[24px] font-normal leading-[0.91] text-black"
          >
            <!-- Title for the section detailing friendly service choices. -->
            友善服務選擇
          </div>
          <div class="flex gap-x-2.5 tn-xs:items-start tn-xs:justify-center">
            <!-- First row of service buttons. -->

            <button
              @click="clearFriendlyFilters"
              :class="{
                'bg-[rgb(217,217,217)]': friendlyFilter.isEmpty === false,
                'bg-[rgb(135,243,140)]': friendlyFilter.isEmpty === true
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for &#x27;No&#x27; service option. -->
              無特定需求
            </button>
            <button
              @click="handleFriendlyClickFilter('英語友善')"
              :class="{
                'bg-[rgb(135,243,140)]': friendlyFilter.options.includes('英語友善'),
                'bg-[rgb(217,217,217)]': !friendlyFilter.options.includes('英語友善')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for English friendly option. -->
              英語友善
            </button>
          </div>
          <div class="flex gap-x-2.5 tn-xs:items-center tn-xs:justify-center">
            <!-- Second row of service buttons. -->

            <button
              @click="handleFriendlyClickFilter('日語友善')"
              :class="{
                'bg-[rgb(135,243,140)]': friendlyFilter.options.includes('日語友善'),
                'bg-[rgb(217,217,217)]': !friendlyFilter.options.includes('日語友善')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for Japanese friendly option. -->
              日語友善
            </button>
            <button
              @click="handleFriendlyClickFilter('韓語友善')"
              :class="{
                'bg-[rgb(135,243,140)]': friendlyFilter.options.includes('韓語友善'),
                'bg-[rgb(217,217,217)]': !friendlyFilter.options.includes('韓語友善')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for Korean friendly option. -->
              韓語友善
            </button>
          </div>
          <div class="flex gap-x-2.5 tn-xs:items-center tn-xs:justify-center">
            <!-- Third row of service buttons. -->

            <button
              @click="handleFriendlyClickFilter('行動裝置充電')"
              :class="{
                'bg-[rgb(135,243,140)]': friendlyFilter.options.includes('行動裝置充電'),
                'bg-[rgb(217,217,217)]': !friendlyFilter.options.includes('行動裝置充電')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for mobile charging service. -->
              行動裝置充電
            </button>
            <button
              @click="handleFriendlyClickFilter('寵物友善')"
              :class="{
                'bg-[rgb(135,243,140)]': friendlyFilter.options.includes('寵物友善'),
                'bg-[rgb(217,217,217)]': !friendlyFilter.options.includes('寵物友善')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for pet-friendly service. -->
              寵物友善
            </button>
          </div>
          <div class="flex gap-x-2.5 tn-xs:items-center tn-xs:justify-center">
            <!-- Fourth row of service buttons. -->

            <button
              @click="handleFriendlyClickFilter('無障礙友善')"
              :class="{
                'bg-[rgb(135,243,140)]': friendlyFilter.options.includes('無障礙友善'),
                'bg-[rgb(217,217,217)]': !friendlyFilter.options.includes('無障礙友善')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for accessibility-friendly service. -->
              無障礙友善
            </button>
            <button
              @click="handleFriendlyClickFilter('性別友善')"
              :class="{
                'bg-[rgb(135,243,140)]': friendlyFilter.options.includes('性別友善'),
                'bg-[rgb(217,217,217)]': !friendlyFilter.options.includes('性別友善')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for gender-friendly service. -->
              性別友善
            </button>
          </div>
          <div class="flex gap-x-2.5 tn-xs:items-center tn-xs:justify-center">
            <!-- Fifth row of service buttons. -->

            <button
              @click="handleFriendlyClickFilter('第三方支付')"
              :class="{
                'bg-[rgb(135,243,140)]': friendlyFilter.options.includes('第三方支付'),
                'bg-[rgb(217,217,217)]': !friendlyFilter.options.includes('第三方支付')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for third-party payment option. -->
              第三方支付
            </button>
            <button
              @click="handleFriendlyClickFilter('素食友善')"
              :class="{
                'bg-[rgb(135,243,140)]': friendlyFilter.options.includes('素食友善'),
                'bg-[rgb(217,217,217)]': !friendlyFilter.options.includes('素食友善')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for vegan-friendly option. -->
              素食友善
            </button>
          </div>
          <div class="flex gap-x-2.5 tn-xs:items-center tn-xs:justify-center">
            <!-- Sixth row of service buttons. -->

            <button
              @click="handleFriendlyClickFilter('友善廁所')"
              :class="{
                'bg-[rgb(135,243,140)]': friendlyFilter.options.includes('友善廁所'),
                'bg-[rgb(217,217,217)]': !friendlyFilter.options.includes('友善廁所')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for friendly restroom option. -->
              友善廁所
            </button>
            <button
              @click="handleFriendlyClickFilter('公平貿易商品')"
              :class="{
                'bg-[rgb(135,243,140)]': friendlyFilter.options.includes('公平貿易商品'),
                'bg-[rgb(217,217,217)]': !friendlyFilter.options.includes('公平貿易商品')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for fair trade products. -->
              公平貿易商品
            </button>
          </div>
          <div class="flex gap-x-2.5 tn-xs:items-center tn-xs:justify-center">
            <!-- Seventh row of service buttons. -->

            <button
              @click="handleFriendlyClickFilter('WiFi友善')"
              :class="{
                'bg-[rgb(135,243,140)]': friendlyFilter.options.includes('WiFi友善'),
                'bg-[rgb(217,217,217)]': !friendlyFilter.options.includes('WiFi友善')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for WiFi-friendly option. -->
              WiFi友善
            </button>
            <button
              @click="handleFriendlyClickFilter('自行車友善')"
              :class="{
                'bg-[rgb(135,243,140)]': friendlyFilter.options.includes('自行車友善'),
                'bg-[rgb(217,217,217)]': !friendlyFilter.options.includes('自行車友善')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for bicycle-friendly service. -->
              自行車友善
            </button>
          </div>
          <div class="flex gap-x-2.5 tn-xs:items-center tn-xs:justify-center">
            <!-- Eighth row of service buttons. -->

            <button
              @click="handleFriendlyClickFilter('哺(集)乳友善')"
              :class="{
                'bg-[rgb(135,243,140)]': friendlyFilter.options.includes('哺(集)乳友善'),
                'bg-[rgb(217,217,217)]': !friendlyFilter.options.includes('哺(集)乳友善')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for nursing friendly option. -->
              哺(集)乳友善
            </button>
            <button
              @click="handleFriendlyClickFilter('穆斯林友善')"
              :class="{
                'bg-[rgb(135,243,140)]': friendlyFilter.options.includes('穆斯林友善'),
                'bg-[rgb(217,217,217)]': !friendlyFilter.options.includes('穆斯林友善')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for Muslim-friendly service. -->
              穆斯林友善
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col">
      <!-- Section for selecting public services available -->

      <div class="mx-4 mt-[23px] flex flex-col rounded-[25px] bg-white">
        <!-- Container for public services buttons -->

        <div class="my-[21px] mx-[29px] flex flex-col items-center justify-center gap-y-[9px]">
          <h2
            class="font-sans ml-1.5 flex w-36 items-center justify-center text-center text-[24px] font-normal leading-[0.91] text-black"
          >
            <!-- Title for the public services section -->
            公共服務選擇
          </h2>
          <div class="flex gap-x-2.5 tn-xxs:items-center tn-xxs:justify-center">
            <button
              @click="clearPublicFilters"
              :class="{
                'bg-[rgb(217,217,217)]': publicFilter.isEmpty === false,
                'bg-[rgb(135,243,140)]': publicFilter.isEmpty === true
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for selecting &#x27;None&#x27; service -->
              無特定需求
            </button>
            <button
              @click="handlePublicClickFilter('無障礙設施')"
              :class="{
                'bg-[rgb(135,243,140)]': publicFilter.options.includes('無障礙設施'),
                'bg-[rgb(217,217,217)]': !publicFilter.options.includes('無障礙設施')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for selecting Accessibility Facilities service -->
              無障礙設施
            </button>
          </div>
          <div class="flex gap-x-2.5">
            <button
              @click="handlePublicClickFilter('DIY服務')"
              :class="{
                'bg-[rgb(135,243,140)]': publicFilter.options.includes('DIY服務'),
                'bg-[rgb(217,217,217)]': !publicFilter.options.includes('DIY服務')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for selecting DIY services -->
              DIY服務
            </button>
            <button
              @click="handlePublicClickFilter('場地租用')"
              :class="{
                'bg-[rgb(135,243,140)]': publicFilter.options.includes('場地租用'),
                'bg-[rgb(217,217,217)]': !publicFilter.options.includes('場地租用')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for selecting Venue Rental service -->
              場地租用
            </button>
          </div>
          <div class="flex gap-x-2.5">
            <button
              @click="handlePublicClickFilter('餐飲')"
              :class="{
                'bg-[rgb(135,243,140)]': publicFilter.options.includes('餐飲'),
                'bg-[rgb(217,217,217)]': !publicFilter.options.includes('餐飲')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for selecting Dining service -->
              餐飲
            </button>
            <button
              @click="handlePublicClickFilter('購物')"
              :class="{
                'bg-[rgb(135,243,140)]': publicFilter.options.includes('購物'),
                'bg-[rgb(217,217,217)]': !publicFilter.options.includes('購物')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for selecting Shopping service -->
              購物
            </button>
          </div>
          <div class="flex gap-x-2.5">
            <button
              @click="handlePublicClickFilter('公廁')"
              :class="{
                'bg-[rgb(135,243,140)]': publicFilter.options.includes('公廁'),
                'bg-[rgb(217,217,217)]': !publicFilter.options.includes('公廁')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for selecting Restroom service -->
              公廁
            </button>
            <button
              @click="handlePublicClickFilter('停車場')"
              :class="{
                'bg-[rgb(135,243,140)]': publicFilter.options.includes('停車場'),
                'bg-[rgb(217,217,217)]': !publicFilter.options.includes('停車場')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for selecting Parking service -->
              停車場
            </button>
          </div>
          <div class="flex gap-x-2.5">
            <button
              @click="handlePublicClickFilter('失物招領')"
              :class="{
                'bg-[rgb(135,243,140)]': publicFilter.options.includes('失物招領'),
                'bg-[rgb(217,217,217)]': !publicFilter.options.includes('失物招領')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for selecting Lost and Found service -->
              失物招領
            </button>
            <button
              @click="handlePublicClickFilter('廣播服務')"
              :class="{
                'bg-[rgb(135,243,140)]': publicFilter.options.includes('廣播服務'),
                'bg-[rgb(217,217,217)]': !publicFilter.options.includes('廣播服務')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for selecting Broadcasting service -->
              廣播服務
            </button>
          </div>
          <div class="flex gap-x-2.5">
            <button
              @click="handlePublicClickFilter('寄物櫃')"
              :class="{
                'bg-[rgb(135,243,140)]': publicFilter.options.includes('寄物櫃'),
                'bg-[rgb(217,217,217)]': !publicFilter.options.includes('寄物櫃')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for selecting Locker service -->
              寄物櫃
            </button>
            <button
              @click="handlePublicClickFilter('住宿服務')"
              :class="{
                'bg-[rgb(135,243,140)]': publicFilter.options.includes('住宿服務'),
                'bg-[rgb(217,217,217)]': !publicFilter.options.includes('住宿服務')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for selecting Accommodation service -->
              住宿服務
            </button>
          </div>
          <button
            @click="handlePublicClickFilter('育嬰服務')"
            :class="{
              'bg-[rgb(135,243,140)]': publicFilter.options.includes('育嬰服務'),
              'bg-[rgb(217,217,217)]': !publicFilter.options.includes('育嬰服務')
            }"
            class="font-sans flex w-[130px] max-w-full items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
          >
            <!-- Button for selecting Baby Care service -->
            育嬰服務
          </button>
        </div>
      </div>
    </section>

    <section class="flex flex-col">
      <!-- Section for selecting additional services. -->

      <div class="mx-4 mt-[23px] flex flex-col rounded-[25px] bg-white">
        <!-- Grid layout for services selection buttons. -->

        <div
          class="mx-[29px] mt-[21px] mb-[18px] flex flex-col items-center justify-center gap-y-[9px]"
        >
          <h2
            class="font-sans ml-1.5 flex w-36 items-center justify-center text-center text-[24px] font-normal leading-[0.91] text-black"
          >
            <!-- Title for the additional services section. -->
            其他服務選擇
          </h2>
          <div class="flex gap-x-2.5">
            <!-- Row layout for service selection buttons. -->

            <button
              @click="clearOtherFilters"
              :class="{
                'bg-[rgb(217,217,217)]': otherFilter.isEmpty === false,
                'bg-[rgb(135,243,140)]': otherFilter.isEmpty === true
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for selecting &#x27;none&#x27; as a service option. -->
              無特定需求
            </button>
            <button
              @click="handleOtherClickFilter('親子共學')"
              :class="{
                'bg-[rgb(135,243,140)]': otherFilter.options.includes('親子共學'),
                'bg-[rgb(217,217,217)]': !otherFilter.options.includes('親子共學')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for parent-child co-learning service option. -->
              親子共學
            </button>
          </div>
          <div class="flex gap-x-2.5">
            <!-- Row layout for outdoor activity service selection buttons. -->

            <button
              @click="handleOtherClickFilter('校外教學')"
              :class="{
                'bg-[rgb(135,243,140)]': otherFilter.options.includes('校外教學'),
                'bg-[rgb(217,217,217)]': !otherFilter.options.includes('校外教學')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for outdoor teaching service option. -->
              校外教學
            </button>
            <button
              @click="handleOtherClickFilter('單車族')"
              :class="{
                'bg-[rgb(135,243,140)]': otherFilter.options.includes('單車族'),
                'bg-[rgb(217,217,217)]': !otherFilter.options.includes('單車族')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for cyclist service option. -->
              單車族
            </button>
          </div>
          <div class="flex gap-x-2.5">
            <!-- Row layout for DIY and bird watching service selection buttons. -->

            <button
              @click="handleOtherClickFilter('DIY族')"
              :class="{
                'bg-[rgb(135,243,140)]': otherFilter.options.includes('DIY族'),
                'bg-[rgb(217,217,217)]': !otherFilter.options.includes('DIY族')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for DIY service option. -->
              DIY族
            </button>
            <button
              @click="handleOtherClickFilter('賞鳥族')"
              :class="{
                'bg-[rgb(135,243,140)]': otherFilter.options.includes('賞鳥族'),
                'bg-[rgb(217,217,217)]': !otherFilter.options.includes('賞鳥族')
              }"
              class="font-sans flex min-w-[130px] items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
            >
              <!-- Button for bird watching service option. -->
              賞鳥族
            </button>
          </div>
          <button
            @click="handleOtherClickFilter('健行族')"
            :class="{
              'bg-[rgb(135,243,140)]': otherFilter.options.includes('健行族'),
              'bg-[rgb(217,217,217)]': !otherFilter.options.includes('健行族')
            }"
            class="font-sans flex w-[130px] max-w-full items-center justify-center rounded-[24.5px] pt-3.5 pr-1.5 pb-3.5 pl-1.5 text-center text-[16px] font-normal leading-[1.37] text-black"
          >
            <!-- Button for hiking service option. -->
            健行族
          </button>
        </div>
      </div>
    </section>

    <section class="flex flex-col">
      <!-- Section for confirming user actions or choices. -->

      <button
        @click="handleClick"
        class="bg-[rgb(135,243,140)] font-sans my-[23px] mx-auto flex items-center justify-center rounded-[24.5px] w-full max-w-[300px] py-[10px] text-center text-[24px] font-normal leading-[1.41] text-white"
      >
        <!-- Button to trigger confirmation action. -->
        確認
      </button>
    </section>
  </main>
</template>

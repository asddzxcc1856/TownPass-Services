<script setup>
import RegionButton from './RegionButton.vue';
</script>

<template>
  <div
    class="flex flex-col rounded-[25px_25px_0px_0px] bg-[url(&quot;/assets/44ec9a06cfad668db62fb73ad18b984b.png&quot;)] bg-[length:100%_100%] bg-[center_center] bg-no-repeat"
  >
    <div class="mx-auto mt-[47.5px] mb-[46px] flex w-[249px] flex-col">
      <h1
        class="font-Roboto mr-0.5 flex items-center justify-center text-center text-[32px] font-bold leading-[0.68] text-white"
      >
        地區選擇
      </h1>
      <RegionButton className="mt-[13.5px] mr-0.5 ml-[3px]" btn="松山區"></RegionButton>
      <RegionButton className="mt-[9px] ml-[3px]" btn="大安區"></RegionButton>
      <RegionButton className="mt-[11px] mr-0.5 ml-[3px]" btn="中正區"></RegionButton>
      <RegionButton className="mt-[9px] mr-0.5 ml-[3px]" btn="萬華區"></RegionButton>
      <RegionButton className="mt-2.5 mr-0.5 ml-[3px]" btn="大同區"></RegionButton>
      <RegionButton className="mt-3 mr-0.5 ml-[3px]" btn="中山區"></RegionButton>
      <RegionButton className="mt-2.5 mr-0.5 ml-[3px]" btn="文山區"></RegionButton>
      <RegionButton className="mt-2.5 mr-0.5 ml-[3px]" btn="南港區"></RegionButton>
      <RegionButton className="mt-[9px] mr-0.5 ml-[3px]" btn="內湖區"></RegionButton>
      <RegionButton className="mt-[9px] mr-0.5 ml-[3px]" btn="士林區"></RegionButton>
      <RegionButton className="mt-[9px] mr-0.5 ml-[3px]" btn="北投區"></RegionButton>
      <RegionButton className="mt-2 mr-0.5 ml-[3px]" btn="信義區"></RegionButton>
    </div>
  </div>
</template>

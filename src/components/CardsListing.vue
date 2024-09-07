<script setup>
import CategoryItem from './CategoryItem.vue';
</script>

<template>
  <section class="cards-listing flex flex-col">
    <div
      class="grid grid-cols-[repeat(2,_minmax(0,_1fr))] content-start gap-y-[26px] gap-x-[33px] ml-[33px] mr-[33px] mt-[33px] mb-[33px]"
    >
      <!-- A grid layout to display attraction items. -->
      <CategoryItem
        className="row-span-1 column-span-1"
        attractionButton="養生溫泉"
        attractionImage="hot.svg"
      ></CategoryItem>
      <CategoryItem
        className="row-span-1 column-span-1"
        attractionButton="單車遊蹤"
        attractionImage="bike.svg"
      ></CategoryItem>
      <CategoryItem
        className="row-span-1 column-span-1"
        attractionButton="歷史建築"
        attractionImage="castle.svg"
      ></CategoryItem>
      <CategoryItem
        className="row-span-1 column-span-1"
        attractionButton="宗教信仰"
        attractionImage="pray.svg"
      ></CategoryItem>
      <CategoryItem
        className="row-span-1 column-span-1"
        attractionButton="藝文館所"
        attractionImage="fine-arts.svg"
      ></CategoryItem>
      <CategoryItem
        className="row-span-1 column-span-1"
        attractionButton="公共藝術"
        attractionImage="statue.svg"
      ></CategoryItem>
      <CategoryItem
        className="row-span-1 column-span-1"
        attractionButton="戶外踏青"
        attractionImage="leaves.svg"
      ></CategoryItem>
      <CategoryItem
        className="row-span-1 column-span-1"
        attractionButton="藍色水路"
        attractionImage="river.svg"
      ></CategoryItem>
      <CategoryItem
        className="row-span-1 column-span-1"
        attractionButton="北北基景點"
        attractionImage="building.svg"
      ></CategoryItem>
      <CategoryItem
        className="row-span-1 column-span-1"
        attractionButton="夜市商圈"
        attractionImage="street-food.svg"
      ></CategoryItem>
      <CategoryItem
        className="row-span-1 column-span-1"
        attractionButton="主題商街"
        attractionImage="shopping-bag.svg"
      ></CategoryItem>
      <CategoryItem
        className="row-span-1 column-span-1"
        attractionButton="無障礙遊"
        attractionImage="wheelchair.svg"
      ></CategoryItem>
    </div>
  </section>
</template>

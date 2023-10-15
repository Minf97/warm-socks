<script setup lang="ts">
import { useTitle } from "@/hooks/useTitle";
import { forward } from "@/utils/router";

const { title, changeTitle } = useTitle();
function goTest() {
  forward("test", {
    a: 1,
  });
}

const list = [
  {
    id: 13,
    factoryName: "MINI",
    displayName: "MINI",
    showStatus: true,
    logo: "http://help.cystool.com:88/wp-content/uploads/2021/05/mini.png",
    local: "zh_CN",
    createrName: "SYSTEM",
    updateName: "cbj",
    createdTime: "2021-05-22T15:27:50.000+00:00",
    updatedTime: "2021-05-23T01:43:26.000+00:00",
  },
  {
    id: 2,
    factoryName: "奥迪",
    displayName: "奥迪",
    showStatus: true,
    logo: "http://help.cystool.com:88/wp-content/uploads/2021/05/aodi.png",
    local: "zh_CN",
    createrName: "SYSTEM",
    updateName: "cbj",
    createdTime: "2021-05-22T15:18:59.000+00:00",
    updatedTime: "2021-05-23T01:44:19.000+00:00",
  },
  {
    id: 11,
    factoryName: "宝马",
    displayName: "宝马",
    showStatus: true,
    logo: "http://help.cystool.com:88/wp-content/uploads/2021/05/BMW.png",
    local: "zh_CN",
    createrName: "SYSTEM",
    updateName: "cbj",
    createdTime: "2021-05-22T15:22:32.000+00:00",
    updatedTime: "2021-05-23T01:51:19.000+00:00",
  },
  {
    id: 12,
    factoryName: "保时捷",
    displayName: "保时捷",
    showStatus: true,
    logo: "http://help.cystool.com:88/wp-content/uploads/2021/05/Porsche.png",
    local: "zh_CN",
    createrName: "SYSTEM",
    updateName: "cbj",
    createdTime: "2021-05-22T15:26:07.000+00:00",
    updatedTime: "2021-05-23T01:57:05.000+00:00",
  },
  {
    id: 1,
    factoryName: "奔驰",
    displayName: "奔驰",
    showStatus: true,
    logo: "http://help.cystool.com:88/wp-content/uploads/2021/05/Mercedes-Benz.png",
    local: "zh_CN",
    createrName: "SYSTEM",
    updateName: "cbj",
    createdTime: "2021-05-22T14:57:34.000+00:00",
    updatedTime: "2021-05-23T01:58:43.000+00:00",
  },
  {
    id: 5,
    factoryName: "别克",
    displayName: "别克",
    showStatus: true,
    logo: "http://help.cystool.com:88/wp-content/uploads/2021/05/Buick.png",
    local: "zh_CN",
    createrName: "SYSTEM",
    updateName: "cbj",
    createdTime: "2021-05-22T15:22:03.000+00:00",
    updatedTime: "2021-05-23T02:07:45.000+00:00",
  },
  {
    id: 3,
    factoryName: "大众",
    displayName: "大众",
    showStatus: true,
    logo: "http://help.cystool.com:88/wp-content/uploads/2021/05/DZ.png",
    local: "zh_CN",
    createrName: "SYSTEM",
    updateName: "cbj",
    createdTime: "2021-05-22T15:19:28.000+00:00",
    updatedTime: "2021-05-23T02:10:04.000+00:00",
  },
  {
    id: 9,
    factoryName: "丰田",
    displayName: "丰田",
    showStatus: true,
    logo: "http://help.cystool.com:88/wp-content/uploads/2021/05/Toyota.png",
    local: "zh_CN",
    createrName: "SYSTEM",
    updateName: "wugouping",
    createdTime: "2021-05-22T15:22:29.000+00:00",
    updatedTime: "2022-03-15T09:07:18.000+00:00",
  },
  {
    id: 17,
    factoryName: "福特",
    displayName: "福特",
    showStatus: true,
    logo: "http://help.cystool.com:88/wp-content/uploads/2023/04/fute.png",
    local: "zh_CN",
    createrName: "SYSTEM",
    updateName: "21869592",
    createdTime: "2023-03-31T06:33:01.000+00:00",
    updatedTime: "2023-04-07T09:08:18.000+00:00",
  },
  {
    id: 6,
    factoryName: "凯迪拉克",
    displayName: "凯迪拉克",
    showStatus: true,
    logo: "http://help.cystool.com:88/wp-content/uploads/2021/05/cadillac.png",
    local: "zh_CN",
    createrName: "SYSTEM",
    updateName: "cbj",
    createdTime: "2021-05-22T15:22:03.000+00:00",
    updatedTime: "2021-05-23T02:32:31.000+00:00",
  },
  {
    id: 10,
    factoryName: "雷克萨斯",
    displayName: "雷克萨斯",
    showStatus: true,
    logo: "http://help.cystool.com:88/wp-content/uploads/2021/05/Lexus.png",
    local: "zh_CN",
    createrName: "SYSTEM",
    updateName: "cbj",
    createdTime: "2021-05-22T15:22:29.000+00:00",
    updatedTime: "2021-05-23T02:34:01.000+00:00",
  },
  {
    id: 8,
    factoryName: "斯柯达",
    displayName: "斯柯达",
    showStatus: true,
    logo: "http://help.cystool.com:88/wp-content/uploads/2021/05/skoda.png",
    local: "zh_CN",
    createrName: "SYSTEM",
    updateName: "cbj",
    createdTime: "2021-05-22T15:22:25.000+00:00",
    updatedTime: "2021-05-23T02:38:22.000+00:00",
  },
  {
    id: 7,
    factoryName: "雪佛兰",
    displayName: "雪佛兰",
    showStatus: true,
    logo: "http://help.cystool.com:88/wp-content/uploads/2021/05/chevrolet.png",
    local: "zh_CN",
    createrName: "SYSTEM",
    updateName: "cbj",
    createdTime: "2021-05-22T15:22:15.000+00:00",
    updatedTime: "2021-05-23T02:41:06.000+00:00",
  },
];
</script>

<template>
  <view class="container">
    <view
      class="w-150 box rd-20 flex flex-col justify-center inline-block flex-wrap"
      v-for="item in list"
      :key="item.id"
    >
      <image class="w-70 h-70" :src="item.logo" mode="scaleToFill" />
      <view class="name">{{ item.displayName }}</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.container {
  background-color: #262d3d;
}
.box {
  background-color: #334a70;
}
.name {
  color: #fff;
}
</style>

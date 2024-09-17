<script setup lang="ts">
import Cookies from "js-cookie";
import FontLSvg from "public/icons/blog/font-l.svg?component";
import FontMSvg from "public/icons/blog/font-m.svg?component";
import FontSSvg from "public/icons/blog/font-s.svg?component";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { t } from "../../i18n/utils";

// 定義狀態來儲存視窗大小
const windowWidth = ref(window.innerWidth);
const fontSize = ref("s");

const setFontSize = () => {
  let size = "s";
  const element = document.querySelector(".markdown-body");

  if (element) {
    if (fontSize.value === "s") {
      size = "m";
      element.classList.add("hanc-font-medium");
    } else if (fontSize.value === "m") {
      size = "l";
      element.classList.remove("hanc-font-medium");
      element.classList.add("hanc-font-large");
    } else {
      element.classList.remove("hanc-font-large");
      size = "s";
    }
  }

  Cookies.set("font-size", size, { expires: 3650 });
  fontSize.value = size;
};

// 定義處理視窗大小變化的函數
const updateWindowSize = () => {
  windowWidth.value = window.innerWidth;
};

watch(
  () => windowWidth.value,
  (newValue, oldValue) => {
    if (newValue >= 955 && oldValue <= 965) {
      // 因覽瀏器有時無法正確抓到視窗大小，所以在覽瀏器上時，只能用這種方式更新元件
      fontSize.value = Cookies.get("font-size");
    }
  }
);

onMounted(() => {
  window.addEventListener("resize", updateWindowSize);
  fontSize.value = Cookies.get("font-size");
});

// 在組件卸載時移除監聽器
onUnmounted(() => {
  window.removeEventListener("resize", updateWindowSize);
});
</script>

<template>
  <div
    class="flex items-center cursor-pointer hover:opacity-80 group w-[30px] xl:w-auto"
    :title="t('blog.setFontSize')"
    @click="setFontSize"
  >
    <div class="hidden xl:block">
      {{
        fontSize === "l"
          ? t("blog.fontL")
          : fontSize === "m"
          ? t("blog.fontM")
          : t("blog.fontS")
      }}
    </div>

    <div class="w-[30px] h-[30px] xl:ml-2">
      <FontLSvg v-if="fontSize === 'l'" class="text-skin-base" />
      <FontMSvg v-else-if="fontSize === 'm'" class="text-skin-base" />
      <FontSSvg v-else class="text-skin-base" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

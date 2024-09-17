<script setup lang="ts">
import Cookies from "js-cookie";
import { onMounted, ref } from "vue";
import { t } from "../../i18n/utils";


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
      element.classList.remove("hanc-font-medium")
      element.classList.add("hanc-font-large");
    } else {
      element.classList.remove("hanc-font-large")
      size = "s";
    }
  }

  Cookies.set("font-size", size, { expires: 3650 });
  fontSize.value = size;
};

onMounted(() => {
  fontSize.value = Cookies.get("font-size");
});
</script>

<template>
  <div
    class="flex items-center cursor-pointer hover:opacity-80 group"
    :title="t('blog.setFontSize')"
    @click="setFontSize"
  >
    {{
      fontSize === "l"
        ? t("blog.fontL")
        : fontSize === "m"
        ? t("blog.fontM")
        : t("blog.fontS")
    }}
  </div>
</template>

<style lang="scss" scoped></style>

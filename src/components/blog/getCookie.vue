<script setup lang="ts">
import Cookies from "js-cookie";
import { onMounted,ref } from 'vue';

const setFontSize = () => {
  let fontSize = Cookies.get("font-size");

  const element = document.querySelector(".markdown-body");

  if (element) {
    if (fontSize === "l") {

      element.classList.remove("hanc-font-medium")
      element.classList.add("hanc-font-large");
    } else if (fontSize === "m") {
      element.classList.remove("hanc-font-large");
      element.classList.add("hanc-font-medium");
    } else {
      // small font
      element.classList.remove("hanc-font-medium");
      element.classList.remove("hanc-font-large");
    }
  }
};

onMounted(() => {
  setFontSize()
});
</script>

<template>
</template>

<style lang='scss' scoped>

</style>

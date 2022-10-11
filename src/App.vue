<style scoped></style>
<template>
  <div class="wrapper">
    <Header />
    <MainContent />
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import Header from "@/components/reusable/Header.vue";
import Footer from "@/components/reusable/Footer.vue";
import MainContent from "@/views/MainContent.vue";
</script>

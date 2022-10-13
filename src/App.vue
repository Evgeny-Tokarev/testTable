<template>
	<div class="wrapper">
		<Header />
		<MainContent />
		<Footer />
	</div>
</template>
<script lang="ts" setup>
import Header from '@/components/reusable/Header.vue'
import Footer from '@/components/reusable/Footer.vue'
import MainContent from '@/views/MainContent.vue'
</script>
<style lang="scss" scoped>
.wrapper {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: var(--grad-under);
	background: var(--bg-gradient);
}
</style>

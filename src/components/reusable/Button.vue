<template>
	<button
		class="custom-button"
		ref="button"
		@click="clickHandler"
		:active="props.active || false">
		<slot> {{ props.buttonText }}</slot>
	</button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const button = ref<HTMLButtonElement | null>(null)
defineExpose({ button })

interface Props {
	buttonText?: string | number
	active?: boolean
}

const emit = defineEmits<{
	(e: 'click', target: HTMLButtonElement): void
}>()
const props = defineProps<Props>()

function clickHandler(e: MouseEvent | TouchEvent) {
	e.preventDefault()
	const target = e.target as HTMLButtonElement
	emit('click', target)
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.custom-button {
	display: flex;
	justify-content: center;
	cursor: pointer;
	font-size: 16px;
	font-weight: 700;
	padding: 16px 32px;
	border-radius: 10px;
	border: 0;
	text-align: center;
	margin: 0;
	outline: none;
}

.custom-button_type_elevated {
	position: relative;
	transition: all 0.2s;
}

.custom-button_type_elevated::after {
	content: '';
	position: absolute;
	width: 70%;
	height: 50%;
	left: 15%;
	bottom: -5px;
	z-index: -1;
	background: var(--text-color);
	opacity: 0.7;
	filter: blur(8px);
	border-radius: 10px;
	transition: all 0.2s;
}

.custom-button_type_elevated:active::after,
.custom-button_active.custom-button_type_elevated::after {
	bottom: 5px;
	transition: all 0.2s;
}

.custom-button_type_elevated:active,
.custom-button_active.custom-button_type_elevated {
	box-shadow: none;
	margin-top: 4px;
	margin-bottom: -4px;
	transition: all 0.2s;
}
</style>

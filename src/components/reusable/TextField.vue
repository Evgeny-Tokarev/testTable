<template>
	<div class="text-field">
		<h3 :for="props.placeholder" class="text-field__title">
			{{ props.placeholder }}
		</h3>
		<input
			type="text"
			v-model="store.filter.value"
			aria-label="Text filter value" />
		<button
			class="text-field__reset-button"
			v-if="store.filter.value"
			@click="store.filter.value = ''"></button>
	</div>
</template>
<script lang="ts" setup>
import { useStore } from '@/stores/store'

interface Props {
	placeholder: string
}
const store = useStore()
const props = defineProps<Props>()
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.text-field {
	width: 300px;
	position: relative;
	input {
		width: 100%;
		color: var(--text-color);
		border: 2px solid var(--text-color);
		background-color: var(--bg-color);
		border-radius: 5px;
		outline: none;
		height: 40px;
		font-size: 20px;
		padding: 0 10px;
		transition: all 0.5s;
	}
	input:focus {
		transition: all 0.5s;
		box-shadow: 0 6px 15px -5px var(--text-color);
	}
	&__reset-button {
		position: absolute;
		bottom: 8px;
		right: 0px;
		margin-left: auto;
		margin-right: 20px;
		cursor: pointer;
		width: 25px;
		height: 25px;
	}
	&__reset-button:before,
	&__reset-button:after {
		position: absolute;
		left: 15px;
		top: 0;
		content: ' ';
		height: 25px;
		width: 2px;
		background-color: var(--text-color);
	}
	&__reset-button:before {
		transform: rotate(45deg);
	}
	&__reset-button:after {
		transform: rotate(-45deg);
	}
}
</style>

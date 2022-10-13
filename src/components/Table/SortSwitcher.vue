<template>
	<div class="sort-switcher">
		<button class="sort-switcher__button" @click="$emit('changeSort', 'up')">
			<div
				class="sort-switcher__icon sort-switcher__icon_type_up"
				:class="
					props.activeType === 'up' ? 'sort-switcher__icon_active' : ''
				"></div>
		</button>
		<button class="sort-switcher__button" @click="$emit('changeSort', '')">
			<div class="sort-switcher__icon sort-switcher__icon_type_stop"></div>
		</button>
		<button class="sort-switcher__button" @click="$emit('changeSort', 'down')">
			<div
				class="sort-switcher__icon sort-switcher__icon_type_down"
				:class="
					props.activeType === 'down' ? 'sort-switcher__icon_active' : ''
				"></div>
		</button>
	</div>
</template>
<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { ComponentState } from '@/models/componentState'
const state: ComponentState = reactive({
	activeType: '',
})
interface Props {
	activeType?: 'up' | 'down' | ''
}
const props = defineProps<Props>()
watch(
	() => props,
	() => {
		state.activeType = props.activeType
	}
)
</script>
<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.sort-switcher {
	margin-top: 5px;
	display: flex;
	flex-wrap: nowrap;
	justify-content: flex-start;
	gap: 10px;
	&__button {
		width: 30px;
		height: 30px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&__icon {
		border-radius: 2px;
		flex: 1 0 auto;
	}
	&__icon_type_up {
		width: 25px;
		height: 25px;
		border-left: 12.5px solid transparent;
		border-right: 12.5px solid transparent;
		border-bottom: 25px solid var(--text-color);
	}
	&__icon_type_down {
		width: 25px;
		height: 25px;
		border-left: 12.5px solid transparent;
		border-right: 12.5px solid transparent;
		border-top: 25px solid var(--text-color);
	}
	&__icon_type_stop {
		width: 25px;
		height: 25px;
		background-color: var(--text-color);
	}
	&__icon_active {
		border-top-color: var(--primary);
		border-bottom-color: var(--primary);
	}
}
</style>

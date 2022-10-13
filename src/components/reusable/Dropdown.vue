<template>
	<div
		class="dropdown"
		:class="state.showMenu ? 'dropdown_expanded' : ''"
		v-click-outside="closeMenu"
		ref="menu">
		<h3 :for="props.heading" class="dropdown__title">
			{{ props.heading }}
		</h3>
		<div class="dropdown__menu">
			<h4 class="dropdown__placeholder">
				{{
					store.filter[props.filterType]
						? $t(`filters.items.${store.filter[props.filterType]}`)
						: ''
				}}
			</h4>
			<button
				class="dropdown__reset-button"
				v-if="store.filter[props.filterType]"
				@click="store.filter[props.filterType] = ''"
				aria-label="Reset value button"></button>
			<button
				class="dropdown__expand-button"
				@click="state.showMenu = !state.showMenu"
				aria-label="Expand list button">
				<div class="dropdown__expand-icon"></div>
			</button>
		</div>
		<ul class="dropdown__list">
			<li
				class="dropdown__menu-item"
				v-for="(item, idx) in props.items"
				:key="idx"
				@click="setItem(item)">
				{{ $t(`filters.items.${item}`) }}
			</li>
		</ul>
	</div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ComponentState } from '@/models/componentState'
import { useStore } from '@/stores/store'
import { type ColumnItems, type ConditionItems } from '@/models/filterValues'

interface Props {
	filterType: 'column' | 'condition'
	heading: string
	items: (ConditionItems | ColumnItems)[]
}

const store = useStore()
const menu = ref<HTMLElement | null>(null)
const props = defineProps<Props>()

const state: ComponentState = reactive({
	showMenu: false,
})
function closeMenu() {
	window.setTimeout(() => {
		state.showMenu = false
	}, 0)
}
function setItem(item: any) {
	store.filter[props.filterType] = item
}
</script>

<style lang="scss" scoped>
.dropdown {
	width: 300px;
	position: relative;
	&__title {
		color: var(--text-color);
	}
	&__menu {
		display: flex;
		justify-content: space-between;
		padding: 0 10px;
		align-items: center;
		background-color: var(--bg-color);
		border: 2px solid var(--text-color);
		border-radius: 5px;
		height: 40px;
		z-index: 0;
		position: relative;
	}

	&__placeholder {
		color: var(--text-color);
	}
	&__reset-button {
		position: relative;
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
	&__expand-button {
		height: 35px;
		width: 35px;
	}
	&__expand-icon {
		width: 20px;
		height: 20px;
		border-left: 3px solid var(--text-color);
		border-top: 3px solid var(--text-color);
		transform: rotate(225deg) translateX(5px);
		margin-left: 5px;
		cursor: pointer;
		transition: all 0.5s;
	}
	&__list {
		display: flex;
		flex-direction: column;
		position: absolute;
		overflow: hidden;
		list-style: none;
		padding: 0;
		top: calc(100% - 2px);
		left: 5px;
		right: 5px;
		background-color: var(--bg-color);
		border-radius: 0 0 5px 5px;
		transition: all 0.5s;
		z-index: 1;
	}
	&__menu-item {
		padding: 0 10px;
		max-height: 0;
		line-height: 32px;
		transition: max-height 0.5s;
		cursor: pointer;
	}
	&__menu-item:hover {
		background: var(--hover-bg);
		transition: all 0.5s;
	}
	&_expanded {
		.dropdown__menu {
			border-radius: 5px 5px 0 0;
		}

		.dropdown__expand-icon {
			transform: rotate(45deg) translateY(5px);
			transition: all 0.5s;
		}
		.dropdown__list {
			box-shadow: 0 6px 15px -5px var(--text-color);
			border: 1px solid var(--text-color);
			left: 0;
			right: 0;
			transition: all 0.5s;
		}
		.dropdown__menu-item {
			max-height: 32px;
			transition: all 0.5s;
		}
	}
}
</style>

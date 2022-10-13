<template>
	<footer class="footer">
		<div class="footer__content container">
			<h3>{{ $t('footer.author') }}</h3>
			<a href="https://github.com/Evgeny-Tokarev/testTable" target="_blank">{{
				$t('footer.repository')
			}}</a>
			<a href="https://t.me/ghenyaT" target="_blank">{{
				$t('footer.telegram')
			}}</a>
		</div>
	</footer>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.footer {
	background-color: var(--primary);

	&__content {
		height: 5rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
		justify-content: space-between;
	}
	a {
		color: var(--text-color);
	}
	a:hover {
		text-shadow: 0 0 5px var(--text-color);
	}
}
</style>

import vueI18n from "@intlify/vite-plugin-vue-i18n"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { join, resolve } from "path"
import postcssNesting from "postcss-nesting"
import viteCompression from "vite-plugin-compression"

export default defineConfig({
	plugins: [
		vue(),
		vueI18n({
			include: resolve(__dirname, "src/locales/**"),
			runtimeOnly: false,
		}),
		viteCompression(),
	],
	css: {
		postcss: {
			plugins: [postcssNesting],
		},
	},
	define: {
		__VUE_I18N_FULL_INSTALL__: true,
		__VUE_I18N_LEGACY_API__: false,
		__INTLIFY_PROD_DEVTOOLS__: false,
	},
	resolve: {
		alias: [{ find: /@\//, replacement: join(__dirname, "src") + "/" }],
	},
})

import js from '@eslint/js'
import {
  configureVueProject,
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'
import prettierConfig from '@vue/eslint-config-prettier'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'

configureVueProject({
  rootDir: import.meta.dirname,
  scriptLangs: ['js', 'ts'],
})

export default defineConfigWithVueTs(
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  js.configs.recommended,
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  prettierConfig,
)

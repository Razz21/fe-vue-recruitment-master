import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    "vue/first-attribute-linebreak": "off",
    "vue/no-multiple-template-root": "off",
  }
})

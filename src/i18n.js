import { createI18n } from 'vue-i18n'
import rus from './locale/rus.json'
import uz from './locale/uz.json'

const i18n = createI18n({
  locale: 'ru',
  message: {
    ru: rus,
    uz: uz
  }
})

export default i18n

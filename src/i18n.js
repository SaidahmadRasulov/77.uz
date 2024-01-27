import { createI18n } from 'vue-i18n'
import ru from './locale/rus.json'
import uz from './locale/uz.json'

const i18n = createI18n({
  locale: 'ru',
  messages: {
    ru, uz
  }
})

export default i18n

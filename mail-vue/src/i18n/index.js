import { createI18n } from 'vue-i18n';
import en from './en.js'
import zh from './zh.js'

// 优先从浏览器缓存读取语言设置，如果没有则默认为中文 'zh'
const savedLanguage = localStorage.getItem('cloud_mail_lang') || 'zh';

const i18n = createI18n({
    legacy: false,
    locale: savedLanguage, 
    fallbackLocale: 'en',
    messages: {
        zh,
        en
    },
});

export default i18n;

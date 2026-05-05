import { createI18n } from 'vue-i18n';
import en from './en.js'
import zh from './zh.js'

// 默认读取为 zh-cn
const savedLanguage = localStorage.getItem('cloud_mail_lang') || 'zh-cn';

const i18n = createI18n({
    legacy: false,
    locale: savedLanguage, 
    fallbackLocale: 'en',
    messages: {
        'zh-cn': zh,   // <--- 核心修改：这里必须是 'zh-cn'，系统才认识
        'en': en
    },
});

export default i18n;

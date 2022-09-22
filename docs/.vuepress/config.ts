import { defaultTheme } from 'vuepress'
import navbar from './config/navbar'
import sidebar from './config/sidebar'

export default {
    title: '良菌的博客',
    description: '这里是良菌的技术后花园',
    theme: defaultTheme({
        logo: '/images/avatar.svg',
        navbar,
        sidebar
    }),
  }
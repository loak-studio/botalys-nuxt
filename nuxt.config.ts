// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
  ],
  image:{
    format:['webp']
  },
  telemetry:false,
  vue:{
    compilerOptions:{
      isCustomElement: (tag)=>{
        return tag.startsWith('swiper-')
      }
    }
  }
})

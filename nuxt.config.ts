// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry:false,
  vue:{
    compilerOptions:{
      isCustomElement: (tag)=>{
        return tag.startsWith('swiper-')
      }
    }
  }
})

<script setup>
definePageMeta({ layout: false })
const title = "Coming soon - Botalys"
useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  ogImage: 'https://botalys.com/share.png',
  twitterImage: 'https://botalys.com/share.png',
  twitterCard: 'summary_large_image',
})
useHead({
  link: [
    { rel: "apple-touch-icon", sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: "icon", type: "image/png", sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    {
      rel:'stylesheet', href:'https://use.typekit.net/jac8fmm.css'
    }
  ],
  meta: [
    { name: 'msapplication-TileColor', content: '#E6E2C9' },
    { name: 'theme-color', content: '#E6E2C9' }
  ]
})
</script>
<template>
    <div class="coming-soon-page">
        <div class="coming-soon-page__container" >
            <figure class="coming-soon-page__background">
                <nuxt-picture src="/images/korean-ginseng-moutain.jpeg" alt=""/>
            </figure>
            <Header :is-frontpage="true" />
            <div  class="coming-soon__parent">
                <section class="coming-soon">
                    <div class="coming-soon__top">
                        <h1 class="h1 coming-soon__title">Coming soon</h1>
                    </div>
                    <div class="coming-soon__bottom">
                        <div class="coming-soon__content">
                            <p class="h4">We are currently exploring this territory. Our reviews for ginseng health applications will be available soon.</p>
                            <botalys-button color="green" href="/botanicals/korean-ginseng/">Back to Korean Ginseng</botalys-button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
.coming-soon__parent {
    padding: 0 4px;
}

.coming-soon-page__background{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(0.5);
    }
}

.coming-soon-page__container{
    background-size: cover;
    background-repeat: no-repeat;
}
.coming-soon {
    max-width: 1296px;
    margin: 0 auto;
    width: 100%;
    color: var(--half-spanish-white);
    border-left: 2px solid var(--half-spanish-white);
    border-right: 2px solid var(--half-spanish-white);
}
.coming-soon__title{
    max-width: 615px;
    width: 100%;
}
.coming-soon__content{
    max-width: 615px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:32px;
    align-items: flex-start;
}

.coming-soon__top {
    min-height: 363px;
    border-bottom: 2px solid var(--half-spanish-white);
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 30px 73px;
}

.coming-soon__bottom {
    min-height: 468px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 30px 73px;
}
@media (max-width:809px) {
    .coming-soon-page__container{
        display: flex;
        flex-direction: column;
    height: 100vh;
    }
    .coming-soon__parent{
        flex:1 1 0;
    }
    .coming-soon{
        height: 100%;
    }
    .coming-soon__top{
        justify-content: flex-start;
        align-items: flex-start;
        min-height: auto;
        padding: 1rem;
    }
    .coming-soon__bottom{
        padding: 1rem;
        min-height: auto;
    }
}
</style>
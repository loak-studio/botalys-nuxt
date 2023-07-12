<script setup>
definePageMeta({ layout: false })
const title = "Page not found - Botalys"
useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  ogImage: 'https://botalys.com/share.png',
  twitterImage: 'https://botalys.com/share.png',
  twitterCard: 'summary_large_image',
})
</script>
<template>
    <div class="error-page">
        <div class="error-page__container" >
            <figure class="error-page__background">
                <nuxt-picture sizes="xs:320px sm:640px lg:1920px" width="1920" height="1080" src="/images/404.png" alt=""/>
            </figure>
            <Header :is-frontpage="true" />
            <div  class="error__parent">
                <section class="error">
                    <div class="error__top">
                        <h1 class="h1 error__title">Page not found</h1>
                    </div>
                    <div class="error__bottom">
                        <div class="error__content">
                            <p class="h4">You have gone too far in the jungle</p>
                            <botalys-button color="outline" href="/">Back to basecamp</botalys-button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style lang="scss">
.error__parent {
    padding: 0 4px;
}

.error-page__background{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        filter: brightness(0.7);
    }
}

.error-page__container{
    background-size: cover;
    background-repeat: no-repeat;
}
.error {
    max-width: 1296px;
    margin: 0 auto;
    width: 100%;
    color: var(--half-spanish-white);
    border-left: 2px solid var(--half-spanish-white);
    border-right: 2px solid var(--half-spanish-white);
}
.error__title{
    max-width: 615px;
    width: 100%;
}
.error__content{
    max-width: 615px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:32px;
    align-items: flex-start;
}

.error__top {
    min-height: 363px;
    border-bottom: 2px solid var(--half-spanish-white);
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 30px 73px;
}

.error__bottom {
    min-height: 468px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 30px 73px;
}
@media (max-width:809px) {
    .error-page__container{
        display: flex;
        flex-direction: column;
    height: 100vh;
    }
    .error__parent{
        flex:1 1 0;
    }
    .error{
        height: 100%;
    }
    .error__top{
        justify-content: flex-start;
        align-items: flex-start;
        min-height: auto;
        padding: 1rem;
    }
    .error__bottom{
        padding: 1rem;
        min-height: auto;
    }
}
</style>
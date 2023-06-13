<script setup>
const { title, paragraphs, image } = defineProps({ title: String, paragraphs: Array, image: String })

</script>
<template>
    <div class="hero-photo__parent">
        <section class="hero-photo">
            <div class="hero-photo__top">
                <breadcrumb :links="[{ label: 'Our Standards', href: '#' }]" />
                <div class="hero-photo__title-container">
                    <h1 class="hero-photo__title h1">
                        {{ title }}
                    </h1>
                </div>
            </div>
            <div class="hero-photo__bottom">
                <div class="hero-photo__text-container">
                    <p class="hero-photo__paragraph h4" v-for="(paragraph, index) in paragraphs" :key="index"
                        v-html="paragraph"></p>
                </div>
                <figure class="hero-photo__figure">
                    <img :src="image" alt="">
                </figure>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.hero-photo__parent {
    padding: 0 4px;
}

.hero-photo {
    max-width: 1296px;
    margin: 0 auto;
    width: 100%;
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
}

.hero-photo__top {
    min-height: 363px;
    border-bottom: 2px solid var(--nandor);
    display: flex;
    flex-direction: column;

}

.hero-photo__bottom {
    min-height: 468px;
    position: relative;
    border-bottom: 2px solid var(--nandor);
}

.hero-photo__text-container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
}

.hero-photo__paragraph {
    max-width: 616px;
}

.hero-photo__title {

    max-width: 616px;
}

.hero-photo__text-container {
    padding-top: 2rem;
}

.hero-photo__title-container {
    max-width: 1024px;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 32px;

}

.hero-photo__figure {
    max-width: 559px;
    width: 100%;
    height: 838px;
    overflow: hidden;
    border-radius: 275px 0px 0px 0px;
    position: absolute;
    right: -64px;
    bottom: -64px;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

@media (max-width:1220px) {
    .hero-photo__figure {
        width: 300px;
        border-radius: 175px 0px 0px 0px;
    }
}

@media (max-width:1060px) {

    .hero-photo__top,
    .hero-photo__bottom {
        padding: 0 0 0 1rem;
    }
}

@media (max-width:895px) {
    .hero-photo__text-container {
        padding: 1rem;
    }

    .hero-photo__title-container {
        padding: 1rem;
    }

    .hero-photo__bottom {
        min-height: 0;
        padding: 0;
    }

    .hero-photo__top {
        min-height: 0;
        padding: 0;
    }

    .hero-photo__figure {
        position: static;
        max-height: 251px;
        max-width: 353px;
        width: 100%;
        height: 100%;
        margin-left: auto;
        border-radius: 100px 0px 0px 0px;
    }
}</style>
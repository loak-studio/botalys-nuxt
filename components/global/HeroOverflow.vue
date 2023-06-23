<script setup>
const { links, image, title, paragraphs, top, right, height, width, blendModeLuminosity } = defineProps({ links: Array, image: String, title: String, paragraphs: Array, top: String, right: String, width: String, height: String, blendModeLuminosity: Boolean })
</script>
<template>
    <div class="hero-overflow__parent">
        <section class="hero-overflow">
            <breadcrumb :links="links" />
            <div class="hero-overflow__content">
                <figure :class="{ 'hero-overflow__figure--blend': blendModeLuminosity }" :style="`
                --right:${right};
                                --top:${top}
                                --height:${height};
                                --width:${width};
                `" class="hero-overflow__figure">
                    <img :src="image" alt="">
                </figure>
                <div class="hero-overflow__text">
                    <h1 class="h1 hero-overflow__title">{{ title }}</h1>
                    <div>
                        <p class="h4" v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.hero-overflow__parent {
    padding: 0 4px;

}

.hero-overflow {
    max-width: 1296px;
    margin: 0 auto;
    width: 100%;
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
    min-height: 833px;
    position: relative;
    border-bottom: 2px solid var(--nandor);
}

.hero-overflow__content {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-top: 10px;
    gap: 1rem;
    padding-left: 1rem;

    * {
        max-width: 616px;
    }
}

.hero-overflow__text {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
}

.hero-overflow__title {
    height: 329px;
    display: flex;
    align-items: flex-end;
    padding-bottom: 62px;

    &::after {
        width: 100%;
        content: '';
        height: 2px;
        position: absolute;
        background: var(--nandor);
        left: 0;
        margin-bottom: -30px;
        z-index: -1;
    }
}

.hero-overflow__figure {
    width: var(--width);
    height: var(--height);
    position: absolute;
    right: var(--right);
    top: var(--top);

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        object-position: center;
    }

    &--blend {
        img {
            mix-blend-mode: luminosity;
        }
    }
}

@media (max-width: 1200px) {
    .hero-overflow__figure {
        width: calc(100% - 700px);
        right: 50px;
        height: 100%;
    }
}

@media (max-width:900px) {
    .hero-overflow {
        min-height: 0;
    }

    .hero-overflow__content {
        flex-direction: column;
        padding: 1rem;
    }

    .hero-overflow__figure {
        width: 95px;
        height: 154px;
        position: static;
    }

    .hero-overflow__text {
        padding: 0 0 96px 0;
    }

    .hero-overflow__title {
        height: auto;
    }
}</style>
<script setup>
const { links, image, title, paragraphs } = defineProps({ links: Array, image:String, title:String, paragraphs:Array })
</script>
<template>
    <div class="hero-illustration__parent">
        <section class="hero-illustration">
            <breadcrumb :links="links" />
            <div class="hero-illustration__content">
                <figure class="hero-illustration__figure">
                <img :src="image" alt="">
            </figure>
            <div class="hero-illustration__text">
                <h1 class="h1 hero-illustration__title">{{ title }}</h1>
                <div>
                    <p class="h4" v-for="(paragraph,index) in paragraphs" :key="index">{{ paragraph }}</p>
                </div>
            </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.hero-illustration__parent{
    padding: 0 4px;
    
}
.hero-illustration{
    max-width: 1296px;
    margin: 0 auto;
    width: 100%;
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
    min-height: 833px;
    position: relative;
}
.hero-illustration__content{
    display: flex;
    justify-content: space-between;
    padding-left: 4px;
    padding-top: 10px;
    padding-right: 136px;
    gap:1rem;
}
.hero-illustration__text{
    max-width: 616px;
    width: 100%;
}
.hero-illustration__title{
    height: 329px;
    display: flex;
    align-items: flex-end;
    padding-bottom: 62px;
    &::after{
        width: 100%;
        content:'';
        height: 2px;
        position: absolute;
        background: var(--nandor);
        left: 0;
        margin-bottom: -30px;
        z-index: -1;
    }
}
.hero-illustration__figure{
    width: 466px;
    height: 750px;
    left: 10px;

    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
}
@media (max-width:809px) {
    .hero-illustration{
        min-height: 0;
    }
    .hero-illustration__content{
        flex-direction: column;
        padding-right: 0;
    }
    .hero-illustration__figure{
        width: 95px;
        height: 154px;
    }
    .hero-illustration__text{
        padding: 0 1rem 96px 1rem;
    }
    .hero-illustration__title{
        height: auto;
    }
}
</style>
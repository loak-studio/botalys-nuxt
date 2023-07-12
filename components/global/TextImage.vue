<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const { imageSrc, id } = defineProps({ imageSrc: String})
let tl

const figure = ref()
const parent = ref()
onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    tl = gsap.timeline({
        scrollTrigger: {
            trigger: figure.value,
            start: 'top 80%'
        }
    })
    tl.from(figure.value, {
        x: -150,
        opacity: 0,
    })
    tl.from(parent.value,{
        x:-50,
        opacity:0
    })
})
onUnmounted(()=>{
    if(tl){
        tl.kill()
    }
})
</script>

<template>
    <div class="text-image__parent">
        <section class="text-image">
            <hr class="text-image__line-1">
            <hr class="text-image__line-2">
            <figure ref="figure" class="text-image__figure">
                <nuxt-picture  sizes="xs:320px sm:640px" width="618" height="731" :src="imageSrc" alt=""/>
            </figure>
            <div class="text-image__content">
                <div ref="parent" class="text-image__slot">
                    <slot  />
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.text-image__parent {
    padding: 0 4px;
}

.text-image {
    max-width: 1296px;
    margin: 0 auto;
    position: relative;
    padding: 148px 0 120px 0;
}

.text-image__figure {
    max-width: 618px;
    max-height: 731px;
    width: 100%;
    height: 100%;
    position: absolute;
    left: -64px;
    top: 84px;
    overflow: hidden;
    border-radius: 0px 0px 276px 0px;
    filter: brightness(.7);
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

.text-image__content {
    background: var(--dark-jungle-green);
    color: var(--half-spanish-white);
    display: flex;
    justify-content: flex-end;
    height: 603px;
    align-items: flex-end;
}

.text-image__slot {
    max-width: 682px;
    padding: 52px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
    .text + .text{
        margin-top: 1rem;
    }
}

.text-image__line-1 {
    height: 100%;
    width: 2px;
    background: var(--nandor);
    position: absolute;
    top: 0;
}

.text-image__line-2 {
    height: 100%;
    width: 2px;
    right: 0;
    top: 0;
    background: var(--nandor);
    position: absolute;
}

@media (max-width: 1200px) {
    .text-image__figure {
        max-width: 400px;
    }
}

@media (max-width:1000px) {
    .text-image {
        padding-top: 96px;
        padding-bottom: 0;
        padding-bottom: 3rem;
    }

    .text-image__figure {
        position: absolute;
        max-height: 251px;
        max-width: 353px;
        top: 29px;
        left: 0;
        border-radius: 0px 0px 100px 0px;
    }

    .text-image__content {
        padding-top: 234px;
        height: auto;
    }

    .text-image__slot {
        padding: 0 1rem 40px 1rem;
        max-width: none;
    }
}</style>
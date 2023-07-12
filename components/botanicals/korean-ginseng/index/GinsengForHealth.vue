<script setup>
import { register } from 'swiper/element/bundle';
const items = [
    {
        label: 'Brain Health',
        href: '#',
        image: "/images/illustrations/brain.png"
    },
    {
        label: 'Cellular Metabolism',
        href: '#',
        image: "/images/illustrations/cells.png"
    },
    {
        label: 'Women\'s Health',
        href: '#',
        image: "/images/illustrations/uterus.png"
    },
    {
        label: 'Gut Health',
        href: '#',
        image: "/images/illustrations/intestine.png"
    },
    {
        label: 'Men\'s Health',
        href: '#',
        image: "/images/illustrations/banana.png"
    },
    {
        label: 'Hepatic Health',
        href: '#',
        image: "/images/illustrations/liver.png"
    },
    {
        label: 'Cardiovascular Health',
        href: '#',
        image: "/images/illustrations/brain.png"
    },
    {
        label: 'Sports Nutrition',
        href: '#',
        image: "/images/illustrations/brain.png"
    },
]

const swiperEl = ref()
const swiperParams = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        1000: {
            slidesPerView: 3
        }
    }
}


onMounted(() => {
    register();
    if (swiperEl.value.initialize) {

        Object.assign(swiperEl.value, swiperParams)
        swiperEl.value.initialize()
    }
})

const slideNext = () => {
    swiperEl.value.swiper.slideNext()
}

const slidePrev = () => {
    swiperEl.value.swiper.slidePrev()
}
</script>
<template>
    <div class="ginseng-health__parent">
        <section class="ginseng-health">
            <div class="ginseng-health__container">
                <Tag>Other applications</Tag>
                <h2 class="h2">Ginseng for Health</h2>
                <p class="text">Ginseng's potent and varied medicinal virtues have made it one of the most prized herbs of
                    all times. Traditionally consumed as a longevity elixir, the precious roots are said to boost health,
                    vitality and even sexual performance, earning them the reputation of a panacea (cure-all). Ginseng is
                    also often referred to as the King of Adaptogens, for it shows extraordinary potential in helping the
                    body modulate stress responses and promote homeostasis in a wide variety of physiological functions.</p>
                <p class="text">Modern research now provides abundant support for ginseng’s health benefits. With no less
                    than 9000 publications on PubMed, Panax ginseng is one of the most studied plants around the globe, yet
                    it continues to reveal new and innovative therapeutic avenues in the fields of neurology, gut health or
                    women's health.</p>
                <p class="text">Explore our thematic literature reviews and delve into the scientifically-supported health
                    benefits of ginseng, an ancient botanical with tremendous potential to address the health challenges of
                    modern living.</p>
            </div>
            <div class="ginseng-health__slider-container">
                <button class="ginseng-health__button" data-direction="prev" @click="slidePrev">
                    <svg width="17" height="27" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.1341 26.9538L0.800781 13.6204L14.1341 0.287109L16.5008 2.65378L5.53411 13.6204L16.5008 24.5871L14.1341 26.9538Z"
                            fill="currentColor" />
                    </svg>

                </button>
                <swiper-container class="ginseng-health__slider" ref="swiperEl" init="false">
                    <swiper-slide class="ginseng-health__slide" v-for="(item, index) in items" :key="index">
                        <figure class="ginseng-health__figure">
                            <nuxt-picture :src="item.image" alt=""/>
                        </figure>
                        <BotalysButton color="yellow" :href="item.href">{{ item.label }}</BotalysButton>
                    </swiper-slide>

                </swiper-container>
                <button class="ginseng-health__button" data-direction="next" @click="slideNext">
                    <svg width="17" height="27" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.86588 0.288412L16.1992 13.6217L2.86589 26.9551L0.499219 24.5884L11.4659 13.6217L0.499217 2.65508L2.86588 0.288412Z"
                            fill="currentColor" />
                    </svg>

                </button>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.ginseng-health__parent {
    padding: 0 4px;
}

.ginseng-health {
    max-width: 1296px;
    margin: 0 auto;
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
    border-top: 2px solid var(--nandor);
    padding-top: 120px;
    padding-bottom: 120px;
}

.ginseng-health__container {
    max-width: 840px;
    margin: 0 auto;

    .text {
        margin-top: 1rem;
    }
}

.ginseng-health__slide {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 423px;
}

.ginseng-health__slider {
    margin-top: 40px;
}

.ginseng-health__figure {
    max-width: 200px;
    aspect-ratio: 1/1;
    transition: max-width 300ms;
    margin-bottom: 48px;
    background: var(--half-spanish-white);

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        mix-blend-mode: luminosity;
    }

}

.ginseng-health__slider-container {
    display: flex;
    align-items: center;
    padding: 0 23px;
}

.swiper-slide-active .ginseng-health__figure {
    max-width: 300px;

}

.swiper-slide-active {
    .button {
        background: var(--dark-jungle-green);
        border-color: var(--dark-jungle-green);
        color: var(--mikado-yellow);

        &:hover {
            background-color: var(--mikado-yellow);
            color: var(--dark-jungle-green);
            border-color: var(--mikado-yellow)
        }
    }
}

.ginseng-health__button {
    border: 2px solid var(--dark-jungle-green);
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--dark-jungle-green);
    transition: background 300ms ease-in-out, color 300ms ease-in-out;
    flex-shrink: 0;
    cursor: pointer;

    &:hover {
        background: var(--dark-jungle-green);
        color: var(--half-spanish-white)
    }
}


@media (max-width: 1000px) {
    .ginseng-health__button {
        display: none;
    }

    .ginseng-health__slider-container {
        padding: 0;
    }
}

@media (max-width:809px) {
    .ginseng-health__slider {
        margin-top: 0;
    }

    .ginseng-health {
        padding: 40px 0;
    }

    .ginseng-health__container {
        padding: 0 1rem;
    }

    .swiper-slide-active .ginseng-health__figure {
        max-width: 200px;

    }

    .ginseng-health__figure {
        max-width: 200px;

    }

}
</style>
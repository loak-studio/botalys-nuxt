<script setup>
import { gsap, Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
let tl

const steps = [
    {
        label: "Technical specifications",
        text: "Determination of the product’s desired technical specifications and characteristics and project feasibility study.",
    },
    {
        label: "Non-technical validation",
        text: "Bilateral validation of project compliance with legislative, pricing, operational and marketing requirements.",
    },
    {
        label: "Rare Plant Sourcing",
        text: "Establishment of a list of plant and / or seed suppliers who comply with the legislation and both partners requirements.",
    },
    {
        label: "Vitroplants production <br/> & Cultivar selection",
        text: "Production of plant or seed-derived vitroplants and selection of the most suitable cultivars for BOTALYS’ process and targeted specifications.",
    },
    {
        label: "Process Optimization",
        text: "Optimization of the cultivation / growth parameters of the selected cultivar to achieve the biomass and composition specs.",
    },
    {
        label: "Industrial Scale-up",
        text: "Process scale-up from lab to farm, definition of quality assurance procedures and final product validation before production.",
    },
];

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.matchMedia().add('(min-width:809px)', () => {
        tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".development-steps",
                start: "10% 50%",
                end: "90% 50%",
                scrub: true,
            }
        })
        steps.forEach((step, index) => {
           if(index < steps.length -1){
            tl.from(`.development-steps__item:nth-child(${index + 2}) .development-steps__line-2`, {
                scaleX: 0,
                ease:Power1.easeIn
            })
            tl.from(`.development-steps__item:nth-child(${index + 2}) .development-steps__line-1`, {
                scaleY: 0,
                ease:Power1.easeOut
            })
            tl.from(`.development-steps__item:nth-child(${index + 2})`, {
                borderColor: 'transparent',
                background:'rgb(230,226,201)'
            })
            tl.from(`.development-steps__item:nth-child(${index + 2}) > *:not(.development-steps__line-1):not(.development-steps__line-2)`, {
                opacity: 0,
            })
           }
        })
    })
})
onUnmounted(() => {
    tl.kill()
})

</script>
<template>
    <div class="development-steps__parent">
        <section class="development-steps">
            <div class="development-steps__container">
                <div class="development-steps__item-container">
                    <div class="development-steps__item" v-for="(step, index) in steps" :key="index">
                        <span class="development-steps__number">{{ index + 1 }}</span>
                        <h3 class="h3 development-steps__title" v-html="step.label"></h3>
                        <p class="text" v-html="step.text"></p>
                        <hr class="development-steps__line-1">
                        <hr class="development-steps__line-2">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.development-steps__parent {
    padding: 0 4px;
}

.development-steps {
    max-width: 1296px;
    margin: 0 auto;
    padding: 120px 4px  120px 4px;
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
}

.development-steps__container {
    max-width: 924px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.development-steps__item {
    padding: 20px;
    max-width: 524px;
    border: 2px solid var(--nandor);
    position: relative;

    .development-steps__line-1 {
        height: 87px;
        width: 2px;
        background: var(--nandor);
        content: '';
        display: block;
        position: absolute;
        bottom: 100%;
        transform-origin: top;
    }

    .development-steps__line-2 {
        width: 166px;
        height: 2px;
        background-color: var(--nandor);
        position: absolute;
        bottom: calc(100% + 87px);
        content: '';
        z-index: -1;
    }
}

.development-steps__item:nth-child(1) {

    .development-steps__line-1,
    .development-steps__line-2 {
        display: none;
    }
}

//WHITE BACKGROUND
.development-steps__item:nth-child(even) {
    margin: 39px 0 39px auto;
    background-color: var(--half-spanish-white);

    .development-steps__number {
        color: var(--half-spanish-white);
        -webkit-text-stroke: 1px var(--dark-jungle-green);
    }

    .development-steps__line-1 {
        left: 55%;
    }

    .development-steps__line-2 {
        left: calc(55% - 164px);
        transform-origin: left;
    }
}


//BLACK BACKGROUND
.development-steps__item:nth-child(odd) {
    background: var(--dark-jungle-green);
    color: var(--half-spanish-white);

    .development-steps__line-1 {
        left: 45%;
    }

    .development-steps__line-2 {
        left: 45%;
        transform-origin: right;
    }
}

.development-steps__number {
    font-family: 'Sofia Pro';
    font-size: 96px;
    font-weight: 700;
    line-height: 142%;
}

.development-steps__title::after {
    content: '';
    display: block;
    height: 2px;
    width: 100px;
    background: var(--mikado-yellow);
    margin: 1rem 0;
}

@media (max-width: 809px) {
    .development-steps {
        padding: 0;
    }

    .development-steps__container .development-steps__item {
        margin: 0;
        max-width: none;
        border: none;
        padding: 1rem;

        .development-steps__line-1,
        .development-steps__line-2 {
            display: none;
        }
    }
}</style>
<script setup>
import FreshGinseng from "~/assets/images/illustrations/plants/panax.png"
import RedGinseng from "~/assets/images/illustrations/plants/red-ginseng.png"
import WhiteGinseng from "~/assets/images/illustrations/plants/white-ginseng.png"
import BlackGinseng from "~/assets/images/illustrations/plants/black-ginseng.png"

const plants = [
    {
        label: 'Fresh ginseng',
        image: FreshGinseng,
        description: [
            "Often used in traditional food preparations across Asia, fresh ginseng roots are naturally rich in water-soluble precursor ginsenosides forms like Rg1 and Rb1.",
            "Despite it being a great source of vitamins, enzymes and other beneficial nutrients for health, fresh ginseng is a perishable product and is therefore rarely consumed as such."
        ]
    },
    {
        label: 'White ginseng',
        image: WhiteGinseng,
        description: [
            "Sun-drying is the oldest method of processing ginseng. The resulting product, known as white ginseng, is the most common type of ginseng on the Chinese market. ",
            "The process involves a simple drying of the ginseng roots, traditionally in the sun, and removes 75% of their water content. Contrary to other methods, sun-drying does not significantly alter ginsenosides (it just concentrates them), and thus preserves the root’s bioactive composition. "
        ]
    },
    {
        label: 'Red ginseng',
        image: RedGinseng,
        description: [
            "Red ginseng is obtained by steam cooking of the ginseng roots for 1 to 3 cycles. The heat causes the browning (Maillard reaction) of the roots due to their high content in polysaccharides, giving ginseng a characteristic reddish color.",
            "In addition, the root’s bioactive matrix undergoes significant transformations under the effect of heat and water. Precursor ginsenosides like Rg1 and Rb1 are partially converted into more bioactive derivatives, also referred to as rare or noble ginsenosides (Rg3, Rg5 and Rk1). "
        ]
    },
    {
        label: 'Black ginseng',
        image: BlackGinseng,
        description: [
            "Black ginseng is obtained by cooking ginseng roots for between 4 and 9 steam cycles. The higher degree of cooking darkens the roots color to dark black tones and accentuates the degree of bioconversion of common ginsenosides into their bioactive forms, especially dehydrated forms like Rg5 and Rk1. ",
        ]
    }
]

const currentPlant = ref(0)

</script>

<template>
    <div class="types-products__parent">
        <section class="types-products">
            <div class="types-products__title">
                <div class="types-products__title-container">
                    <Tag>Ginseng processing</Tag>
                    <h2 class="h2">
                        Types of products
                    </h2>
                </div>
                <p class="text">
                    Traditional ginseng processing has been around for centuries; Koreans started drying and cooking ginseng
                    roots as a way of extending their shelf-life to up to 20 years. Perfected over centuries, these age-old
                    methods are still used today to preserve the extraordinary properties of the coveted roots. 
                </p>
                <p class="text">
                    The type and degree of processing have also traditionally been associated with more potent health
                    benefits, as explained by the significant chemical changes they induce in the bioactive matrix. The
                    bioactive compounds found in ginseng do indeed play a significant role in determining the products
                    quality and pharmacological effectiveness; each type of processed ginseng has a unique ginsenosides
                    "fingerprint", which can be used to confirm its authenticity and correct identification.
                </p>
            </div>
            <hr class="types-products__line" />
            <div class="types-products__list-parent">
                <ul class="types-products__list">
                    <li :class="{ 'types-products__list-item--active': currentPlant == index }" :data-label="plant.label"
                        class="types-products__list-item" v-for="(plant, index) in plants" :key="index">
                        <button @click="() => {
                            currentPlant = index
                        }" class="types-products__button">
                            <figure class="types-products__figure">
                                <img :src="plant.image" alt="">
                            </figure>

                            <div @click.stop class="types-products__plant-paragraph-container">
                                <div class="types-products__plant-paragraph">
                                    <p class="text" v-for="(paragraph, index) in plant.description">
                                        {{ paragraph }}
                                    </p>
                                </div>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.types-products__parent {
    padding: 0 4px;
}

.types-products {
    max-width: 1296px;
    width: 100%;
    margin: 0 auto;
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
    border-top: 2px solid var(--nandor);
    padding-top: 120px;
    padding-bottom: 120px;
}

.types-products__title {
    max-width: 1048px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    * {
        max-width: 840px;
    }
}

.types-products__title-container {
    margin-bottom: 1rem;
}


.types-products__list-parent {
    position: relative;
}

.types-products__list {
    display: flex;
    justify-content: space-between;
    max-width: 926px;
    margin: 0 auto;
    gap: 40px;
    padding-bottom: 300px;
}

.types-products__list-item {
    display: flex;
    justify-content: center;
    opacity: .3;
    transition: opacity .3s ease-in-out;
}

.types-products__list-item--active {
    opacity: 1;
}


.types-products__list-item::before {
    content: attr(data-label);
    position: absolute;
    font-weight: 500;
    font-family: "sofia-pro";
    line-height: 44px;
    font-size: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    width: fit-content;
    background: var(--half-spanish-white);
    opacity: 0;
    transition: opacity 300ms ease-in-out, bottom 300ms ease-in-out;
    bottom: calc(100%);
}

.types-products__list-item--active::before {
    opacity: 1;
    bottom: calc(100% + 30px);
}

.types-products__figure {
    height: 520px;

    cursor: pointer;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
}

.types-products__line {
    height: 2px;
    max-width: 1048px;
    width: 100%;
    margin: 48px auto;
    background: var(--dark-jungle-green);
}

.types-products__plant-paragraph {
    max-width: 624px;
    margin: 0 auto;
    margin-top: 3rem;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    opacity: 0;
    text-align: left;
    display: flex;
    padding-top: 20px;
    transition: padding-top 300ms ease-in-out;
}

.types-products__plant-paragraph-container {
    position: absolute;
    width: 100%;
    left: 0;
}

.types-products__list-item--active .types-products__plant-paragraph {
    opacity: 1;
    padding-top: 0;
}

@media (max-width:1150px) {
    .types-products {
        padding: 120px 1rem;
    }
}

@media (max-width:809px) {
    .types-products {
        padding: 40px 0;
    }
    .types-products__title{
        padding: 0 1rem;
    }
    .types-products__line {
        opacity: 0;
    }

    .types-products__list {
        flex-direction: column;
        padding-bottom: 0;
    }

    .types-products__list-item {
        opacity: 1;
        flex-direction: column;
        border-top: 2px solid var(--dark-jungle-green);
        padding: 1rem;
    }

    .types-products__list-item::before{
        opacity: 1;
        position: static;
        margin: 0 auto;

        margin-top: -40px;
        margin-bottom: 2rem;

    }

    .types-products__figure {
        display: none;
    }

    .types-products__plant-paragraph-container {
        position: static;
    }

    .types-products__plant-paragraph {
        opacity: 1;
        margin-top: 0;
        padding-top: 0;
    }
}</style>
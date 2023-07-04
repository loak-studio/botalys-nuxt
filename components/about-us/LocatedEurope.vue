<template>
    <div class="located-europe__parent">
        <section class="located-europe">
            <div class="located-europe__title">
                <Tag>Our base camp</Tag>
                <h2 class="h2">
                    Located at the heart of Europe
                </h2>
                <p class="text">Based in Belgium, BOTALYS’ runs one of the world's largest Vertical Farms devoted to medicinal plant cultivation. Fully operated in the EU under the strictest quality standards, BOTALYS' vertically integrated process from seed to ingredient is testimony to an unwavering commitment to excellence.</p>
            </div>
            <figure class="located-europe__draw">
                    <img src="~/assets/images/located-at-the-heart-of-europe.svg" alt="">
            </figure>
        </section>
    </div>
</template>

<style lang="scss">
.located-europe__parent{
    padding: 0 4px;
}
.located-europe{
    border: 2px solid var(--nandor);
    max-width: 1296px;
    width: 100%;
    margin: 0 auto;
    padding-top: 120px;
    padding-bottom: 120px;
}
.located-europe__title{
    max-width: 1048px;
    width: 100%;
    margin: 0 auto;
    * {
        max-width: 840px;
        width: 100%;
    }
    .text{
        margin-top: 1rem;
    }

}

.located-europe__draw{
    max-width: 1136px;
    width: 100%;
    margin: 0 auto;
    margin-top: 80px;
    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
}

@media (max-width:1200px) {
    .located-europe{
        padding: 120px 1rem;
    }
}
@media (max-width:809px) {
    .located-europe{
        padding: 40px 1rem;
    }
    .located-europe__draw{
        margin-top: 2rem;
    }
}
</style>
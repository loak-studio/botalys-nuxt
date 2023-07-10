<template>
    <div class="located-europe__parent">
        <section class="located-europe">
            <div class="located-europe__title">
                <Tag>Our base camp</Tag>
                <h2 class="h2">
                    Located at the heart of Europe
                </h2>
                <p class="text">Based in Belgium, BOTALYS’ runs one of the world's largest Vertical Farms devoted to
                    medicinal plant cultivation. Fully operated in the EU under the strictest quality standards, BOTALYS'
                    vertically integrated process from seed to ingredient is testimony to an unwavering commitment to
                    excellence.</p>
            </div>
            <div class="located-europe__numbers">
                <figure class="located-europe__draw">
                    <img src="~/assets/images/batiment.png" alt="">
                </figure>
                <div data-number="botanical-explorers" class="located-europe__number-item">
                    <span class="botanical-explorers__number-outline">30</span>
                    <span class="h6">Botanical explorers</span>
                </div>
                <div data-number="sqm" class="located-europe__number-item">
                    <span class="botanical-explorers__number-outline">2000</span>
                    <span class="h6">SQM Vertical farm</span>
                </div>
                <div data-number="years" class="located-europe__number-item">
                    <span class="botanical-explorers__number-outline">+12</span>
                    <span class="h6">Years of r&d and<br/> botanical expertise</span>
                </div>
                <div data-number="tons" class="located-europe__number-item">
                    <span class="botanical-explorers__number-outline">60</span>
                    <span class="h6">Tons of fresh<br/> botanicals / year</span>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.located-europe__parent {
    padding: 0 4px;
}

.located-europe {
    border: 2px solid var(--nandor);
    max-width: 1296px;
    width: 100%;
    margin: 0 auto;
    padding-top: 120px;
    padding-bottom: 120px;
}

.located-europe__title {
    max-width: 1048px;
    width: 100%;
    margin: 0 auto;

    * {
        max-width: 840px;
        width: 100%;
    }

    .text {
        margin-top: 1rem;
    }

}

.located-europe__numbers {
    position: relative;
    max-width: 1136px;
    margin: 0 auto;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 120px;
    padding-bottom: 120px;
}

.located-europe__draw {
    max-width: 852px;
    width: 100%;
    margin: 0 auto;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
}

.located-europe__number-item {
    display: flex;
    flex-direction: column;
    position: absolute;
    .h6{
        text-transform: uppercase;
    }
    &::before{

        display: block;
        border-color: var(--nandor);
        border-style: dashed;
        border-width: 0;
        content:'';
        position: absolute;
    }
    &::after{
        content:'';
        position: absolute;
        background: var(--mikado-yellow);
        border: 2px solid var(--nandor);
        border-radius: 50%;
    }
}

[data-number="botanical-explorers"] {
    left: 0;
    top: 50px;
    &::before{
        height: 104px;
        width: 327px;
        top:calc(100% + 11px);
        left: 40px;
        border-left-width: 2px;
        border-bottom-width: 2px;
    }
    &::after{
        top: calc(95px + 100% + 10px);
        left: calc(40px + 327px);
        width: 16px;
        height: 16px;
    }
}

[data-number="sqm"] {
    right: 0;
    top: 0;
    &::before{
        height: 162px;
        width: 112px;
        top:60px;
        right: calc(100% + 22px);
        border-left-width: 2px;
        border-top-width: 2px;
    }
    &::after{
        top: calc(162px + 60px);
        right: calc(112px + 100% + 22px - 10px);
        width: 16px;
        height: 16px;
    }
}

[data-number="years"] {
    bottom: 0;
    left: 50px;

    &::before{
        height: 240px;
        width: 150px;
        bottom:105px;
        left: 100%;
        border-right-width: 2px;
        border-bottom-width: 2px;
    }
    &::after{
        bottom: calc(105px + 240px);
        left: calc(100% + 150px - 10px);
        width: 16px;
        height: 16px;
    }
}

[data-number="tons"] {
    right: 140px;
    bottom: -50px;
    &::before{
        height: 162px;
        width: 0px;
        bottom:100%;
        left: 50px;
        border-right-width: 2px;
        border-bottom-width: 2px;
    }
    &::after{
        bottom: calc(100% + 162px);
        left: calc(50px - 10px);
        width: 16px;
        height: 16px;
    }
}

.botanical-explorers__number-outline {
    font-family: "sofia-pro";
    font-size: 96px;
    font-weight: 700;
    line-height: 100px;
    color: transparent;
    -webkit-text-stroke: 2px var(--dark-jungle-green);
}

@media (max-width:1200px) {
    .located-europe {
        padding: 120px 1rem;
    }
}

@media (max-width: 1000px) {
    .located-europe__number-item{
        position: static;
        &::after{
            display: none;
        }
        &::before{
            display: none;
        }
    }
    .located-europe__numbers{
        flex-direction: column;
        align-items: flex-start;
        gap:1rem;
        padding: 0;
    }
}

@media (max-width:809px) {
    .located-europe {
        padding: 40px 1rem;
    }

    .located-europe__draw {
        margin-top: 2rem;
    }
}</style>
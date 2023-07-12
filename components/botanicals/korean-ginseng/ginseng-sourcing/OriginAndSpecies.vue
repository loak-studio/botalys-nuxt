<template>
    <div class="origin-species__parent">
        <section class="origin-species">
            <figure class="origin-species__panax">
                <nuxt-picture loading="lazy" width="388" height="736" src="/images/illustrations/plants/panax.png" alt=""/>
            </figure>
            <div class="origin-species__text-container">
                <div>

                <Tag>The millenial panacea</Tag>
                <h2 class="h2">Origin & Species</h2>
                </div>
                <p class="text">Korean ginseng (Panax ginseng C.A. Meyer) has been considered one of the pillars of traditional Asian medicine for several millennia. Its first recorded mention dates back to around 2700 BC, in the pharmacopeia of the father of Chinese medicine, Emperor Shen Nung. Ginseng was then praised for its tonic, longevity and aphrodisiac virtues, and described as the greatest herbal medicine of all.</p>
                <p class="text">But the importance of ginseng goes far beyond its medicinal value: for centuries, its immeasurable prestige in the time of Imperial China made it a prized luxury reserved only for the wealthy and noble. Over time, the gradual rarefaction of its highly coveted roots placed ginseng at the heart of important political and economic stakes; access to this precious resource has profoundly shaped economic and geopolitical international relations throughout the history of Asian societies. </p>
                <p class="text">Today, the high cultural and market value of Korean ginseng have made it one of the most expensive herbs on the market, while also making the precious herb a golden-target for adulteration.</p>
                <p class="text">Ginseng adulteration is indeed quite common on the market of herbal products; a recent study estimated that no less than 24% of 507 ginseng-containing products sold across 12 countries were either mislabeled of adulterated, failing botanical and / or chemical identification tests (Ichim et al., 2020).</p>
            </div>
            <figure class="origin-species__false-ginseng">
                <nuxt-picture loading="lazy" width="944" height="529" src="/images/schemas/false-ginseng.svg" alt=""/>
            </figure>
            <div class="origin-species__caption">
                <p class="text">
                    A number of morphologically or pharmacologically similar botanicals are frequently being passed off as “ginsengs”, taking advantage of Korean ginseng’s prestige and high price, but falling short in delivering its unique benefits.
                </p>
            </div>
            <div class="origin-species__lined-text">
                <p class="text bold">
                    For those seeking the unique benefits of this highly coveted herb, DNA and chemical analysis can be valuable tools to ensure the absolute authenticity and purity of ginseng products. 
                </p>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.origin-species__parent{
    padding:0 4px;
}
.origin-species{
    position: relative;
    max-width: 1296px;
    width: 100%;
    margin: 0 auto;
    border-right: 2px solid var(--nandor);
    padding-top: 120px;
    padding-bottom: 120px;
    &::before{
        content:'';
        height: 100%;
        width: 2px;
        background: var(--nandor);
        position: absolute;
        left: 0;
        top:0;
        z-index: 5;
    }
}

.origin-species__text-container{
    max-width: 1048px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap:1rem;
    .h2{
        margin-bottom: 1rem;
    }
    *{
        max-width: 840px;
        width: 100%;
    }
}
.origin-species__panax{
    position: absolute;
    top:0;
    left:-93px;
    width: 388px;
    height: 736px;
    z-index: -1;
    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
}
.origin-species__false-ginseng{
    max-width: 944px;
    width: 100%;
    margin: 0 auto;
    margin-top: 3rem;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
.origin-species__caption{
    max-width: 1048px;
    margin: 3rem auto;

    .text{
        max-width: 840px;
    }
}
.origin-species__lined-text{
    display: flex;
    align-items: center;
    gap:1rem;
    max-width: 1048px;
    margin: 0 auto;
    &::before{
        height: 2px;
        content: '';
        background: var(--dark-jungle-green);
        min-width: 20px;
        flex-shrink: 1;
        flex-grow: 1;
    }
    &::after{
        height: 2px;
        content: '';
        background: var(--dark-jungle-green);
        min-width: 20px;

        flex-shrink: 1;
        flex-grow: 1;
    }
    .text{
        max-width: 730px;

        width: 100%;
        flex-grow: 1;
    }
}
@media (max-width: 1150px) {
    .origin-species__panax{
        width: 227px;
        height: 341px;
        right: -11px;
        top: 120px;
        left: auto;
    }
    .origin-species__text-container{
        justify-content: flex-start;
        align-items: flex-start;
        padding: 0 1rem;
    }
    .origin-species__caption{
        padding: 0 1rem;
    }
}

@media (max-width:809px) {
    .origin-species__panax{
        width: 127px;
        height: 241px;
        top:24px;
    }
    .origin-species{
        padding: 40px 0;
    }
}
</style>
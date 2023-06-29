<template>
    <div class="usage-grid__parent">
        <div class="usage-grid">
            <div class="usage-grid__introduction">
                <p class="text">While the clinical study statistically demonstrated the benefits of BOTALYS red ginseng on 3
                    indicators of mental stamina, it lacked an evaluation of whether or not these benefits were effectively
                    perceived by the consumer.</p>
                <p class="text">A second double blind vs. placebo pilot usage test was therefore conducted to evaluate the
                    perceived efficacy of a 20 day-long BOTALYS red ginseng supplementation on several neurological and
                    well-being factors.</p>
            </div>
            <div class="usage-grid__lined-text">
                <span class="text bold">HOW DID CONSUMERS FEEL AFTER TAKING
                    BOTALYS RED GINSENG FOR 10 DAYS ?</span>
            </div>
            <div class="usage-grid__grid">
                <div class="usage-grid__grid-item">
                    <span class="usage-grid__value">83%</span>
                    <div class="usage-grid__label">
                        <span class="usage-grid__verb text bold">Felt</span>
                        <span class="usage-grid__better h5">more dynamic</span>
                    </div>
                </div>
                <div class="usage-grid__grid-item">
                    <span class="usage-grid__value">80%</span>
                    <div class="usage-grid__label">
                        <span class="usage-grid__verb text bold">Felt in a</span>
                        <span class="usage-grid__better h5">better mood</span>
                    </div>
                </div>
                <div class="usage-grid__grid-item">
                    <span class="usage-grid__value">71%</span>
                    <div class="usage-grid__label">
                        <span class="usage-grid__verb text bold">ExPerienced</span>
                        <span class="usage-grid__better h5">better memory</span>
                    </div>
                </div>
                <div class="usage-grid__grid-item">
                    <span class="usage-grid__value">70%</span>
                    <div class="usage-grid__label">
                        <span class="usage-grid__verb text bold">ExPerienced</span>
                        <span class="usage-grid__better h5">better sleep</span>
                    </div>
                </div>
            </div>
            <more-details>
                The study was based on a self-assessment questionnaire and found that a large portion of consumers could feel BOTALYS red ginseng’s benefits on dynamism, mood stability, memory and even sleep quality after just 10 days, with the effects being incremental as the treatment was prolonged to 20 days.
            </more-details>
        </div>
    </div>
</template>

<style lang="scss">
.usage-grid__parent {
    padding: 0 4px;
}

.usage-grid {
    max-width: 1296px;
    width: 100%;
    margin: 0 auto;
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
    padding-top: 48px;
    padding-bottom: 1px;
}

.usage-grid__introduction {
    max-width: 1048px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .text {
        max-width: 840px;
    }
}

.usage-grid__lined-text{
    display: flex;
    align-items: center;
    gap:1rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    max-width: 1048px;
    margin: 0 auto;
    .text{
        max-width: 325px;
    }
    &::before{
        content:'';
        height: 2px;
        background: var(--dark-jungle-green);
        flex-grow: 1;
    }
    &::after{
        content:'';
        height: 2px;
        background: var(--dark-jungle-green);
        flex-grow: 1;
    }
}
.usage-grid__grid{
    display: grid;
    grid-template-columns: 50% 50%;
    max-width: 546px;
    margin: 0 auto;
    gap: 80px;
    margin-bottom: 3rem;
    position: relative;
}
.usage-grid__grid-item{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.usage-grid__better{
    text-transform: uppercase;
}
.usage-grid__grid-item:nth-child(1)::after{
    position: absolute;
    height: 100%;
    content:'';
    background: var(--dark-jungle-green);
    width: 2px;
    left: calc(50% + 40px);
}
.usage-grid__grid-item:nth-child(3),.usage-grid__grid-item:nth-child(4){
    flex-direction: column-reverse;
    position: relative;
    &::before{
        height: 2px;
        width: 100%;
        background: var(--dark-jungle-green);
        content:'';
        top:-40px;
        position: absolute;
    }
}
.usage-grid__label{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.usage-grid__value{
    font-family: 'bodoni-pt-variable';
    font-size: 136px;
}
</style>
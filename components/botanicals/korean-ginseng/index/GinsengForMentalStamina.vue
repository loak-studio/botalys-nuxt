<script setup>
const statsItems = [
    {
        label: 'Fatigue',
        value: 77
    },
    {
        label: 'Stress',
        value: 63
    }
]
</script>

<template>
    <div class="mental-stamina__parent">
        <section class="mental-stamina">
            <div class="mental-stamina__container">
                <div class="mental-stamina__left">
                    <Tag>BOTALYS Korean Red Ginseng</Tag>
                    <h2 class="h2 mental-stamina__title">Ginseng for Mental Stamina</h2>
                    <div class="mental-stamina__text">
                        <p class="text">In recent years, the "mental load" has emerged as a prevalent public health concern
                            with serious consequences for health and well-being.</p>
                        <p class="text">Often associated with a "double workday“, evidence shows women are particularly
                            affected.</p>
                        <p class="text">BOTALYS Red ginseng was specifically developed to tackle this issue. With clinically
                            demonstrated efficacy against several factors of mental load, BOTALYS Red ginseng is a unique
                            ultra pure natural nootropic for Mental Stamina that offers all the benefits of Biomimetic
                            Indoor Farming.</p>
                        <div class="mental-stamina__stats">
                            <div class="mental-stamina__stat-item" v-for="(statItem, index) in statsItems" :key="index">
                                <span class="h6 mental-stamina__stat-title">{{ statItem.label }}</span>
                                <progress class="mental-stamina__progress" :value="statItem.value" max="100" />
                                <span class="text">{{ statItem.value }}% of cases.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mental-stamina__right">
                    <div>
                        <span class="mental-stamina__percent">23%</span>
                        <span class="mental-stamina__percent-label text">of women</span>
                    </div>
                    <div>
                        <span class="mental-stamina__percent">14%</span>
                        <span class="mental-stamina__percent-label text">of men</span>
                    </div>
                    <div>
                        <p class="mental-stamine__percent-description text">struggle with daily <span class="h6">HEAVY METAL
                                LOAD</span> (IPSOS France, 2018)</p>
                    </div>
                </div>
            </div>
            <figure class="mental-stamina__brain">
                <nuxt-picture loading="lazy" src="/images/illustrations/brain.svg" alt=""/>
            </figure>
            <div class="mental-stamina__button-container">
                <BotalysButton color="yellow" href="/botanicals/korean-ginseng/ginseng-for-mental-stamina/">Dive into our proprietary data</BotalysButton>
            </div>
            <more-details>
                * Based on a Proprietary Clinical Trial (50 participants, 400 mg/d, 2 weeks) <br />
                ** Based on a Proprietary in vivo Study (old vs young mice, 50 mg/kg/d, Y-Maze test) <br />
                *** Based on a Proprietary in vitro Study (neuron cells excitotoxicity model, 100 μg/mL) <br />
                **** Based on a Proprietary in vitro Study (rat primary hippocampal neurons, 1 μg/mL) <br />
                ***** Based on a Proprietary ex vivo Study (mice hippocampus LTP model, 10 mg/kg)
            </more-details>
        </section>
    </div>
</template>

<style lang="scss">
.mental-stamina__parent {
    padding: 0 4px;
}

.mental-stamina__container {
    max-width: 1073px;
    margin: 0 auto;
    display: flex;
    gap: 3rem;
}

.mental-stamina {
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
    border-top: 2px solid var(--nandor);
    max-width: 1296px;
    margin: 0 auto;
    padding-top: 120px;
    padding-bottom: 120px;
}

.mental-stamina__title {
    margin-bottom: 3rem;
}

.mental-stamina__text {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    position: relative;

    &::after {
        content: '';
        height: 100%;
        width: 2px;
        background: var(--nandor);
        display: block;
        position: absolute;
        right: -3rem;
    }
}

.mental-stamina__left {
    max-width: 731px;
    width: 100%;
}

.mental-stamina__right {
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.mental-stamine__percent-description {
    flex-direction: column;
    display: flex;
    margin-top: 2rem;
}

.mental-stamina__stats {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    margin-top: 3rem;
    margin-bottom: 28px;
}

.mental-stamina__stat-item {
    display: flex;
    flex-direction: column;
    flex: 1 1 0;
    padding-left: 2rem;
    position: relative;
    gap: 14px;

    &::before {
        content: '';
        height: 104px;
        background: var(--nandor);
        position: absolute;
        width: 2px;
        left: 0;
    }
}

.mental-stamina__stat-title {
    text-transform: uppercase;
}

.mental-stamina__percent {
    display: block;
    font-family: "sofia-pro";
    color: var(--half-spanish-white);
    -webkit-text-stroke: 1px var(--dark-jungle-green);
    font-size: 96px;
    font-weight: 700;
    line-height: 100px;
}

.mental-stamina__progress {
    height: 24px;
    border: 2px solid var(--nandor);
    accent-color: red;
    background: var(--half-spanish-white);
}

.mental-stamina__progress::-webkit-progress-bar,
.mental-stamina__progress::-moz-progress-bar {
    background-color: var(--nandor);
}

.mental-stamina__brain {
    height: 678px;
    margin-top: 90px;
    mix-blend-mode: luminosity;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
}

.mental-stamina__button-container {
    display: flex;
    justify-content: center;
    padding: 90px 0 42px 0;
}

@media (max-width: 1150px) {
    .mental-stamina{
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
@media (max-width:809px) {
        .mental-stamina{
            padding: 40px 1rem;
        }
        .mental-stamina__container{
            display: flex;
            flex-direction: column;
        }
        .mental-stamina__right{
            padding-left: 0;
            flex-direction: row;
            justify-content: space-around;
            gap:1rem;
        }
}
@media (max-width: 600px) {
    .mental-stamina__right{
        flex-direction: column;
        align-items: center;
    }
    .mental-stamina__stats{
        flex-direction: column;
    }
    .mental-stamina__brain{
        height: 400px;
        margin-top: 2rem;
    }
    .mental-stamina__button-container{
        padding: 2rem;
    }
}
</style>
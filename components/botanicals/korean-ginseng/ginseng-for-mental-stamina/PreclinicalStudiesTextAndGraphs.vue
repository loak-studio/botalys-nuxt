<template>
    <div class="first-round__parent">
        <div class="first-round">
            <div class="first-round__container">
                <div class="first-round__texts">
                    <p class="text">
                        A first round of in-vitro tests demonstrated the potent neuroprotective effects of BOTALYS’ Red
                        ginseng
                        on rat neurons in glutamate and beta amyloid-injury models of neuronal degeneration. On healthy
                        neurons,
                        the ingredient even showed neurotrophic and prosynaptogenic properties.
                    </p>
                    <p class="text">
                        BOTALYS red ginseng’s effects were then evaluated in a murine model of cognitive decline. Memory
                        capacity parameters of 2-month-old mice were compared to those of 18-month-old mice supplemented
                        with
                        BOTALYS Red ginseng. As they aged, the mice showed significant natural loss of cognitive abilities.
                        But
                        after 8 days supplementation with BOTALYS Red ginseng, old mice were able to recover 74% of the
                        memory
                        capacity of young mice.
                    </p>
                </div>
                <div class="first-round__charts">
                    <div class="first-round__chart-item">
                        <h3 class="first-round__chart-title h3">Reaction time</h3>
                        <span class="first-round__chart-subtitle text">(escape latency)</span>
                        <BotanicalsKoreanGinsengGinsengForMentalStaminaChartsReactionTime />
                    </div>
                    <div class="first-round__chart-item">
                        <h3 class="first-round__chart-title h3">Short-term memory</h3>
                        <span class="first-round__chart-subtitle text">(time in new arm)</span>
                        <BotanicalsKoreanGinsengGinsengForMentalStaminaChartsShortTermMemory />
                    </div>
                </div>
                <MoreDetails>
                    The Y-maze experiment studies short-term spatial memory and is a test based on mice’s natural instinct
                    to
                    explore new environments. It evaluates mice’s memory by measuring how quickly they identify unexplored
                    sections of the maze and the amount of time spent exploring new areas.
                </MoreDetails>
            </div>
            <div class="first-round__lined-text">
                <span class="text bold">Significant short-term MEMORY recevory in old mice</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.first-round__parent {
    padding: 0 4px;
}

.first-round {
    max-width: 1296px;
    border-left: 2px solid var(--nandor);
    margin: 0 auto;
    width: 100%;
    border-right: 2px solid var(--nandor);
    padding-top: 3rem;
    padding-bottom: 120px;
}

.first-round__texts {
    max-width: 1048px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 6rem;

    .text {
        max-width: 840px;
    }
}

.first-round__charts {
    display: flex;
    max-width: 1048px;
    justify-content: space-between;
    gap: 1rem;
    margin: 0 auto;
    margin-bottom: 6rem;
}

.first-round__chart-subtitle {
    display: block;
    border-bottom: 2px solid var(--dark-jungle-green);
    max-width: 342px;
    padding-top: 12px;
    padding-bottom: 12px;
    margin-bottom: 56px;
}

.first-round__chart-item {
    flex-grow: 1;
    svg {
        width: 100%;
        object-fit: contain;
    }
}

.first-round__lined-text {
    max-width: 1048px;
    width: 100%;
    margin: 0 auto;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    &::before {
        flex-grow: 1;
        content: '';
        height: 2px;
        background: var(--dark-jungle-green);
        min-width: 23px;
    }

    &::after {
        flex-grow: 1;
        content: '';
        height: 2px;
        background: var(--dark-jungle-green);
        min-width: 23px;
    }
}

@media (max-width: 1113px) {
    .first-round {
        padding: 3rem 0rem 40px 0rem;
    }

    .first-round__charts {
        flex-direction: column;
        align-items: center;
    }
    .first-round__container{
        padding: 3rem 1rem 0px 1rem;
    }
}

@media (max-width:809px) {
    .first-round{
        padding: 0rem 0rem 40px 0rem;
    }
    .first-round__chart-subtitle{
        margin-bottom: 1rem;
    }
    .first-round__texts {
        padding-bottom: 3rem;
    }

    .first-round__charts {
        margin-bottom: 3rem;
    }
}</style>
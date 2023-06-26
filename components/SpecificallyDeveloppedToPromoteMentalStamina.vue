<template>
    <div class="specifically-developped__parent">
        <section class="specifically-developped">
            <div class="specifically-developped__container">
                <div class="specifically-developped__header">
                    <Tag>BOTALYS Red ginseng</Tag>
                    <h2 class="h2">Specifically developped to promote mental stamina</h2>
                    <div class="specifically-developped__text-container">
                        <p class="text">With over 9000 publications on PubMed, Korean ginseng is one of the most extensively studied
                            botanicals in the field of phytotherapy. It is especially known for its potent adaptogenic
                            virtues, which are at the core of many of ginseng’s health benefits. Used to help regulate the
                            body's stress response for millennia, this ancient herb holds tremendous promise in combatting
                            modern-day symptoms of heavy mental load, such as anxiety, fatigue and difficulty focusing.</p>
                        <p class="text">Recent studies have brought attention to ginseng's potent neuroactive properties; from boosting
                            mental clarity and focus to fighting fatigue and reducing stress, ginseng’s benefits for mental
                            performance have made it a crucial phytoactive in addressing the health challenges of modern
                            living.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.specifically-developped__parent {
    padding: 0 4px;
}

.specifically-developped {
    max-width: 1296px;
    width: 100%;
    margin: 0 auto;
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
    padding-top: 120px;
}

.specifically-developped__container{
    max-width: 1048px;
    margin: 0 auto;
}
.specifically-developped__text-container{
    display: flex;
    flex-direction: column;
    gap:1rem;
    margin-top: 2rem;
    padding-bottom: 3rem;
}
.specifically-developped__header {
    p {
        max-width: 840px;
    }

    h2 {
        max-width: 578px;
    }
}

@media (max-width: 1064px) {
    .specifically-developped__container{
        padding: 0 1rem;
    }
}
@media (max-width:809px) {
    .specifically-developped{
        padding-top: 40px;
    }
}
</style>
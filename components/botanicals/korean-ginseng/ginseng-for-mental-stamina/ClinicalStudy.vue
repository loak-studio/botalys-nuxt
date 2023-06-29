<template>
    <div class="clinical-before__parent">
        <div class="clinical-before"/>
    </div>
    <div class="clinical__parent">
        <div class="clinical">
            <div class="clinical__title">
                <Tag color="yellow">Proprietary Studies</Tag>
                <h2 class="h2">Clinical studies</h2>
            </div>
            <div class="clinical__number">
                <span class="outline-yellow-number">50</span>
                <span class="clinical__value-title h5">Participants</span>
            </div>
            <div class="clinical__number">
                <span class="outline-yellow-number">400</span>
                <span class="clinical__value-title h5">mg/day</span>
            </div>
            <div class="clinical__number">
                <span class="outline-yellow-number">2</span>
                <span class="clinical__value-title h5">Weeks</span>
            </div>
        </div>
    </div>
    <div class="clinical-after__parent">
        <div class="clinical-after">
            <div class="clinical-after__container">
                <p class="text">Following encouraging preclinical results, a Pilot, Randomized, Double-Blind, Placebo-Controlled Crossover clinical study was conducted to study BOTALYS red ginseng’s effects on mental stamina.</p>
                <p class="text">The study was carried out in a call-center; a typical model for high workload and stress, and measured how BOTALYS red ginseng supplementation could impact focus, stress and memory over the course of 12 days.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.clinical-before__parent, .clinical-after__parent {
    padding: 0 4px;
}
.clinical-after{
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
    max-width: 1296px;
    width: 100%;
    margin: 0 auto;
}
.clinical-after__container{
    max-width: 1048px;
    margin: 0 auto;
    padding-top: 48px;
    display: flex;
    flex-direction: column;
    gap:1rem;
    .text{
        max-width: 840px;
    }
}


.clinical-before {
    max-width: 1296px;
    height: 120px;
    width: 100%;
    margin: 0 auto;
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
    border-top: 2px solid var(--nandor);
}

.clinical__parent{
    background: var(--dark-jungle-green);
    max-width: 1440px;
    border-radius: 0px 0px 0px 96px; 
    margin: 0 auto;
    padding: 0 4px;
}
.clinical{
    border-left: 2px solid var(--nandor);
    border-radius: 2px solid var(--nandor);
    margin: 0 auto;
    max-width: 1296px;
    width: 100%;
    display: grid;
    grid-template-columns: 49% 17% 17% 17%;
}
.clinical__number{
    display: flex;
    flex-direction: column;
    padding: 24px;
    justify-content: flex-end;
}
.clinical__title{
    padding: 24px;
    padding-top: 123px;
    .h2{
        color: var(--half-spanish-white)
    }
}
.clinical__value-title{
    color: var(--half-spanish-white)
}
@media (max-width: 1440px) {
        .clinical__parent{
            border-radius:  0 0 0 50px ;
        }
}
@media (max-width: 1100px) {
    .clinical-after__container{
        padding: 40px 1rem 0 1rem;
    }
}
@media (max-width:809px) {
    .clinical-before{
        height: 40px;
    }
    .preclinical-before {
        height: 40px;
    }
    .clinical__parent{
        border-radius: 0;
    }
    .clinical{
        grid-template-columns: repeat(1, minmax(0,1fr));
    }
    .clinical__title{
        padding: 1rem;
    }
    .clinical__number{
        padding: 1rem;
    }
}
</style>
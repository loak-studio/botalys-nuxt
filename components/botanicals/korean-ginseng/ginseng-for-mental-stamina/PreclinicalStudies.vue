<template>
    <div class="preclinical-before__parent">
        <div class="preclinical-before"/>
    </div>
    <div class="preclinical-studies__parent">
        <div class="preclinical-studies">
            <div class="preclinical-studies__title">
                <Tag color="yellow">Proprietary Studies</Tag>
                <h2 class="h2">Preclinical studies</h2>
            </div>
            <div class="preclinical-studies__number">
                <span class="outline-yellow-number">22</span>
                <span class="preclinical-studies__value-title h5">rats</span>
            </div>
            <div class="preclinical-studies__number">
                <span class="outline-yellow-number">50</span>
                <span class="preclinical-studies__value-title h5">mg/kg/day</span>
            </div>
            <div class="preclinical-studies__number">
                <span class="outline-yellow-number">8</span>
                <span class="preclinical-studies__value-title h5">Days</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.preclinical-before__parent {
    padding: 0 4px;
}

.preclinical-before {
    max-width: 1296px;
    height: 120px;
    width: 100%;
    margin: 0 auto;
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
}

.preclinical-studies__parent{
    background: var(--dark-jungle-green);
    max-width: 1440px;
    border-radius: 0px 0px 0px 96px; 
    margin: 0 auto;
    padding: 0 4px;
}
.preclinical-studies{
    border-left: 2px solid var(--nandor);
    border-radius: 2px solid var(--nandor);
    margin: 0 auto;
    max-width: 1296px;
    width: 100%;
    display: grid;
    grid-template-columns: 49% 17% 17% 17%;
}
.preclinical-studies__number{
    display: flex;
    flex-direction: column;
    padding: 24px;
    justify-content: flex-end;
}
.preclinical-studies__title{
    padding: 24px;
    padding-top: 123px;
    .h2{
        color: var(--half-spanish-white)
    }
}
.preclinical-studies__value-title{
    color: var(--half-spanish-white)
}
@media (max-width: 1440px) {
        .preclinical-studies__parent{
            border-radius:  0 0 0 50px ;
        }
}
@media (max-width:809px) {
    .preclinical-before {
        height: 40px;
    }
    .preclinical-studies__parent{
        border-radius: 0;
    }
    .preclinical-studies{
        grid-template-columns: repeat(1, minmax(0,1fr));
    }
    .preclinical-studies__title{
        padding: 1rem;
    }
    .preclinical-studies__number{
        padding: 1rem;
    }
}
</style>
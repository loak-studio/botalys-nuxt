<template>
    <div class="rare-ginsenosides">
        <div class="rare-ginsenosides__left">
            <div class="rare-ginsenosides__title">
                <span class="rare-ginsenosides__percent">10%</span>
                <div>
                    <p class="h2 rare-ginsenosides__title-text">Of rare ginsenosides</p>
                    <p class="h5 rare-ginsenosides__subtitle-text">Bioactive forms of Ginseng phytonutrients</p>
                </div>
            </div>
            <div class="rare-ginsenosides__graph">
                <ChartsRareGinsenosides/>
            </div>
        </div>
        <div class="rare-ginsenosides__right">
            <div class="rare-ginsenosides__list"> 
                <h3 class="h3">Benefits</h3>
                <ul>
                    <li class="text">
                        Optimized Full Spectrum
                    </li>
                    <li class="text">
                        Clinically demonstrated
                    </li>
                    <li class="text">
                        Truly Sustainable
                    </li>
                </ul>
            </div>
            <div class="rare-ginsenosides__list">
                <h3 class="h3">Characteristics</h3>
                <ul>
                    <li class="text">
                        Ultra pure natural bioactive
                    </li>
                    <li class="text">
                        Unique molecular profile
                    </li>
                    <li class="text">
                        Beyord organic
                    </li>
                    <li class="text">
                        Processed in EU
                    </li>
                    <li class="text">
                        Vegan, Halal, Kasher
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.rare-ginsenosides{
    max-width: 1173px;
    width: 100%;
    margin: 0 auto;
    margin-top: 100px;
    padding: 0 1rem;
    display: flex;
    gap:48px;
}
.rare-ginsenosides__percent{
    font-family: "sofia-pro";
    color: var(--half-spanish-white);
    -webkit-text-stroke: 1px var(--dark-jungle-green);
    font-size: 96px;
    font-weight: 700;
    line-height: 142px;
}
.rare-ginsenosides__title{
    display: flex;
    gap:40px;
    align-items: center;
    border-bottom: 2px solid var(--nandor);
    margin-bottom: 32px;
    padding-bottom: 32px;
}
.rare-ginsenosides__title-text{
    text-transform: uppercase;
    color: var(--nandor)
}
.rare-ginsenosides__right{
    position: relative;
    padding-left: 3rem;
}
.rare-ginsenosides__left{
    flex:1 1 0;
}
.rare-ginsenosides__right::before{
    height: calc(100% - 40px);
    top:20px;
    width: 2px;
    position: absolute;
    background: var(--nandor);
    display: block;
    content:'';
    left: 0;
}
.rare-ginsenosides__list{
    &:nth-child(1){
        margin-top: 47px;
    }
    &:nth-child(2){

    margin-top: 58px;
    }
    h3{
        text-transform: uppercase;
    }
    ul{
        display: flex;
        flex-direction: column;
        gap:1rem;
        margin-top: 1rem;
    }
}
</style>
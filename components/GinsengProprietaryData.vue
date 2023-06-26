<template>
    <div class="ginseng-proprietary__parent">
        <section class="ginseng-proprietary">
            <div class="ginseng-proprietary__grid-item">
                <span class="ginseng-proprietary__value">&gt;9000</span>
                <span class="h5">Scientific publications about Korean ginseng and its constituents</span>
            </div>
            <div class="ginseng-proprietary__grid-item">
                <span class="ginseng-proprietary__value">6</span>
                <span class="h5">Preclinical Studies</span>
            </div>
            <div class="ginseng-proprietary__grid-item">
                <span class="ginseng-proprietary__value">1</span>
                <span class="h5">Peer-reviewed clinical trial</span>
            </div>
            <div class="ginseng-proprietary__grid-item">
                <span class="ginseng-proprietary__value">1</span>
                <span class="h5">Perceived efficacy study</span>
            </div>
            <div class="ginseng-proprietary__indication">
                <span class="ginseng-proprietary__indication-left"></span>
                <span class="ginseng-proprietary__indication-text text">Proprietary</span>
                <span class="ginseng-proprietary__indication-right"></span>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.ginseng-proprietary__parent {
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    padding: 0 4px;
    background: var(--dark-jungle-green);
    border-radius: 0px 0px 96px 0px;
}

.ginseng-proprietary {
    max-width: 1296px;
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 35.2% repeat(3, 21.6%);
    position: relative;

}

.ginseng-proprietary__grid-item {
        display: flex;
        flex-direction: column;
        color: var(--half-spanish-white);
        padding: 24px;
        padding-top: 63px;
    }
.ginseng-proprietary__value {
    font-size: 96px;
    font-family: "sofia-pro";
    font-weight: 700;
    line-height: 104%;
    color: var(--dark-jungle-green);
    -webkit-text-stroke: 2px var(--mikado-yellow);
}

.ginseng-proprietary__indication {
    position: absolute;
    top: 100%;
    display: flex;
    width: 64.8%;
    right: 0;
    gap:22px;
    padding-left: 35px;
    padding-right: 113px;
}

.ginseng-proprietary__indication-text{
    display: flex;
    align-items: flex-end;
    margin-bottom: -8px;
    color: var(--dark-jungle-green);
}

.ginseng-proprietary__indication-left {

    display: block;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid var(--nandor);
    border-left: 2px solid var(--nandor);
    flex-grow: 1;
}

.ginseng-proprietary__indication-right {

    display: block;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
    flex-grow: 1;
}

@media (max-width: 950px) {
        .ginseng-proprietary__value{
            font-size: 48px;
        }
        .ginseng-proprietary__grid-item{
            padding-top: 24px;
        }
}

@media (max-width:809px) {
    .ginseng-proprietary__parent{
        border-radius: 0;
    }
    .ginseng-proprietary{
        grid-template-columns: repeat(1, minmax(0,1fr));
    }
    .ginseng-proprietary__grid-item{
        padding: 1rem;
    }
    .ginseng-proprietary__indication{
        top:auto;
        bottom: 24px;
        right: 1rem;
        flex-direction: column;
        padding: 0;
        width: auto;
    }
    .ginseng-proprietary__indication-text{
        writing-mode: vertical-rl;text-orientation: mixed;
        color: var(--half-spanish-white);
        padding-left:10px;
    }
    .ginseng-proprietary__indication-left{
        border-top: 2px solid var(--half-spanish-white);
        border-right: 2Px solid var(--half-spanish-white);
        border-bottom: none;
        border-left: none;
        width: 20px;
    }

    .ginseng-proprietary__indication-right{
        border-bottom: 2px solid var(--half-spanish-white);
        border-right: 2Px solid var(--half-spanish-white);
        border-top: none;
        border-left: none;
        width: 20px;
    }
}
</style>
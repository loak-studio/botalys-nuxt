<template>
    <div class="full-spectrum__parent">
        <section class="full-spectrum">
            <div class="full-spectrum__title">
                <Tag>
                    Ginseng products
                </Tag>
                <h2 class="h2">Ginseng Full-Spectrum vs. Standardized Extract</h2>
                <p class="text">Like many adaptogens, ginseng’s effectiveness relies on a wide variety of bioactive
                    compounds. While its best-known phytoactive fraction is that of ginsenosides, ginseng’s bioactive matrix
                    is also composed of an important polysaccharide fraction (including panaxan and ginsan), specific
                    bioactive proteins (gintonin) and many other active compounds, including alkaloids, phytosterols,
                    phenolic acids, and amino acids. </p>
                <p class="text">Each family of bioactive molecules shows potent health benefits of its own, but they also
                    display strong synergistic effects. For instance, research shows that polysaccharides exert microbiotic
                    and immunomodulatory effects, complementary to the bioactivity of secondary metabolites like
                    ginsenosides.</p>
                <p class="text">At BOTALYS, we believe that the secret behind the health benefits of any adaptogen lies in
                    the simultaneous richness, diversity and stability of its bioactive profile. In practice, there are
                    compromises to be made no matter which type of ginseng ingredient is chosen:</p>
            </div>
            <div class="full-spectrum__table">
                <span></span>
                <span class="description">Ginseng standardized extract</span>
                <span class="description">Ginseng full-spectrum</span>
                <!--  -->
                <span class="description">Therapeutric approach</span>
                <span class="text">
                    Pharmaceuticals
                </span>
                <span class="text">
                    Traditional herbalism
                </span>
                <!--  -->
                <span class="description">Bioactive ginsenosides</span>
                <span class="text">
                    Highly concentrated
                </span>
                <span class="text">
                    Naturally low
                </span>
                <!--  -->
                <span class="description">Molecular profile diversity</span>
                <span class="text">
                    <span>Low</span>
                    <span class="description">Usually 1 family of compounds</span>
                </span>
                <span class="text">
                    <span>High</span>
                    <span class="description">Synergistic matrix effect</span>
                </span>
                <!--  -->
                <span class="description">Standardization</span>
                <span class="text">
                    <span>Moderate</span>
                    <span class="description">Ginsenosides only</span>
                </span>
                <span class="text">
                    <span>Low</span>
                    <span class="description">Highly variable raw material</span>
                </span>
                <!--  -->
                <span class="description">Pharmacological efficacy</span>
                <span class="text">
                    Targeted
                </span>
                <span class="text">
                    Global (Adaptogenic)
                </span>
                <!--  -->
                <span class="description">Required dose for therapeutic effectiveness</span>
                <span class="text">
                    Low
                </span>
                <span class="text">High</span>
            </div>
            <div class="full-spectrum__lined-text">
                <span class="text bold" >
                    Only a rich highly standardized full-spectrum ginseng can deliver the whole range of its adaptogenic benefits.
                </span>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
.full-spectrum__parent {
    padding: 0 4px;
}

.full-spectrum {
    max-width: 1296px;
    border: 2px solid var(--nandor);
    padding-top: 120px;
    padding-bottom: 120px;
    width: 100%;
    margin: 0 auto;
}

.full-spectrum__title {
    max-width: 1048px;
    margin: 0 auto;

    .h2 {
        max-width: 448px;
        margin-bottom: 2rem;
    }

    .text {
        max-width: 840px;
    }

    .text+.text {
        margin-top: 1rem;
    }
}

.full-spectrum__table {
    max-width: 1048px;
    width: 100%;
    margin: 0 auto;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: calc(250px + 51px) calc(250px + 98px + 98px) calc(250px + 51px);
    > *:nth-child(3n + 2){
        // background: blue;
        display: flex;
        flex-direction: column;
        padding-left: 98px;
    }
    > * {
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: column;
    }
    > *:not(:nth-child(1), :nth-child(2), :nth-child(3)){

        border-top: 2px solid var(--nandor);
    }
    > *:nth-child(3),*:nth-child(2){
        color: var(--nandor)
    }
    > *:nth-child(3n + 1){
        padding-left: 51px;
    }
    > *:nth-child(3n){
        padding-right: 51px;
    }
}

.full-spectrum__lined-text{
    display: flex;
    align-items: center;
    gap:1rem;
    max-width: 1048px;
    margin: 0 auto;
    margin-top: 3rem;
    span{
        max-width: 730px;
        width: 100%;
        flex-grow: 1;
    }
    &::before{
        height: 2px;
        background: var(--dark-jungle-green);
        content:'';
        min-width: 20px;
        flex-grow: 1;
    }
    &::after{
        height: 2px;
        background: var(--dark-jungle-green);
        content:'';
        min-width: 20px;
        flex-grow: 1;
    }
}

@media (max-width:1100px) {
        .full-spectrum__title{
            padding: 0 1rem;
        }
        .full-spectrum__table{
            grid-template-columns: repeat(3,minmax(0, 1fr));

        > *:nth-child(1n) {
            padding: 10px;
            word-break: break-all;
        }
        > span:nth-child(2), span:nth-child(3){
            word-break: keep-all;
        }
        > span:nth-child(3n + 1){word-break: keep-all;}
        }
        .full-spectrum__lined-text{
            padding-left: 1rem;
            padding-right: 1rem;
        }
}

@media (max-width:809px) {
    .full-spectrum{
        padding-top: 40px;
        padding-bottom: 40px;
    }
    
}
</style>
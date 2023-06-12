<template>
    <div class="black-card__parent">
        <section class="black-card">
            <div class="black-card__container">
                <Tag color="yellow">Tailor made botanicals</Tag>
                <h2 class="h2">New Plant Development Platform</h2>
                <p class="text">Thanks to a robust and innovative technological platform, BOTALYS also has the ability to develop exclusive rare plants for nutraceutical or cosmetic applications through exclusive partnerships with industry leaders.</p>
            </div>
        </section>
    </div>
</template>
<style>
    .black-card__parent{
        padding: 0 4px;
    }
    .black-card{
        max-width: 1296px;
        margin: 0 auto;
        background: var(--dark-jungle-green);
        border-left: 2px solid var(--nandor);
        border-right: 2px solid var(--nandor);
        padding: 120px 0;
        color: var(--half-spanish-white)
    }
    .black-card__container{
        max-width: 703px;
        width: 100%;
        margin: 0 auto;
    }
    @media (max-width: 1000px) {
        .black-card{
            padding: 40px 1rem;
        }
    }
</style>
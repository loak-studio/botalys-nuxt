<template>
    <div class="koreanginseng-stats__parent">
        <section class="koreanginseng-stats">
           <flasgship-botanical/>
           <koreanginseng-table/>
        </section>
    </div>
</template>

<style>
.koreanginseng-stats__parent{
    padding: 0 4px;
}
.koreanginseng-stats{
    max-width: 1296px;
    margin: 0 auto;
    border-left: 2px solid var(--nandor);
    border-top: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
    padding-top: 120px;

}
@media (max-width:809px) {
    .koreanginseng-stats{
        padding-top: 40px;
    }
}
</style>
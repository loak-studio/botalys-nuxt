<template>
    <div class="koreanginseng-stats__parent">
        <section class="koreanginseng-stats">
           <BotanicalsKoreanGinsengIndexFlagshipBotanical/>
           <botanicals-korean-ginseng-index-koreanginseng-table/>
           <botanicals-korean-ginseng-index-rare-ginsenosides/>
           <more-details>
            <span class="bold">Jin Y, Kim YJ, Jeon JN, Wang C, Min JW, Noh HY, Yang DC (2015) </span>– <span class="italic">« Effect of white, red and black ginseng on
            physicochemical properties and ginsenosides. »</span> Plant Foods Hum Nutr. 2015 Jun;70(2):141-5.
           </more-details>
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
    padding-bottom: 120px;

}
@media (max-width:1100px) {
    .koreanginseng-stats{
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
@media (max-width:809px) {
    .koreanginseng-stats{
        padding-top: 40px;
        padding-bottom: 40px;
    }
    
}
</style>
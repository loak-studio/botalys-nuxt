<template>
    <div class="usage-test-before__parent">
        <div class="usage-test-before"/>
    </div>
    <div class="usage-test__parent">
        <div class="usage-test">
            <div class="usage-test__title">
                <Tag color="yellow">Proprietary Studies</Tag>
                <h2 class="h2">Usage test</h2>
            </div>
            <div class="usage-test__number">
                <span class="outline-yellow-number">160</span>
                <span class="usage-test__value-title h5">Participants</span>
            </div>
            <div class="usage-test__number">
                <span class="outline-yellow-number">400</span>
                <span class="usage-test__value-title h5">mg/day</span>
            </div>
            <div class="usage-test__number">
                <span class="outline-yellow-number">20</span>
                <span class="usage-test__value-title h5">Weeks</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.usage-test-before__parent {
    padding: 0 4px;
}

.usage-test-before {
    max-width: 1296px;
    height: 120px;
    width: 100%;
    margin: 0 auto;
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
    border-top: 2px solid var(--nandor);
}

.usage-test__parent{
    background: var(--dark-jungle-green);
    max-width: 1440px;
    border-radius: 0px 0px 0px 96px; 
    margin: 0 auto;
    padding: 0 4px;
}
.usage-test{
    border-left: 2px solid var(--nandor);
    border-radius: 2px solid var(--nandor);
    margin: 0 auto;
    max-width: 1296px;
    width: 100%;
    display: grid;
    grid-template-columns: 49% 17% 17% 17%;
}
.usage-test__number{
    display: flex;
    flex-direction: column;
    padding: 24px;
    justify-content: flex-end;
}
.usage-test__title{
    padding: 24px;
    padding-top: 123px;
    .h2{
        color: var(--half-spanish-white)
    }
}
.usage-test__value-title{
    color: var(--half-spanish-white)
}
@media (max-width: 1440px) {
        .usage-test__parent{
            border-radius:  0 0 0 50px ;
        }
}
@media (max-width:809px) {
    .usage-test-before {
        height: 40px;
    }
    .usage-test__parent{
        border-radius: 0;
    }
    .usage-test{
        grid-template-columns: repeat(1, minmax(0,1fr));
    }
    .usage-test__title{
        padding: 1rem;
    }
    .usage-test__number{
        padding: 1rem;
    }
}
</style>
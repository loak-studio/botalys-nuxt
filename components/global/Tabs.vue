<script setup>
const { items } = defineProps({ items: Array })

const content = ref(items[0].content)
const currentTab = ref(0)

</script>
<template>
    <div class="tabs">
        <div class="tabs__header">
            <button  class="text tabs__button" :class="{'tabs__button--active': currentTab==index}"
                @click=" () => { currentTab = index } " v-for="(item, index) in  items " :key="index">
                {{ item.title }}
            </button>
        </div>
        <div class="tabs__body">
            <div :data-title="item.title" :class="{'tabs__paragraphs--active':items[currentTab] == item}" v-for="(item,index) in items" :key="index" class="tabs__paragraphs">
                <p class="text" v-for="( paragraph, index ) in  item.content " v-html=" paragraph "/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.tabs {
    background: var(--nandor);
    outline: 2px solid var(--nandor);
    outline-offset: 0px;
}

.tabs__header {
    display: flex;
    background: var(--half-spanish-white);
    * {
        flex: 1 1 0;
    }
}

.tabs__button {
    padding: 24px 0 ;
    display: block;
    position: relative;
    text-align: center;
    &--active{
        background: var(--nandor);
        color: var(--half-spanish-white);
    }
}
.tabs__button:nth-child(1){
    border-radius: 0 20px 0 0;
    z-index: 10;
    background: var(--half-spanish-white);
    &.tabs__button--active{
        background: var(--nandor);
    }
}
.tabs__button:nth-child(2).tabs__button--active::before{
    width: 100%;
    height: 100%;
    background: var(--nandor);
    content: '';
    left: -100%;
    top:0;
    position: absolute;
    pointer-events: none;
}
.tabs__body{
    padding: 48px;
    min-height: 280px;
    color: var(--half-spanish-white);
    .text + .text{
        margin-top: 1rem;
    }
}
.tabs__paragraphs{
    display: none;
    &--active{
        display: block;
    }
}

@media (max-width:809px) {
    .tabs{outline: none;}
    .tabs__header{
        display: none;
    }
    .tabs__paragraphs{
        display: block;
        &::before{
            content: attr(data-title);
            font-family: "Sofia Pro";
            font-weight: 300;
            font-size: 28px;
            line-height: 129%;
            margin-bottom: 24px;
            display: block;
        }
    }
    .tabs__body{
        width: 100%;
        min-height: 0;
        padding: 1rem;
    }
}
</style>
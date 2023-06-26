<script setup>
const {items}= defineProps({items:Array})
</script>

<template>
    <div class="tabs-container__parent">
        <section class="tabs-container">
            <hr class="tabs-container__line-1">
            <hr class="tabs-container__line-2">
            <div class="tabs-container__item" v-for="(item,index) in items" :key="index">
                <figure v-if="item.image" class="tabs-container__figure">
                    <img :src="item.image" alt="">
                </figure>
                <div class="tabs-container__content">

                    <div class="tabs-container__text">
                        <h3 class="h3 tabs-container__title">{{ item.title }}</h3>
                        <div class="tabs-container__paragraphs">
                            <p class="text" v-for="(paragraph,index) in item.description" :key="index">{{ paragraph }}</p>
                        </div>
                    </div>
                    <tabs :reverse-radius="index % 2 ==0" class="tabs-container__tabs" :items="item.tabs"/>
                </div>
            </div>
        </section>
    </div>
</template>


<style lang="scss">
    .tabs-container__parent{
        padding:0 4px
    }
    .tabs-container{
        max-width: 1296px;
        margin: 0 auto;
        position: relative;
    }
    .tabs-container__line-1{
        position: absolute;
        top:0;
        left:0;
        height: 100%;
        width: 2px;
        background: var(--nandor);
    }
    .tabs-container__line-2{
        position: absolute;
        top:0;
        right:0;
        height: 100%;
        width: 2px;
        background: var(--nandor);
    }
    .tabs-container__content{
        padding: 120px 40px;
        display: flex;
        justify-content: space-between;
        gap:40px;
        color :var(--dark-jungle-green);
    }
    .tabs-container__text{
        max-width: 525px;
        width: 100%;
    }
    .tabs-container__figure{
        width: 1440px;
        margin-left: -72px;
    }
    .tabs-container__item:nth-child(even) .tabs-container__figure{
        
            border-radius: 0px 0px 0px 96px;
            overflow: hidden;
    }
    .tabs-container__item:nth-child(odd) .tabs-container__figure{
            border-radius: 0px 0px 96px 0px ;
            overflow: hidden;
    }
    .tabs-container__title::after{
        height: 2px;
        width: 224px;
        display: block;
        margin:24px 0;
        background: var(--nandor);
        content:'';
    }
    .tabs-container__paragraphs > .text+.text{
        margin-top: 1rem;
    }
    .tabs-container__tabs{
        max-width: 593px;
        width: 100%;
    }
    @media (max-width: 1150px) {
        .tabs-container__content{
            flex-direction: column;
        }
        .tabs-container__text{
            max-width: none;
        }
        .tabs-container__item:nth-child(odd) .tabs-container__figure,.tabs-container__item:nth-child(even) .tabs-container__figure{
            max-width: 100%;
            border-radius: 0 0 0 0;
            margin-left: 0;
        }
    }
    @media (max-width:809px) {
        .tabs-container__content{
            padding: 40px 0;
        }
        .tabs-container__text{
            padding: 0 1rem;
        }
        .tabs-container__figure{
            height: 100px;
        }
        .tabs-container__tabs{
            max-width: none;
        }
    }
</style>
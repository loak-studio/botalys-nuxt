<script setup>
import PierreAntoine from "~/assets/images/team/laurent-perignon.jpg"
import Laurent from "~/assets/images/team/laurent-perignon.jpg"
import Sylvie from "~/assets/images/team/sylvie-defrere.jpg"
import Terence from "~/assets/images/team/terence-welby.jpg"
import Rene from "~/assets/images/team/rene-cuvelier.jpg"
import Nicolas from "~/assets/images/team/nicolas-houyoux.jpg"
import Valentine from "~/assets/images/team/valentine-willems.jpg"
import JoinUs from "~/assets/images/team/laurent-perignon.jpg"
const members = [
    {
        name: 'Pierre-Antoine Mariage',
        job: 'CEO & Co-founder',
        picture: PierreAntoine
    },
    {
        name: 'Laurent Pérignon',
        job: 'Finance Director',
        picture: Laurent
    },
    {
        name: 'Sylvie Defrère',
        job: 'R&D Director',
        picture: Sylvie
    },
    {
        name: 'Terence Welby',
        job: 'Sales Director',
        picture: Terence
    },
    {
        name: 'René Cuvelier',
        job: 'Production Director',
        picture: Rene
    },
    {
        name: 'Nicolas Houyoux',
        job: 'Marketing Director',
        picture: Nicolas
    },
    {
        name: 'Valentine Willems',
        job: 'HR Director',
        picture: Valentine
    },
    {
        name: 'Join us',
        job: 'to explore new horizons',
        picture: PierreAntoine
    }
]

const popUpContent = ref(null)

const showPopup = (content) => {
    popUpContent.value = content
    document.querySelector('html').style.overflow = "hidden"
}

const removePopup = () => {
    popUpContent.value = null
    document.querySelector('html').style.overflow = "auto"
}

</script>
<template>
    <div class="board-directors__parent">
        <section class="board-directors">
            <div class="board-directors__title">
                <Tag>
                    Our team
                </Tag>
                <h2 class="h2">Board of directors</h2>
            </div>
            <ul class="board-directors__list">
                <li class="board-directors__member" v-for="(member, index) in members" :key="index">
                    <button @click="showPopup(member)" class="board-directors__button">
                        <figure class="board-directors__picture">
                            <img :src="member.picture" alt="" />
                        </figure>
                        <figcaption class="board-directors__caption">
                            <span class="h6">{{ member.name }}</span>
                            <span class="text">{{ member.job }}</span>
                        </figcaption>
                    </button>
                </li>
            </ul>
        </section>
        <Transition name="nested">
            <div @click="removePopup" v-if="popUpContent" class="board-directors__pop-up-container">
                <div @click.stop="() => { }" class="board-directors__pop-up">

                    <button class="board-directors__close-pop-up" @click="removePopup"><svg width="32" height="32"
                            viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8.44141" y="9.41406" width="2" height="20" transform="rotate(-45 8.44141 9.41406)"
                                fill="#E6E2C9" />
                            <rect x="22.582" y="8" width="2" height="20" transform="rotate(45 22.582 8)" fill="#E6E2C9" />
                        </svg>
                    </button>
                    <div class="board-directors__aside-pop-up">
                        <figure class="board-directors__pop-up-picture">
                            <img :src="popUpContent.picture" alt="">
                        </figure>
                        <figcaption class="board-directors__aside-title">
                            <span class="h5">{{ popUpContent.name }}</span>
                            <span class="h6">{{ popUpContent.job }}</span>
                        </figcaption>
                    </div>
                    <div class="board-directors__pop-up-content">
                        <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim felis, luctus eget turpis ac, tincidunt vulputate felis. Vivamus suscipit dolor id nunc pretium facilisis. Quisque dictum tellus erat, quis sollicitudin justo feugiat sed. Mauris blandit lobortis elit vitae luctus. Proin scelerisque eros a pretium congue. Curabitur tempor est ut lorem placerat, eget fringilla urna vulputate. Aliquam erat volutpat. Praesent eleifend efficitur facilisis. Aliquam porttitor aliquam nunc at consequat. Duis nulla lacus, lacinia sed nulla et, aliquam aliquam risus. Vivamus quis scelerisque mauris. Aliquam vel efficitur nulla. Maecenas aliquet odio id orci vulputate placerat. Maecenas eget tempor velit. Sed orci tellus, euismod ac quam eu, porttitor auctor felis. Etiam cursus accumsan lectus sed laoreet. </p>
                        <p class="text">Cras eget turpis ligula. Aenean posuere tincidunt facilisis. Aenean eleifend feugiat lacus, in iaculis mi vestibulum ut. Pellentesque vel eleifend urna. Integer ut porta nibh, et cursus metus. Pellentesque et varius turpis, at feugiat ipsum. Phasellus tempus fermentum orci nec luctus. Suspendisse lacinia sodales ultrices. Suspendisse potenti. Phasellus sed ipsum bibendum, mattis ex ut, congue nisl. Sed auctor vestibulum lacus nec suscipit. Phasellus vel tristique ex. Sed congue nibh lorem, a auctor turpis rutrum quis. Ut id urna ultrices, commodo ligula in, porttitor felis. Phasellus non odio laoreet, dictum mi ac, ullamcorper ante. </p>
                        <p class="text"></p>
                        <p class="text"></p>
                        <p class="text"></p>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>


<style lang="scss">
.board-directors__parent {
    padding: 0 4px;
}

.board-directors {
    max-width: 1296px;
    width: 100%;
    border-left: 2px solid var(--nandor);
    border-right: 2px solid var(--nandor);
    margin: 0 auto;
    padding-top: 120px;
    padding-bottom: 120px;
}

.board-directors__title {
    max-width: 858px;
    margin: 0 auto;
    width: 100%;
    margin-bottom: 40px;
}

.board-directors__list {
    max-width: 1184px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 60px;
    row-gap: 40px;
}

.board-directors__button {
    padding: 1rem;
    width: 100%;
    transition: background 300ms ease-in-out;
    border-radius: 60px 0px;
    cursor: pointer;

    &:hover {
        background: rgba(24, 32, 29, 0.10);
    }
}

.board-directors__aside-pop-up {
    flex-shrink: 0;
}

.board-directors__picture {
    border-radius: 40px 0px;
    overflow: hidden;
    height: 258px;
    width: 219px;
    margin-bottom: 1rem;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

.board-directors__caption {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--dark-jungle-green)
}
.board-directors__pop-up-content{
    color: var(--half-spanish-white);
    max-height: 500px;
    overflow-x: scroll;
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap:1rem;
    padding: 1rem;
    padding-right: 0;
}

.board-directors__pop-up-container {
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    padding: 1rem;
    &::before {
        height: 100%;
        width: 100%;
        position: absolute;
        content: '';
        background: rgba(100, 100, 100, 0.2);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }
}

.board-directors__pop-up {
    max-width: 852px;
    width: 100%;
    background: var(--nandor);
    padding: 2rem;
    border-radius: 0px 0px 96px 0px;
    position: relative;
    display: flex;
    gap: 24px;
    overflow-x: scroll;
    padding-right: 4rem;
}

.board-directors__pop-up-picture {
    height: 305px;
    max-width: 259px;
    border-radius: 40px 0px;
    overflow: hidden;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

.board-directors__close-pop-up {
    position: absolute;
    right: 2rem;
    top: 2rem;
    cursor: pointer;
    background: var(--nandor);
    border-radius: 50%;
}

.board-directors__aside-title {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    color: var(--half-spanish-white);
    gap: 10px;
}

@media (max-width: 900px) {
    .board-directors__title{
        padding: 0 1rem;
    }
}

@media (max-width:809px) {
    .board-directors{
        padding-top: 40px;
        padding-bottom: 40px;
    }
    .board-directors__close-pop-up{
        position: fixed;
    }
    .board-directors__list {
        gap: 1rem;
    }

    .board-directors__pop-up {
        flex-direction: column;
        border-radius: 0;
        padding: 2rem 1rem;
        height: 100vh;
    }

    .board-directors__close-pop-up {
        top: 1rem;
        right: 1rem;
    }

    .board-directors__pop-up-container {
        padding: 0;
    }
    .board-directors__pop-up-picture{
        width: 150px;
        height: 150px;
        flex-shrink: 0;
    }
    .board-directors__pop-up-content{
        max-height: none;
        overflow-x: visible;
        padding: 0;
        max-width: none;

    padding-right: 0;
    }
}

.nested-enter-active,
.nested-leave-active {
    transition: all 0.2s ease-in-out;
}

.nested-enter-active .board-directors__pop-up,
.nested-leave-active .board-directors__pop-up {
    transition: all .2s ease-in-out;
    transition-delay: .1s;
}

.nested-enter-from .board-directors__pop-up,
.nested-leave-to .board-directors__pop-up {
    transform: translateY(30px);
    opacity: 0;
}


.nested-enter-from,
.nested-leave-to {
    opacity: 0;
}</style>
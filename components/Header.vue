<script setup lang="ts">
import colors from '../utils/colors';
const { isFrontpage } = defineProps({ isFrontpage: Boolean })
const displaySubnavigation = ref(false)
const displayMobileNavigation = ref(false)
const navItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Our Approach',
    href: '/our-approach/'
  },
  {
    label: 'Our Standards',
    href: '/our-standards/'
  },
  {
    label: 'Our Botanicals',
    childs: [
      {
        label: 'Korean Ginseng',
        href: '#'
      },
      {
        label: 'Other botanicals',
        href: '#'
      }
    ]
  },
  {
    label: 'About us',
    href: '/about-us/'
  }
]
</script>

<template>
  <div :class="'header ' + (isFrontpage ? 'header--index' : '')">
    <header class="header__container">
      <NuxtLink class="header__logo" to="/">
        <Logo :color="isFrontpage ? colors.halfSpanishWhite : colors.darkJungleGreen" />
      </NuxtLink>
      <nav :class="'header__navigation ' + (displayMobileNavigation ? 'header__navigation--mobile-display' : '')">
        <ul class="header__list">
          <li v-for="(item, index) in navItems" :key="index">
            <template v-if="item.href">
              <NuxtLink class="header__link text" :to="item.href">{{ item.label }}</NuxtLink>
            </template>
            <template v-else>
              <button @click="() => { displaySubnavigation = !displaySubnavigation }" class="text header__link header__subnavigation-title">{{
                item.label
              }}

                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2436_2931)">
                    <path d="M4.5 6L8.5 10L12.5 6" stroke="currentColor" stroke-width="2.75" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </g>
                </svg>

              </button>
              <ul :class="'header__subnavigation ' + (displaySubnavigation ? '' : 'header__subnavigation--hidden')">
                <li v-for="child in item.childs">
                  <NuxtLink class="text header__subnavigation-item" :to="child.href">
                    {{ child.label }}</NuxtLink>
                </li>
              </ul>
            </template>
          </li>
        </ul>

      </nav>
      <Button class="header__contact" color="header" href="/contact-us/">Contact us</Button>
      <button class="header__toggle-menu" @click="() => { displayMobileNavigation = !displayMobileNavigation }">{{
        displayMobileNavigation ? 'menu' : 'close' }}</button>
    </header>
  </div>
</template>

<style lang="scss">
.header {
  border-bottom: 2px solid var(--nandor);
  position: relative;
  background: var(--half-spanish-white);

  &__container {
    padding: 24px 0;
    max-width: 1336px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    display: block;
    max-width: 166px;
  }

  &__list {
    display: flex;
    gap: 9px
  }

  &__subnavigation {
    position: absolute;
    top: 100%;
    background: var(--half-spanish-white);
    padding: 20px;
    border: 2px solid var(--nandor);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &--hidden {
      display: none;
    }
  }

  &__subnavigation-item {
    padding: 12px;
    color: var(--dark-jungle-green);
    display: block;
    transition: background 300ms ease-in-out, color 300ms ease-in-out;

    &:hover {
      background: var(--dark-jungle-green);
      color: var(--half-spanish-white)
    }
  }

  &__link {
    padding: 12px;
    border-bottom: 2px solid transparent;
    color: var(--dark-jungle-green);
    transition: background 300ms ease-in-out, color 300ms ease-in-out;
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: var(--dark-jungle-green);
      color: var(--half-spanish-white)
    }
  }

  &__link.router-link-active {
    border-bottom-color: var(--dark-jungle-green);
  }

  &__toggle-menu {
    display: none;
  }
}

.header.header--index {
  border-bottom-color: var(--half-spanish-white);

  &__link {
    color: var(--half-spanish-white)
  }
}

@media (max-width: 1368px) {
  .header {
    &__container {
      padding: 24px 1rem;
    }
  }
}

@media (max-width: 1000px) {
  .header {
    position: relative;
    &__navigation {
      position: absolute;
      left: 100%;
      top: calc(100% + 2px);
      width: 100%;
      height: calc(100vh);
      transition: left 300ms ease-in-out;
      background: var(--half-spanish-white);

      &--mobile-display {
        left: 0;
      }
    }
    &__subnavigation-title{
      display: none;
    }
    &__subnavigation {
      position: static;
      border: none;
      background: none;
      padding: 0;
      gap: 1rem;

      &--hidden {
        display: flex;
      }
    }

    &__list {
      flex-direction: column;
      align-items: start;
    }

    &__contact {
      position: fixed;
      left: 100%;
    }

    &__toggle-menu {
      display: block;
      position: absolute;
      right: 0px;
      z-index: 10;
      height: 100%;
      border-left: 2px solid var(--dark-jungle-green);
      display: flex;
      justify-content: center;
      align-items: center;      
      width: 74px;
    }
  }
}</style>
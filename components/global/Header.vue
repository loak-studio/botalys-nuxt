<script setup lang="ts">
const { isFrontpage } = defineProps({ isFrontpage: Boolean })
const displaySubnavigation = ref<any>({})
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
        href: '/botanicals/korean-ginseng/'
      },
      {
        label: 'Other botanicals',
        href: '/botanicals/other/'
      }
    ]
  },
  {
    label: 'About Us',
    href: '/about-us/'
  }
]
navItems.forEach((item) => {
  if (item.childs) {
    displaySubnavigation.value[item.label] = false
  }
})

const toggleMenu = () => {
  (document.querySelector('html') as HTMLElement).classList.toggle('no-scroll')
  displayMobileNavigation.value = !displayMobileNavigation.value
  window.scrollTo(0, 0)
}
const route = useRoute()
watch(() => route.fullPath, () => {

  (document.querySelector('html') as HTMLElement).classList.remove('no-scroll')
  displayMobileNavigation.value = false
  Object.keys(displaySubnavigation.value).forEach(key => {
    displaySubnavigation.value[key] = false;
  });
})
</script>

<template>
  <div :class="'header ' + (isFrontpage ? 'header--transparent ' : '') + (displayMobileNavigation?'header--display-nav':'')">
    <header class="header__container">
      <NuxtLink class="header__logo" to="/">
        <Logo :color="isFrontpage ? displayMobileNavigation ? colors.darkJungleGreen : colors.halfSpanishWhite  : colors.darkJungleGreen" />
      </NuxtLink>
      <nav :class="'header__navigation ' + (displayMobileNavigation ? 'header__navigation--mobile-display' : '')">
        <ul class="header__list">
          <li v-for="(item, index) in navItems" :key="index">
            <template v-if="item.href">
              <NuxtLink class="header__link text" :to="item.href">{{ item.label }}</NuxtLink>
            </template>
            <template v-else>
              <button @click="() => {
                displaySubnavigation[item.label] = !displaySubnavigation[item.label]
              }" class="text header__link header__subnavigation-title">{{ item.label }}
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2436_2931)">
                    <path d="M4.5 6L8.5 10L12.5 6" stroke="currentColor" stroke-width="2.75" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </g>
                </svg>

              </button>
              <ul
                :class="'header__subnavigation ' + (displaySubnavigation[item.label] ? '' : 'header__subnavigation--hidden')">
                <li v-for="(child,index) in item.childs" :key="index">
                  <NuxtLink class="text header__subnavigation-item" :to="child.href">
                    {{ child.label }}</NuxtLink>
                </li>
              </ul>
            </template>
          </li>
        </ul>

      </nav>
      <Button :class="'header__contact ' + (displayMobileNavigation ? '':'header__contact--hidden')" color="header" href="/contact-us/">Contact us</Button>
      <button class="header__toggle-menu" @click="toggleMenu">{{
        displayMobileNavigation ? 'close' : 'menu' }}</button>
    </header>
  </div>
</template>

<style lang="scss">
.header {
  z-index: 10;
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

    transform: translateY(0px);
    opacity: 1;
    transition: transform 100ms ease-in, opacity 100ms ease-in;

    &--hidden {
      opacity: 0;
      transform: translateY(10px);
      pointer-events: none;
    }
  }

  &__subnavigation-item {
    padding: 12px;
    color: var(--dark-jungle-green);
    display: block;
    transition: background 300ms ease-in-out, color 300ms ease-in-out;
    border-bottom: 2px solid transparent;

    &.router-link-active {
      border-bottom: 2px solid var(--dark-jungle-green);
    }

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
    font-size: 1rem;
  }
}

.header.header--transparent {
  border-bottom-color: var(--half-spanish-white);
  background-color: transparent;
  .header__navigation > ul > li > .text{
    color: var(--half-spanish-white)
  }
  .header__subnavigation-item{
    color: var(--dark-jungle-green);
    &:hover{
      color: var(--half-spanish-white);
    }
  }
  .router-link-active{
    border-color: var(--half-spanish-white);
  }
  &__link {
    color: var(--half-spanish-white)
  }
  &__toggle-menu{

    border-left-color: var(--half-spanish-white);
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
  .header:not(.header--display-nav) .header__navigation, .header:not(.header--display-nav) .header__contact{
    pointer-events: none;
  }
  .header {
    position: relative;
    &.header--transparent nav.header__navigation > ul > li > .text{
      color: var(--dark-jungle-green)
    }
    &__list {
      .text {
        font-size: 1.5rem;
      }
    }

    &__link {
      border: none;

      &:hover {
        background: none;
        color: var(--dark-jungle-green)
      }
    }

    &__link.router-link-active {
      text-decoration: underline;
    }

    &__navigation {
      padding: 36px;
      position: absolute;
      left: 0;
      top: calc(100% + 2px);
      width: 100%;
      height: calc(100vh);
      transition: opacity 300ms ease-in-out;
      opacity: 0;
      background: var(--half-spanish-white);

      &--mobile-display {
        opacity: 1;
      }
    }

    &__subnavigation-title {
      display: none;
    }

    &__subnavigation {
      position: static;
      border: none;
      background: none;
      padding: 0;
      gap: 1rem;
      opacity: 1;
      
      &--hidden {
        display: flex;
        transform: none;
        pointer-events: all;
      }
    }
    

    &__subnavigation-item {
      border-bottom: none;

      &.router-link-active {
        text-decoration: underline;
        border-bottom: none;
      }

      &:hover {
        background: none;
        color: var(--dark-jungle-green);
      }
    }

    &__list {
      flex-direction: column;
      align-items: start;
    }

    &__contact {
      position: fixed;
      left: 36px;
      bottom: 44px;
      transition: opacity 300ms ease-in;
      &--hidden{
        opacity: 0;
      }
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
  .header--transparent{
    .header__toggle-menu{
      border-left-color: var(--half-spanish-white);
      color: var(--half-spanish-white)
    }
  }
  .header--transparent.header--display-nav{
    border-bottom-color: var(--dark-jungle-green);
    background-color: var(--half-spanish-white);
    transition: background 300ms ease-in-out;
    nav .text{
      color: var(--dark-jungle-green);
      &:hover{
        color: var(--dark-jungle-green);
      }
    }
    .header__toggle-menu{
      color: var(--dark-jungle-green);
      border-left-color: var(--dark-jungle-green) ;
    }
  }
}
</style>
<script setup>
const {title, childs}= defineProps({title:String, childs: Array})
</script>
<template>
  <div class="footer-nav">
    <h3 class="footer-nav__title h3">{{ title }}</h3>
    <nav>
      <ul class="footer-nav__list">
        <li v-for="(item, index) in childs" :key="index">
          <NuxtLink :target="item.target" :to="item.href">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.footer-nav__title::after{
    width: 100%;
    height: 2px;
    background: var(--nandor);
    content:'';
    display: block;
}
</style>
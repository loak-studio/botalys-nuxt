<script setup>
const {title, childs}= defineProps({title:String, childs: Array})
</script>
<template>
  <div class="footer-nav">
    <h3 class="footer-nav__title h3">{{ title }}</h3>
    <nav>
      <ul class="footer-nav__list">
        <li v-for="(item, index) in childs" :key="index">
          <NuxtLink class=" footer-nav__link text" :target="item.target" :to="item.href">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
.footer-nav__title{
  color: var(--half-spanish-white)
}
.footer-nav__title::after{
    width: 100%;
    height: 2px;
    background: var(--half-spanish-white);
    content:'';
    display: block;
    margin-top: 4px;
}
.footer-nav__link {
  color:var(--half-spanish-white)
}
.footer-nav__list{
  display: flex;
  flex-direction: column;
  gap:20px;
  margin-top: 20px;
}
</style>
<script setup>
const {title, childs}= defineProps({title:String, childs: Array})
</script>
<template>
  <div>
    <h3>{{ title }}</h3>
    <nav>
      <ul>
        <li v-for="(item, index) in childs" :key="index">
          <NuxtLink :to="item.href">{{ item.label }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
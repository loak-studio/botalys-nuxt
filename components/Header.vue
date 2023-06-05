<template>
  <header>
    <NuxtLink to="/">
      <Logo :color="colors.halfSpanishWhite"/>
    </NuxtLink>
    <nav>
      <ul>
        <li v-for="(item,index) in navItems" :key="index">
          <a v-if="item.href" :href="item.href">{{ item.label }}</a>
         <span v-else>
          <span>{{ item.label }}</span>
          <ul>
            <li v-for="child in item.childs">
            <a :href="child.href">
            {{ child.label }}</a>
          </li>
          </ul>
         </span>
        </li>
      </ul>
    </nav>
    <Button color="header" href="/contact-us/">Contact us</Button>
  </header>
</template>

<script setup lang="ts">
import  colors from '../utils/colors';

const navItems = [
  {
    label:'Home',
    href:'/'
  }, 
  {
    label:'Our Approach',
    href:'/our-approach/'
  },
  {
    label:'Our Standards',
    href:'/our-standards/'
  },{
    label:'Our Botanicals',
    childs:[
      {
        label:'Korean Ginseng',
        href:'#'
      },
      {
        label:'Other botanicals',
        href:'#'
      }
    ]
  }
]
</script>
<template>
  <p>Index <NuxtLink to="/test">test</NuxtLink></p>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: 'My Amazing Site',
    ogTitle: 'My Amazing Site',
    twitterTitle:'M',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
  })
</script>
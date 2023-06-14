<script setup>
const title = "Contact us - Botalys"
useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  ogImage: 'https://botalys.com/share.png',
  twitterImage: 'https://botalys.com/share.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="contact__parent">
    <section class="contact">
      <hr class="contact__line-1">
      <hr class="contact__line-2">
      <breadcrumb :links="[
        {
          label:'Contact',
          href:'#'
        }
      ]"/>
      <div class="contact__container">
        <contact-form/>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
  .contact__parent{
    padding: 0 4px;
  }
  .contact{
    max-width: 1296px;
    margin: 0 auto;
    width: 100%;
    position: relative;
  }
  .contact__line-1{
    height: 100%;
    width: 2px;
    position: absolute;
    background: var(--nandor);
  }
  .contact__line-2{
    height: 100%;
    width: 2px;
    right: 0;
    position: absolute;
    background: var(--nandor);
  }
</style>
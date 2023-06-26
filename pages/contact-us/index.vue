<script setup>
import River from "~/assets/images/river.jpg"
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
        <figure class="contact__image">
          <img :src="River" alt="">
        </figure>
        <div class="contact__contact-form">
          <div class="contact__title-container">
            <Tag>Get in touch</Tag>
          <h1 class="h2 contact__title">Send us a message</h1>
          </div>
          <contact-us-contact-form/>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
  .contact__parent{
    padding: 0 4px;
  }
  .contact{
    min-height: 1070px;
    max-width: 1296px;
    margin: 0 auto;
    width: 100%;
    position: relative;
  }


.contact__container{
    display: flex;
    justify-content: flex-end;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1rem 40px 1rem;
}
.contact__contact-form{
  max-width: 520px;
  width: 100%;
}
.contact__title{
  margin-bottom: 3rem;
}
.contact__image{
  width: 559px;
  height: 887px;
  position: absolute;
  top:66px;
  left: -71px;
  overflow: hidden;
  border-radius: 0px 0px 276px 0px;
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
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
  @media (max-width: 1150px) {
    .contact__image{
      width: 300px;
      left:0;
      border-radius: 0 0 150px 0;
    }
  }
  @media (max-width: 900px) {
    .contact__image{
      width: 200px;
      left:0;
      border-radius: 0 0 120px 0;
    }
  }
  @media (max-width:809px) {
    .contact{
      min-height: 0;
      padding-bottom: 64px;
    }
    .contact__container{
      padding: 0;
    }
    .contact__contact-form{
      max-width: none;
    }
    .contact__title{
      margin-bottom: 0rem;
    }
    .contact__title-container{
      padding: 40px 1rem;
    }
    .contact__image{
      display: none;
    }
  }
</style>
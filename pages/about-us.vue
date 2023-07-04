<script setup>
import Mountain from "~/assets/images/korean-ginseng-moutain.jpeg"
import River from "~/assets/images/river.jpg"
const title = "About us - Botalys"
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
  <hero-with-photo :image="Mountain" title="About us" :breadcrumb-links="[
    {
      label: 'About Us',
      href: '#'
    }
  ]" :paragraphs="[
  `BOTALYS is an ambitious Belgian company dedicated to producing ultra-pure premium botanicals for health.`,
  `Our team of botanical explorers thrives on cultivating collective intelligence and harvesting daring ideas to put them at the service of human health and well-being.`
]" />
  <about-us-board-of-directors />
  <about-us-a-botanical-odyssey />
  <about-us-located-europe />
  <text-image :imageSrc="River">
    <div>
      <Tag color="yellow">Get in touch</Tag>
      <h3 class="h3">Let's go further together</h3>
    </div>
    <p class="text">Do you have a project in mind for which you wish to unlock the full potential of rare medicinal plants
      ? Are you interested in exploring the innovation opportunities offered by Biomimetic Indoor Farming? Or maybe you
      want to learn more about how phytonutrients and emerging trends can synergize into unique new Nutraceutical
      formulas? Whatever your needs are, we would love to hear from you and help you achieve your vision. Take the first
      step and reach out to us.</p>
    <botalys-button href="/contact-us/" color="outline">Contact us</botalys-button>
  </text-image></template>
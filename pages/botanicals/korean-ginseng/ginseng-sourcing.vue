<script setup>
const title = "Ginseng sourcing - Botalys"
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
  <hero-with-photo :breadcrumb-links="[
    {label:'Korean Ginseng', href:'/botanicals/korean-ginseng/'},
    {label:'Ginseng Sourcing', href:'/botanicals/korean-ginseng/ginseng-sourcing/'}
  ]" image="/images/korean-ginseng-moutain.jpeg" title="Ginseng sourcing"
        :paragraphs="[
            `With a global market estimated at 80,000 tons per year and a medicinal use spanning over 4 millennia, Korean ginseng is one of the most valuable top selling botanicals in the world, and most of all: a medicinal plant whose history and tradition are deeply intertwined with that of humanity.`]" />
      <botanicals-korean-ginseng-ginseng-sourcing-origin-and-species/>
      <BotanicalsKoreanGinsengGinsengSourcingTypesOfProducts/>
      <BotanicalsKoreanGinsengGinsengSourcingFullSpectrum/>
      <text-image imageSrc="/images/river.jpg">
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
  </text-image>
</template>
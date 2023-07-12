<script setup>
const title = "Other botanicals - Botalys"
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
    <hero-with-illustration :links="[{
        href: '#',
        label: 'Other botanicals'
    },]" image="/images/river.jpg" title="Other botanicals" :paragraphs="[
    'The R&D department at BOTALYS is currently working on the development of several other rare medicinal plants for commercialization.'
]" />
    <BotanicalsKoreanGinsengOtherBlackCard/>
    <BotanicalsKoreanGinsengOtherDevelopmentSteps/>
    <text-image image-src="/images/river.jpg">
        <div>
            <Tag color="yellow">Get in touch</Tag>
            <h3 class="h3">Let's go further together</h3>
        </div>
        <p class="text">Do you have a project in mind for which you wish to unlock the full potential of rare medicinal
            plants
            ? Are you interested in exploring the innovation opportunities offered by Biomimetic Indoor Farming? Or maybe
            you
            want to learn more about how phytonutrients and emerging trends can synergize into unique new Nutraceutical
            formulas? Whatever your needs are, we would love to hear from you and help you achieve your vision. Take the
            first
            step and reach out to us.</p>
        <botalys-button href="/contact-us/" color="outline">Contact us</botalys-button>
</text-image>
</template>


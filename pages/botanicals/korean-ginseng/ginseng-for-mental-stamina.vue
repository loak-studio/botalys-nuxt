<script setup>
import Brain from "~/assets/images/illustrations/brain.png"
import River from "~/assets/images/river.jpg"
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
const title = "Ginseng for mental stamina - Botalys"
useSeoMeta({
  title: title,
  ogTitle: title,
  twitterTitle: title,
  ogImage: 'https://botalys.com/share.png',
  twitterImage: 'https://botalys.com/share.png',
  twitterCard: 'summary_large_image',
})

onMounted(()=>{
  gsap.registerPlugin(ScrollTrigger)
  const bars = document.querySelectorAll('.bar')
  bars.forEach(bar=>{
    gsap.from(bar,{
      scrollTrigger:{
        trigger:bar,
        start:'10% 70%',
        markers:false,
        onToggle:()=>{
          bar.classList.add('bar--visible')
        }
      }
    })
  })

})

</script>

<template>
  <hero-overflow :links="[
    {
      label: 'Korean Ginseng', href: '/botanicals/korean-ginseng/'
    },
    {
      label:'Ginseng for Mental Stamina', href:'/botanicals/korean-ginseng/ginseng-for-mental-stamina/'
    }
  ]" :blend-mode-luminosity="true" :image="Brain" title="Korean Ginseng" right="-214px" top="44px" width="597px"
    height="895px" :paragraphs="[
      'Korean ginseng (Panax ginseng C.A. Meyer) is the most emblematic herb of traditional Asian Medicine.',
      'And while its reputation as a tonic, aphrodisiac and elixir of longevity dates back several millennia, the benefits of this ancient panacea remain more relevant than ever in the field of medicinal plants.'
    ]" />
  <botanicals-korean-ginseng-ginseng-for-mental-stamina-specifically-developped-to-promote-mental-stamina />
  <botanicals-korean-ginseng-ginseng-for-mental-stamina-ginseng-proprietary-data />
  <BotanicalsKoreanGinsengGinsengForMentalStaminaPreclinicalStudies/>
  <botanicals-korean-ginseng-ginseng-for-mental-stamina-preclinical-studies-text-and-graphs />
  <botanicals-korean-ginseng-ginseng-for-mental-stamina-clinical-study />
  <botanicals-korean-ginseng-ginseng-for-mental-stamina-title-with-double-graphs>
    <template v-slot:title>
      Significant increase in FOCUS after <span class="h2">1</span> DAY
    </template>
    <template v-slot:graph-1-title>
      Negative control
    </template>
    <template v-slot:graph-1>
      <botanicals-korean-ginseng-ginseng-for-mental-stamina-charts-one-day-negative-control />
    </template>
    <template v-slot:graph-2-title>
      BOTALYS red ginseng
    </template>
    <template v-slot:graph-2>
      <botanicals-korean-ginseng-ginseng-for-mental-stamina-charts-one-day-botalys-red-ginseng />
    </template>
    <template v-slot:details>
      The attention score was assessed using the D2-test, and measured the daily difference in error rate at the beginning
      and end of the day. The results of the control show a clear increase of the error rate after 5 days, due to the
      accumulated fatigue. On the contrary, in the supplemented group, a significant decrease in the error rate was
      observed from day 1.
    </template>
  </botanicals-korean-ginseng-ginseng-for-mental-stamina-title-with-double-graphs>
  <botanicals-korean-ginseng-ginseng-for-mental-stamina-title-with-double-graphs>
    <template v-slot:title>
      Significant reduction of STRESS after <span class="h2">5</span> DAYS
    </template>
    <template v-slot:graph-1-title>
      Negative control
    </template>
    <template v-slot:graph-1>
      <botanicals-korean-ginseng-ginseng-for-mental-stamina-charts-five-days-negative-control />
    </template>
    <template v-slot:graph-2-title>
      BOTALYS red ginseng
    </template>
    <template v-slot:graph-2>
      <botanicals-korean-ginseng-ginseng-for-mental-stamina-charts-five-days-botalys-red-ginseng />
    </template>
    <template v-slot:details>
      The stress score is a self-assessed value based on a questionnaire called Perceived Stress Scoring (PSS). In the control group, a significant increase in stress levels is observed after 5 days of work, while in the supplemented group, study showed significant attenuation of accumulated stress after 5 days.
    </template>
  </botanicals-korean-ginseng-ginseng-for-mental-stamina-title-with-double-graphs>
  <botanicals-korean-ginseng-ginseng-for-mental-stamina-title-with-double-graphs last>
    <template v-slot:title>
      Significant increase in MEMORY after <span class="h2">12</span> DAYS
    </template>
    <template v-slot:graph-1-title>
      Negative control
    </template>
    <template v-slot:graph-1>
      <botanicals-korean-ginseng-ginseng-for-mental-stamina-charts-twelve-days-negative-control />
    </template>
    <template v-slot:graph-2-title>
      BOTALYS red ginseng
    </template>
    <template v-slot:graph-2>
      <botanicals-korean-ginseng-ginseng-for-mental-stamina-charts-twelve-days-botalys-red-ginseng />
    </template>
    <template v-slot:details>
      Mnesic performance was measured using a classic memory test. In the control, memory performance over 12 days showed signs of weakening, although the values were not significant. In the supplemented group, on the other hand, a significant increase in memory score was observed on day 12 of the test.
    </template>
  </botanicals-korean-ginseng-ginseng-for-mental-stamina-title-with-double-graphs>
  <BotanicalsKoreanGinsengGinsengForMentalStaminaUsageTest/>
  <BotanicalsKoreanGinsengGinsengForMentalStaminaUsageTestGrid/>
  <text-image :imageSrc="River">
    <div>
      <Tag color="yellow">Get in touch</Tag>
      <h3 class="h3">Let's go further together</h3>
    </div>
    <p class="text">Do you have a project in mind for which you wish to unlock the full potential of rare medicinal plants ? Are you interested in exploring the innovation opportunities offered by Biomimetic Indoor Farming? Or maybe you want to learn more about how phytonutrients and emerging trends can synergize into unique new Nutraceutical formulas? Whatever your needs are, we would love to hear from you and help you achieve your vision. Take the first step and reach out to us.</p>
    <botalys-button href="#" color="outline">Contact us</botalys-button>
  </text-image>
</template>
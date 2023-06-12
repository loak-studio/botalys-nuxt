<script setup>
import Plant from "~/assets/images/illustrations/plant.png"
</script>
<template>
    <hero-with-illustration :links="[{
        href:'#',
        label:'Other botanicals'
    },]" :image="Plant" title="Other botanicals" :paragraphs="[
        'The R&D department at BOTALYS is currently working on the development of several other rare medicinal plants for commercialization.'
    ]"/>
</template>
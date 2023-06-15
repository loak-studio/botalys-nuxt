<script setup>
const {color} = defineProps({color:String})
</script>

<template>
  <span :class="'tag text tag--' + (color ?? '')">
    <slot/>
  </span>
</template>

<style lang="scss">
.tag{
  color: var(--nandor);
  display: block;
  &--yellow{
    color: var(--mikado-yellow);
  }
}
.tag.tag--yellow::after{
  background: var(--half-spanish-white);
}
.tag::after{
  height: 2px;
  background: var(--nandor);
  width: 224px;
  margin-bottom: 12px;
  margin-top: 12px;
  content:'';
  display: block;
}
</style>
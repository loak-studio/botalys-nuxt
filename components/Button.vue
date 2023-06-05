<template>
  <component :class="'button text bold ' + `button__${color}`" :to="href" :is="href ? NuxtLink:'button'">
    <slot />
  </component>
</template>

<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')
const { href, color } = defineProps({
  href: { type: String }, color: {
    type: String, validator: (value) => {
      return value == "green" || value == "yellow" || value == "outline" || value == "header"
    }
  }
})
</script>

<style lang="scss">
.button {
  text-decoration: none;
  border-radius: 0 20px;
  padding: 12px 40px;
  display: inline-block;
  border: 1px solid;
  transition: background 300ms ease-in-out, border 300ms ease-in-out,color 300ms ease-in-out;
  &__green {
    background: var(--dark-jungle-green);
    border-color: var(--dark-jungle-green);
    color: var(--half-spanish-white);
    &:hover{
      background: var(--mikado-yellow);
      color: var(--dark-jungle-green);
    }
  }
  &__yellow {
    background: var(--half-spanish-white);
    border-color: var(--half-spanish-white);
    color: var(--dark-jungle-green);

    &:hover{
      background: var(--nandor);
      color: var(--half-spanish-white);
    }
  }
  &__outline{
    border-color: var(--half-spanish-white);
    color: var(--half-spanish-white);
    &:hover{
      background: var(--half-spanish-white);
      color: var(--dark-jungle-green);
    }
  }
  &__header{
    background: var(--dark-jungle-green);
    border-color: var(--dark-jungle-green);
    color: var(--mikado-yellow);
    &:hover{
      background-color: var(--mikado-yellow);
      color: var(--dark-jungle-green);
      border-color: var(--mikado-yellow)
    }
  }
}
</style>
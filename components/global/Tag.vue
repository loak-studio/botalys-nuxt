<template>
  <span class="tag text">
    <slot/>
  </span>
</template>

<style>
.tag{
  color: var(--nandor);
  display: block;
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
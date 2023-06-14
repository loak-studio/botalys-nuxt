<script setup>
const {label, type, required, name} = defineProps({label:String, type:
{
    type:String,
    default: "text",

},required:Boolean, name:String})
</script>
<template>
    <div class="input">
        <input :required="required" :id="name" placeholder="" :type="type">
        <label class="description" :for="name">{{ label }}</label>
    </div>
</template>

<style lang="scss">
  .input {
    position: relative;
    width: 100%;
    margin-top: 20px;
  }
  .input::before {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    border: 2px solid var(--half-spanish-white);
  }
  .input input::placeholder {
    opacity: 0;
  }
  .input input {
    width: 100%;
    border: none;
    background: transparent;
    font-family: "sofia-pro";
    font-weight: 500;
    line-height: 150%;
    font-size: 1rem;
    color: var(--half-spanish-white);
    padding: 10px;
    z-index: 2;
    position: relative;
  }
  .input input:focus + label,
  .input input:not(:placeholder-shown) + label {
    top: -12px;
    font-size: 0.75rem;
    z-index: 3;
  }
  .input input:focus {
    outline: none;
  }
  .input label {
    position: absolute;
    left: 10px;
    top: 10px;
    padding: 2px;
    color: var(--half-spanish-white);
    font-size: 1rem;
    background: var(--nandor);
    transition: font-size 200ms ease-in-out, top 200ms ease-in-out;
  }
</style>
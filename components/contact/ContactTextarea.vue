<script setup>
const { label, required, name } = defineProps({
    label: String, type:
    {
        type: String,
        default: "text",

    }, required: Boolean, name: String
})
</script>

<template>
    <div class="textarea">
        <textarea :required="required" :placeholder="label" :name="name" id="" rows="4" />
        <label class="description" :for="name">{{ label }}</label>
    </div>
</template>
<style lang="scss">
.textarea {
    position: relative;
    width: 100%;
}

.textarea textarea::placeholder {
    opacity: 0;
}

.textarea::before {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    border: 2px solid var(--half-spanish-white);
}

.textarea textarea {
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

.textarea textarea:focus+label,
.textarea textarea:not(:placeholder-shown)+label {
    top: -12px;
    font-size: 0.75rem;
    z-index: 3;
}

.textarea textarea:focus {
    outline: none;
}

.textarea label {
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


<script setup lang="ts">
const { name, label } = defineProps({ name: String, label: String })
onMounted(()=>{
    const input = document.querySelector(".file-input input") as HTMLInputElement;
const button = document.querySelector(
    ".file-input__quantity"
) as HTMLParagraphElement;
input.addEventListener("change", (e) => {
    const target = e.target as HTMLInputElement;
    const length = target?.files?.length as number;
    button.textContent = `${target.files?.length} file${length > 1 ? "s" : ""
        } selected${length > 1 ? "s" : ""}`;
});
})
</script>
<template>
    <div class="file-input">
        <input type="file" multiple :name="name" />
        <div>
            <span class="file-input__button">Select a file</span>
            <span class="file-input__quantity"></span>
        </div>
        <label class="description" :for="name">{{ label }}</label>
    </div>
</template>
<style scoped>
.file-input {
    position: relative;
    width: 100%;
    margin-top: 20px;
    height: 60px;
}

.file-input::before {
    position: absolute;
    height: 100%;
    width: 100%;
    content: "";
    border: 2px solid var(--half-spanish-white);
}

.file-input__button {
    background: var(--half-spanish-white);
    left: 10px;
    top: 10px;
    border: 2px solid var(--dark-jungle-green);
    border-radius: 0 20px;
    padding: 12px 24px;
    position: absolute;
    font-family: "sofia-pro";
}

.file-input__quantity {
    position: absolute;
    right: 10px;
    top: 24px;
    font-family: "sofia-pro";
    color: var(--half-spanish-white);
}

.file-input:hover .file-input__button {
    opacity: 0.8;
}

.file-input input {
    position: absolute;
    opacity: 0;
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

.file-input input:focus {
    outline: none;
}

.file-input label {
    position: absolute;
    left: 10px;
    top: 10px;
    padding: 2px;
    color: var(--half-spanish-white);
    font-size: 1rem;
    background: var(--nandor);
    transition: font-size 200ms ease-in-out, top 200ms ease-in-out;
    top: -12px;
    font-size: 0.75rem;
    z-index: 3;
}</style>
<script setup>
const { links } = defineProps({ links: Array })
</script>
<template>
    <nav class="breadcrumb">
        <ul class="breadcrumb__list">
            <li class="breadcrumb__list-item">
                <NuxtLink class="text bold" to="/">Home</NuxtLink>
            </li>
            <li class="breadcrumb__list-item text bold" v-for="(link, index) in links" :key="index">
                <NuxtLink :to="link.href">{{ link.label }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
.breadcrumb{
    padding: 10px 16px;
}
.breadcrumb__list {
    display: flex;
}

.breadcrumb__list-item>* {
    color: var(--nandor);
    display: flex;
    align-items: center;

    &::after {
        height: 10px;
        width: 7px;
        content: '';
        display: block;
        margin: 0 16px;
        background-image: url("data:image/svg+xml,%3Csvg width='7' height='10' viewBox='0 0 7 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.232887 9.84974C-0.0639996 9.63989 -0.0790311 9.28831 0.199287 9.06448L5.25313 4.99999L0.199287 0.935542C-0.0790314 0.711653 -0.064 0.360097 0.232887 0.150208C0.529774 -0.0595703 0.996074 -0.0482369 1.27439 0.175541L6.80072 4.62002C7.06643 4.83373 7.06643 5.16626 6.80072 5.37996L1.27439 9.82441C0.996074 10.0483 0.529774 10.0596 0.232887 9.84974Z' fill='%234D594C'/%3E%3C/svg%3E%0A");
    }

}

.breadcrumb .breadcrumb__list-item>* {
    color: var(--nandor)
}

.breadcrumb .breadcrumb__list-item:last-child>* {
    &::after {
        display: none;
    }
}

.breadcrumb .breadcrumb__list-item:not(:last-child)>* {
    color: var(--dark-jungle-green);
}

@media (max-width: 800px) {
    .breadcrumb{
        display: none;
    }
    .breadcrumb li {
        display: none;
    }

    .breadcrumb li:nth-last-child(-n + 2) {
        display: block;
    }
}</style>
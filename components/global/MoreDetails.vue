<script setup>
const toggled = ref(false)
</script>
<template>
    <details class="details">
        <summary class="text details__summary">More details <svg class="details__indicator" width="16" height="16"
                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 4.80981L8 12.4531L0.5 4.80981L1.83125 3.45313L8 9.73975L14.1688 3.45313L15.5 4.80981Z"
                    fill="#18201D" />
            </svg>
        </summary>
        <div class="details__slot text">
            <slot />
        </div>
    </details>
</template>

<style lang="scss">
.details[open] summary~* {
    animation: open .3s ease-in-out;
}

.details {
    max-width: 1048px;
    margin: 0 auto;
    margin-top: 48px;

    * {
        max-width: 840px;
    }
}

.details__summary {
    cursor: pointer;
    color: var(--nandor);
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    position: relative;
    margin-bottom: 1rem;
    user-select: none;

    &::-webkit-details-marker {

        display: none;
    }
}

.details .details__indicator {
    transform: rotate(-90deg);
    transition: transform 300ms ease-in-out;
}

.details[open] .details__indicator {
    transform: rotate(0);
}

.details__summary::after {
    height: 2px;
    position: absolute;
    bottom: -1rem;
    width: 250px;
    content: '';
    background: var(--nandor);
    display: block;
    transition: width 300ms ease-in-out;
    max-width: 841px;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.details[open] .details__summary::after {
    height: 2px;
    width: 100%;
    max-width: 841px;
    content: '';
    background: var(--nandor);
    display: block;
}


@keyframes open {
    0% {
        opacity: 0;
        margin-left: -20px
    }

    100% {
        opacity: 1;
        margin-left: 0px
    }
}</style>
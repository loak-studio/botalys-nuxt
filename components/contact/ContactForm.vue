<script setup>
const formToDisplay = ref('contact')
const setFormToDisplay = (value) => {
    formToDisplay.value = value
}
</script>
<template>
    <div class="contact-form">
        <div class="contact-form__header">
            <button :class="{ 'contact-form__button--active': formToDisplay == 'contact' }" class="contact-form__button h5"
                @click="setFormToDisplay('contact')">Contact us</button>
            <button :class="{ 'contact-form__button--active': formToDisplay == 'job' }" class="contact-form__button h5"
                @click="setFormToDisplay('job')">Join our team</button>
        </div>
        <form method="POST" action="/contact-us/success/" class="contact-form__form"
            :class="{ 'contact-form__form--displayed': formToDisplay == 'contact' }" netlify>
            <contact-input name="email" type="email" label="Email" required />
            <contact-input name="company" label="Company" required />
            <contact-input name="job-title" label="Job title" required />
            <contact-input name="subject" label="Subject" required />
            <contact-textarea name="message" label="Message" required />
            <botalys-button>Send message</botalys-button>
        </form>

        <form method="POST" name="jobs" action="/contact-us/success/" class="contact-form__form"
            :class="{ 'contact-form__form--displayed': formToDisplay == 'job' }" netlify>
            <contact-input name="email" type="email" label="Email" required />
            <contact-input name="subject" label="Subject" required />
            <contact-textarea name="message" label="Message" required />
            <contact-fileinput name="documents" label="Documents" />
            <botalys-button>Send message</botalys-button>
        </form>
    </div>
</template>

<style lang="scss">
.contact-form {
    background: var(--nandor);
}

.contact-form__form {
    display: none;

    &--displayed {
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: flex-start;
    }
}

.contact-form__header {
    display: flex;

    * {
        flex: 1 1 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 20px 0;
    }

    border: 2px solid var(--nandor);
    background: var(--half-spanish-white);
}

.contact-form__button {
    color: var(--half-spanish-white);
    cursor: pointer;
    background: var(--half-spanish-white);
    color: var(--nandor);

    &--active {
        background: var(--nandor);
        color: var(--half-spanish-white);
    }
}

.contact-form__form {
    padding: 2rem 3rem;
}

.contact-form__button:nth-child(1) {
    position: relative;
    z-index: 2;
    border-radius: 0 10px 0px 0;
}

.contact-form__button--active:nth-child(1) {
    border-radius: 0 10px 0 0;
}

.contact-form__button--active:nth-child(2) {
    position: relative;

    &::before {
        height: 100%;
        width: 30px;
        content: '';
        position: absolute;
        right: 100%;
        background: var(--nandor);
        z-index: 0;
    }
}

@media (max-width:809px) {
    .contact-form__form {
        padding: 1rem;
    }
}</style>
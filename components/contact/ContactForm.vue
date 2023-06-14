<script setup>
const formToDisplay = ref('contact')
const setFormToDisplay = (value)=>{
    formToDisplay.value = value
}
const submitForm = (event)=>{
    console.log(event)
}
</script>
<template>
    <div class="contact-form">
        <div class="contact-form__header">
            <button class="contact-form__button h5" @click="setFormToDisplay('contact')">Contact us</button>
            <button class="contact-form__button h5" @click="setFormToDisplay('job')">Join our team</button>
        </div>
        <form @submit.prevent="submitForm" class="contact-form__form" :class="{'contact-form__form--displayed': formToDisplay == 'contact'}" action="" netlify>
                <contact-input name="email" type="email" label="Email" required/>
                <contact-input name="company" label="Company" required/>
                <contact-input name="job-title" label="Job title" required/>
                <contact-input name="subject" label="Subject" required/>
                <contact-textarea/>
        </form>

        <form @submit.prevent="submitForm"  class="contact-form__form" :class="{'contact-form__form--displayed': formToDisplay == 'job'}" action="" netlify>
                <contact-input name="email" type="email" label="Email" required/>
                <contact-input name="subject" label="Subject" required/>
                <botalys-button>Send</botalys-button>
        </form>
    </div>
</template>

<style lang="scss">
.contact-form{
    background: var(--nandor);
    max-width: 520px;
}
.contact-form__form{
    display: none;
    &--displayed{
        display: flex;
        flex-direction: column;
        gap:12px;
    }
}

.contact-form__header{
    display: flex;
    *{
        flex: 1 1 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 20px 0 ;
    }
}

.contact-form__button{
    color: var(--half-spanish-white)
}
.contact-form__form{
    padding: 2rem 3rem;
}
</style>
---
import Main from "@layouts/Main.astro";
import ContactImage from "@assets/5-contact.jpg";
import Breadcrumb from "@components/layout/Breadcrumb.astro";
import Tag from "@components/layout/Tag.astro";
import TabsContainer from "@components/tab/TabsContainer.astro";
import Tab from "@components/tab/Tab.astro";
import ContactForm from "@components/contact/ContactForm.astro";
import JobsForm from "@components/contact/JobsForm.astro";
import Button from "@components/Button.astro";
---

<Main meta={{ title: "Contact us" }}>
  <div class="contact borders borders-big-z">
    <Breadcrumb items={[{ label: "Contact", href: "/contact-us/" }]} />
    <figure class="contact__image">
      <img src={ContactImage} alt="" />
    </figure>
    <div class="contact__form-container">
      <div>
        <div class="contact-form__tag-container">
          <Tag>Get in touch</Tag>
          <h1 class="h2 contact__title">Send us a message</h1>
        </div>
        <TabsContainer
          areTabsTitles={true}
          maxWidth="520px"
          rounded={{ bottomRight: true }}
          titles={["Contact us", "Join our team"]}
        >
          <Tab isMobileUnwrapped={false} display={true}>
            <ContactForm />
          </Tab>
          <Tab isMobileUnwrapped={false}>
            <JobsForm />
          </Tab>
        </TabsContainer>
        <div>
          <div id="confirmation">
            <p class="h3">Your message has been sent</p>
            <p class="text">
              We will do our best to get back to you as soon as possible.
            </p>
            <Button href="/">Back to home page</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</Main>

<style>
  #confirmation {
    pointer-events: none;
    opacity: 0;
    height: 0;
    padding: 48px;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    background: var(--nandor);
    color: var(--half-spanish-white);
    border-radius: 0px 0px 40px 0px;
    transform: translateY(100px);
    transition: transform 500ms, opacity 300ms;
  }
  #confirmation.display {
    display: flex;
    transform: translateY(0);
    pointer-events: all;
    opacity: 1;

    height: auto;
  }
  .contact {
    margin-top: 98px;
    min-height: 1000px;
    padding-bottom: 140px;
  }
  .contact__image {
    width: calc(100% - 900px);
    height: 887px;
    border-radius: 0px 0px 276px 0px;
    overflow: hidden;
    position: absolute;
    left: 0;
    background: black;
  }
  .contact__image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.7;
  }
  .contact__form-container {
    display: flex;
    justify-content: flex-end;
    margin-right: 180px;
  }
  .contact__form-container div {
    max-width: 520px;
    width: 100%;
  }
  .contact__title {
    margin-bottom: 48px;
  }
  @media (max-width: 1000px) {
    .contact {
      margin-top: 56px;
    }
  }
  @media (max-width: 900px) {
    .contact__image {
      display: none;
    }
    .contact__form-container {
      margin-right: 0;
      justify-content: flex-start;
      padding: 1rem;
    }
  }
  @media (max-width: 800px) {
    #confirmation {
      padding: 1rem;
    }
    .contact {
      min-height: 0;
      padding-bottom: 1rem;
    }
  }
  @media (max-width: 570px) {
    .contact-form__tag-container {
      padding: 1rem;
    }
    .contact__form-container {
      padding: 0;
    }
  }
</style>

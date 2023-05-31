---
import Button from "@components/Button.astro";
import Main from "@layouts/Main.astro";
import Image from "@assets/korean-ginseng/korean_ginseng_moutain.jpeg";
---

<Main light meta={{ title: "Coming soon" }}>
  <div class="not-found">
    <figure class="not-found__image">
      <img src={Image} alt="" />
    </figure>
    <div class="not-found__container borders borders--light">
      <div class="not-found__content">
        <h1 class="h1 not-found__title">Coming soon</h1>
        <p class="h4 not-found__text">
          We are currently exploring this territory. Our reviews for ginseng
          health applications will be available soon.
        </p>
        <Button mode="tertiary" href="/botanicals/korean-ginseng/"
          >Back to Korean Ginseng</Button
        >
      </div>
    </div>
  </div>
</Main>

<style scoped>
  .not-found__image {
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
  .not-found__image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .not-found {
    color: var(--half-spanish-white);
    background: black;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 98px;
    position: relative;
  }
  .not-found__title {
    margin: 149px 0 62px 0;
    max-width: 400px;
  }
  .not-found__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 216px;
    width: 100%;
  }
  .not-found__content {
    max-width: 616px;
    width: 100%;
  }
  .not-found__text {
    margin: 30px 0 23px 0;
  }
  .not-found__text::before {
    content: "";
    height: 2px;
    display: block;
    margin-top: -30px;
    position: absolute;
    width: calc(100% - 72px - 72px);
    background: var(--half-spanish-white);
    left: 72px;
  }
  @media (max-width: 1000px) {
    .not-found {
      padding-top: 56px;
    }
  }
  @media (max-width: 940px) {
    .not-found__container {
      padding-right: 0;
    }
  }
  @media (max-width: 900px) {
    .not-found__text::before {
      width: calc(100% - 16px - 16px);
      left: 16px;
    }
  }
  @media (max-width: 645px) {
    .not-found__content {
      padding: 0 1rem;
    }
  }
</style>

<template>
  <div class="footer-signature">
    <span class="description">Copyright &copy; BOTALYS SA. All right reserved.</span>
    <span class="description">Website created by <a class="footer-signature__link" href="https://loak.studio">loak.studio</a></span>
  </div>
</template>

<style lang="scss">
  .footer-signature{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    color: var(--half-spanish-white);
    gap:1ch;
  }
  .footer-signature__link{
    color: var(--half-spanish-white)
  }
  @media (max-width:700px) {
      .footer-signature{
        padding: 40px 1rem;
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;
      }
  }
</style>
<template>
  <div class="footer-signature">
    <span class="description">Copyright &copy; BOTALYS SA. All right reserved.</span>
    <span class="description">Website created by <a class="footer-signature__link" href="https://loak.studio">loak.studio</a></span>
  </div>
</template>

<style>
  .footer-signature{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    color: var(--half-spanish-white);
    gap:1ch;
  }
  .footer-signature__link{
    color: var(--half-spanish-white);
  }
  @media (max-width: 1000px) {
    .footer-signature{
      padding: 40px 1rem;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
    }
  }
</style>
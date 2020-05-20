<style>
  .Modal {
    position: relative;
  }
  .Modal-overlay {
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 8;
    cursor: pointer;
  }
</style>

<div class="Modal">
  <!-- capa que oscurece la aplicacion y le da un focus a la cajita del comentario que estoy haciendo en ese momento  -->
  <div class="Modal-overlay" />
  <slot />
</div>

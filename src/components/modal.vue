<template>
  <transition name="modal">
    <div class="modal modal-overlay">
      <div class="modal-body">
          <header>
            <slot name="header">
                Default header
            </slot>
        </header>
        <main>
            <slot name="main">
                Default main
            </slot>
        </main>
        <footer>
            <slot name="footer">
                Default footer
            </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
    .modal {
        &-overlay {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            z-index: 9999;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, .5);
        }

        &-body {
            position: relative;
            background-color: white;
            border: 1px solid gray;
            border-radius: 5px;
        }
    }

    .modal-enter, .modal-leave-to {
        opacity: 0;
    }

    .modal-enter-active, .modal-leave-active {
        transition: opacity .3s
    }
</style>

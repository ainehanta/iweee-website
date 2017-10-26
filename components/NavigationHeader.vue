<template>
  <header class="mdl-layout__header mdl-layout__header--transparent">
    <div class="mdl-layout__header-row mdl-shadow--2dp">
      <span class="mdl-layout-title">
        <img src="~/assets/img/iweee-logo-line.png">
      </span>
    </div>
  </header>
</template>

<style>
.mdl-layout__drawer-button {
  color: black !important;
}

.mdl-layout-title {
  display: block !important;
  position: absolute;
  left: calc(50% - 68px);
  top: 12px;
}

.mdl-layout-title img {
  width: 150px;
}

@media all and (min-width: 1025px) {
  .mdl-layout__header {
    display: none;
  }
}
</style>

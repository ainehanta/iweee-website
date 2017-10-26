<template>
  <div>
    <div class="ribbon">
      <slot name="ribbon-img"><img src="~/assets/img/sogo-blur.png"></slot>
    </div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--1-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
      <article class="container mdl-cell mdl-cell--10-col mdl-shadow--4dp mdl-color--white">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <div class="content mdl-color-text--grey-700 ">
          <slot name="content"></slot>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    window.componentHandler.upgradeDom()
    document.querySelector('.mdl-layout__content').scrollTop = 0
  }
}
</script>

<style scoped>
.ribbon {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  z-index: 1;
}

.ribbon img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-40%);
}

@media all and (min-width: 960px) {
  .ribbon img {
    width: 100%;
  }
}

.container {
  position: relative;
  top: -89px;
  border-radius: 2px;
  z-index: 100;
}

.title {
  border-bottom: 1px solid rgb(224,224,224);
  padding: 0 56px;
}

.content {
  padding: 20px 56px 60px;
}

@media all and (max-width: 450px) {
  .title, .content {
    padding-left: 20px;
    padding-right: 20px;
  }
}

* {
  font-weight: 300;
}

@media all and (max-width: 1024px) {
  * {
    font-weight: 400;
  }
}

dt {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.04em;
}

h1, h2, h3, h4, h5 {
  font-weight: 400;
  color: rgba(0,0,0,.87);
}

ol {
  list-style-type: lower-roman;
}

ul li {
  margin: 1rem auto;
}

@media all and (max-width: 1024px) {
  ul {
    padding-left: 0;
  }
}

.steps {
  border-left: 2px dotted #757575;
}

.step-head {
  position: relative;
  padding-left: 20px;
}

.step-head:before {
  content: "\e074";
  position: absolute;
  left: -15px;
  height: 30px;
  width: 30px;
  padding-top: 5px;
  font-family: 'typicons';
  font-style: normal;
  font-weight: normal;
  speak: none;
  display: inline-block;
  text-decoration: inherit;
  font-size: 1.5em;
  text-align: center;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  background: white;
}

.step-content {
  padding-left: 20px;
}

@media all and (max-width: 450px) {
  .steps {
    margin-left: 20px;
  }
}
</style>

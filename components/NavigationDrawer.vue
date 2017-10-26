<template>
  <div class="mdl-layout__drawer">
    <span class="mdl-typography--text-center">
      <img style="height:100%; width:100%;" src="~/assets/img/iweee-logo-square.png" />
      <h1 class="mdl-typography--display-1 title"><span style="display:none;">IWEEE</span>{{ iweee.year }}</h1>
    </span>
    <nav class="mdl-navigation">
      <nuxt-link to="/" class="mdl-navigation__link typcn typcn-home iweee-navigation__link--home" @click.native="closeDrawer">Home</nuxt-link>
      <nuxt-link to="/about" class="mdl-navigation__link typcn typcn-info-large iweee-navigation__link--about" @click.native="closeDrawer">About</nuxt-link>
      <nuxt-link to="/program-schedules" class="mdl-navigation__link typcn typcn-document-text iweee-navigation__link--program-schedules" @click.native="closeDrawer">Program Schedules</nuxt-link>
      <nuxt-link to="/important-dates" class="mdl-navigation__link typcn typcn-calendar iweee-navigation__link--important-dates" @click.native="closeDrawer">Important Dates</nuxt-link>
      <nuxt-link to="/directions" class="mdl-navigation__link typcn typcn-map iweee-navigation__link--directions" @click.native="closeDrawer">Directions</nuxt-link>
      <nuxt-link to="/abstract-submission" class="mdl-navigation__link typcn typcn-upload iweee-navigation__link--abstract-submission" @click.native="closeDrawer">Abstract Submission</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    closeDrawer: () => {
      document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible')
      document.querySelector('.mdl-layout__drawer').classList.remove('is-visible')

      document.querySelector('.mdl-layout__drawer').setAttribute('aria-hidden', 'true')
      document.querySelector('.mdl-layout__drawer-button').setAttribute('aria-expanded', 'false')
    }
  }
}
</script>

<style scoped>
.mdl-layout__drawer {
  border-right: 0;
  height: 100vh;
  position: fixed;
  top: 0;
}

.title {
  padding: 1rem 0 0;
  margin: 0;
}

.title, .mdl-navigation {
  border-right: 1px solid #e0e0e0;
}

.typcn:before {
  font-size: 2em;
  padding-right: 0.2rem;
  position: relative;
  top: 0.2rem;
}

.mdl-navigation__link {
  padding: 10px 30px !important;
}

.iweee-navigation__link--home:before {
  color: #3a98db;
}

.iweee-navigation__link--about:before {
  color: #e74c3cff;
}

.iweee-navigation__link--program-schedules:before {
  color: #9b59b6;
}

.iweee-navigation__link--important-dates:before {
  color: #f1c538;
}

.iweee-navigation__link--directions:before {
  color: #56cc72;
}

.iweee-navigation__link--abstract-submission:before {
  color: #ff00a6;
}
</style>

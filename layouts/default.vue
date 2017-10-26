<template>
<div>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    <NavigationHeader/>
    <NavigationDrawer/>
    <div class="mdl-layout__content">
      <nuxt/>
      <NavigationFooter />
    </div>
  </div>
</div>
</template>

<script>
import NavigationDrawer from '~/components/NavigationDrawer.vue'
import NavigationHeader from '~/components/NavigationHeader.vue'
import NavigationFooter from '~/components/NavigationFooter.vue'

export default {
  components: {
    NavigationDrawer,
    NavigationHeader,
    NavigationFooter
  }
}
</script>

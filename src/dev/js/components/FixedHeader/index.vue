<template>
  <div id="fixed-header">
    <Logo/>
    <AllLinks v-if="!this.isMobile"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AllLinks from './AllLinks'
import Logo from './Logo'

export default {
  name: 'fixed-header',
  components: {
    AllLinks,
    Logo
  },
  computed: {
    ...mapGetters([
      'isMobile'
    ])
  }
}
</script>

<style lang="scss">
#fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 30px 60px 0 60px;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 400px) {
    padding: 30px 10%;
  }
}
</style>

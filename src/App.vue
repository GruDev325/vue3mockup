<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default defineComponent({
  async beforeMount () {
    await this.loginWithToken()
  },
  watch: {
    $route (to: any, from: any): void {
      this.checkRole()
    }
  },
  computed: {
    ...mapGetters(['getAccessToken'])
  },
  methods: {
    ...mapActions(['loginWithToken']),
    checkRole: function () {
      if (this.$route.path !== '/login' && !this.getAccessToken) {
        this.$router.push('/login')
      }
      if (this.getAccessToken) {
        this.$router.push('/dashboard')
      }
      if (!this.getAccessToken && this.$route.path === '/') {
        this.$router.push('/login')
      }
    }
  }
})
</script>

<style lang="scss"></style>

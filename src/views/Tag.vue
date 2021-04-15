<template>
  <div>
    <h1>Here you can find information about tag list of each post</h1>
    <pre>{{ tag }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Taglist',
  data() {
    return {
      response: null
    }
  },
  computed: {
    ...mapState('tag', ['loading', 'tag'])
  },
  async mounted() {
    await this.$store.dispatch('tag/fetchTag')
  }
}
</script>
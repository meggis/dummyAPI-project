<template>
  <div>
    <h1>Page about comment by each post</h1>
    <pre>{{ comment }}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
  name: 'Comment',
  data() {
    return {
      response: null
    }
  },
  computed: {
    ...mapState("comment", ["loading", "comment"])
  },
  // async mounted() {
  //   await this.$store.dispatch('comment/fetchComment')
  // },
}
</script>
<template>
  <div v-if="id">
    <b-container class="">
        <b-card  :key="id"
        :img-src="user.picture"
        >
        </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Profile',
  data() {
    return {
      response: null,
      id: this.$route.params.id,
    }
  },   
  computed: {
    ...mapState('user', ['loading', 'user'])
  },
  async mounted() {
      await this.$store.dispatch("user/fetchUser", this.id);
  },
  methods: {
  },
  

}
</script>
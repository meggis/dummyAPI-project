<template>
  <div class="User Endpoints">
    <b-container>
      <b-row class="mt-0 p-5">
        <b-col>
          <p class="p-colour">
            See some example of random post tags.
          </p>
        </b-col>
      </b-row>
      <b-card>
        <b-card-body>If you want to see post filtered by tagname, pick one listed below: </b-card-body>
        <div v-for="tag in tags" :key="tag">
          <b-button @click="handleTagClick(tag)">{{ tag }}</b-button>
        </div>
      </b-card>
    </b-container>
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
    ...mapState('tag', ['loadingTags', 'tags']),
    ...mapState("post", ["loading", "posts"]),
  },
  async mounted() {
    await this.$store.dispatch('tag/fetchTags')
  },
  methods: {
    handleTagClick(tagTitle) {
      this.$router.push(`./posts-tag/${tagTitle}`)
    }
  },
}
</script>
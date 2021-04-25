<template>
  <b-card-group columns>
    <b-card v-for="post in posts" class="p-3 mb-4" :key="post.id">
      <template #header>
        <h4 class="mb-0 text-left">
          <span class="span-text"
            ><img :src="post.owner.picture" />
            {{ post.owner.firstName + " " + post.owner.lastName }}
          </span>
        </h4>
      </template>
      <b-card-img class="mb-2" :src="post.image"></b-card-img>
      <span v-for="tag in post.tags" :key="tag">
        <span class="span-tag">{{ tag }}</span>
      </span>
      <b-list-group class="mt-2">
        <b-list-group-item>
          <p class="p-class text-left">{{ post.text }}</p>
          <a href="">{{ post.link }}</a>
        </b-list-group-item>
        <b-list-group-item class="heart-class">
          <span>
            <b-icon icon="suit-heart-fill"></b-icon>
            {{ post.likes }} Likes
          </span>
          {{ post.publishDate }}
        </b-list-group-item>
      </b-list-group>
      <b-button-group class="justify-content-center mt-3">
        <b-button @click="handleClickOnComment(post.id)"
          >Get post comments</b-button
        >
        <b-button @click="handleClickOnOwner(post.owner.id)"
          >Get owner profile</b-button
        >
      </b-button-group>
      <b-collapse
        :visible="post.id === selectedPost"
        id="my-collapse"
        class="pt-3"
      >
        <b-card class="text-left">
          <div v-if="loadingComments" class="text-center my-3">
            <b-spinner label="Loading..."></b-spinner>
          </div>
          <div v-else>
            <div v-if="comments && comments.length">
              <ul v-for="comment in comments" :key="comment.id">
                <li>
                  <span>{{ comment.message }}</span>
                </li>
              </ul>
            </div>
            <div v-else class="text-center">
              <p>There are no comments</p>
            </div>
          </div>
        </b-card>
      </b-collapse>
    </b-card>
  </b-card-group>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Posts",
  props: {
    posts: {
      type: Array || null,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      response: null,
      selectedPost: null,
    };
  },
  computed: {
    ...mapState("comment", ["loadingComments", "comments"]),
  },
  async mounted() {
    await this.$store.dispatch("post/fetchPostsList");
  },
  methods: {
    handleClickOnOwner(userId) {
      this.$router.push(`./profile/${userId}`);
    },
    handleClickOnComment(postId) {
      this.selectedPost = postId;
      this.$store.dispatch("comment/fetchComments", postId);
    },
  },
};
</script>

<style scoped>
@import "../styles/styles.css";

h4 {
  font-size: 20px;
}

.card-body {
  padding: 6px 0px 0px 0px;
  font-size: 11px;
  justify-content: center;
  align-items: center;
}

footer.card-footer {
  padding: 0;
  padding-top: 16px;
}

.p-colour {
  color: white;
}

.card {
  min-width: unset;
}

.card .card-header img {
  border-radius: 50%;
  width: 30px;
}

.span-text {
  font-size: 10px;
  margin-top: 5px;
}

.card-header {
  padding: 0 0 5px 0;
  background-color: white;
}

.span-tag {
  background-color: rgb(214, 41, 107);
  margin: 5px;
  padding: 2px 4px 4px;
  border-radius: 4px;
  color: white;
  word-wrap: break-word;
  display: inline-block;
  word-break: break-all;
}

.btn-secondary {
  background-color: white;
  border-color: black;
  color: black;
}

.btn {
  font-size: 10px;
}

.btn:hover {
  background-color: rgb(214, 41, 107);
  color: white;
  border-color: rgb(214, 41, 107);
}

.p-class {
  font-size: 15px;
  margin-bottom: 0;
}

.heart-class {
  display: flex;
  justify-content: space-between;
}
</style>
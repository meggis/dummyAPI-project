<template>
  <div>
    <b-button class="my-5 main-btn" @click="backClickHandle()"
      >Go back to user list</b-button
    >
    <div v-if="postLoading" class="mt-4">
      <b-spinner variant="light" label="Loading..."></b-spinner>
    </div>
    <div v-if="!postLoading">
      <b-container>
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
                <a v-if="post.link" href="">{{ post.link }}</a>
              </b-list-group-item>
              <b-list-group-item class="heart-class">
                <span>
                  <b-icon icon="suit-heart-fill"></b-icon>
                  {{ post.likes }} Likes
                </span>
                {{ getDate(post.publishDate) }}
              </b-list-group-item>
            </b-list-group>
            <b-button-group class="justify-content-center mt-3">
              <b-button @click="handleCommentClick(post.id)">
                Show post comments
              </b-button>
              <b-button @click="handleClickOnOwner(post.id)">
                Get owner profile
              </b-button>
            </b-button-group>
            <b-collapse
              :visible="comments && post.id === selectedPost"
              id="my-collapse"
              class="pt-3"
            >
              <b-card class="text-left">
                <div v-if="comments && comments.length">
                  <ul v-for="comment in comments" :key="comment.id">
                    <li>{{ comment.message }}</li>
                  </ul>
                </div>
                <div v-else class="text-center">
                  <p>There are no comments</p>
                </div>
              </b-card>
            </b-collapse>
          </b-card>
        </b-card-group>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from 'moment'

export default {
  data() {
    return {
      response: null,
      id: this.$route.params.id,
      visible: true,
      selectedPost: null,
    };
  },
  computed: {
    ...mapState("post", ["loading", "posts", "postLoading"]),
    ...mapState("comment", ["loading", "comments"]),
  },
  async mounted() {
    await this.$store.dispatch("post/fetchUserPosts", this.id);
  },
  methods: {
    getDate(date){
      return moment(date).format("DD.MM.YYYY")
    },
    backClickHandle() {
      this.$router.push("../user");
    },
    handleClickOnOwner(userId) {
      this.$router.push(`../Profile/${userId}`);
    },
    handleCommentClick(postId) {
      this.selectedPost = postId;
      this.$store.dispatch("comment/fetchComments", postId);
      console.log(this.response);
    },
  },
};
</script>

<style>
.span-tag {
  background-color: rgb(91, 29, 172);
  margin: 5px;
  padding: 2px 4px 4px;
  border-radius: 4px;
  color: white;
  word-wrap: break-word;
  display: inline-block;
  word-break: break-all;
}

.span-text {
  font-size: 10px;
  margin-top: 5px;
}

.main-btn {
  background-color: transparent;
  border-color: white;
  color: white;
}

.main-btn:hover {
  background-color: white;
  border-color: transparent;
  color: #f43b47;
}

.card .card-header img {
  border-radius: 50%;
  width: 30px;
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

.card-body {
  padding: 6px 0px 0px 0px;
  font-size: 11px;
  justify-content: center;
  align-items: center;
}

.card-header {
  padding: 0 0 5px 0;
  background-color: white;
}
</style>
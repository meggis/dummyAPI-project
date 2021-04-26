<template>
  <b-card-group columns>
    <b-card v-for="post in posts" class="text-center p-3 mb-4" :key="post.id">
      <template #header>
        <h4 class="mb-0 text-left">
          <span class="header-text"
            ><img :src="post.owner.picture" />
            {{ post.owner.firstName + " " + post.owner.lastName }}
          </span>
        </h4>
      </template>
      <b-card-img class="mb-2" :src="post.image"></b-card-img>
      <span v-for="tag in post.tags" :key="tag">
        <b-button @click="handleTagClick(tag)" class="tag-class">{{ tag }}</b-button>
      </span>
      <b-list-group class="mt-2">
        <b-list-group-item>
          <p class="text-font text-left">{{ post.text }}</p>
          <div class="my-2" v-if="post.link">
            <a :href="post.link">{{ post.link }}</a>
          </div>
        </b-list-group-item>
        <b-list-group-item class="icon-row-class">
          <span>
            <b-icon icon="suit-heart-fill"></b-icon>
            {{ post.likes }} Likes
          </span>
          {{ getDate(post.publishDate) }}
        </b-list-group-item>
      </b-list-group>
      <b-button-group class="mt-3">
        <b-button class="card-button" @click="handleClickOnComment(post.id)"
          >Get post comments</b-button
        >
        <b-button class="card-button" @click="handleClickOnOwner(post.owner.id)"
          >Get owner profile</b-button
        >
      </b-button-group>
      <b-collapse
        :visible="post.id === selectedPost"
        id="my-collapse"
        class="pt-3"
      >
          <div v-if="loadingComments" class="text-center my-3">
            <b-spinner label="Loading..."></b-spinner>
          </div>
          <div v-else>
            <div v-if="comments && comments.length">
              <div class="text-left" v-for="comment in comments" :key="comment.id">
                <b-list-group>
                  <b-list-group-item>
                    <img id="comment-img" :src="comment.owner.picture" />
                  {{comment.message }}
                  </b-list-group-item>
                </b-list-group>
              </div>
            </div>
            <b-list-group-item v-else class="text-center">
              <p class="comment-p">There are no comments</p>
            </b-list-group-item>
          </div>
      </b-collapse>
    </b-card>
  </b-card-group>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
  name: "Posts",
  props: {
    posts: {
      type: null || Array,
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
  methods: {
    getDate(date) {
      return moment(date).format("DD.MM.YYYY");
    },
    handleClickOnOwner(userId) {
      this.$router.push(`../profile/${userId}`);
    },
    handleClickOnComment(postId) {
      this.selectedPost = postId;
      this.$store.dispatch("comment/fetchComments", postId);
    },
    handleTagClick(tagTitle) {
      this.$router.push(`../posts-tag/${tagTitle}`)
    }
  },
};
</script>

<style scoped>
.card-body {
  padding: 6px 0px 0px 0px;
  font-size: 11px;
  justify-content: center;
  align-items: center;
}

.card .card-header img {
  border-radius: 50%;
  width: 30px;
}

.header-text {
  font-size: 10px;
}

.card-header {
  padding: 0 0 5px 0;
  background-color: white;
}

.tag-class {
  background-color: rgb(214, 41, 107);
  border-color: rgb(214, 41, 107);
  margin: 3px;
  padding: 2px;
  border-radius: 4px;
  color: white;
  font-size: 10px;
}

.tag-class:hover {
  background-color: rgb(161, 17, 72);
  border-color: rgb(161, 17, 72);
}

.text-font {
  font-size: 15px;
}

.icon-row-class {
  display: flex;
  justify-content: space-between;
}

#comment-img {
  border-radius: 50%;
  width: 30px;
}

.comment-p {
  margin-bottom: 0px;
}
</style>
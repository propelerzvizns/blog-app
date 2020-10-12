<template>
  <div class="posts">
    <h1>Posts</h1>
  <table>
    <tr>
      <th>title</th>
      <th>text</th>
      <th>created at</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr v-for="post in posts" :key="post.id">
      <td>{{post.title}}</td>
      <td>{{post.text}}</td>
      <td>{{post.createdAt | formatDate}}</td>
   
      <td>
        <router-link :to="{ name: 'post', params: { id: post.id }}">View Post</router-link>
      </td>
      <td>
        <router-link :to="{ name: 'edit-post', params: { id: post.id }}">Edit Post</router-link>
      </td>
      <td>
    
        <button @click="deletePost(post)">delete Post</button>
      </td>
    </tr>
  </table>
  </div>
</template>

<script>
import {postsService} from '../services/PostsService'
export default {
  name: 'AppPosts',

  data(){
    return {
      posts: []
    }
  },
  async created() {
    this.posts = await postsService.getPosts()

  },
  methods: {
    deletePost(post){
      postsService.deleteAPost(post).then(async () => {
        this.posts = await postsService.getPosts()
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="hello">
    <h1>Post</h1>
  <table>
    <tr>
      <th>title</th>
      <th>text</th>
      <th></th>
      <th>comment</th>
    </tr>
    <tr>
      <td>{{post.title}}</td>
      <td>{{post.text}}</td>
      <td v-if="post.comments.length">comments number: {{post.comments.length}}</td>
      <td v-else>no comments</td>
      <td>
        <tr v-for="comment in post.comments" :key="comment.id">
          <td>{{comment.text}}</td>
          <td>{{comment.createdAt | humanFormatDate}}</td>
          
        </tr>
      </td>

    </tr>
  </table>
    <AddComponent @commentAdded="addAComment"></AddComponent>

  </div>
</template>

<script>


import AddComponent from './AddComment'
import {postsService} from '../services/PostsService'
export default {
  name: 'SinglePost',
   components: {
     AddComponent
 },

 
  data(){
    return {
       
      post: {   },

    }
  },
  async  created(){
        this.post = await postsService.getAPost(this.$route.params.id)
   },
   methods: {
     addAComment(comment){
       postsService.addAComment(this.post.id, comment)
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

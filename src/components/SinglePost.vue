<template>
  <div class="hello">
    <h1>Post</h1>
  <table>
    <tr>
      <th>title</th>
      <th>text</th>
      <th></th>
    </tr>
    <tr>
      <td>{{post.title}}</td>
      <td>{{post.text}}</td>

    </tr>
  </table>
  </div>
</template>

<script>
import {postsService} from '../services/PostsService'
export default {
  name: 'SinglePost',
 
  data(){
    return {
       
      post: {   }
    }
  },
  async  created(){
        this.post = await postsService.getAPost(this.$route.params.id)
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

<template>
  <div class="hello">
    <h1>Post</h1>
    <form @submit.prevent="Add">
        
    <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"  placeholder="Enter title" v-model="post.title" required minlength="2">

    </div>
    <div class="form-group">
        <label for="text">Text</label>
        <textarea class="form-control" id="body" rows="3" v-model="post.text" required maxlength="300"></textarea>
    </div>

    <button type="submit" class="btn btn-primary">Add Post</button>
    </form> 
    <button @click="resetFrom" type="submit" class="btn btn-primary">reset form</button>
  </div>
</template>

<script>
import {postsService} from '../services/PostsService'
export default {
  name: 'AddPost',
 
  data(){
    return {
       post: {
           text: '',
           title: ''
       }

    }
  },
  methods: {
      Add(){
          postsService.addPost(this.post);
          this.$router.push('posts')
      },
      resetFrom(){
          this.post= {}
      
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

<template>
  <div class="addPost">
    <h1>Post</h1>
    <form @submit.prevent="onSubmit">
        
    <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"  placeholder="Enter title" v-model="post.title" required minlength="2">

    </div>
    <div class="form-group">
        <label for="text">Text</label>
        <textarea class="form-control" id="body" rows="3" v-model="post.text" required maxlength="300"></textarea>
    </div>
    <div v-if="post.id"> 
        <button type="submit" class="btn btn-primary">Edit Post</button>
    </div>

    <div v-else>
        <button type="submit" class="btn btn-primary">Add Post</button>
    </div>
   
    </form> 
    <button @click="resetFrom" type="submit" class="btn btn-primary">reset form</button>

    <AddComponent></AddComponent>
  </div>
</template>

<script>
import AddComponent from './AddComment'
import {postsService} from '../services/PostsService'
export default {
  name: 'AddPost',
 components: {
     AddComponent
 },
  data(){
    return {
       post: {
           text: '',
           title: ''
       }

    }
  },
 async created(){
     if(this.$route.params.id){

         this.post = await postsService.getAPost(this.$route.params.id)
     }

  },
  methods: {
 
    resetFrom(){
        this.post= {}

    },
    editPost(){
        postsService.editAPost(this.post)
        console.log(this.$router)
        this.$router.push({ name: 'posts' })

    },
    addPost(){
        postsService.addAPost(this.post);
        this.$router.push('posts')
    },
    onSubmit(){
        if(this.$route.params.id){
            this.editPost()
        } 
        else {
            this.addPost();
        }
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

<template>
  <div class="home">
     <h2>文章</h2>
    <Article></Article>
    <h2>壁纸</h2>
    <Wallpaper></Wallpaper>
    <h2>资源</h2>
    <Download></Download>
  </div>
</template>

<script>
  import  Wallpaper from './user/Wallpaper'
  import  Article from './user/Article'
  import  Download from './user/Download'
export default {
  name: 'HelloWorld',
  components:{
    Wallpaper,Article,Download
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  width:1280px;
  margin:auto;
}

  h2{
    border-left: 5px solid rgba(244,90,141,1);
    padding-left: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 18px;
  }
</style>

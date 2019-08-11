<template>
  <div id="app">
    <div class="navs">
      <ul>
        <li><router-link   to="/" >博客</router-link></li>
        <li> <a  href="http://anets.cn"  target="_blank">主网</a></li>
        <li> <router-link  to="/wallpaper"  >壁纸</router-link></li>
        <li><router-link to="/article" >文章</router-link></li>
        <li><router-link to="/download"  >资源</router-link></li>
        <li><router-link to="/up"  >博主</router-link></li>

    </ul></div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      index:0
    }
  },
  created() {
    setTimeout(()=>{
      console.log("                     //\n" +
        "         \\\\         //\n" +
        "          \\\\       //\n" +
        "    ##DDDDDDDDDDDDDDDDDDDDDD##\n" +
        "    ## DDDDDDDDDDDDDDDDDDDD ##   ________   ___   ___        ___   ________   ___   ___        ___\n" +
        "    ## hh                hh ##   |\\   __  \\ |\\  \\ |\\  \\      |\\  \\ |\\   __  \\ |\\  \\ |\\  \\      |\\  \\\n" +
        "    ## hh    //    \\\\    hh ##   \\ \\  \\|\\ /_\\ \\  \\\\ \\  \\     \\ \\  \\\\ \\  \\|\\ /_\\ \\  \\\\ \\  \\     \\ \\  \\\n" +
        "    ## hh   //      \\\\   hh ##    \\ \\   __  \\\\ \\  \\\\ \\  \\     \\ \\  \\\\ \\   __  \\\\ \\  \\\\ \\  \\     \\ \\  \\\n" +
        "    ## hh                hh ##     \\ \\  \\|\\  \\\\ \\  \\\\ \\  \\____ \\ \\  \\\\ \\  \\|\\  \\\\ \\  \\\\ \\  \\____ \\ \\  \\\n" +
        "    ## hh      wwww      hh ##      \\ \\_______\\\\ \\__\\\\ \\_______\\\\ \\__\\\\ \\_______\\\\ \\__\\\\ \\_______\\\\ \\__\\\n" +
        "    ## hh                hh ##       \\|_______| \\|__| \\|_______| \\|__| \\|_______| \\|__| \\|_______| \\|__|\n" +
        "    ## MMMMMMMMMMMMMMMMMMMM ##\n" +
        "    ##MMMMMMMMMMMMMMMMMMMMMM##                             Release 2.6.1. Powered by jinkela-core 2.4.8.\n" +
        "         \\/            \\/");
    },1000);
  }
}
</script>

<style scoped>
#app {
  font-family: "Helvetica Neue","Helvetica","Arial","PingFang SC","Hiragino Sans GB", "Microsoft YaHei","WenQuanYi Micro Hei", sans-serif;
}


  .navs{
    width:100%;
    height: 42px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.2);
    background-color: rgba(255,255,255,0.7);
  }

  ul{
    list-style: none;
    width: 1280px;
    margin: auto;
    padding: 0px;
    display: flex;
    flex-direction: row;
  }
  ul li{
    cursor: default;
    font-size: 15px;
    height:42px ;
    line-height: 42px;
    padding: 0px 10px;
    transition: all 0.5s;
  }


a.router-link-active{
  color: rgba(244,90,141,1);
}
a:hover{
   color: rgba(244,90,141,1);
}

</style>

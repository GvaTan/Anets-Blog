<template>
    <div style="background-color: rgba(244,245,247,1)">
      <div class="bg" >
        <img :src="'http://anets.cn/upload/wallpaper/thumbnail/'+shop[0].shop_img" alt="" v-if="shop[0].shop_img">
      </div>

      <div class="title">
           <img :src="'http://anets.cn/upload/wallpaper/thumbnail/'+shop[0].shop_img" alt="" style="border: 4px solid white;border-radius: 5px" v-if="shop[0].shop_img">
        <div>
          <h1>{{shop[0].shop_name}}</h1>
          <h2>{{shop[0].shop_discript}}</h2>
          <span>发布时间：{{shop[0].shop_time}}</span>
        </div>
      </div>
      <div class="content" v-if="!download">
         <h3 style="border-left: 7px solid rgba(0,161,264,1);padding-left:10px">文章内容</h3>
        <div v-html="shop[0].shop_detail"></div>
      </div>
      <div class="content" v-if="download">
        <h3 style="border-left: 7px solid rgba(0,161,264,1);padding-left:10px">资源详情</h3>
        <div v-html="shop[0].shop_detail"></div>
        <h3 style="border-left: 7px solid rgba(0,161,264,1);padding-left:10px">下载地址</h3>
        <div><a :href="shop[0].shop_download" target="_blank">{{shop[0].shop_download}}</a></div>
        <h3 style="border-left: 7px solid rgba(0,161,264,1);padding-left:10px">下载密码</h3>
        <div v-html="shop[0].shop_password"></div>
      </div>
    </div>
</template>

<script>
  import {getShops} from "../../api/userapi";
    export default {
        name: "Detail",
      data() {
        return {
          shop: [{}],
          download:false
        }
      },
      created() {

          if(this.$route.fullPath=='/blog/article/detail/'+this.$route.params.shopId+'.html'){//这是文章

              this.download=false;
          }else {//这是下载

              this.download=true;
          }
          this.initData(this.$route.params.shopId);
      },
      methods:{
        async initData(shopId){
          let {data:s}=await getShops("","","","","",shopId,'','');
          this.shop=s;
          console.log(s);
        }
      }
    }
</script>

<style scoped>
.bg{
width: 100%;
 height: 250px;background-color: black;
background-repeat:no-repeat;background-size:cover;
overflow: hidden;
position: relative;
}

.bg img{
  position: absolute;
  left:-40px;
  top:-40px;
  width: 130%;
  filter: blur(20px);
}

  .title{

    width: 1280px;
    position: absolute;
    top:72px;
    color: white;
    left: 50%;
    transform: translate(-50%,0);
    display: flex;
    flex-direction: row;
  }

.title div{
  padding-left: 50px;
}
.title div h1{
  margin-top: 0px;
  color: rgba(244,90,141,1);
}

.title div h2{
  font-size: 15px;
}

.title div  span{
  position: absolute;
  right: 0px;
  bottom: 10px;
  width: 230px;
}

  .content{
    border-radius: 5px;
    padding: 10px 10px;
    width: 1280px;
    margin: auto;
    margin-top: 50px;
    background-color: white;
  }
</style>

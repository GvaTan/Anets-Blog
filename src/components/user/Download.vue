<template>
  <div class="detail">


    <div class="left" v-if="showLeft">
      <ul>
        <li>默认</li>
      </ul>
    </div>
    <div class="right" style="padding-top: 30px">
      <div style="border-left: 5px solid rgba(0,161,214,1);padding-left: 10px;font-size: 20px;font-weight: bolder;color: rgba(0,0,0,0.6)">
        软件
      </div>
      <ul>

        <router-link :to="'/download/detail/'+item.shop_id+'.html'" tag="li" v-for="(item,index) in articles" style="margin-left: 15px;margin-bottom: 10px">
          <div style="overflow: hidden">
            <img :src="'http://anets.cn/upload/wallpaper/thumbnail/'+item.shop_img" alt="" v-if="item.shop_img">
            <div class="discript" style="position: absolute;">
              {{item.shop_discript}}
            </div>
          </div>

          <div>
            <a :href="'/dowbload/detail/'+item.shop_id+'.html'"><h2>{{item.shop_name}}</h2></a>
         </div>

        </router-link>

      </ul>


      <div style="border-left: 5px solid rgba(0,161,214,1);padding-left: 10px;font-size: 20px;font-weight: bolder;color: rgba(0,0,0,0.6)">
        教程
      </div>
      <ul>

        <router-link :to="'/blog/download/detail/'+item.shop_id+'.html'" tag="li" v-for="(item,index) in study" style="margin-left: 15px;margin-bottom: 10px">
          <div style="overflow: hidden">
            <img :src="'http://anets.cn/upload/wallpaper/thumbnail/'+item.shop_img" alt="" v-if="item.shop_img">
            <div class="discript" style="position: absolute;">
              {{item.shop_discript}}
            </div>
          </div>

          <div>
            <a :href="'/blog/download/detail/'+item.shop_id+'.html'"><h2>{{item.shop_name}}</h2></a>
          </div>

        </router-link>

      </ul>
    </div>
  </div>
</template>

<script>
  import {getShops} from "../../api/userapi";
  export default {
    name: "Article",
    data(){
      return {
        articles:[],
        study:[],
        showLeft:false
      }
    },
    created() {
      if(this.$route.params.userId==null){
        this.initData('');
        this.showLeft=false;
      }else{
        this.initData(this.$route.params.userId);
        this.showLeft=true;
      }

    }
    ,
    methods:{
      async initData(userId){

        let {data:s}=await getShops("","","","软件",userId,'','','');
        this.articles=s;
        let {data:s1}=await getShops("","","","教程",userId,'','','');
        this.study=s1;
      }
    }
  }
</script>

<style scoped>
  .detail{
    display: flex;
    flex-direction: row;
    background-size: cover;
    width: 1280px;
    margin: auto;
  }

  .detail .left{
    width:250px;
  }

  ul{
    list-style: none;
    padding-left: 2px;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .detail .left li{
    width: 100%;
    height:44px;
    line-height: 44px;
    padding-left: 30px;
    transition: all 0.5s;

  }

  .detail .left li:hover{
    color: rgba(0,164,264,1);
    background-color: rgba(0,0,0,0.1);

  }
  .detail .right{
    width:100%;
  }
  .detail .right ul{
    width:100%;
  }
  .detail .right ul li{
    cursor: default;
    width: 300px;
    display: flex;
    flex-direction: column;
    transition: all 0.7s;
    border: 1px solid rgba(238,10,69,0);
    border-radius: 5px;
    position: relative;
    overflow: hidden;
  }

  .detail .right ul li:hover{
    box-shadow: 0px 0px 5px rgba(238,10,69,1);
  }
  .detail .right ul li img{
    border-radius: 5px;

  }
  .detail .right ul li:hover img{
    filter: contrast(120%);
  }
  .detail .right ul li div{
    width: 300px;
    display: flex;
    flex-direction: column;
    position: relative;
    text-align: center;
  }

  .detail .right ul li div h2{
    width: 300px;
    margin-top: 0px;
    color: rgba(244,90,141,1);
    text-align: center;
  }

  /*.detail .right ul li div h2{*/
  /*  font-size: 15px;*/
  /*}*/

  .detail .right ul li div  span{
    position: absolute;
    right: 0px;
    bottom: 10px;
    width: 230px;
  }
  .discript{
    height: 20px;
    line-height: 20px;
    bottom:-20px;
    color: rgba(255,255,255,0.7);
    background-color:rgba(0,0,0,0.7);
    transition:all 0.5s;
  }

  .detail .right ul li:hover .discript{
    bottom:0px;
  }


</style>

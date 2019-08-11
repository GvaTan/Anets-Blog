<template>
  <div class="detail">

    <div class="right">
      <ul>

<!--        <li>-->
<!--            <img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/821561898196397.jpg'" alt="">-->
<!--            <div>-->
<!--              <a href="#"><h2>ssssssssssss</h2></a>-->
<!--              <p>nisssssssssssssss</p>-->
<!--              <span>发布时间：2019-29-33</span>-->
<!--            </div>-->
<!--        </li>-->
<!--        <li>-->
<!--          <img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/821561898196397.jpg'" alt="">-->
<!--          <div>-->
<!--            <a href="#"><h2>ssssssssssss</h2></a>-->
<!--            <p>nisssssssssssssss</p>-->
<!--            <span>发布时间：2019-29-33</span>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li>-->
<!--          <img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/821561898196397.jpg'" alt="">-->
<!--          <div>-->
<!--            <a href="#"><h2>ssssssssssss</h2></a>-->
<!--            <p>nisssssssssssssss</p>-->
<!--            <span>发布时间：2019-29-33</span>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li>-->
<!--          <img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/821561898196397.jpg'" alt="">-->
<!--          <div>-->
<!--            <a href="#"><h2>ssssssssssss</h2></a>-->
<!--            <p>nisssssssssssssss</p>-->
<!--            <span>发布时间：2019-29-33</span>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href=""><img :src="'http://anets.cn/upload/wallpaper/thumbnail/821561898196397.jpg'" alt=""></a>-->
<!--          <div>-->
<!--            <a href="#"><h2>这是我的第一篇博客是我的第一篇博客-->
<!--              我发</h2></a>-->
<!--            <p>nisssssssssssssss</p>-->
<!--            <span>发布时间：2019-29-33</span>-->
<!--          </div>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href=""><img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/821561898196397.jpg'" alt=""></a>-->
<!--          <div>-->
<!--            <a href="#"><h2>ssssssssssss</h2></a>-->
<!--            <p>nisssssssssssssss</p>-->
<!--            <span>发布时间：2019-29-33</span>-->
<!--          </div>-->
<!--        </li>-->
        <li v-for="(item,index) in articles"  :key="index" v-if="articles.length>=1">

        <router-link :to="'/article/detail/'+item.shop_id+'.html'"><img :src="'http://anets.cn/upload/wallpaper/thumbnail/'+item.shop_img" alt=""></router-link>
        <div>
          <router-link :to="'/article/detail/'+item.shop_id+'.html'"><h2>{{item.shop_name}}</h2></router-link>
          <p>{{item.shop_discript}}</p>
          <span>发布时间：{{item.shop_time}}</span>
        </div>
        </li>
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
            showLeft:false
          }
        },
      created() {
          this.initData();

      }
      ,
    methods:{
      async initData(){
        let {data:s}=await getShops("","","","文章",'','','','');
        this.articles=s;
        console.log(s);
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
    padding-left: 0px;
    padding-top: 10px;
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .detail .right ul li{
    width:48%;
    margin-left: 1%;
    margin-top: 10px;
    height: 150px;
    display: flex;
    flex-direction: row;
  }
  .detail .right ul li a{

    cursor: pointer;
    display: flex;
    flex-direction: row;
    transition: all 0.7s;
    border: 1px solid rgba(238,10,69,0);
    border-radius: 5px;
  }

  .detail .right ul li img{
    border-radius: 5px;

  }
  .detail .right ul img:hover img{
    filter: contrast(120%);
  }
  .detail .right ul li div{
    width: 100%;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .detail .right ul li div a{
    margin-top: 0px;
    color: rgba(244,90,141,1);
  }
  .detail .right ul li div h2{
    font-size: 18px;
  }
  .detail .right ul li div p{
    margin-top: -10px;
   height: 80px;
    font-size: 15px;
    opacity: 0.8;
    overflow: hidden;
  }

  .detail .right ul li div  span{
    position: absolute;

    right: -70px;
   bottom: 10px;
    width: 230px;
  }
  .detail .right ul li img{

    width: 250px;
    height:150px;
  }


</style>

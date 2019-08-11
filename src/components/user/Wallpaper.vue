<template>
    <div class="detail">
        <div class="left" v-if="showLeft">
           <ul>
             <li>所有</li>
             <li>空间感</li>
             <li>朦胧感</li>
             <li>其它</li>
           </ul>
        </div>
         <div class="right">
           <ul>
             <li v-for="(item,index) in classifyImg" style="width: 100%;">
               <div class="imgs" v-if="item.classify==0">
                 <div class="one">
                   <div class="bgs">
                     <div class="mask">博主ID: {{item.data[0].shop_user_id}}&nbsp;&nbsp;|&nbsp;&nbsp;发布时间: {{item.data[0].shop_time}}</div>
                     <a :href="'http://anets.cn/upload/wallpaper/dist/'+item.data[0].shop_img" target="_blank"><img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/'+item.data[0].shop_img" alt=""></a>
                   </div>
                 </div>
                 <div class="two">
                   <div class="bgs">
                     <div class="mask">博主ID: {{item.data[1].shop_user_id}}&nbsp;&nbsp;|&nbsp;&nbsp;发布时间: {{item.data[1].shop_time}}</div>
                     <a :href="'http://anets.cn/upload/wallpaper/dist/'+item.data[1].shop_img" target="_blank"><img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/'+item.data[1].shop_img" alt="" width=""></a>
                   </div>
                   <div class="bgs">
                     <div class="mask">博主ID: {{item.data[2].shop_user_id}}&nbsp;&nbsp;|&nbsp;&nbsp;发布时间: {{item.data[2].shop_time}}</div>
                     <a :href="'http://anets.cn/upload/wallpaper/dist/'+item.data[2].shop_img" target="_blank"><img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/'+item.data[2].shop_img" alt=""></a>
                   </div>
                 </div>
                 <div class="two">
                   <div class="bgs">
                     <div class="mask">博主ID: {{item.data[3].shop_user_id}}&nbsp;&nbsp;|&nbsp;&nbsp;发布时间: {{item.data[3].shop_time}}</div>
                     <a :href="'http://anets.cn/upload/wallpaper/dist/'+item.data[3].shop_img" target="_blank"><img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/'+item.data[3].shop_img" alt="" width=""></a>
                   </div>
                   <div class="bgs">
                     <div class="mask">博主ID: {{item.data[4].shop_user_id}}&nbsp;&nbsp;|&nbsp;&nbsp;发布时间: {{item.data[4].shop_time}}</div>
                     <a :href="'http://anets.cn/upload/wallpaper/dist/'+item.data[4].shop_img" target="_blank"><img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/'+item.data[4].shop_img" alt=""></a>
                   </div>
                 </div>

               </div>



                            <div class="imgs" v-if="item.classify==1">

                              <div class="two">
                                <div class="bgs">
                                  <div class="mask">博主ID: {{item.data[0].shop_user_id}}&nbsp;&nbsp;|&nbsp;&nbsp;发布时间: {{item.data[0].shop_time}}</div>
                                  <a :href="'http://anets.cn/upload/wallpaper/dist/'+item.data[0].shop_img" target="_blank"><img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/'+item.data[0].shop_img" alt="" width=""></a>
                                </div>
                                <div class="bgs">
                                  <div class="mask">博主ID: {{item.data[1].shop_user_id}}&nbsp;&nbsp;|&nbsp;&nbsp;发布时间: {{item.data[1].shop_time}}</div>
                                  <a :href="'http://anets.cn/upload/wallpaper/dist/'+item.data[1].shop_img" target="_blank"><img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/'+item.data[1].shop_img" alt=""></a>
                                </div>
                              </div>
                              <div class="two">
                                <div class="bgs">
                                  <div class="mask">博主ID: {{item.data[2].shop_user_id}}&nbsp;&nbsp;|&nbsp;&nbsp;发布时间: {{item.data[2].shop_time}}</div>
                                  <a :href="'http://anets.cn/upload/wallpaper/dist/'+item.data[2].shop_img" target="_blank"><img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/'+item.data[2].shop_img" alt="" width=""></a>
                                </div>
                                <div class="bgs">
                                  <div class="mask">博主ID: {{item.data[3].shop_user_id}}&nbsp;&nbsp;|&nbsp;&nbsp;发布时间: {{item.data[3].shop_time}}</div>
                                  <a :href="'http://anets.cn/upload/wallpaper/dist/'+item.data[3].shop_img" target="_blank"><img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/'+item.data[3].shop_img" alt=""></a>
                                </div>
                              </div>
                              <div class="one">
                                <div class="bgs">
                                  <div class="mask">博主ID: {{item.data[4].shop_user_id}}&nbsp;&nbsp;|&nbsp;&nbsp;发布时间: {{item.data[4].shop_time}}</div>
                                  <a :href="'http://anets.cn/upload/wallpaper/dist/'+item.data[4].shop_img" target="_blank"><img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/'+item.data[4].shop_img" alt=""></a>
                                </div>
                              </div>
                            </div>

                            <div class="imgs" v-if="item.classify==2">

                              <div class="two">
                                <div class="bgs">
                                  <div class="mask">博主ID: {{item.data[0].shop_user_id}}&nbsp;&nbsp;|&nbsp;&nbsp;发布时间: {{item.data[0].shop_time}}</div>
                                  <a :href="'http://anets.cn/upload/wallpaper/dist/'+item.data[0].shop_img" target="_blank"><img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/'+item.data[0].shop_img" alt="" width=""></a>
                                </div>
                                <div class="bgs">
                                  <div class="mask">博主ID: {{item.data[1].shop_user_id}}&nbsp;&nbsp;|&nbsp;&nbsp;发布时间: {{item.data[1].shop_time}}</div>
                                  <a :href="'http://anets.cn/upload/wallpaper/dist/'+item.data[1].shop_img" target="_blank"><img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/'+item.data[1].shop_img" alt=""></a>
                                </div>
                              </div>
                              <div class="one">
                                <div class="bgs">
                                  <div class="mask">博主ID: {{item.data[2].shop_user_id}}&nbsp;&nbsp;|&nbsp;&nbsp;发布时间: {{item.data[2].shop_time}}</div>
                                  <a :href="'http://anets.cn/upload/wallpaper/dist/'+item.data[2].shop_img" target="_blank"><img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/'+item.data[2].shop_img" alt=""></a>
                                </div>
                              </div>
                              <div class="two">
                                <div class="bgs">
                                  <div class="mask">博主ID: {{item.data[3].shop_user_id}}&nbsp;&nbsp;|&nbsp;&nbsp;发布时间: {{item.data[3].shop_time}}</div>
                                  <a :href="'http://anets.cn/upload/wallpaper/dist/'+item.data[3].shop_img" target="_blank"><img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/'+item.data[3].shop_img" alt="" width=""></a>
                                </div>
                                <div class="bgs">
                                  <div class="mask">博主ID: {{item.data[4].shop_user_id}}&nbsp;&nbsp;|&nbsp;&nbsp;发布时间: {{item.data[4].shop_time}}</div>
                                  <a :href="'http://anets.cn/upload/wallpaper/dist/'+item.data[4].shop_img" target="_blank"><img v-lazy="'http://anets.cn/upload/wallpaper/thumbnail/'+item.data[4].shop_img" alt=""></a>
                                </div>
                              </div>

                            </div>
             </li>






           </ul>
         </div>
    </div>
</template>

<script>
  import {getShops} from "../../api/userapi";
   import  Masks from '../tool/Masks'
  export default {
        name: "Wallpaper",
      data(){
          return {
              img:null,
              classifyImg:[
              ],
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

    },
    components:{Masks},
    watch:{
          img:{
            handler(newval,oldval){

               if(newval!=null){
                 //外循环----每隔5个循环一次
                 for(let i=0;i<newval.length;i+=5){//每一次循环
                   let every={classify:0,data:[]};
                   //如果是前3行，那么类别为0,如果不是，随机生成
                   if(i>=newval.length-10){
                     every.classify=0;
                   }else{
                     let random= Math.round(Math.random()*4);
                     if(random==1){
                       every.classify=0;
                       }else if(random==2){
                       every.classify=1;
                       }else{//随机数等于0和3
                       every.classify=2;
                      }
                   }
                     let d=0;
                        for(let j=i;j<i+5;j++){

                          let allLen=newval.length;
                          //如果是i是最后一个，判断当前是否装到5，如果没有，那么一定要装满
                          if(i+5>allLen){//当前总数为2的话，0+5>2，那么只能装到2-0=2;也就是0，1，那么之后2，3，4都为空，空指针异常
                               let len=allLen-i;
                               if(j-i>=len){

                                 every.data.push({shop_img:newval[d++].shop_img});
                               }else{
                                 every.data.push(newval[j]);
                               }
                          }else{
                            every.data.push(newval[j]);
                          }
                          //每一列需要往classifyImg中的data添加数据
                        }

                      //每一行需要往classifyImg添加数据
                     this.classifyImg.unshift(every);
                 }




               }
            }
          }
    },
    methods:{
          async initData(userId){
            let {data:s}=await getShops("","","","壁纸",userId,'','','');
            this.img=s;
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
}

  .detail .left{
    width:250px;
  }

ul{
  list-style: none;
  padding-left: 0px;
  padding-top:0px;
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
  /*width: 100%;*/
}
  .imgs{
    width: 100%;
    /*background-color: red;*/
    display: flex;
    flex-direction: row;
  }

.imgs .two{
  width: 25%;
  display: flex;
  flex-direction: column;
}
.imgs .two .bgs{
  position: relative;overflow: hidden;
  width:100%;
  height: 50%;
  transition: all 0.5s;
}
.imgs .two .bgs:hover{
  box-shadow: 0px 0px 10px rgba(0,0,0,0.7);
}
.imgs .two .bgs img{
  width: 100%;
}
.imgs .one{
  width: 50%;
  height: 100%;

}
.imgs .one .bgs{
  transition: all 0.5s;
  position: relative;overflow: hidden;
}

.imgs .one .bgs:hover{
  box-shadow: 0px 0px 10px rgba(0,0,0,0.7);
}

.imgs .one img{
  width: 100%;
}
  .imgs img{
    transition: all 1s;
  }

.imgs img:hover{
  filter:contrast(140%);

}

.imgs .one .bgs:hover .mask{

  opacity: 0.7;
}
.imgs .two .bgs:hover .mask{

  opacity: 0.7;
}
 .mask{
   opacity: 0;
  position: absolute;
  z-index: 999;
  transition: all 1s;
   right:0px;
  /*width: 30%;*/

   border-left: 5px solid rgba(244,90,141,1);
   bottom: 0px;
   color: white;
   font-size: 10px;
   padding: 0.5% 2%;

  /* background-color: rgba(0,0,0,0.7); */
  background-image: -webkit-linear-gradient(right, rgba(0,0, 0, 0) 20%, rgba(0,0, 0, 0.9) 100%);
  background-image: -moz-linear-gradient(right, rgba(0,0, 0, 0) 0%, rgba(0,0, 0, 0.9) 100%);
  background-image: -o-linear-gradient(right, rgba(0,0, 0, 0) 0%, rgba(0,0, 0, 0.9) 100%);
  background-image: linear-gradient(right, rgba(0,0, 0, 0) 0%, rgba(0,0, 0, 0.9) 100%);
}

</style>

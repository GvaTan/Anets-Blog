<template>
    <div class="all">
      <div>
         <div class="content">
             <div class="header">

             </div>
             <div class="nav">
                  <ul>
                    <li><i class="iconfont icon-shouye1" style="color:rgba(244,90,141,1)"></i>主网</li>
                    <li><i class="iconfont icon-tubiaozhizuomoban-" style="color:rgba(244,90,141,1)"></i>动态</li>
                    <li><i class="iconfont icon-wenzhang2" style="color:rgba(244,90,141,1)"></i>文章</li>
                    <li><i class="iconfont icon-huanbeijing" style="color:rgba(244,90,141,1)"></i>壁纸</li>
                    <li><i class="iconfont icon-xiazai" style="color:rgba(244,90,141,1)"></i>下载</li>
                    <li><i class="iconfont icon-44" style="color:rgba(244,90,141,1)"></i>记事（私有）</li>
                  </ul>
             </div>
             <div class="detail">
                 <router-view/>
             </div>
         </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "User"
    }
</script>

<style scoped>
.all{
  width: 100%;
  background-color: rgba(244,255,247,1);
}

  .all .content{
    width: 1280px;
    height: 800px;
    margin:auto;
    /*background-color: red;*/
  }

  .all .content .header{
    width: 100%;
    height: 200px;
    background: url("https://i0.hdslb.com/bfs/space/cb1c3ef50e22b6096fde67febe863494caefebad.png");
  }

.all .content .nav{
  width: 100%;
  height: 66px;
  background-color: rgba(255,255,255,1);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0px 0px 2px rgba(0,0,0,0.2);
  align-items: center;
  justify-content: space-around;
}

.all .content .nav ul{
  display: flex;
  flex-direction: row;
  list-style: none;
  padding-left: 0px;
  height: 100%;
}

.all .content .nav ul li{
  height:66px;
  line-height: 66px;
  font-size: 15px;
  margin-left: 15px;
  padding-left: 5px;
  padding-right: 5px;
}

.all .content  .detail{
  width: 100%;
  height: 500px;
  background-color: rgba(255,255,255,1);
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: row;
}


</style>

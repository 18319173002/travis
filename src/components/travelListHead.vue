<template>
  <div class="travek-list-head">
      <div class="head-left">
          <i class="icon">&#xe678;</i>
          <span>{{title}}</span>
      </div>
      <div class="head-right">
         <router-link :to="{name:route}">
             <i class="icon">&#xe7a7;</i>
         </router-link>
      </div>
  </div>
</template>
<script>
export default {
  props:{
      title:String,     
      route:String
  }
}
</script>
<style lang='scss' >
  @import '../assets/css/function'; 
    .travek-list-head{
        padding: 0  px2rem(20px);
        overflow: hidden;
        background: #fff;   
        height: px2rem(80px);
        line-height: px2rem(80px);  
         .head-left{
             float: left;
             span{
                 font-size: 13px;
                 padding-left: px2rem(20px);         
             }
             .icon{
                 color: red;
             }
         }
         .head-right{
             float: right;;
             .icon{
                 color: #000;
             }
         }
    }
</style>


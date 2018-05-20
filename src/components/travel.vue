<template>
  <div class="travel">
      <router-link :to='{name:travel,params: { userId: id }}'>
          <div class="A-cimg">
              <img src="" alt="">
              <span class="i-activity p-free">免费</span>
              <span class="i-activity p-number">0人报名</span>
              <span class="i-activity p-report">正在报名</span>

          </div>
          <div class="A-info">
              <div>
                  <span class="title">庐山游</span>
                  <span class="see"><i class="icon">&#xe62a;</i>3435</span>
              </div>
              <div>
                  <span class="username">哈哈</span>
                  <span class="time">2017-02-28 13:37:50</span>
              </div>
          </div>
      </router-link>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang='scss'>
  @import '../assets/css/function';
    .travel{
        border-top: 1px solid #eee;
        background: #fff;
        padding:px2rem(10px);
        a{
            display: block;
            
        }
        .A-cimg{
            position: relative;
            min-height: px2rem(60px);
            img{
                width: 4rem;
                max-height: 4rem;
             
            }

            .i-activity{
                font-size:16px;
                color: #fff;
                background: rgba(0,0,0,.37);
                padding:px2rem(8px);
                position: absolute;
                top:px2rem(12px);
            }
            .p-free{
                left: .4rem;
                 border-radius: 4px;
                 background: rgba(4,255,4,.48)!important;
                 display: block;
            }
            .p-number{
                right: 0;
                border-radius: 10px 0 10px;
            }
            .p-report{
                left: 1.5rem;
                background: rgba(0,125,255,.48)!important;
                padding:px2rem(10px) px2rem(13px);
                top:px2rem(10px);
            }
        }
        .A-info{
            margin-top:10px;
            .title{
                font-size:16px;
                height:px2rem(50px);
                line-height:px2rem(50px);
                padding-left:px2rem(20px);
            }
            .see{
               font-size:14px;
                height:px2rem(50px);
                line-height:px2rem(50px);
                padding-left:px2rem(20px);
                float:right;
            }
            .username{
                font-size:15px;
                 padding-left:px2rem(20px);
                height:px2rem(50px);
                line-height:px2rem(50px);
            }
            .time{
                   font-size:15px;
                 padding-left:px2rem(20px);
               height:px2rem(50px);
                line-height:px2rem(50px);
            }
        }
    }
</style>


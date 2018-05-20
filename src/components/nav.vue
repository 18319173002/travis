<template>
  <div class="y_nav">
      <div class="y_nav-h">
         	<img src="../assets/images/homepage_man.png" alt="">年轻哪能不放纵，约起来
      </div>
      <ul class="y_nav_list">
          <li>
              <router-link to='user/regist'>
                  <i class="icon">&#xe733;</i>
                  <span>新用户</span>
              </router-link>
          </li>
           <li>
              <router-link to='user/navbar'>
                  	<i class="icon">&#xe666;</i>
                  <span>我的约跑</span>
              </router-link>
          </li>
           <li>
              <router-link to='user/navbar'>
                	<i class="icon">&#xe6bd;</i>
                  <span>我的约行</span>
              </router-link>
          </li>
           <li>
              <router-link to='user/post'>
                  <i class="icon">&#xe63c;</i>
                  <span>去发布</span>
              </router-link>
          </li>
      </ul>
  </div>
</template>
<script>
    export default {
    
    }
</script>
<style lang='scss'>
@import '../assets/css/function';
    .y_nav{
      padding-bottom: px2rem(24px);
       margin-bottom: px2rem(18px);
        background: #fff;
        .y_nav-h{
            img{
               width:  px2rem(64px);          
               height: px2rem(64px);   
               vertical-align: middle; 
            }
            text-align: center;
            width:  px2rem(350px);
            margin: 0 auto;
            height: px2rem(64px);
            padding: 5px 0 3px;
            border-bottom: 1px solid #000; 
        }
        .y_nav_list{
            margin-top: px2rem(16px);
            width: 100%;
            display: flex;
            li{
                flex:1;
                text-align: center;
                .icon{
                    
                    display: block;
                    width: px2rem(108px);
                    height:px2rem(108px);
                    line-height:px2rem(108px); 
                    background: #2ad2c9;
                    border-radius: 45%;
                    margin: 0 auto;
                    text-align: center;
                }
                span{
                    margin-top:5px;
                    display:inline-block;
                    font-size: 13px;
                }
            }
        }
    }
</style>


<template>
    <div class="sidebar">
      <div class="sidebar-con" :class="{showbar:showbar}">
        <div class="sidebar_head" v-if="loginStatus">
            <div class="user">
                <img src="" alt=""/>>
                <span>asas</span>
            </div>
            <div class="function">
                <div class="function_sub">
                  <router-link to='/b'>
                    <i class="icon">&#xe626;</i>
                    <span>我的参加</span>
                  </router-link>
                </div>
                <div class="function_sub">
                  <a href="javascrpit:voide(0)" @click="logout">
                    <i class="icon">&#xe674;</i>
                    <span>退出登录</span>
                  </a>
                </div>
           </div>
        </div>
        <div class="sidebar_head" v-else>
          <div class="user">
            <span>请登录</span>
          </div>
          <div class="function">
              <div class="function_sub">
                <router-link to='/a'>
                  <i class="icon">&#xe626;</i>
                  <span>我的参加</span>
                </router-link>
              </div>
              <div class="function_sub">
                <router-link to='user/login'  @click="hidebar">
                  <i class="icon">&#xe601;</i>
                  <span>去登录</span>
                </router-link>
              </div>
          </div> 
        </div>
        <div class="sidebar_list">
          <div class="sidebar_list_first">
            <router-link to='/home'>
              <i class="icon" style="color: #76D49B; font-size: 20px;">&#xe60a;</i>
              <span>首页</span>
            </router-link>
          </div>
          <ul class="sidebar_list_ul">
            <li>
              <router-link to=''>
                我的约行
                <span>+</span>
              </router-link>
            </li>
            <li>
              <router-link to=''>
                我的约跑
                <span>+</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar-mask" v-show='showbar' @click="hidebar"></div>
    </div>
</template>
<script>
    export default {
      data(){
          return{
             loginStatus:false
          }
      },
      computed:{
        showbar(){
           return this.$store.state.com.lefNavStatus
        }
      },
      methods:{
        hidebar(){
          this.$store.dispatch('setNavState',false)
        },
        logout(){

        }
      }
    }
</script>
<style lang="scss">
  @import '../assets/css/function';
  .sidebar{
    background: #fff;
    .sidebar-con{
      width: 8rem;
      height: 100%;
      position: fixed;
      left: -8rem;
      top:0px;
      bottom: 0px;
      z-index: 1002;
      background: #fff;
      overflow: auto;
      transform: translateZ(0);
      transition: all .5s ease;
      .sidebar_head{
        padding: px2rem(30px) px2rem(40px) 0;
        background: #76d49b;
        color: #fff;
        .user{
          font-size: px2rem(42px);
          padding-left: px2rem(20px);
          color: #fff;
        }
        .function{
          display: flex;
          height: px2rem(100px);
          line-height:px2rem(100px); 
          margin-top: px2rem(20px);
          .function_sub{
              flex: 1;
              margin-left:px2rem(20px);
              a{
                display: block;
                .icon{
                  vertical-align: middle
                }
                span{
                  color: #fff;
                  font-size:px2rem(25px);
                  vertical-align: middle
                }
              }
          }
        }
        
      }
      .sidebar_list{
        .sidebar_list_first{
          height: px2rem(102px);
          line-height:px2rem(102px);
          padding-left:px2rem(40px);  
          img{
             height: px2rem(100px);
             width: px2rem(100px);
             display:block;
             border-radius: 50%;
          }
          a{
             display: block
          }
          span{
            font-size: px2rem(38px);
          }  
         }
        }
        .sidebar_list_ul{
          li{
          height: px2rem(98px);
          line-height:px2rem(98px);
          padding-left:px2rem(36px);
          font-size: px2rem(28px);  
          span{
             float: right;;
             font-size: px2rem(42px);
             margin-right: px2rem(20px); 
           }
          }
        }
    }
    .showbar{
      transform: translateX(8rem);
    }
    .sidebar-mask{
      background: rgba(0,0,0,0.7);
      height: 100%;
      position: fixed;
      left: 0;
      top:0px;
      bottom: 0px;
      width: 100%;
      z-index: 1001;
    }
  }

</style>

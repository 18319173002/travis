<template>
    <div class="tabar" v-show="showTabar">
        <div class="tab">
            <div class="tab-item">
                <router-link :to="{name:'home'}">
                    <div class="tab-icon"><img src="../assets/images/tab_home.png" alt=""></div>
                    <div class="tab-text">首页</div>
                </router-link>
            </div>
            <div class="tab-item">
                <router-link :to="{name:'sport'}">
                    <div class="tab-icon"><img src="../assets/images/tab_running.png" alt=""></div>
                    <div class="tab-text">约跑</div>
                </router-link>
            </div>
            <div class="tab-item">
                <router-link :to="{name:'travel'}">
                    <div class="tab-icon"><img src="../assets/images/tab_travel.png" alt=""></div>
                    <div class="tab-text">约行</div>
                </router-link>
            </div>
            <div class="tab-item">
                <router-link :to="{name:'user'}">
                    <div class="tab-icon"><img src="../assets/images/tab_user.png" alt=""></div>
                    <div class="tab-text">我的</div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        computed:{
            showTabar(){
                return this.$route.path.split('/').length>2? false :true
            }
        }
    }
</script>
<style lang="scss">
  @import '../assets/css/function';
  .tabar{
      background: #fff;
      .tab{
          background: #fff;
            width: 100%;
            height: px2rem(120px);
            line-height: px2rem(120px);
            position: fixed;
            bottom: 0;  
            left: 0;
            display: flex;
            box-shadow: 0 0 3px rgba(0,0,0,.2);
        .tab-item{
            flex:1;
            text-align: center;
            a{
                display: block;
            }
            a.active{
              color: #76d49b;
              text-decoration: none;
        }
            .tab-icon{
                width: px2rem(50px);
                height: px2rem(50px);
                margin: 0 auto;
                img{
                    width: 100%;
                }
            }
            .tab-text{
                height: px2rem(80px);
                line-height:px2rem(80px);
                font-size: 14px; 
            }

        }

      }
  }
</style>

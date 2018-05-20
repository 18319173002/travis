<template>
  <div id="app">
   <v-headr :title='title' :back-display='backDisplay' :menu-display='menuDisplay' :map-display='mapDisplay' ></v-headr>
        <div class="content"  >
            <transition name="slide-left">
                <router-view></router-view>
            </transition>  
        </div>
   <v-tabar></v-tabar>
   <v-sidebar></v-sidebar>
  </div>
</template>

<script>
import header from '../src/components/header' 
import tabar from '../src/components/tabar' 
import sidebar from '../src/components/sidebar'
export default {
  name: 'App',
  computed:{
    title(){
      switch(this.$route.path.split('/')[1]){
        case '': return 'Qu约' ;
        case 'home':return 'Qu约';
        case 'sport':return '约跑';
        case 'travel':return '约行';
        case 'user':return '我的';
      }
    },
    backDisplay(){
      return this.$route.path.split('/').length>2? true:false
    },
    menuDisplay(){
      return (this.$route.path.split('/')[1]!=='home'&&this.$route.path.split('/').length<=2)? true:false
    },
    mapDisplay(){
      return this.$route.path.split('/')[1]=='home'? true:false
    }
  },
  components:{
    'v-headr':header,
    'v-tabar':tabar,
    'v-sidebar':sidebar
  },
  created(){
    console.log(this.$route.path.split('/').length>2)
  }
}
</script>
<style lang='scss'>
  @import "../static/reset";
  @font-face {
    font-family: 'icon';  /* project id 172436 */
    src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot');
    src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_w71lovnj7adobt9.woff') format('woff'),
    url('//at.alicdn.com/t/font_w71lovnj7adobt9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_w71lovnj7adobt9.svg#iconfont') format('svg');
  }
  body,html{
    height: 100%;
    background: #eee;
  }
  .icon {
    font-family:"icon" !important;
    font-size:18px;
    font-style:normal;
    color: #ffffff;
  }


</style>

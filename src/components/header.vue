<template>
    <div class="header">
      <div class="header-icon" v-show="backDisplay" @click="goBack"><i class="icon">&#xe622;</i></div>
      <div class="header-cont"><p>{{title}}</p></div>
      <div class="header-icon" v-show="menuDisplay" @click="showBar"><i class="icon">&#xe634;</i></div>
      <div class="header-icon" v-show="mapDisplay" @click="getMap"><i class="icon map-icon">&#xe600;</i></div>
    </div>
</template>

<script>
    export default {
        props:{
          title:{type:String},
          backDisplay:{type:Boolean},
          mapDisplay:{type:Boolean},
          menuDisplay:{type:Boolean}
        },
        methods:{
          goBack(){
            window.history.back()
          },
          showBar() {
            this.$store.dispatch('setNavState',true)
          },
          getMap() {
            alert('開發中')
          }
        }
    }
</script>

<style lang="scss">
  @import '../assets/css/function';
  .header{
    width: 100%;  
    background: #76d49b;
     height: px2rem(100px);
     display: block;
     line-height:  px2rem(100px);
     display: flex;
     .header-icon{
       flex: 1;
       text-align: center;
        .icon{
           font-size: 23px;
        }
     }
     .header-cont{
       flex:6;
       color: #fff;
        font-size: 18px;
        padding-left: px2rem(40px);
     }
  }
</style>

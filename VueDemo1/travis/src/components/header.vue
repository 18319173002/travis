<template>
    <div class="header">
      <div class="header-icon" v-show="backDisplay" @click="goBack"><i class="icon">&#xe622</i></div>
      <div class="header-icon"><p>{{title}}</p></div>
      <div class="header-icon" v-show="menuDisplay" @click="showBar"><i class="icon">&#xe634</i></div>
      <div class="header-icon" v-show="mapDisplay" @click="getMap"><i class="icon map-icon"></i></div>
    </div>
</template>

<script>
    export default {
        name: "header",
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

</style>

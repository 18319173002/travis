<template>
  <div class="travel-list">
      <travel-list-head title="热门活动" route='travel'></travel-list-head>
    <travel v-for="(item,index) in travelLists" :travel='item' :key='index'></travel>
  </div>
</template>     
<script>

import travelListHead from '../components/travelListHead'
import travel from '../components/travel'
export default {
    components:{
        travelListHead,
        travel
    }
}
</script>

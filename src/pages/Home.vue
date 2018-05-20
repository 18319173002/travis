<template>
    <div class="home">
        <div class="banner" >
            <swiper :options='swiperOption' class="swiper-box" ref="mySwiper">
                <swiper-slide class="swiper-item"><img src="../assets/images/y-banner01.jpg" alt="..."></swiper-slide>
                <swiper-slide class="swiper-item"><img src="../assets/images/y-banner03.jpg" alt="..."></swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
		<v-nav></v-nav>
		<travel-list></travel-list>
    </div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import nav from '@/components/nav'
	import travelList from '@/components/travelList'
    export default {
        name: "home",
        data(){
            return{
                swiperOption:{
				notNextTick: true,
				slidesPerView: 1,
				autoplay:{
					 disableOnInteraction: false,
   					 delay:3000
				},
				pagination :{
					el: '.swiper-pagination',
					clickable:true
				},
				spaceBetween: 0,
				loop: true,
				speed:500	

                }
            }
        },
        components:{	
          swiper,
		  swiperSlide,
		  'v-nav':nav,
		   travelList
		},
		computed: {
			mySwiper() {
				return this.$refs.mySwiper.swiper
			}		
		}
	}
</script>

<style scoped lang='scss'>
@import '../assets/css/function';       
.banner {
	.swiper-box {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		.swiper-item {
			height: px2rem(380px);
			text-align: center;
			font-size: 18px ;
			background: #fff;
			display: flex;
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
			align-items: center;
			img {
				width: 100%;
			}
		}
		.swiper-pagination{
			width: 100%;
			height: 20px;
			bottom: 0px;
		}
	}
}

</style>

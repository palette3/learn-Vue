<template>
	<div class="heart" @click="changestate">
		<span><slot name="to"></slot></span>
		<img :src="state?heartselpng:heartnormalpng" alt="">
		<span>{{state?"点赞":"取消"}}</span>
	</div>
</template>

<script>
	export default{
		props:{
			stateprop:{
				required:true,
				type:Boolean
			}
		},
		creatad(){
			this.state=this.stateprop;
		},
		data(){
			return{
				state:true,
				heartselpng:require("../assets/heart/heart.png"),
				heartnormalpng:require("../assets/heart/heartsel.png")
			}
		},
		methods:{
			changestate(){
				this.state=!this.state,
				this.$emit("tellparent",{"state":this.state})
			}
		},
	}
</script>

<style lang="less">
	.heart{
		display: inline-black;
		img{
			vertical-align: -10px;
		}
	}
</style>

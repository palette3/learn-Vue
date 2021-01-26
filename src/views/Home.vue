<template>
<div class="home">
	<img alt="Vue logo" src="../assets/logo.png">
	<HelloWorld msg="Welcome to Your Vue.js App"/>
	<HeiWorld></HeiWorld>
	<div>
		<h1>使用全局组件</h1>
		<HiWorld msg="19:21:00" :num=10 @toparent="method1"></HiWorld>
	</div>
</div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeiWorld from '@/components/HeiWorld.vue'

export default {
	name: 'Home',
	components: {
	HelloWorld,
	HeiWorld,
	},
	methods:{
		method1(e){
			console.log("Home页面收到数据",e)
		}
	},
}
</script>

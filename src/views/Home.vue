<template>
	<div class="home">
	<img alt="Vue logo" src="../assets/logo.png">
	<HelloWorld msg="Welcome to Your Vue.js App"/>
	<HeiWorld></HeiWorld>
	<HiWorld></HiWorld>
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
	}
}
</script>

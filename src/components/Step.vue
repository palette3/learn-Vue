<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
		<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
	<div id="app">
		<button @click="reduce">-</button>
		<span>{{num}}</span>
		<button @click="add">+</button>
	</div>
<script type="text/javascript">
	export default{
		name:"Step111",
		data(){
			return{
				num
			}
		},
		beforeCreate() {
			console.log("组件创建之前");
		},
		created() {
			console.log("组件创建");
		},
		beforeMount() {
			console.log("");
		},
		mounted() {
			console.log("");
		},
		beforeUpdate() {
			console.log("");
		},
		updated() {
			console.log("");
				
	}
</script>
</body>
</html>


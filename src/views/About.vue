<template>
  <div class="about">
    <div>
		<h2>点击计数案例</h2>
		<p>
			<button @click="reduce">-</button>
			<span>{{num}}</span>
			<button @click="add">+</button>
		</p>
		<p>
			<button @click="num2down">-</button>
			<span>{{num2}}</span>
			<button @click="num2up">+</button>
		</p>
	</div>
	<div>
		<br>
		<h1>使用方法：<span>{{normal()}}</span></h1>
	</div>
	<div>
		<br>
		<h1>使用方法：<span>{{comput1}}</span></h1>
	</div>
	
  </div>
</template>


<script>
	export default{
		data(){
			return{
				num:0,
				num2:0
			}
		},
		methods:{
			normal(){
				console.log("普通方法执行了");
				return"普通方法"
			},
			reduce(){
				this.num--;
			},
			add(){
				this.num++;
			},
			num2down(){
				this.num2--;
			},
			num2up(){
				this.num2++;
			}
		},
		computed:{
			comput1(){
				console.log("计算属性执行了");
				return"计算属性"+this.num
			}
		},
		watch:{
			num(newValue,oldValue){
				console.log("监听到num变化了",newValue,oldValue)
			}
		}
		
	}
</script>

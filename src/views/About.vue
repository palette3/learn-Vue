<template>
	<div class="about">
		<el-container>
			<el-header>
				<i class="el-icon-video-pause"></i>
				<i class="el-icon-video-play"></i>
				<i class="el-icon-switch-button"></i>
				<el-button type="success" icon="el-icon-search">搜索</el-button>
			</el-header>
			<el-container>
				<el-aside width="200px">
					<el-slider v-model="value2" vertical height="200px"></el-slider>
				</el-aside>
				<el-main>
					<el-row>
						<el-button plain>朴素按钮</el-button>
						<el-button type="primary" plain>主要按钮</el-button>
						<el-button type="success" plain>成功按钮</el-button>
						<el-button type="info" plain>信息按钮</el-button>
						<el-button type="warning" plain>警告按钮</el-button>
						<el-button type="danger" plain>危险按钮</el-button>
						<br>
						<el-button type="primary" icon="el-icon-edit" circle></el-button>
						<el-button type="success" icon="el-icon-check" circle></el-button>
						<el-button type="info" icon="el-icon-message" circle></el-button>
						<el-button type="warning" icon="el-icon-star-off" circle></el-button>
						<el-button type="danger" icon="el-icon-delete" circle></el-button>
					</el-row>
					<el-switch v-model="value1" active-text="按月付费" inactive-text="按年付费"></el-switch>
				</el-main>
			</el-container>
			<el-footer>
				<div>
					<el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
					<el-link type="primary">主要链接</el-link>
					<el-link type="success">成功链接</el-link>
					<el-link type="warning">警告链接</el-link>
					<el-link type="danger">危险链接</el-link>
					<el-link type="info">信息链接</el-link>
				</div>
			</el-footer>
		</el-container>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				radio: '1',
				input: '',
				num: 1,
				options: [],
				value1: true,
				value2: 0,
			}
		}
	}
</script>




<style>
	.el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}

	.el-header,
	.el-footer {
		background-color: #F56C6C;
		color: #333;
		text-align: center;
		line-height: 60px;
		border-radius: 4px;
	}

	.el-aside {
		background-color: #67C23A;
		color: #333;
		text-align: center;
		line-height: 200px;
		border-radius: 4px;
	}

	.el-main {
		background-color: #E6A23C;
		color: #333;
		text-align: center;
		line-height: 160px;
		border-radius: 4px;
	}

	body>.el-container {
		margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>

<template>
	<div class="box">
		<div :class="toggleTop ? 'triangle-top' : 'triangle-bottom' "></div>
	</div>

</template>

<script type="text/javascript">
	export default{
	  props: ['toggleTop']
	};
</script>

<style  type="text/css" lang="less">
.box{
	display: inline-block;
	div{
		height:0;
		width:0;
		border:4px solid;
	}
	.triangle-bottom{
		border-color:  transparent transparent rgba(131, 134, 143, 0.6) transparent;
		position: relative;
		bottom: 2px;
	 }
	.triangle-top{
		border-color: #83868f transparent transparent transparent;
		position: relative;
		top: 2px;
		// transform: rotate(180deg);
		transition: transform 0.4s;
	}
}

</style>
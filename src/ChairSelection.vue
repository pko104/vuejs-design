<template>
	<div class="col-6 select-item-section" id="chair-selection-section" v-show="tab === 1">
		<h3 class="selection-title">Chair</h3>
		<div class="row">
		    <img alt="Mid-Century Upholstered Dining Chair - Metal Legs" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201941/0009/mid-century-upholstered-dining-chair-metal-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Mid-Century Upholstered Dining Chair - Wooden Legs" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0571/mid-century-upholstered-dining-chair-pecan-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Framework Upholstered Dining Chair" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201941/0010/framework-upholstered-dining-chair-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div>
		<div class="row">
		    <img alt="Orb Upholstered Dining Chair" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0631/orb-upholstered-dining-chair-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Slope Upholstered Dining Chair" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0491/slope-upholstered-dining-chair-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Crest Bentwood Dining Chair" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0340/crest-bentwood-chair-with-walnut-veneer-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div>
		<div class="row">
		    <img alt="Lenox Dining Chair" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201941/0026/lenox-velvet-dining-chair-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="TMid-Century Leather Dining Chair - Saddle/Blackened Brass" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0525/mid-century-leather-dining-chair-saddle-blackened-brass-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Framework Leather Dining Chair - Saddle" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0396/framework-leather-dining-chair-saddle-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div>
		<div class="row">
		    <img alt="Ellis Upholstered Dining Chair" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0474/ellis-upholstered-dining-chair-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Rustic Dining Chair" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0551/rustic-dining-chair-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Finley High-Back Upholstered Dining Chair" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0298/finley-high-back-upholstered-dining-chair-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div>
		<div class="row">
		    <img alt="Ellis Upholstered Dining Armchair" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0429/ellis-upholstered-dining-armchair-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Classic Café Dining Chair" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0368/classic-cafe-dining-chair-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Lila Upholstered Dining Chair" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0606/lila-upholstered-dining-chair-o.jpg"class="col-4 selection-item" @click=" copySrc">
		</div> 
	</div>

</template>

<script>
	export default {
		props:['tab'],
      	methods: {
			copySrc: function(img){
			    this.src = img.srcElement.src;
			    var width = window.innerWidth/2 -15;
			    var height = window.innerHeight;

			    console.log
			    var stage = new Konva.Stage({
			        container: 'canvas-container2',
			        width: width,
			        height: height
			      	});

			    var layer = new Konva.Layer();
			      	stage.add(layer);

		      // main API:
		      	var imageObj2 = new Image();
		      		imageObj2.onload = function() {
		        	var vader = new Konva.Image({
		          	x: 0,
		          	y: 225,
		          	image: imageObj2,
		          	scaleX: 0.225,
		          	scaleY: 0.225
		        	});
		        	var notvader = new Konva.Image({
		          	x: 430,
		          	y: 225,
		          	image: imageObj2,
		          	scaleX: 0.225,
		          	scaleY: 0.225
		        	});


		        // add the shape to the layer
		        	layer.add(vader);
		        	layer.add(notvader);
		        	layer.batchDraw();
		      	};
      			imageObj2.src = this.src;
  			}
		}
	}
  
</script>
<style>

.selection-title{
	color: #777;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-align:center;
    font-weight:300;
    font-size:25px;
 }

.selection-item{
	padding:15px;
}

.selection-item:hover{
	padding:0px;

	border-right:  3px inset #d2c0c4;
	border-bottom: 3px inset #e6dada;
	border-radius: 13px 17px 19px 20px;
}

.selection-item:after {
    content: "";
    display: block;
    border-bottom: 1px solid blue;
}

</style>

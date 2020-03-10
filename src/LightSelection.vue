<template>
	<div class="col-6 select-item-section" id="light-selection-section" v-show="tab === 2">
		<h3 class="selection-title">Light Fixture</h3>
		<div class="row">
			<img alt="Fabric Shade Drum Flushmount" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0479/fabric-shade-drum-flushmount-16-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Glass Cylinder Chandelier" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0641/glass-cylinder-chandelier-34-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Sphere & Stem 6-Light Chandelier - Milk" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0609/sphere-stem-6-light-chandelier-milk-36-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div>
		<div class="row">
		    <img alt="Staggered Glass 6-Light Chandelier - Milk" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/staggered-glass-6-light-chandelier-milk-37-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Sculptural Glass 5-Light Globe Chandelier - Clear" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0482/sculptural-glass-5-light-globe-chandelier-clear-37-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Staggered Glass 5-Light Flushmount - Milk" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0486/staggered-glass-5-light-flushmount-milk-17-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div>
		<div class="row">
		    <img alt="Sculptural Glass Faceted Flushmount - Milk" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201941/0025/sculptural-glass-faceted-flushmount-milk-7-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Sculptural Glass Faceted Pendant - Clear" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0668/img70o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Perforated Single LED Chandelier" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0611/perforated-single-led-chandelier-35-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div>
		<div class="row">
		    <img alt="Champignon 6-Light Chandelier" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0347/champignon-6-light-chandelier-38-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Curvilinear Mid-Century Chandelier" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0497/curvilinear-mid-century-chandelier-55-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Champignon 5-Light Flushmount" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0363/champignon-5-light-flushmount-236-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div>
		<div class="row">
		    <img alt="Floral Burst Chandelier" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0333/floral-burst-chandelier-20-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Sculptural Glass Faceted Pendant - Milk" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0460/sculptural-glass-faceted-pendant-milk-7-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Sculptural Glass 5-Light Globe Chandelier - Milk" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201941/0006/sculptural-glass-5-light-globe-chandelier-milk-37-o.jpg"class="col-4 selection-item" @click=" copySrc">
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
			        container: 'canvas-container3',
			        width: width,
			        height: height
			      	});

			    var layer = new Konva.Layer();
			      	stage.add(layer);

		      // main API:
		      	var imageObj3 = new Image();
		      		imageObj3.onload = function() {
		        	var vader = new Konva.Image({
		          	x: 230,
		          	y: 10,
		          	image: imageObj3,
		          	scaleX: 0.2,
		          	scaleY: 0.2
		        	});

		        // add the shape to the layer
		        	layer.add(vader);
		        	layer.batchDraw();
		      	};
      			imageObj3.src = this.src;
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

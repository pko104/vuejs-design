<template>
	<div class="col-6" id="selection-section">
		<h3 class="selection-title">Table</h3>
		<div class="row">
		    <img alt="Mid-Century Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/mid-century-expandable-dining-table-walnut-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Mid-Century Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/mid-century-expandable-dining-table-walnut-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Mid-Century Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/mid-century-expandable-dining-table-walnut-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div>
		<div class="row">
		    <img alt="Mid-Century Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/mid-century-expandable-dining-table-walnut-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Mid-Century Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/mid-century-expandable-dining-table-walnut-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Mid-Century Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/mid-century-expandable-dining-table-walnut-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div>
		<div class="row">
		    <img alt="Mid-Century Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/mid-century-expandable-dining-table-walnut-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Mid-Century Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/mid-century-expandable-dining-table-walnut-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Mid-Century Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/mid-century-expandable-dining-table-walnut-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div>
		<div class="row">
		    <img alt="Mid-Century Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/mid-century-expandable-dining-table-walnut-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Mid-Century Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/mid-century-expandable-dining-table-walnut-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Mid-Century Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/mid-century-expandable-dining-table-walnut-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div>
		<div class="row">
		    <img alt="Mid-Century Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/mid-century-expandable-dining-table-walnut-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Mid-Century Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/mid-century-expandable-dining-table-walnut-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Mid-Century Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/mid-century-expandable-dining-table-walnut-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div> 
	</div>      

</template>

<script>
	export default {
      	methods: {
			copySrc: function(img){
			    this.src = img.srcElement.src;
			    var width = window.innerWidth;
			    var height = window.innerHeight;

			    var stage = new Konva.Stage({
			        container: 'canvas-container',
			        width: width,
			        height: height
			      	});

			    var layer = new Konva.Layer();
			      	stage.add(layer);

		      // main API:
		      	var imageObj = new Image();
		      		imageObj.onload = function() {
		        	var yoda = new Konva.Image({
		          	x: 50,
		          	y: 50,
		          	image: imageObj,
		          	scaleX: 0.5,
		          	scaleY: 0.5
		        });

		        // add the shape to the layer
		        	layer.add(yoda);
		        	layer.batchDraw();
		      	};
      		imageObj.src = this.src;
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


#selection-section{
	padding:25px;
	background:#e3e3e5
}
</style>

<template>
	<div class="col-6 select-item-section" id="selection-section" v-show="tab === 0">
		<h3 class="selection-title">Table</h3>
		<div class="row">
		    <img alt="Mid-Century Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0530/mid-century-expandable-dining-table-walnut-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Anton Solid Wood Dining Table" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0332/anton-solid-wood-dining-table-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Mid-Century Round Expandable Dining Table" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201951/0029/mid-century-round-expandable-dining-table-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div>
		<div class="row">
		    <img alt="Box Frame Drop Leaf Expandable Table" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0599/box-frame-drop-leaf-expandable-table-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Emmerson® Reclaimed Wood Dining Table - Stone Gray" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0464/emmerson-reclaimed-wood-dining-table-stone-gray-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Jensen Dining Table" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0524/jensen-dining-table-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div>
		<div class="row">
		    <img alt="Anderson Solid Wood Expandable Dining Table - Caramel" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0555/anderson-solid-wood-expandable-dining-table-caramel-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Tower Dining Table - Concrete" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0378/tower-dining-table-concrete-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Anderson Solid Wood Expandable Dining Table - Carob" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0494/anderson-solid-wood-expandable-dining-table-carob-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div>
		<div class="row">
		    <img alt="Jules Drop Leaf Expandable Dining Table" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0462/jules-drop-leaf-expandable-dining-table-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Modern Farmhouse Expandable Dining Table - Cerused Carob" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0268/modern-farmhouse-expandable-dining-table-cerused-carob-o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Mid-Century Expandable Dining Table - Pebble" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0538/mid-century-expandable-dining-table-pebble-o.jpg" class="col-4 selection-item" @click=" copySrc">
		</div>
		<div class="row">
		    <img alt="Frame Expandable Dining Table - Walnut" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201941/0005/frame-expandable-dining-table-walnut-antique-brass-o.jpg" class="col-4 selection-item" @click=" copySrc">
		    <img alt="Frame Expandable Dining Table - Caramel" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201944/0020/img21o.jpg" class="col-4 selection-item" @click=" copySrc">
			<img alt="Modern Expandable Dining Table" src="https://www.westelm.com/weimgs/rk/images/wcm/products/201940/0418/modern-expandable-dining-table-o.jpg"class="col-4 selection-item" @click=" copySrc">
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
		          	x: 135,
		          	y: 175,
		          	image: imageObj,
		          	scaleX: 0.4,
		          	scaleY: 0.35
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

</style>

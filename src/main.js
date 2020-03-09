import Vue from 'vue'
import App from './App.vue'
import Nav from './Nav.vue'
import Furniture from './Furniture.vue'
import Canvas from './Canvas.vue'
// import VueKonva from 'vue-konva';
// Vue.use(VueKonva);

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#nav-bar',
  render: h => h(Nav)
})

new Vue({
  el: '#furniture',
  render: h => h(Furniture)
})

new Vue({
  el: '#canvas',
  render: h => h(Canvas)
})
new Vue({
	el: '#selection',

	data: {
	  src: ""
	},

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
});

// new Vue({
//   el: '#imageconvert',
//   data: {
//     url: '',
//     base64: '',
//     error: ''
//   },
//   methods: {
//     generateBase64: function generateBase64() {
//       var _this = this;

//       var canvas = document.createElement('CANVAS');
//       var img = document.createElement('img');
//       img.src = this.url;
//       img.onload = function () {
//         canvas.height = img.height;
//         canvas.width = img.width;
//         _this.base64 = canvas.toDataURL('image/png');
//         canvas = null;
//       };

//       img.onerror = function (error) {
//         _this.error = 'Could not load image, please check that the file is accessible and an image!';
//       };
//     }
//   },
//   watch: {
//     url: function url() {
//       this.base64 = '';
//       this.error = '';
//     }
//   }
// });

// Vue.config.devtools = false;
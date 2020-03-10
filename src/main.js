import Vue from 'vue'
import App from './App.vue'
import Nav from './Nav.vue'
import Selection from './Selection.vue'
import ChairSelection from './ChairSelection.vue'
import LightSelection from './LightSelection.vue'
// import Furniture from './Furniture.vue'
// import Canvas from './Canvas.vue'
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
	el: '#selection',
	render: h => h(Selection)
});
new Vue({
	el: '#chairselection',
	render: h => h(ChairSelection)
});

new Vue({
	el: '#lightselection',
	render: h => h(LightSelection)
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
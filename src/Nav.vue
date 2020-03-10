<template>
  <div>
    <nav class="flex flex-auto w-100 z-3">
      <div class="step-nav">
        <a v-for="(tab, index) in tabs" 
          @click="currentTab = index"
          :class="{active: currentTab === index}">{{tab}}</a>      
      </div>  
    </nav>
    <div class="row">
      {{tab}}
      <div id="all-the-drawings" class="col-6">
        <div id="canvas-container3" class="col-12 canvas"></div>
        <div id="canvas-container" class="col-6 canvas"></div>
        <div id="canvas-container2" class="col-6 canvas"></div>
      </div>
      <table-input :tab="currentTab"></table-input>
      <chair-input :tab="currentTab"></chair-input>
      <light-input :tab="currentTab"></light-input>
    </div>
  </div>
</template>


<script>
import Selection from './Selection.vue'
import ChairSelection from './ChairSelection.vue'
import LightSelection from './LightSelection.vue'

  export default {
    data() {
          return {
          currentTab: 0,
          tabs: ['Table', 'Chair','Light Fixture']    
          }
      },
      components: {
        'table-input' : Selection,
        'chair-input' : ChairSelection,
        'light-input' : LightSelection,

      }

    }
  



</script>

<style>

.step-nav{
  height: 100%
}

.step-nav a:hover{
  border-bottom: 3px outset black;
  text-decoration-style: none;
}

.builder{
  display: inline-block;
}

.builder nav{
    position: fixed;
    background: #fff;
    align-items: center;
    align-content: center;
    justify-content: center;
    border-bottom: 1px solid #ddd;
    z-index: 1;
    height: 25px;
    top:65px;
    color: black;
    margin: auto;
    padding-top: 5px;
}
.builder .step-nav a {
    font-size: 13px;
    padding: 0 1.25rem;
    color: #777;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    overflow: hidden;
    text-decoration:none;
}
.builder nav div:last-child {
    justify-content: center;
    flex: 1 auto;
}
.builder nav div {
    display: flex;
}
.builder .step-nav a.is-active {
    color: #000;
}
.active{
    border-bottom: 3px outset #ddd;
}


</style>

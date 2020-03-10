<template>
    <Slide>
      <a id="home" href="#">
        <span class="glyphicon glyphicon-home"></span>
      </a>
      <a id="store" href="#">
        <span class="glyphicon glyphicon-shopping-cart"></span>
      </a>
      <a id="user" href="#">
        <span class="glyphicon glyphicon glyphicon-user"></span>
      </a>      
      <a id="contact" href="#">
        <span class="glyphicon glyphicon-phone-alt"></span>
      </a>      
    </Slide>
</template>



<script>
import { Slide } from 'vue-burger-menu'

export default {
    components: {
        Slide 
    }
}
</script>

<style>
.bm-overlay {
   background:white;
}
.bm-burger-button {
    cursor: pointer;
    height: 20px;
    left: 36px;
    position: absolute;
    top: 25px;
    width: 25px;
    z-index: 1;
    position:fixed;
}

.bm-item-list>* {
    display: inline-flex;
    padding: .7em;
    text-decoration: none;
}

.bm-item-list>*>span {
    color: #9a7c88;
    font-weight: 700;
    margin-left: 10px;
    font-size: 20px;
    top:5px;
    width: 0px;
    text-align: center;
}

.bm-cross {
  background: #d2c0c4;
  transform: rotate(90deg) !important;
}

.bm-menu{
  background-color:#e6dadaba;
  height:60px;
  overflow:hidden;
  position:fixed;
}
.bm-item-list a:hover{
  color:none;
}

.bm-item-list a:active{
  color:#b7afb2;
}
.cross-style{
  top: 28px;
  left: 48px;
}
.bm-item-list {
    color: #b8b7ad;
    font-size: 20px;
    margin-left: 20%;
    top: -55px;
    position: relative;
}
.bm-burger-bars {
    background-color: #9a7c88;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
body{
  overflow-anchor: none;
    font-family: "GT-Eesti 3r",Arial,sans-serif;
    font-size: 14px;
    background-color: #fff;
    color: #363636;
}
#heading{
  font-size:30px;
  margin: auto;
  position: fixed;
  text-align: center;
  background: #e6dada;
  height: 70px;
  padding-top: 5px;
  z-index: 1;
  width: 100%;
}
.bm-burger-button{
  top:20px;
}
.main-area{
  position: relative;
  top: 30px;
}
.canvas{
  text-align: center;

}
.select-item-section{
  padding:25px;
  background:white;
  padding-top: 50px;
  padding-left:40px !important;
  padding-right:40px !important;
}

#all-the-drawings{
  background:#e5e5e5;
}

.konvajs-content{
  position:fixed !important;
  top:15%;
  left:25%;

}

.row{
  max-width:1280px;
  justify-content: center;
  text-align:center;
  margin: auto;
}

</style>

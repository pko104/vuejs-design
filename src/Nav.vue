<template>
  <nav class="flex flex-auto w-100 z-3">
      <div class="step-nav">
        <a href="#" class="is-active"><span>Chair</span></a>
        <a href="#"><span>Table</span></a>
        <a href="#"><span>Sizes</span></a>
        <a href="#"><span>Summary</span></a>
      </div>
    </nav>
</template>



<script>



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
    height: 35px;
    color: black;
    margin: auto;
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
</style>

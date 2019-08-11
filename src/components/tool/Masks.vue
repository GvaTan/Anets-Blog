<template>
    <div class="mask" id="masks"></div>
</template>

<script>
    export default {
        name: "Masks"
    }
</script>

<style scoped>
  .mask{
    position: absolute;
    z-index: 999;
    transition: all 0.5s;
    left:-100%;
    width: 100%;
    height:100%;
    /* background-color: rgba(0,0,0,0.7); */
    background-image: -webkit-linear-gradient(right, rgba(0,0, 0, 0) 0%, rgba(0,0, 0, 1) 100%);
    background-image: -moz-linear-gradient(right, rgba(0,0, 0, 0) 0%, rgba(0,0, 0, 1) 100%);
    background-image: -o-linear-gradient(right, rgba(0,0, 0, 0) 0%, rgba(0,0, 0, 1) 100%);
    background-image: linear-gradient(right, rgba(0,0, 0, 0) 0%, rgba(0,0, 0, 1) 100%);
  }
</style>

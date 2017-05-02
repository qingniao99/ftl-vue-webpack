<template>
  <h1 @click="to">This is Index module!</h1>
</template>

<script>
  export default {
    name: "index",
    methods:{
      to:function () {
        alert(876);
      }
    }
  }
</script>

<style scoped>
  h1{
    color: rgb(5, 110, 234);
    font-size: 50px;
  }
</style>

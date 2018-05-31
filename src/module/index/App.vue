<template>
  <div>
    <vindex></vindex>
    <span>{{title}}</span>
  </div>

</template>

<script>
  import vindex from '../../components/index/Index'

  export default {
    name: "app",
    components: {
      vindex
    },
    data() {
      return {
        title: 989898
      }
    },
    methods: {

    },
    created () {

    },
    computed:{

    }
  }
</script>

<style>
  h1 {
    font-size: 30px;
  }
</style>

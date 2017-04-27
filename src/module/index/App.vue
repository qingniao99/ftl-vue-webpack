<template>
	<vindex></vindex>
</template>

<script>
import vindex from '../../components/index/Index'

export default {
    name:"app",
	components: {
      // 可以以key-value的形式注册组件, 此时挂载点的名字就是key
      // 否则挂载点和组件名字一致, 即vhead
      vindex
    }
}
</script>

<style>

</style>

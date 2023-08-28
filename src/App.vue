<template>
  <section id='main'>
    <router-view #default='{ Component }'>
      <component :is='Component'/>
    </router-view>
  </section>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
.main {
  background: palegoldenrod;
  width: 120px;
  height: 120px;
}
</style>

<template>
  <ul>
    <li @click="changName('花篮')">{{tagName}}</li>
    <router-link v-for="item of data" :key="item.url" :to="item.url" tag="li">
      {{item.name}}
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'Vaside',
  data () {
    return {
      tagName: '侧边栏'
    }
  },
  // props: {
  //   data: any
  // }
  props: ['data'],
  methods: {
    seflUrl (param) {
      this.tagName = param
      // alert('this is url =' + param)
    },
    changName (param) {
      this.$emit('onchangeName', param)
    }
  }
}
</script>

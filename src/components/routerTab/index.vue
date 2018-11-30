
<template>
  <div class="box">
    <div class="header" @click="printy(123)">
      <vheader></vheader>
    </div>
    <div class="content">
      <div class="left-box">
        <vaside :data = 'links' ref="yeluosen" v-on:onchangeName="changeLanName"></vaside>
      </div>
      <div class="right-box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
//  引入 头部组件 和 侧边栏组件
import Vheader from '@/components/routerTab/header'
import Vaside from '@/components/routerTab/aside'
// import {cadd} from '@/assets/js/commonTools.js'
 import cadd from '@/assets/js/commonTools.js'
 const add = cadd.add
export default {
  name: 'indexNav',
  data () {
    return {
      links: [
        {name: 'A组件', url: '/index/aaa'},
        {name: 'B组件', url: '/index/bbb'},
        {name: 'c组件', url: '/index/ccc'}
      ]
    }
  },
  components: {
    Vheader,
    Vaside
  },
  methods: {
    printy (param) {
      this.$refs.yeluosen.seflUrl(param)
    },
    changeLanName (data) {
      console.log(data)
      this.links[0].name = data
    },
    // cadd
    add
  },
  mounted () {
    // this.cadd()
    this.add()
  }
}
</script>
<style lang="less">
@import '../../assets/less/changeCompontent.less';
</style>

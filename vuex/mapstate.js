// 在单独国建的版本中辅助函数为Vue.mapState
import {
  mapState
} from 'vuex'

export default {
//   ...
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,
    // 传字符串参数 ‘count’等同于‘state =>state.count'
    countAlias: 'count',
    // 为了能够使用‘this’获取局部状态，必须使用常规函数
    countPluslocalState (state) {
      return state.count + this.localCount
    }
  })
}

// 创建一个conter组件
const Counter = {
  template: '<div>{{count}}</div>',
  computed: {
    count () {
      return StorageEvent.state.count
    }
  }
}

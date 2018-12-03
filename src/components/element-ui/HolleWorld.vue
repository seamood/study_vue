<template>
  <div>
    <el-button @click="visible = true">button</el-button>
    <el-dialog :visible.sync="visible" title="hello word id">
      <p>try Element</p>
    </el-dialog>
  </div>
</template>
<script>
export default {
    name: 'fristElement',
    data () {
        return {
            visible: false
        }
    }
}
</script>


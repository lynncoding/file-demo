<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="name"
      label="demo名称"
      min-width="180">
        <template scope="scope">
          <a :href="'#' + scope.row.path">
            <div>
              {{ scope.row.name }}
            </div>
          </a>
        </template>
    </el-table-column>
    <el-table-column
      prop="desc"
      label="描述"
      min-width="380">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    console.log(this.$router.options.routes)
    this.tableData = this.$router.options.routes.filter(item => item.path !== '/')
      .map(item => ({name: `${item.name} | ${item.meta.label}`, desc: item.meta.desc, path: item.path}))
  },
  methods: {
  }
}
</script>

<style>

</style>

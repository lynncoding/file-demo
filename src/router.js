const index = r => require.ensure([], () => r(require('./index.vue')), 'index')
const chunkUpload = r => require.ensure([], () => r(require('./views/chunk-upload.vue')), 'chunkUpload')

export default {
  routes: [
    {
      name: 'index',
      path: '/',
      component: index,
      meta: {
        label: '首页',
        desc: '首页demo导航'
      }
    }, {
      name: 'chunkUpload',
      path: '/chunk-upload',
      component: chunkUpload,
      meta: {
        label: '分片上传',
        desc: '文件的分片上传处理'
      }
    }
  ]
}

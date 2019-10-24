// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../pages/test/index',
      // routes: [
      //   {path: '/', component: '../pages/index'},
      //   {path: '/test', component: '../pages/test/index'}
      // ]
    }
  ],
  theme: {
    "@primary-color": "#0085E8",
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'sely的工具包',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}

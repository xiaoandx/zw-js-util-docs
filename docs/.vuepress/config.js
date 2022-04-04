// 注意: base的值为github仓库的名称(/不能少)
module.exports = {
  base: '/zw-js-util-docs/', /* 基础虚拟路径 */
  dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
  title: '前端开发常用工具函数库', // 标题
  description: '大家一起来完善工具函数库', // 标题下的描述
  
  themeConfig: { // 主题配置
    logo: '/logo.png',
    nav: [ // 头部导航
      { text: 'Github', link: 'https://github.com/xiaoandx/zw-js-util' },
      { text: '文档地址', link: 'https://github.com/xiaoandx/zw-js-util' },
      { 
        text: '版本', 
        items: [
          { text: '1.X', link: 'https://github.com/xiaoandx/zw-js-util/releases' }
        ] 
      },
    ],
    sidebar: [ // 左侧导航
      {
        title: '前端工具库', // 标题
        collapsable: false, // 下级列表不可折叠
        children: [ // 下级列表
          'chapter1/01_工具函数库说明',
          'chapter1/02_使用自定义工具包',
        ]
      },
      {
        title: '各种自定义',
        collapsable: false,
        children: [
          'chapter2/01_函数相关',
          'chapter2/02_数组相关'
        ]
      }
    ],
    // sidebarDepth: 3 // 左侧导航的深度默认是2级
  },

  head: [ // 指定网页head图标
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
  ]
}
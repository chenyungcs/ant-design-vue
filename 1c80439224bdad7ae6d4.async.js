webpackJsonp([53],{1581:function(s,a,t){s.exports=t(3425)},3425:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(3426),e=t(67),r=e(null,n.a,!1,null,null,null);a.default=r.exports},3426:function(s,a,t){"use strict";var n=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},e=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",[t("h1",[s._v("在 vue-cli 中使用")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli"}},[s._v("vue-cli")]),s._v(" 是业界最优秀的 Vue 应用开发工具之一，本文会尝试在 vue-cli 创建的工程中使用 antd 组件，并自定义 webpack 的配置以满足各类工程化需求。")]),s._v(" "),t("h2",{attrs:{id:"安装和初始化"}},[s._v("安装和初始化 "),t("a",{staticClass:"anchor",attrs:{href:"#安装和初始化","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("p",[s._v("我们需要在命令行中安装 vue-cli 工具，你可能还需要安装 "),t("a",{attrs:{href:"https://github.com/yarnpkg/yarn/"}},[s._v("yarn")]),s._v("。")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-bash"}},[s._v("$ npm install -g vue-cli yarn\n")])]),s._v(" "),t("p",[s._v("然后新建一个项目。")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-bash"}},[s._v("$ vue init webpack antd-demo\n")])]),s._v(" "),t("p",[s._v("工具会自动初始化一个脚手架并安装 Vue 项目的各种必要依赖，如果在过程中出现网络问题，请尝试配置代理或使用其他 npm registry。")]),s._v(" "),t("p",[s._v("然后我们进入项目并启动。")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-bash"}},[s._v("$ "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("cd")]),s._v(" antd-demo\n$ npm run dev\n")])]),s._v(" "),t("p",[s._v("此时浏览器会访问 http://localhost:8080/ ，看到 "),t("code",{pre:!0},[s._v("Welcome to Your Vue.js App")]),s._v(" 的界面就算成功了。")]),s._v(" "),t("h2",{attrs:{id:"引入-antd"}},[s._v("引入 antd "),t("a",{staticClass:"anchor",attrs:{href:"#引入-antd","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("p",[s._v("这是 vue-cli 生成的默认目录结构。")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":""}},[s._v("├── README.md\n├── .babelrc\n├── package.json\n├── index.html\n├── src\n│   ├── assets\n│   │   └── logo.png\n│   ├── components\n│   │   └── HelloWorld.vue\n│   ├── App.vue\n│   └── main.js\n└── yarn.lock\n")])]),s._v(" "),t("p",[s._v("现在从 yarn 或 npm 安装并引入 ant-design-vue。")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-bash"}},[s._v("$ yarn add ant-design-vue\n")])]),s._v(" "),t("p",[s._v("修改 "),t("code",{pre:!0},[s._v("src/main.js")]),s._v("，引入 antd 的按钮组件以及全部样式文件。")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-jsx"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Button "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'ant-design-vue/lib/button'")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'ant-design-vue/dist/antd.css'")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" App "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'./App'")]),s._v("\n\nVue.component(Button.name, Button)\n\nVue.config.productionTip = "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("/* eslint-disable no-new */")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Vue({\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("el")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'#app'")]),s._v(",\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": { App },\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("template")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'<App/>'")]),s._v("\n})\n")])]),s._v(" "),t("p",[s._v("修改 "),t("code",{pre:!0},[s._v("src/App.vue")]),s._v("的template内容。")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-jsx"}},[s._v("<template>\n  "),t("span",{attrs:{class:"xml"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"app"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("img")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"./assets/logo.png"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("Button>"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("a-button")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("router-view")]),s._v("/>")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n...\n")])])]),s._v(" "),t("p",[s._v("好了，现在你应该能看到页面上已经有了 antd 的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 vue-cli 的"),t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/blob/master/README.md"}},[s._v("官方文档")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"高级配置"}},[s._v("高级配置 "),t("a",{staticClass:"anchor",attrs:{href:"#高级配置","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("p",[s._v("我们现在已经把组件成功运行起来了，但是在实际开发过程中还有很多问题，例如上面的例子实际上加载了全部的 antd 组件的样式（对前端性能是个隐患）。")]),s._v(" "),t("p",[s._v("此时我们需要对 vue-cli 的默认配置进行自定义。")]),s._v(" "),t("h3",{attrs:{id:"使用-babel-plugin-import"}},[s._v("使用 babel-plugin-import "),t("a",{staticClass:"anchor",attrs:{href:"#使用-babel-plugin-import","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/ant-design/babel-plugin-import"}},[s._v("babel-plugin-import")]),s._v(" 是一个用于按需加载组件代码和样式的 babel 插件（"),t("a",{attrs:{href:"/ant-design-vue/docs/vue/getting-started-cn/#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD"}},[s._v("原理")]),s._v("）。")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-bash"}},[s._v("$ yarn add babel-plugin-import --dev\n")])]),s._v(" "),t("p",[s._v("修改"),t("code",{pre:!0},[s._v(".babelrc")]),s._v("文件，配置babel-plugin-import")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-diff"}},[s._v('  {\n    "presets": [\n      ["env", {\n        "modules": false,\n        "targets": {\n          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]\n        }\n      }],\n      "stage-2"\n    ],\n'),t("span",{attrs:{class:"hljs-deletion"}},[s._v('-   "plugins": ["transform-vue-jsx", "transform-runtime"]')]),s._v("\n"),t("span",{attrs:{class:"hljs-addition"}},[s._v('+   "plugins": [')]),s._v("\n"),t("span",{attrs:{class:"hljs-addition"}},[s._v('+     "transform-vue-jsx",')]),s._v("\n"),t("span",{attrs:{class:"hljs-addition"}},[s._v('+     "transform-runtime",')]),s._v("\n"),t("span",{attrs:{class:"hljs-addition"}},[s._v('+     ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }]')]),s._v("\n"),t("span",{attrs:{class:"hljs-addition"}},[s._v("+   ]")]),s._v("\n  }\n")])]),s._v(" "),t("p",[s._v("然后移除前面在 "),t("code",{pre:!0},[s._v("src/main.js")]),s._v(" 里全量添加的 "),t("code",{pre:!0},[s._v("import 'ant-design-vue/dist/antd.css';")]),s._v(" 样式代码，并且按下面的格式引入模块。")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-diff"}},[s._v("  // src/main.js\n  import Vue from 'vue'\n"),t("span",{attrs:{class:"hljs-deletion"}},[s._v("- import Button from 'ant-design-vue/lib/button';")]),s._v("\n"),t("span",{attrs:{class:"hljs-addition"}},[s._v("+ import { Button } from 'ant-design-vue';")]),s._v("\n"),t("span",{attrs:{class:"hljs-deletion"}},[s._v("- import 'ant-design-vue/dist/antd.css'")]),s._v("\n  import App from './App'\n\n  Vue.component(Button.name, Button)\n\n  Vue.config.productionTip = false\n\n  /* eslint-disable no-new */\n  new Vue({\n    el: '#app',\n    components: { App },\n    template: '<App/>'\n  })\n")])]),s._v(" "),t("p",[s._v("最后重启 "),t("code",{pre:!0},[s._v("npm run dev")]),s._v(" 访问页面，antd 组件的 js 和 css 代码都会按需加载，你在控制台也不会看到这样的"),t("a",{attrs:{href:"https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png"}},[s._v("警告信息")]),s._v("。关于按需加载的原理和其他方式可以阅读"),t("a",{attrs:{href:"/ant-design-vue/docs/vue/getting-started-cn/#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD"}},[s._v("这里")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"自定义主题"}},[s._v("自定义主题 "),t("a",{staticClass:"anchor",attrs:{href:"#自定义主题","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),t("p",[s._v("按照 "),t("a",{attrs:{href:"/ant-design-vue/docs/vue/customize-theme-cn"}},[s._v("配置主题")]),s._v(" 的要求，自定义主题需要用到 less 变量覆盖功能。")])])}],r={render:n,staticRenderFns:e};a.a=r}});
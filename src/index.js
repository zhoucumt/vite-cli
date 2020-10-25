const Koa = require('koa');
const {serveStaticPlugin} = require('./plugins/serverPluginServeStatic.js');
const {moduleRewritePlugin} = require('./plugins/serverPluginModuleRewrite.js');
const {moduleResolvePlugin} = require('./plugins/serverPluginModuleResolvePlugin.js')
const {htmlRewritePlugin} = require('./plugins/serverPluginHtmlRewritePlugin.js');
// const {vuePlugin} = require('./plugins/servePluginVue')

function createServer() {
  const app = new Koa();
  // 用户运行npm run my-dev时 会创建服务
  // 当前的根的位置
  const root = process.cwd();

  const context = {
    app,
    root
  };

  // 插件的集合
  const resolvedPlugins = [
    // 3.解析 以/@mudules文件开头的内容 找到对应的结果
    moduleResolvePlugin,
    // 2.解析import 重写路径
    moduleRewritePlugin,
    // 1.要实现静态服务的功能
    serveStaticPlugin
  ];

  resolvedPlugins.forEach(plugin => plugin(context));

  return app;
}

module.exports = createServer;

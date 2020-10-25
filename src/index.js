const Koa = require('koa');
const {serveStaticPlugin} = require('./plugins/serverPluginServeStatic.js');
const {moduleRewritePlugin} = require('./plugins/serverPluginModuleRewrite.js');

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
    // 
    moduleRewritePlugin,
    // 1.要实现静态服务的功能
    serveStaticPlugin
  ];

  resolvedPlugins.forEach(plugin => plugin(context));

  return app;
}

module.exports = createServer;

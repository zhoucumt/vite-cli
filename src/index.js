const Koa = require('koa');
const {serveStaticePlugin} = require('./plugins/serverPluginServeStatic.js');

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
    // 1.要实现静态服务的功能
    serveStaticePlugin
  ];

  resolvedPlugins.forEach(plugin => plugin(context));

  return app;
}

module.exports = createServer;

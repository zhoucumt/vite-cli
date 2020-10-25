const static = require('koa-static');
const path = require('path');

function serveStaticPlugin({app, root}) {
  // vite在哪里运行，就在哪里启动静态服务
  app.use(static(root));
  app.use(static(path.join(root, 'public')));
}

exports.serveStaticPlugin = serveStaticPlugin;

async function readBody(stream) {
  // koa中要求所有的异步方法必须包装成promise
  return new Promise((resolve, reject) => {
    let res = '';
    stream.on('data', data => {
      res += data;
    });
    stream.on('end', () => {
      resolve(res);
    });
  });
}

exports.readBody = readBody;

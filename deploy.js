const fs = require('fs');
const https = require('https');

const htmlContent = fs.readFileSync('test.html', 'utf-8');

const data = JSON.stringify({
  jsonrpc: "2.0",
  id: 1,
  method: "tools/call",
  params: {
    name: "deploy-html",
    arguments: {
      value: htmlContent
    }
  }
});

const options = {
  hostname: 'mcp-on-edge.edgeone.app',
  port: 443,
  path: '/mcp-server',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  let responseBody = '';
  
  res.on('data', (chunk) => {
    responseBody += chunk;
  });
  
  res.on('end', () => {
    try {
      const result = JSON.parse(responseBody);
      console.log('部署成功！');
      console.log('公网访问地址:', result.result.content[0].text);
    } catch (e) {
      console.log('响应:', responseBody);
    }
  });
});

req.on('error', (e) => {
  console.error('部署失败:', e.message);
});

req.write(data);
req.end();
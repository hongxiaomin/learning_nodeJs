let url=require('url');
console.log(url.parse('https://hxm:123@www.jetbrains.com/webstorm/download/download-thanks.html?platform=windows&username=111',true));

// Url {
//     protocol: 'https:',协议
//         slashes: true,
//         auth: 'hxm:123',权限
//         host: 'www.jetbrains.com',主机
//         port: null,端口
//         hostname: 'www.jetbrains.com',主机名
//         hash: null,哈希值
//         search: '?platform=windows',查询字符串
//         query: 'platform=windows',查询条件
//         query: { platform: 'windows', username: '111' },如果方法后面加参数true，查询字符串以json格式展示
//         pathname: '/webstorm/download/download-thanks.html',路径 端口号和问号中间那部分
//         path: '/webstorm/download/download-thanks.html?platform=windows',路径+查询字符串
//         href: 'https://www.jetbrains.com/webstorm/download/download-thanks.html?platform=windows' }
let urlObj=url.parse('https://hxm:123@www.jetbrains.com/webstorm/download/download-thanks.html?platform=windows&username=111',true);
console.log(url.format(urlObj));// https://hxm:123@www.jetbrains.com/webstorm/download/download-thanks.html?platform=windows&username=111




UTOOLS （众多插件）（万能小工具） Alt+空格-----弹出搜索框 1.可以浏览或者打开本地文件 2.识别图中文字，多样翻译 3.不同插件，不同的功能 ..........

node.js
官网下载

![1.jpg](/lsyde1/2.jpg)

win+R 打开命令行

![截图](/lsyde1/2.jpg)

检查是否下载成功 node -v npm -v

![截图](/lsyde1/3.jpg)

打开node.js文件

创建文件 node-global node_cache

![截图](/lsyde1/4.jpg)

win+R

注释：cmd命令里路径不可有空格

```
路径地址要点到需要复制的文件里
```

npm config set prefix "路径\node-global"

npm config set cache "路径\node-code"

![截图]（/lsyde1/5.jpg）

![截图]（/lsyde1/6.jpg）

npm config set prefix

npm config set cache

![截图]（/lsyde1/7.jpg）配置环境变量

![截图]（/lsyde1/8.jpg）

![截图]（/lsyde1/9.jpg）

系统变量——新建——NODE_PATH

```
                           路径\node-global\node-modules
```

![截图]（/lsyde1/10.jpg）

用户变量——Path(npm编辑)——路径\node_global

![截图]（/lsyde1/11.jpg）

系统变量——Path——新建——%NODE_PATH%

![截图]（/lsyde1/12.jpg）

一直确定就可以了

检查：

win+R——npm install express -g 或 npm config list

![截图]（/lsyde1/13.jpg）

# vue-ssr-example⚡

简洁的纯vue ssr渲染



powered by 

**vue**

**vue-server-renderer**

**express**

**webpack**

______________________

#### 注意事项：

#### vue-style-loader

vue-style-loader (@4.1.2) 暂时不支持默认模式下css-loader(^4.0.0以上)处理过的文件

通过关闭css-loader的esModules导出选项可以解决

#### webpack5

在使用vue-server-renderer/server-plugin时添加后

使用webpack5打包不成功

控制台报错

**[vue-server-renderer-webpack-plugin]webpack config `output.librarytTarget` should be "commonjs2"**

以及webpack-cli报错

将webpack包切换至^4.0最新版本解决
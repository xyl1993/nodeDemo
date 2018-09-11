# 此项目已停止维护好多年，连package.json都没有 ，有兴趣的请转至https://github.com/xyl1993/angular-note 基于ng6 + express的个人小项目 有源码跟数据库

# nodeDemo
Express4+angularjs1.4+bootstrap3+mysql+nodejs

#bin
www服务配置，启动环境配置

#bower_components
bower安装目录
bootstrap通过grunt重新编译过，加入自定义样式
grunt文件太大，仅提交了编译后的css及js文件

#common
静态资源文件

#conf
基本配置文件
lo4j mysql数据库连接配置

#dao
数据层处理文件

#log
系统日志

#node_modules
npm安装的组件

#public
自定义css js文件

#routes
exprass路由配置

#util
自定义工具包

#views
自定义页面

#app.js
node启动文件，基本全局配置及组件配置

#启动方式
supervisor ./bin/www
通过supervisor启动，每次修改文件都会自动启动

或者通过npm start启动

http://localhost:3000/
未登录跳转到login页面

http://localhost:3000/register为注册页

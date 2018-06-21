# 后端
采用技术
1. hapi.js (coding)
2. elasticsearch (DB)

# 启动
1. 下载安装 elasticsearch，[下载地址](https://www.elastic.co/downloads/elasticsearch)
2. 启动 elasticsearch，解压下载的包，进入 `elasticsearch/bin/` ，然后在命令行中输入 `./elasticsearch` 启动数据库
3. 启动项目
    ```
    yarn install && yarn server
    ```
4. 打开浏览器，进入 `http://localhost:4000/documentation` 查看api
5. 进行api测试之前在server目录下运行 `yarn createDB` 创建数据库和超级用户
6. 超级用户账号
    ```js
        账户名: 超级管理员
        密码: superAdmin
    ```

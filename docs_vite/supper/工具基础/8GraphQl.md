# 8.GraphQl

[[toc]]

前端操作数据库

## 8.1 简介

```js
优点
1.可以指定想要的数据
2.GraphQL 更快
3.强类型
4.合并请求
缺点
1.http无法缓存，鉴权
2.GraphQL次数不好统计
3.处理文件上传贼麻烦
4.GraphQL 只会返回 Status Code 200，无论当前数据请求是成功或失败
```

## 8.2 主流设计风格对比r对比

```js

SOAP（简单对象访问协议）：只能使用 XML。SOAP通过更标准化的消息传递并集成了执行操做

rpc设计风格-模块内部（Dubbo有点像外网穿透，连上了一台向日葵）：
1.分工更加明确，更加耦合  ？xxx=ddd 一般使用TCP
2.修改代码在服务端
3.接口打包可以给别人

restful（表述性状态传递） 设计风格
1./资源名/资源标识符:不带扩展名的URL来访问系统资源.像是/queryBook?id=1	就不是restful api了。本质上是使用URL来访问资源的方式。	
2.修改代码在客户端
3.大部分REST的实现中使用了RPC的机制
4.跟rpc主要的区别是我现在要实现2个功能，一个是增加功能一个是删除功能，那么rpc要写两个接口和函数，restful只用写一个接口和函数

GraphQl（表述性状态传递） 设计风格：


SOA（面向服务的体系架构）：微架构。soa是面向模块化功能型的设计理念,目地是以后其它的产品有类似的模块功能我们只需要改些配置而无需从新开发
```

## 8.3 示例

### 8.3.1 sql 文件

```sql
/*
 Navicat Premium Data Transfer

 Source Server         : 3306
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : demo

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 25/11/2022 21:23:39
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for person
-- ----------------------------
DROP TABLE IF EXISTS `person`;
CREATE TABLE `person`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of person
-- ----------------------------
INSERT INTO `person` VALUES (1, 'ceshi');
INSERT INTO `person` VALUES (2, '45');
INSERT INTO `person` VALUES (3, 'sss');

SET FOREIGN_KEY_CHECKS = 1;

```





### 8.3.2  main.js代码

```js
// 1.引入东西
var express = require('express')
var expressGraphql = require('express-graphql')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require('graphql')
var mysql = require('mysql');
var app = express()

// 2.定义返回数据格式
const PersonType = new GraphQLObjectType({
    name: 'person',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
    }
})
const ResponseType =  new GraphQLObjectType({
	name:'response',
	fields:{
        status:{type:GraphQLInt},
		msg:{type:GraphQLString}
    }
})

// 3.定义公共函数
var conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'demo'
  });
let query = function (sql) {
    // 返回一个 Promise
    return new Promise((resolve, reject) => {
        conn.query(sql, (err, rows) => {
            if (err) {
                reject(err)
            } else {
                resolve(rows)
            }
        })

    })
}
async function getById(id) {
    var res = await query(`SELECT * from person where id=${id}`);
    return res[0];
}
async function insert(name) {
    var res = await query(`insert into person (name) values ('${name}')`)
}

// 4.定义查询的内容字段，入参在resolve的第二个参数定义
const RootQuery = new GraphQLObjectType({
    name: 'personQuery',
    fields: {
        person: {
            type: PersonType,
            args: {
                id: { type: GraphQLInt },
                name: { type: GraphQLString }
            },
            async resolve(parentValue, args) {
                return await getById(args.id);
            }
        }
    }
})

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addPerson: {
            type: ResponseType,
            args: {
                name: { type: GraphQLString }
            },
            async resolve(parenValue, args) {
                await insert(args.name)
                return { status: 0, msg: "ok" }
            }
        }
    }

})

// 6.定义名字，这里表示我们可以通过
/** 
    query{
        person(id:2){
            name
        }
    }
    来进行字段的查询
    mutation{
        addPerson(name:"sss"){
            msg,
            status
        }
    }
    来进行字段的插入
*/

//7.这样子我们可以通过访问界面的documentation（有可视化界面）
const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
})

//8.我们可以访问 http://localhost:4000/person
app.use('/person', expressGraphql({
    // 描述对象信息/普通查询操作和写操作
    schema: schema,
    // 这样就会有一个图形化界面方便我们调试
    graphiql: true

}))

app.listen(4000)
```



### 8.3.3 调用方式类似于

```js
query{
        person(id:2){
            name
        }
    }
    来进行字段的查询
    mutation{
        addPerson(name:"sss"){
            msg,
            status
        }
    }
```

## 8.4 代码问题

```js
1.SELECT * FROM `articles` LIMIT 0, 20; 像是这种代码我们数据库查询有21次

2.社区为GraphQL提供了一个解决方案: DataLoader。其原理就是，在需要查询数据库的时候将查询进行延迟，等到拿到所有的查询需求之后再一次性查询出来

3.最终类似于
SELECT * FROM `articles` LIMIT 0, 20;
SELECT * FROM `authors` WHERE `id` IN (1, 2, 3, ..., N);  用类似于 in 的方式解决的

```


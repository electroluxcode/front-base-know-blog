# 2. webpack的配置

[[toc]]


vue.config.js 是⼀个可选的配置⽂件，如果项⽬的 (和 package.json 同级的) 根⽬录中存在这个⽂件，那么它会被 @vue/cli-service ⾃动加载。你也可以使⽤ package.json 中的 vue 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写。

因此我们要新建一个webpack.config.js文件夹

vue.config.js好像是会有一个缓存机制，我的处理是把这个文件全部注释掉就可以实现一个刷新



dev 环境和production环境不一样，宝箱production报错会减少



先查看一下vue版本

```
npm list vue
```

我现在是 vue@2.6.14

webpack版本是4





## 1.0  前端质量工程

### 1.0.1基础知识

npm install --save-dev 是指将依赖安装至开发环境

npm install --save 是指将依赖安装至生产环境    上线版本

dependencies 是在生产环境中所需要的依赖，后面代表了它们的版本号

devDependencies 中是在开发环境中所需要的依赖，后面代表了他们的版本号

--mode=development

--mode=production

--mode=test

上面是我以前的误区

这个**开发依赖和生产依赖只是针对与npm install。npm install的时候会把这里面的都下载下来，然后做区分。而webpack真正打包的时候，是基于页面上按需打包的，用到什么打包什么**

**唯一的是严格放，可以让开发者一眼看清楚这些插件大概的用处。**





### 1.0.2什么是 semver，~1.2.3 与 ^1.2.3 的版本号范围是多少（npm知识）

semver是Semantic Versioning语义化版本的缩写。它由 `[major, minor, patch]` 三部分组成



对于 `~1.2.3` 而言，它的版本号范围是 `>=1.2.3 <1.3.0`

对于 `^1.2.3` 而言，它的版本号范围是 `>=1.2.3 <2.0.0`

当我们 `npm i` 时，默认的版本号是 `^`，可最大限度地在向后兼容与新特性之间做取舍，但是有些库有可能不遵循该规则，我们在项目时应当使用 `yarn.lock`/`package-lock.json` 锁定版本号。

```
npm i 某个 package 时会修改 package-lock.json 中的版本号吗？

当 package-lock.json 该 package 锁死的版本号符合 package.json 中的版本号范围时，将以 package-lock.json 锁死版本号为主。

当 package-lock.json 该 package 锁死的版本号不符合 package.json 中的版本号范围时，将会安装该 package 符合 package.json 版本号范围的最新版本号，并重写 package-lock.json
```



### 1.0.3宿主环境控制

第一个质量工程:package.json中

```
{
  "engines": {
    "node": ">=14.0.0"
  }
}
```

第二个质量工程：

当我们执行任意 `npm run` 脚本时，将自动触发 `pre`/`post` 的生命周期

假设某一个第三方库的 `npm postinstall` 为 `rm -rf /`，那岂不是又很大的风险?

例如：

```json
{
  "name": "frontutilpackage",
  "version": "0.0.2",
  "description": "",
  "main": "index.js",
  "keywords": [
    "elementui",
    "components"
  ],
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "preinstall":"echo \"安装前\" && exit 1",
    "install":"echo \"安装.........................\" ",
    "postinstall":"echo \"安装后\" "
    
  },
  "author": "Electrolux",
  "license": "ISC",
  "dependencies": {
    "js-cookie": "^3.0.1"
  }
}

```



就会自动执行  preinstall   install  postinstall里面的内容。

解决方法目前 只能是等npm 官方能够禁用一些hook钩子函数



### 1.0.4 CICD

CI(持续集成)CD(持续部署)：当代码 push 到远程仓库后，借助 `WebHooks` 对当前代码在构建服务器(即 CI 服务器，也称作 Runner)中进行自动构建、测试及部署等

`CICD` 集成于 CICD 工具及代码托管服务。CICD 有时也可理解为进行 CICD 的构建服务器，而提供 CICD 的服务，如以下产品，将会提供构建服务与 github/gitlab 集成在一起。



cicd策略

1. 主分支禁止直接 PUSH 代码
2. 代码都必须通过 PR 才能合并到主分支
3. **分支必须 CI 成功才能合并到主分支**
4. 代码必须经过 Code Review (关于该 PR 下的所有 Review 必须解决)
5. 代码必须两个人同意才能合并到主分支



```
workflow （流程）：持续集成一次运行的过程，就是一个 workflow。
job （任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。
step（步骤）：每个 job 由多个 step 构成，一步步完成。
action （动作）：每个 step 可以依次执行一个或多个命令（action）
```







#### step1:开通和helloworld

https://gitee.com/features/gitee-go  中开通，或者具体的项目中开通gitee go

当我们选择用node.js的方式进行创建的时候会生成master-pipeline.yml

gitee

```yaml
version: '1.0'
name: master-pipeline
displayName: MasterPipeline
stages:
  - stage: 
    name: compile
    displayName: 编译
    steps:
      - step: build@nodejs
        name: build_nodejs
        displayName: Nodejs 构建
        # 支持8.16.2、10.17.0、12.16.1、14.16.0、15.12.0五个版本
        nodeVersion: 14.16.0
        # 构建命令：安装依赖 -> 清除上次打包产物残留 -> 执行构建 【请根据项目实际产出进行填写】
        commands:
          - npm install && rm -rf ./dist && npm run build
        # 非必填字段，开启后表示将构建产物暂存，但不会上传到制品库中，7天后自动清除
        artifacts:
            # 构建产物名字，作为产物的唯一标识可向下传递，支持自定义，默认为BUILD_ARTIFACT。在下游可以通过${BUILD_ARTIFACT}方式引用来获取构建物地址
          - name: BUILD_ARTIFACT
            # 构建产物获取路径，是指代码编译完毕之后构建物的所在路径
            path:
              - ./dist
      - step: publish@general_artifacts
        name: publish_general_artifacts
        displayName: 上传制品
        # 上游构建任务定义的产物名，默认BUILD_ARTIFACT
        dependArtifact: BUILD_ARTIFACT
        # 上传到制品库时的制品命名，默认output
        artifactName: output
        dependsOn: build_nodejs
  - stage: 
    name: release
    displayName: 发布
    steps:
      - step: publish@release_artifacts
        name: publish_release_artifacts
        displayName: '发布'
        # 上游上传制品任务的产出
        dependArtifact: output
        # 发布制品版本号
        version: '1.0.0.0'
        # 是否开启版本号自增，默认开启
        autoIncrement: true
triggers:  # 什么时候会触发，这里是在push代码的时候会触发
  push:
    branches:
      include:
        - master
```





github 点击actions,点击 set up a workflow yourself 

```yaml
# 流程名字
name: CI

# 什么时候会触发
on:
  #schedule:  # 每天8：30做一些事情
    #- cron:  '30 8 * * *'
  push:
    branches: [ "main" ]
  pull_request: 
    branches: [ "main" ] 
    types: 
    	- opened# 当新建了一个 PR 时
      - synchronize# 当提交 PR 的分支，未合并前并拥有新的 Commit 时
  workflow_dispatch:
# 具体做的事情
jobs:
  # 命名这玩意叫做build
  build:
    # 表示在什么系统下面运行的
    runs-on: ubuntu-latest

    # 每一个- 代表一个步骤
    steps:
      # 把代码下载下来
      - uses: actions/checkout@v3

      # 运行一行脚本
      - name: Run a one-line script
        run: echo Hello, world!

      # 运行两行脚本
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.

```







#### step2：实战（github）

每一次提交之前我们通过 Lint4j、TSLint、ESLint 来进行代码检验

Test一般是指单元测试

```
1. 任务的并行与串行
在 CI 中，互不干扰的任务并行执行，可以节省很大时间。如 Lint 和 Test 无任何交集，就可以并行执行。

但是 Lint 和 Test 都需要依赖安装 (Install)，在依赖安装结束后再执行，此时就是串行的。
「而进行串行时，如果前一个任务失败，则下一个任务也无法继续。即如果测试无法通过，则无法进行 Preview，更无法上线。」

```

node文件

```js
const axios = require('axios')
var nodemailer = require('nodemailer');
function getApi(address) {
    return new Promise((resolve) => {
        axios
            .get('https://restapi.amap.com/v3/geocode/geo', {
                params: {
                    key: '02173ea51a9245ef63966988c96a3a67',
                    address,
                },
            })
            .then((resX) => {
                axios
                    .get('https://restapi.amap.com/v3/weather/weatherInfo', {
                        params: {
                            key: '02173ea51a9245ef63966988c96a3a67',
                            city: +resX.data.geocodes[0].adcode,
                        },
                    })
                    .then((res) => {
                        resolve(res.data)
                    })
            })

    })
}

async function main() {
    let params = "广东省广州市天河区";
    let res = await getApi(params)
    console.error("天气：", res.lives[0].temperature)
    // 创建一个SMTP客户端配置
    var config = {
        host: 'smtp.qq.com',//网易163邮箱 smtp.163.com
        port: 465,//网易邮箱端口 25
        auth: {
            user: '3451613934@qq.com', //邮箱账号
            pass: 'exhpspuprkyecidd'  //邮箱的授权码
        }
    };
    // 创建一个SMTP客户端对象
    var transporter = nodemailer.createTransport(config);
    // 发送邮件
    function send(mail) {
        transporter.sendMail(mail, function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('mail sent:', info.response);
        });
    };
    // 创建一个邮件对象
    var mail = {
        // 发件人
        from: '3451613934@qq.com',
        // 主题
        subject: "天气： "+res.lives[0].temperature,
        // 收件人
        to: '895361337@qq.com',
        // 邮件内容，HTML格式
        text: res.lives[0].temperature //可以是链接，也可以是验证码
    };
    send(mail);
}

main()


```





.github/workflows

```yaml
# 关于本次 workflow 的名字
name: CI

# 执行 CI 的时机: 当 git push 代码到 github 时
on:
#   schedule:  # 每天8：30做一些事情
#     - cron:  '30 8 * * *'
  push:
    branches: [ "main" ]
  pull_request: 
    branches: [ "main" ] 
    types: 
      # 当新建了一个 PR 时 # 当提交 PR 的分支，未合并前并拥有新的 Commit 时
      - opened
      - synchronize

# 执行所有的 jobs
jobs:

  #命名成lint
  lint:
    runs-on: ubuntu-latest
    steps:
      # 切出代码，使用该 Action 将可以拉取最新代码
      #- uses: actions/checkout@v2

      # 配置 node.js 环境，此时使用的是 node14
      # 注意此处 node.js 版本，与 Docker 中版本一致，与 package.json 中 engines.node 版本一致
      # 如果需要测试不同 node.js 环境下的表现，可使用 matrix
      # uses: actions/checkout@v2  这玩意可以在 ubuntu-20.04, ubuntu-18.04,上进行测试
      - name: Setup Node
        uses: actions/checkout@v2
        with:
          node-version: 14.x.
      # 安装依赖
      - name: Install Dependencies
        run: npm install 
      # 在 cra 中，使用 npm run lint 来模拟 ESLint
      - name: ESLint
        run: npm run lint
      # 测试这玩意
      - name: node脚本获取天气
        run: node test.js
      # 在 npm audit --json
      - name: audit依赖包扫描
        run: npm audit --json
      #运行一段脚本试试水
      - name: Run a one-line script
        run: echo Hello, world!
      
  #命名成error
  error:
    runs-on: ubuntu-latest
    steps:
      # 运行bash试试水
      - name: Run a multi-line script
        shell: bash
        run: |
          sh pulish001.sh
```



#### step3：实战（gitee） 不行放弃

```yaml
version: '1.0'
name: 测试
displayName: MasterPipeline
stages:
  - stage: 
    name: compile
    displayName: 编译
    steps:
      - step: build@nodejs
        name: build_nodejs
        displayName: Nodejs 构建
        # 支持8.16.2、10.17.0、12.16.1、14.16.0、15.12.0五个版本
        nodeVersion: 14.16.0
        # 构建命令：安装依赖 -> 清除上次打包产物残留 -> 执行构建 【请根据项目实际产出进行填写】
        commands:
          - npm install      
  - stage: 
    name: release
    displayName: lint测试
    steps:
      - step: publish@release_artifacts
        name: publish_release_artifacts
        displayName: '发布'
        commands:
          - npm run lint 
triggers:
  push:
    branches:
      include:
        - master



```



#### step4：高级CI检查

除了上面的lint和test 检查外

1.npm audit 

可以分析不安全的依赖以及不是可能有问题的依赖





### 1.0.5 git hook（husky）



#### hook demo

为了代码的规范有必要进行 log 规范化检查。而检查的入口可以从 git hook 切入，而 git hook 却又有无限的遐想。

钩子都被存储在 Git 目录下的 hooks 子目录中。 也即绝大部分项目中的 `.git/hooks`，默认存在的都是示例，其名字都是以 `.sample` 结尾，如果你想启用它们，得先移除这个后缀。把一个正确命名且可执行的文件放入 Git 目录下的 hooks 子目录中，即可激活该钩子脚本。 这样一来，它就能被 Git 调用。

你可以用来检查消息、检查代码，可以用来触发任意流程，譬如自动规范检查等等

```js
有两种类型的hook

一种是服务端的hook，  receive之类的
一种是客户端的hook。precommiit之类的

有几种钩子的情况
msg(应用程序消息)
pre(应用前批处理)
post(应用程序批处理后)

hook，这其实是计算机领域中一个很常见的概念，hook 翻译过来的意思是钩子或者勾住，而在计算机领域中则要分为两种解释:

拦截消息，在消息到达目标前，提前对消息进行处理
对特定的事件进行监听，当某个事件或动作被触发时也会同时触发对应的 hook
也就是说 hook 本身也是一段程序，只是它会在特定的时机被触发。

在提交的规范中我们一般有以下的规范
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动


```





**一段好用的可以自动更新版本的工具js **package_version_auto_add.js

```js
const execSync = require('child_process').execSync
const path = require('path')
const fs = require('fs')

console.log('------------ 开发自动升级package.json版本号 ------------');

const projectPath = path.join(__dirname, './')

const packageJsonStr = fs.readFileSync('./package.json').toString()

try {
    const packageJson = JSON.parse(packageJsonStr)
    // 升级版本号
    const arr = packageJson.version.split('.')
    if (arr[2] < 9) {
        arr[2] = +arr[2] + 1
    } else if (arr[1] < 9) {
        arr[1] = +arr[1] + 1
        arr[2] = 0
    } else {
        arr[0] = +arr[0] + 1
        arr[1] = 0
        arr[2] = 0 
    }
    const newVersion = arr.join('.')
    packageJson.version = newVersion

    // console.log(packageJson);

    fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, '\t'))

    // add new package.json
    execSync(`git add package.json`)
} catch (e) {
    console.error('处理package.json失败，请重试', e.message);
    process.exit(1)
}



```

就是我们如果进行了git代码提交后，git上面的源码并不会得到保留

#### **因此这里我们要用到husty**

husky的原理是在.git/config文件的[core]中添加 hooksPath = .husky就是原理了

官网：https://typicode.github.io/husky/#/?id=manual

step1:初始化

```js
命令行中
npm install husky@8 -D
package.json中添加
"scripts": {	
    "prepare": "husky install",
},
        
```

npm run prepare，构建一般目录 ~的这个目录直接删掉就好了

step2：添加钩子

我们还可以在husky文件夹下面新建precommit，我们写入

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint
是一样的效果
```



校验名字-这玩意我写的贼牛皮-.husk//commit-msg

```python
#!/usr/bin/env python
# coding=utf-8
#
# commit msg check
import sys
import re
import io
import os
if hasattr(sys.stdout, 'buffer'):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

TIPS_INFO = '''
不符合commit规范,提交失败!

commit规范:
类型 详细消息-具体请看readme

规范样例：
feat:类型是feat表示在代码库中新增了一个功能 git commit -m "feat: 增加了xxx功能"

！！！！提交失败！！！！
'''

def check_commit_line1_format(msg):
    print(msg)
    # regOther = r'\S{5,} (.){10,100}' ^fix:|^feat: ((修复了)|(增加了))(.){2,100}功能
    regOther = r'^fix|^feat|^docs|^style|^refactor|^test|^chore (.){1,100}'
    matchObj = re.match(regOther, msg)
    return matchObj

if __name__=="__main__":
    # print("进行lint扫描")
    # os.system("npm run lint")
    # print("进行audit扫描")
    # os.system("npm audit")
    print("--------husky校验中--------")
    # print(sys)
    with open(sys.argv[1], 'r',encoding="utf-8") as f:
        for line in f:
            if (check_commit_line1_format(line)):
                sys.exit(0)
            else:
                print(TIPS_INFO)
                sys.exit(1)

```





### 1.06  npx 和 npm

区别1.一个永久存在，一个临时安装，用完后删除

区别2.npx 会帮你执行依赖包里的二进制文件。

区别3.npx可以执行文件，但是npm不可以



### 1.07 eslint 配置(格式化工具)

根目录下面新建.eslintrc.js

step1:eslint安装初始化

```
npm i eslint@7.32 -D
```





package.json中

```json
写入
"scripts": {
		"eslint:check": "eslint src/*.vue"
		"eslint:check": "eslint ./" //就是检查所有的东西	，这一部分依赖于package.json同级目录下面的.eslintrc.js文件
},
```



step2：

.eslintrc.js中,我们在这里配置具体的规则

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // 额外添加的规则可查看 https://vuejs.github.io/eslint-plugin-vue/rules/
    'plugin:vue/essential', //加了这个才能当作vue来进行解析，不然只会当成js来进行解析
  ],

  //不加这个会报错Parsing error: The keyword 'import' is reserved
  parserOptions: {
    // 指定解析器 parser
    "ecmaVersion": 7,
    "sourceType": "module"
    // parser: 'babel-eslint',
    // sourceType: 'module',
    // ecmaVersion: 12,
    // allowImportExportEverywhere: true, // 不限制eslint对import使用位置
  },
  settings: {

  },
  // 取消没必要的校验 0 是 不报错 ， 1是warn 2 是punishing

  // "off"或者0    //关闭规则关闭
  // "warn"或者1    //在打开的规则作为警告（不影响退出代码）
  // "error"或者2    //把规则作为一个错误（退出代码触发时为1）
  rules: {
    // "camelcase": ["error", { "allow": ["aa_bb"] }],  // 属性名
    // "max-lines": ["error", {"max": 20, "skipComments": true}], // 每一个文件最多的行数
    // "no-console": 2,//禁止使用console

    // "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
    // "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
    // "no-multi-spaces": 1,//不能用多余的空格

    // "indent": [1, 4],//缩进风格 缩进四个空格
    "max-lines-per-function": [0, { "max": 2 }], // 指定每个function最多多少行
    "no-unused-vars":1, //没被使用
    'consistent-return': 0, // 有函数返回值
    'no-underscore-dangle': 0, // 不允许有下划线
    'no-plusplus': 1, // 不能用++
    'no-eval': 0, // 不能用eval
    'linebreak-style': [0, 'error', 'window'], // 换行风格
    'camelcase': 'warn',  //像是xx_xx这种会报错
  },
};


```





package.json里面，这里是为了vue运行的时候在里面添加校验的东西------后来发现靠webpack检验不是很靠谱，会有延迟的现象。于是就在vs code下面下载eslint插件还更好用一点。eslint v2.2.2 插件

```json
"eslintConfig": {
		"root": true,
		"env": {
			"node": true
		},
		"extends": [
			"plugin:vue/essential",
			"eslint:recommended"
		],
		"parserOptions": {
			"parser": "@babel/eslint-parser"
		},
		"rules": {
			
			"max-lines-per-function": [0, { "max": 2 }],
			"no-unused-vars":1, 
			"consistent-return": 0, 
			"no-underscore-dangle": 0, 
			"no-plusplus": 1, 
			"no-eval": 0, 
			"linebreak-style": [0, "error", "window"], 
			"camelcase": "warn"
		  }
	},
```



step3:如果说是遇到了奇怪的eslint报错，可以新建.eslintignore文件把他忽略就行了

```js
*.js
```











### 1.08 prettier 安装



step1:安装prettier

```
npm i -D eslint-config-prettier@8.5 eslint-plugin-prettier@4.0 prettier@2.6.2 prettier-eslint-cli@5.0.1
```



安装了之后我们在vscode中下载prettic eslint 5.0.4

step2: 新建.prettierrc.js我们 ，如果要进行内容实时的更新。我们点击一下右下角的按钮就可以刷新

```js
module.exports = {
  // 最大长度160个字符
  printWidth: 120,
  // 行末分号
  semi: false,
  // 单引号
  singleQuote: false,
  // JSX双引号
  jsxSingleQuote: false,
  // 尽可能使用尾随逗号（包括函数参数）
  trailingComma: 'none',
  // 在对象文字中打印括号之间的空格。
  bracketSpacing: true,
  // > 标签放在最后一行的末尾，而不是单独放在下一行
  jsxBracketSameLine: false,
  // 箭头圆括号
  arrowParens: 'avoid',
  // 在文件顶部插入一个特殊的 @format 标记，指定文件格式需要被格式化。
  insertPragma: false,
  // 缩进
  tabWidth: 2,
  // 使用tab还是空格
  useTabs: false,
  // 行尾换行格式
  endOfLine: 'auto',
  HTMLWhitespaceSensitivity: 'ignore'
}

```





### 1.09 lint-staged

在代码提交之前，进行代码规则检查能够确保进入git库的代码都是符合代码规则的。但是整个项目上运行lint速度会很慢，lint-staged能够让lint只检测暂存区的文件，所以速度很快。

step1:初始化

```
npm install lint-staged@11.1.2 -D
```



step2：package.json添加

```js
{
	"name": "vue_helloworld",
	"version": "0.1.3",
	"scripts": {
		"serve": "cross-env NODE_ENV=production vue-cli-service serve",
		"dev": "vue-cli-service serve --mode=development",
		"build": "vue-cli-service build",
		"lint": "vue-cli-service lint",
		"analyz": "webpack-bundle-analyzer --port 8888 ./dist/stats.json",
		"test": "node test.js",
		"prepare": "husky install",
		"lint-staged": "lint-staged",
		"eslint:check": "eslint ./",
		"package_version_auto_add": "node package_version_auto_add.js"
		
	},
	"dependencies": {
		"@popperjs/core": "^2.11.6",
		"@swc/core": "1.3",
		"axios": "^0.27.2",
		"babel-eslint": "^10.1.0",
		"bootstrap": "^5.1.3",
		"core-js": "^3.8.3",
		"echarts": "^5.3.2",
		"element-ui": "^2.15.8",
		"frontutilpackage": "0.0.1",
		"less": "^4.1.2",
		"less-loader": "^11.0.0",
		"nodemailer": "^6.7.8",
		"qs": "^6.11.0",
		"swc": "^1.0.11",
		"swc-loader": "^0.1.16",
		"vue": "^2.6.14",
		"vue-router": "^3.1.3",
		"vuex": "^3.6.2",
		"webpack": "5.2"
	},
	"devDependencies": {
		"@babel/core": "^7.12.16",
		"@babel/eslint-parser": "^7.12.16",
		"@vue/cli-plugin-babel": "~5.0.0",
		"@vue/cli-plugin-eslint": "~5.0.0",
		"@vue/cli-service": "~5.0.0",
		"cross-env": "^7.0.3",
		"eslint": "^7.32.0",
		"eslint-plugin-vue": "^8.0.3",
		"husky": "^8.0.1",
		"jquery": "^3.6.0",
		"lint-staged": "^11.1.2",
		"prettier": "^2.7.1",
		"terser-webpack-plugin": "^5.3.6",
		"thread-loader": "^3.0.4",
		"vue-template-compiler": "^2.6.14",
		"webpack-bundle-analyzer": "^4.6.1"
	},
	"husky": {
		
	},
	"lint-staged": {
		"*.js": [
			"npm run test",
			"git add"
		],
		"*.vue": [
			"npm run lint",
			"git add"
		]
	},
	"browserslist": [
		"> 1%",
		"last 2 versions",
		"not dead"
	]
}

```



step3:**创建 .lintstagedrc**

```js
{
    "src/**/*.{js,ts,tsx,vue}": "npm run lint:eslint",
    "src/**/*.{vue,css,scss}": "npm run lint:stylelint"
}
------------------------
{
    "*.{js,ts,tsx,vue}": "npm run package_version_auto_add",
   
}

{
    
    "./src/*.vue": "npm run eslint:check"
}

```



step4 :注意 eslint ecmaVersion不用8的话async await会报错



```js
// npm install babel-eslint --save
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // 额外添加的规则可查看 https://vuejs.github.io/eslint-plugin-vue/rules/
    'plugin:vue/essential', //加了这个才能当作vue来进行解析，不然只会当成js来进行解析
  ],

  //不加这个会报错Parsing error: The keyword 'import' is reserved
  parserOptions: {
    // 指定解析器 parser
    "ecmaVersion": 8,
    "sourceType": "module",
    // "parser": 'babel-eslint',
    // sourceType: 'module',
    // ecmaVersion: 12,
    // allowImportExportEverywhere: true, // 不限制eslint对import使用位置
  },
  settings: {

  },
  // 取消没必要的校验 0 是 不报错 ， 1是warn 2 是punishing

  // "off"或者0    //关闭规则关闭
  // "warn"或者1    //在打开的规则作为警告（不影响退出代码）
  // "error"或者2    //把规则作为一个错误（退出代码触发时为1）
  rules: {
    // "camelcase": ["error", { "allow": ["aa_bb"] }],  // 属性名
    // "max-lines": ["error", {"max": 20, "skipComments": true}], // 每一个文件最多的行数
    // "no-console": 2,//禁止使用console

    // "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
    // "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
    // "no-multi-spaces": 1,//不能用多余的空格

    // "indent": [1, 4],//缩进风格 缩进四个空格
    // "max-lines-per-function": [0, { "max": 2 }], // 指定每个function最多多少行
    "no-unused-vars":1, //没被使用
    'consistent-return': 0, // 有函数返回值
    'no-underscore-dangle': 0, // 不允许有下划线
    'no-plusplus': 1, // 不能用++
    'no-eval': 0, // 不能用eval
    'linebreak-style': [0, 'error', 'window'], // 换行风格
    'camelcase': 'warn',  //像是xx_xx这种会报错
  },
};


```



step5:husty/pre-commit 中写入



```sh
#!/usr/bin/env sh


# npm run lint
# npm run lint-staged
```







## 1.1 关于打包的问题





### 1.1.1正向代理的时候，

换句话说，正常前端后端交互的时候。我们在打包的时候要注意把router的模式设置成hash(#)模式。

### 1.1.2 打包文件相对路径

然后我们要在vue.config.js中的module.exports =添加如下

```js
// 打包输出文件的相关配置
  // publicPath : __dirname + '/static/' 表示publicpath(资源引入路径)为绝对路径
  // publicPath: '/' 资源引入从根目录开始
    publicPath: './'// 代表相对路径
```







### 1.1.3.打包的时候cjs、esm、umd的区别

cjs：commonjs` 是 Node 中的模块规范，通过 `require` 及 `exports进行导入导出 (进一步延伸的话，`module.exports` 属于 `commonjs2`)。webpack 也对 `cjs` 模块得以解析，但不能在浏览器中*直接*使用。但如果你写前端项目在 webpack 中，也可以理解为它在浏览器和 Node 都支持。这就也是了很多时候我们cdn引入的时候报错的原因

esm：`esm` 是 tc39 对于 ESMAScript 的模块话规范，正因是语言层规范，**因此在 Node 及 浏览器中均会支持**，使用 `import/export` 进行模块导入导出.。esm比cjs好很多的。esm 是编译时加载，输出的是值的引用 。cjs 模块是运行时加载，cjs 模块输出的是一个值的拷贝



umd：兼容cjs和esm都可以



### 1.1.4.TreeShaking的意思

*Tree* *Shaking* 指的就是当我引入一个模块的时候,我不引入这个模块的所有代码,我只引入我需要的代码。这就需要借助 webpack 里面自带的 *Tree* *Shaking* 这个功能来帮我们实现



### 1.1.5.AST的意思

（抽象语法树（*Abstract Syntax Tree*，AST）-用于类型转化）



1. 如何将 Typescript 转化为 Javascript (typescript)
2. 如何将 SASS/LESS 转化为 CSS (sass/less)
3. 如何将 ES6+ 转化为 ES5 (babel)
4. 如何将 Javascript 代码进行格式化 (eslint/prettier)
5. 如何识别 React 项目中的 JSX (babel)
6. GraphQL、MDX、Vue SFC 等等

而在语言转换的过程中，实质上就是对其 AST 的操作，核心步骤就是 AST 三步走

1. Code -> AST (Parse)
2. AST -> AST (Transform)
3. AST -> Code (Generate)











## 1.2 打包js文件

step1：先npm install webpack@3.6.0 --save-dev

step2：package.json的script中添加命令 webpack，我是webpack:webpack.  然后cmd命令行通过npm run webpack来进行webpack操作

step3：新建webpack.config.js，写入如下代码

```js
const path = require('path'); // 依赖node动态获取路径

module.exports = {
//   entry: './src/main.js',    // 入口，也就是要打包的js
  entry: './eslintrc.js',   
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'    // 出口，打包生成的js.到dist下面的bundle.js
  },
}

```

## 1.3  打包css文件，less文件，图片

1、在入口js（main.js）添加：require(’./css/normal.css’) 

```js
require(’./css/special.less’)
require(’./css/normal.css’)
```



2、安装css

```js
//css打包
npm install --save-dev css-loader
npm install --save-dev style-loader

//less打包
npm install --save-dev less-loader less

//打包图片（小的）
npm install --save-dev url-loader
//打包图片（大的）
npm install file-loader

//es6转化成es5
npm install --save-dev babel-loader@7 babel-core babel-preset-es2015

```



## 1.4webpack小知识

一般的webpack  vue.config.js长这样

```
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "/" },
        changeOrigin: true,
      },
    },
  },
  
 
};

```

vue.config.js文件

```JS
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
const TerserPlugin = require("terser-webpack-plugin");
console.log("当前的环境")
console.log(process.env.NODE_ENV, "当前的环境")
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",

  
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "/" },
        changeOrigin: true,
      },

    },

  },
  chainWebpack: config => {
    //知识点1：添加入口
    config.entryPoints.clear() // 会把默认的入口清空
    config.entry('main').add('./src/main.js')//新增入口
    // config.entry('routes').add('./src/app-routes.js')//新增入口

    //知识点2：设置alias
    // 如果我们在工程中直接用alias，例如  <img src="_/img/logo.png" alt="">会找不到目录
    // 我们只需要在引用路径的字符串最前面添加上 ~ 符号，例如 <img src="~_/img/logo.png" alt="">
    config.resolve.alias
      .set('_', resolve('src/webpackTest'))

    // .delete('base') // 删掉指定的别名
    // .clear()  会把所有别名都删掉

    //知识点3：我们都说在打包的时候不要生成source map，
    // 那么source amp的作用

    // 当 webpack 打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。例如，如果将三个源文件（a.js, b.js 和 c.js）打包到一个 bundle（bundle.js）中，
    // 而其中一个源文件包含一个错误，
    // 那么堆栈跟踪就会简单地指向到 bundle.js。这并通常没有太多帮助，因为你可能需要准确地知道错误来自于哪个源文件。
    // 为了更容易地追踪错误和警告，JavaScript 提供了 source map 

    //知识点4：修改代理的proxy,这玩意上线后代理会消失
    // 如果要做代理还是好好的在后端配置,config.devServer.port(8888)可以自动打开这个端口
    // config.devServer.port(8888)
    //   .open(true)
    //   .proxy({
    //     '/api': {
    //       target: 'http://123.57.153.106:8080/',
    //       changeOrigin: true,
    //       pathRewrite: {
    //         '^/dev': ''
    //       }
    //     }
    //   })

    //知识点5：插件的添加，这里还要看一下
    // // 5.1添加API
    // const fileManager = require("filemanager-webpack-plugin");
    //注意：use部分，不能使用new的方式创建插件实例
    // webpackConfig.plugin("zip").use(fileManager, [
    //   {
    //     onEnd: {
    //       archive: [
    //         {
    //           source: "dist",
    //           destination: zipName
    //         }
    //       ]
    //     }
    //   }
    // ]);

    // 5.2修改插件参数// 一个例子 //使用tag修改参数
    // config.plugin('env').tag(args => [...args, 'SECRET_KEY']);

    // 5.3移除 preload 插件
    // config.plugins.delete('preload');

    // 5.4在xx插件前调用/在xx插件之后调用 ScriptExtWebpackPlugin插件在HtmlWebpackTemplate插件前调用
    // config.plugin('html-template').use(HtmlWebpackTemplate).end().plugin('script-ext').use(ScriptExtWebpackPlugin).before('html-template');
    // html-template在script-ext之后调用
    // config.plugin('html-template').after('script-ext').use(HtmlWebpackTemplate).end().plugin('script-ext').use(ScriptExtWebpackPlugin);

    // optimizations 优化器
    // config.optimization({chunkIds: 'named'})

    //知识点6：用when做条件
    // config
    //   .when(process.env.NODE_ENV === 'production',
    //     config => config.plugin('minify').use(BabiliWebpackPlugin),
    //     config => config.devtool('source-map')
    //   );
  },


  // webpack 相关的配置需要写到 configureWebpack 如果直接
  configureWebpack: {
    entry: {
      // app: './src/index.js',
      // print: './src/print.js'
    },
    // devtool: 'inline-source-map',

    // 知识点7：性能提示
    performance: {
      // hints: "error"     // 超过250kb 的资源 我们掏出错误
      maxAssetSize: 250000 //最大250000 bytes
    },
    // 知识点8：优化器
    optimization: {
      chunkIds: 'named', //1.named选择块 ID 时的算法在编译之间不会更改的短数字 ID。 // 2.'deterministic'选择快 编译的时候默认使用适合长期缓存。生产模式默认启用。 
      //对应着chain模块就是   config.optimization.splitChunks({})  只有splitChunks:里面的参数可以被引用
      splitChunks: {
        // runtimeChunk: "single",  //单独打包，小文件还挺好用的
        chunks: "async", // 必须三选一： "initial" | "all"(推荐) | "async" (默认就是async)
        minSize: 30000, // 最小尺寸，30000 超过30K才独立分包
        minChunks: 1, // 最小 chunk ，默认1
        maxAsyncRequests: 5, // 最大异步请求数， 默认5
        maxInitialRequests: 3, // 最大初始化请求书，默认3
        automaticNameDelimiter: '-',// 打包分隔符
        name: function () { }, // 打包后的名称，此选项可接收 function

        cacheGroups: { // 这里开始设置缓存的 chunks
          priority: false, // 缓存组优先级
          vendor: { // key 为entry中定义的 入口名称
            chunks: "initial", // 必须三选一： "initial"  仅打包同步引用的依赖 | "all" 打包所有的依赖 | "async" 仅打包异步引用的依赖
            test: /react|lodash/, // 正则规则验证，如果符合就提取 chunk
            name: "vendor", // 要缓存的 分隔出来的 chunk 名称 
            minSize: 30000,
            minChunks: 1,
            enforce: true,
            maxAsyncRequests: 5, // 最大异步请求数， 默认1
            maxInitialRequests: 3, // 最大初始化请求书，默认1
            reuseExistingChunk: true // 可设置是否重用该chunk
          },
          elementUI: {
            name: "chunk-elementUI",
            priority: 30,
            test: /[\/]node_modules[\/]_?element-ui(.*)/,
          }
        }
      },
      //  知识点9：代码压缩，使用terser来缩小/最小化你的 JavaScript。 1.首先npm install terser-webpack-plugin --save-dev  2.然后const TerserPlugin = require("terser-webpack-plugin"); 引入代码就好了
      // 对于大多数 JavaScript 来说，空格去除和符号修饰占缩小代码大小的 95%
      //原理
      // 异步注册 compilation.hooks.optimizeChunkAssets
      // 在回调中调用 plugin 实例的 optimise 方法
      // 并行模式：创建 Worker（jest） 进行多进程编译
      // minify 过程调用 terser 库对代码进行处理

      minimize: true,
      minimizer: [],

    },
    //知识点10：添加loader
    module: {
      rules: [
        {
          test: /\.graphql$/,
          use: [
            {
              loader: "graphql-tag/loader"
            }
          ]
        }
      ]
    }
    //知识点11：我们可以通过插件来改变环境变量 process.env.NODE_ENV 
    //  1.npm install npm install --save-dev cross-env
    //  2. package.json中配置 cross-env NODE_ENV=production vue-cli-service serve
    // 3.我们在vue.config.js 中console.log(process.env.NODE_ENV, "当前的环境")
    
    //  chainWebpack添加loader
    // config.module
    // .rule('graphql')
    // .test(/\.graphql$/)
    // .use('graphql-tag/loader')
    //   .loader('graphql-tag/loader')
    //   .end()

    //  chainWebpack修改loader
    // chainWebpack: config => {
    //   config.module
    //     .rule('vue')
    //     .use('vue-loader')
    //       .loader('vue-loader')
    //       .tap(options => {
    //         // 修改它的选项...
    //         return options
    //       })
    // }
  },
};

```



**5.webpack 中的 code spliting 是如何动态加载 chunk 的？**



4、配置：在webpack.config.js中配置

```js
const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // 添加的部分
    module: {
        //这个用来打包css
        rules: [
            {
                test: /\.css$/,
                // css-loader负责将css文件进行加载
                // style-loader负责将样式添加到DOM中
                // 使用多个loader时, 是从右向左
                use: ['style-loader', 'css-loader']
            },
            //这个用来打包less
            {
                test: /\.less$/,
                // 使用多个loader时, 是从右向左
                use: [{
                    loader: "style-loader", // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader", // compiles Less to CSS
                }]
            },
            //用来打包图片
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当加载的图片, 小于limit时, 会将图片编译成base64字符串形式.
                            // 当加载的图片, 大于limit时, 需要使用file-loader模块进行加载.
                            // 图片大小 * 1024 比较 limit
                            limit: 8192,
                            name: 'img/[name].[hash:8].[ext]'
                        },
                    }
                ]
            },
            //用来es6转化成es5
            {
                test: /\.js$/,
                // exclude: 排除
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }

        ]
    }
}

```



## 1.5 生产环境 测试环境 的配置



### 1.首先新建config文件夹，

然后我们写入dev.env.js,test.env.js,pro.env.js(生产环境)

```js
// 开发环境 dev.env.js

module.exports = {
    NODE_ENV: '"development"',
    URL_RSP: 'http://xxx.xxx.xxx.xxx:xxxx',//开发环境下的接口地址，如果有多个地址可以写如下
    URL_IM: 'http://xxx.xxx.xxx.xxx:xxxx',
}
// 测试环境 test.env.js

module.exports = {
    NODE_ENV: '"test"',
    URL_RSP: 'http://xxx.xxx.xxx.xxx:xxxx',
    URL_IM: 'http://xxx.xxx.xxx.xxx:xxxx',
}
// 生产环境 pro.env.js
module.exports = {
    NODE_ENV: '"production"',
    URL_RSP: 'http://xxx.xxx.xxx.xxx:xxxx',
    URL_IM: 'http://xxx.xxx.xxx.xxx:xxxx',
}

devServer可以类似于: {
        disableHostCheck: true,
        proxy: {
            '/xxx/xx/': {
                target: URL_RSP,//这里配置地址
                changeOrigin: true, // 允许跨域
                pathRewrite: {
                    '^/xxx/xx/': '/'
                }
            '/xxx/xxx/': {
                target: URL_IM,//配置地址
                changeOrigin: true, // 允许跨域
                pathRewrite: {
                    '^/xxx/xxx/': '/'
                }
            },
        }
    },
```



### 2.vue.config.js中我们写

```js
var proEnv = require('./src/config/pro.env'); // 生产环境
var testEnv = require('./src/config/test.env'); // 测试环境
var devEnv = require('./src/config/dev.env'); // 本地环境

const env = process.env.NODE_ENV;//当前环境
let URL_RSP = '';//路径
let URL_IM = '';//路径
// 默认是本地环境
if (env === 'production') { // 生产环境
    console.log("----------生产环境----------");
    URL_RSP = proEnv.URL_RSP;
    URL_IM = proEnv.URL_IM;
} else if (env === 'test') { // 测试环境
    console.log("----------测试环境----------");
    URL_RSP = testEnv.URL_RSP;
    URL_IM = testEnv.URL_IM;
} else { // 开发环境
    console.log("----------开发环境----------");
    URL_RSP = devEnv.URL_RSP;
    URL_IM = devEnv.URL_IM;
}

```



### 3. package中配置

 "dev": "vue-cli-service serve --mode=test",



或者  npm install cross-env

"serve": "cross-env NODE_ENV=production vue-cli-service serve",



## 1.6 webpack的原理





**1.webpack 热更新原理：**

hmr原理：1.对文件变化进行监控。2.webpack-dev-server通过sockjs进行hash值的传递 3.HotModuleReplacement.runtime接受到hash 的值后，向 server 端发送jsonp  Ajax 请求，服务端返回一个 json  4.HotModulePlugin加载chunk 将会对新旧模块进行对比，决定是否更新模块

实现原理：chunk` 的方式加载最新的 `modules，找到  webpack_modules 中对应的模块逐一替换，并删除其上下缓存。



**2.webpack数据结构**：

__webpack_modules__: 维护一个所有模块的数组，将入口模块解析为 AST（总的管理员）

**webpack_require**：对已加载过的模块进行缓存，对未加载过的模块定位缓存（优化器）



**3.打包的时候cjs、esm、umd的区别**

cjs：commonjs` 是 Node 中的模块规范，通过 `require` 及 `exports进行导入导出 (进一步延伸的话，`module.exports` 属于 `commonjs2`)。webpack 也对 `cjs` 模块得以解析，但不能在浏览器中*直接*使用。但如果你写前端项目在 webpack 中，也可以理解为它在浏览器和 Node 都支持。这就也是了很多时候我们cdn引入的时候报错的原因

esm：`esm` 是 tc39 对于 ESMAScript 的模块话规范，正因是语言层规范，**因此在 Node 及 浏览器中均会支持**，使用 `import/export` 进行模块导入导出.。esm比cjs好很多的。esm 是编译时加载，输出的是值的引用 。cjs 模块是运行时加载，cjs 模块输出的是一个值的拷贝

umd：兼容cjs和esm都可以



## 1.7 构建性能优化实操



### 1.7.1 更快的js  loader: swc

原理：AST 转换的 loader  当 loader 进行编译时的 AST 操作均为 CPU 密集型任务，使用 Javascript 性能低下，此时可采用高性能语言 rust 编写的 `swc`

step1：npm install swc swc-loader

step2: vue.config.js

```js
module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: "swc-loader",
                    },
                },
            ],
        }
    }
}
```



### 1.7.2 多进程thread-loader

step1:npm 安装包

```
npm install --save-dev thread-loader
```



step2:vue.config.js

```js
module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: "thread-loader",
                            options: {
                                workers: 8,
                            },
                        },
                    ],
                },
            ],

        }
    }
}
```



### 1.7.3 缓存

二次构建避免重复编译

```js
module.exports = {
    configureWebpack: {
        cache: {
            type: 'filesystem',
            allowCollectingMemory: true,
          },
    }
}
```



### 1.7.4 pnpm 

去除了扁平化的结构，使得多个npm包共享一个npm，并且避免了幽灵依赖问题（由于多个链式的依赖导致如果哪一天这个npm不依赖于上一级了，那么就有报错的风险）



改造

step1:删除 `package-lock.json` 文件以及 `node_modules` 目录。 确保通过 `npm i -g pnpm` 安装好 `pnpm` 的前提下，执行 `pnpm install` 安装全部依赖。

step2:出现报错 .因为 `pnpm` 没有自动为我们安装 `peerDependencies`

```
 Peer dependencies that should be installed:
 @popperjs/core@^2.11.6        @swc/core@">=1.2.147 <2.0.0"  webpack@">=5.1.0 <6.0.0"
```

运行

```
pnpm install webpack@5.2 @swc/core@1.3  @popperjs/core@^2.11.6
```



###  1.7.5 DllPlugin

vue.config.js

```js
//webpack.config.dll.js
const webpack = require('webpack');
const path = require('path');
 
module.exports = {
    entry: {
        react: ['react', 'react-dom']
    },
    mode: 'production',
    output: {
        filename: '[name].dll.[hash:6].js',
        path: path.resolve(__dirname, 'dist', 'dll'),
        library: '[name]_dll' //暴露给外部使用
        //libraryTarget 指定如何暴露内容，缺省时就是 var
    },
    plugins: [
        new webpack.DllPlugin({
            //name和library一致
            name: '[name]_dll', 
            path: path.resolve(__dirname, 'dist', 'dll', 'manifest.json') //manifest.json的生成路径
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!dll', '!dll/**'] //不删除dll目录
        })	
    ],
    
}
复制代码
```

package.json

```
{
    "scripts": {
        "dev": "NODE_ENV=development webpack-dev-server",
        "build": "NODE_ENV=production webpack",
        "build:dll": "webpack --config webpack.config.dll.js"
    },
}
复制代码

npm run build:all，
dist
└── dll
    ├── manifest.json
    └── react.dll.9dcd9d.js
之所以将动态链接库单独放在 dll 目录下，主要是为了使用 CleanWebpackPlugin 更为方便的过滤掉动态链接库。

```

html 中

```
<script src="/dll/react.dll.9dcd9d.js"></script>
```





## 1.8  打包体积

### 1.8.1 Terser 压缩

step1：npm install terser-webpack-plugin@4 --save-dev

step2：vue.config.js中写入



```js
//常见的压缩方法 1. 变量名压缩 2. 去除空格换行及注释 3.合并声明

const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    configureWebpack: {
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin({
                terserOptions: {
                    mangle: true, // 混淆，默认也是开的，mangle也是可以配置很多选项的，具体看后面的链接
                    compress: {
                        drop_console: true,//传true就是干掉所有的console.*这些函数的调用.
                        drop_debugger: true, //干掉那些debugger;
                        pure_funcs: ['console.log'] // 如果你要干掉特定的函数比如console.info ，又想删掉后保留其参数中的副作用，那用pure_funcs来处理
                    }
                }
            })],
        }
    }
}
```



### 1.8.2  Tree Shaking

`Tree Shaking` 指基于 ES Module 进行静态分析，通过 AST 将用不到的函数进行移除，从而减小打包体积。

这个 要去  npm.devtool.tech 查看这个库是不是支持treeshaking





### 1.8.3  垫片体积大小

**一些小问题**

 core-js

是关于 ES 标准最出名的 `polyfill`，polyfill 意指当浏览器不支持某一最新 API 时，它将帮你实现，中文叫做垫片。你也许每天都与它打交道，但你毫不知情。

由于低浏览器版本的存在，垫片是必不可少的

垫片越少，则打包体积越小

浏览器版本越新，则垫片越少



browserslist 用特定的语句来查询浏览器列表

```js
用特定的语句来查询浏览器列表，如 last 2 Chrome versions
```

假设项目只需要支持最新的两个谷歌浏览器。那么关于 `browserslist` 的查询，可以写作 `last 2 Chrome versions`。

```json
类似的配置我们可以看到package.json
{
  "name": "vue_helloworld",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "cross-env NODE_ENV=production vue-cli-service serve",
    "dev": "vue-cli-service serve --mode=development",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "analyz": "webpack-bundle-analyzer --port 8888 ./dist/stats.json"
  },
  "dependencies": {
    "axios": "^0.27.2",
    "bootstrap": "^5.1.3",
    "core-js": "^3.8.3",
    "echarts": "^5.3.2",
    "element-ui": "^2.15.8",
    "less": "^4.1.2",
    "less-loader": "^11.0.0",
    "swc": "^1.0.11",
    "swc-loader": "^0.1.16",
    "vue": "^2.6.14",
    "vue-router": "^3.1.3",
    "vuex": "^3.6.2"
  },

  "browserslist": [
    "> 1%",  //在全球用户份额大于 1% 的浏览器
    "> 5% in CN"//: 在中国用户份额大于 5% 的浏览器
    "last 2 versions", //所有浏览器中最新的两个版本
    "not dead"  //官方不在维护已过两年 如ie
  ]
}

```



### 1.8.4 永久缓存 

webpack中设置

```bash
module.exports = {
    configureWebpack: {
        optimization: {
            chunkIds: 'deterministic'
          }
      }
 }
```

通过在服务器端/网关端对资源设置以下 Response Header，进行强缓存一年时间，称为永久缓存，即 `Long Term Cache`。

### 1.8.5 分包 

一个页面仅仅需要 `bundle.js` 中 1/N 的代码，剩下代码属于其它页面，完全没有必要加载

问：那如果一个模块被用了多次 (2 次以上)，但是该模块体积过大(1MB)，每个页面都会加载它(但是无必要，因为不是每个页面都依赖它)，导致性能变差，此时如何分包？

答：如果一个模块虽是公共模块，但是该模块体积过大，可直接 `import()` 引入，异步加载，单独分包，比如 `echarts` 等

问：如果公共模块数量多，导致 vendor.js 体积过大(1MB)，每个页面都会加载它，导致性能变差，此时如何分包

控制 vendor.js 的体积，当大于 100KB 时，再次进行分包，多分几个 vendor-XXX.js，但每个 vendor.js 都不超过 100KB

```js
optimization: {
      chunkIds: 'named', //1.named选择块 ID 时的算法在编译之间不会更改的短数字 ID。 // 2.'deterministic'选择快 编译的时候默认使用适合长期缓存。生产模式默认启用。 
      //对应着chain模块就是   config.optimization.splitChunks({})  只有splitChunks:里面的参数可以被引用
      splitChunks: {
        // runtimeChunk: "single",  //单独打包，小文件还挺好用的
        chunks: "async", // 必须三选一： "initial" | "all"(推荐) | "async" (默认就是async)
        minSize: 30000, // 最小尺寸，30000 超过30K才独立分包
        minChunks: 1, // 最小 chunk ，默认1
        maxAsyncRequests: 5, // 最大异步请求数， 默认5
        maxInitialRequests: 3, // 最大初始化请求书，默认3
        automaticNameDelimiter: '-',// 打包分隔符
        name: function () { }, // 打包后的名称，此选项可接收 function

        cacheGroups: { // 这里开始设置缓存的 chunks
          priority: false, // 缓存组优先级
          vendor: { // key 为entry中定义的 入口名称
            chunks: "initial", // 必须三选一： "initial"  仅打包同步引用的依赖 | "all" 打包所有的依赖 | "async" 仅打包异步引用的依赖
            test: /react|lodash/, // 正则规则验证，如果符合就提取 chunk
            name: "vendor", // 要缓存的 分隔出来的 chunk 名称 
            minSize: 30000,
            minChunks: 1,  //最小被引用
            enforce: true,
            maxAsyncRequests: 5, // 最大异步请求数， 默认1
            maxInitialRequests: 3, // 最大初始化请求书，默认1
            reuseExistingChunk: true // 可设置是否重用该chunk
          },
          elementUI: {
            name: "chunk-elementUI",
            priority: 30,
            test: /[\/]node_modules[\/]_?element-ui(.*)/,  /[\\/]node_modules[\\/]_?element-ui(.*)/ 
          }
        }
      },
```





### 1.8.6 css压缩

```js
npm install cssnano --save-dev
npm install postcss-cli  --save-dev
npm install optimize-css-assets-webpack-plugin --save-dev
npm install postcss@8 --save-dev
npm install postcss-import@12  --save-dev
npm install postcss-url@9  --save-dev   

vue.config.js //  module.exports =   / configureWebpack: / plugins
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.scss$/g,
    cssProcessor: require('cssnano'),
    // cssProcessorOptions: cssnanoOptions,
    cssProcessorPluginOptions: {
        preset: ['default', {
            discardComments: {
                removeAll: true,
            },
            normalizeUnicode: false
        }]
    },
    canPrint: true
}),

```



### 1.8.7 image压缩

```
node16.18.0 才可以
npm install -g cnpm -registry=https://registry.npm.taobao.org
cnpm install imagemin-gifsicle --save-dev
cnpm install imagemin-mozjpeg --save-dev
cnpm install imagemin-optipng --save-dev
cnpm install imagemin-pngquant --save-dev
cnpm install pngquant-bin --save-dev
cnpm install image-webpack-loader --save-dev
cnpm install imagemin-gifsicle --save-dev
cnpm install mozjpeg --save-dec

node 14.6.1的包，cnpm用不了。

用nvm切换到node 16.18.0之后. cnpm 可以运行。但是npm run build报错，这时nvm use 14.6.1切换回14版本。

这个时候才能build


```









## 1.9 体积速度分析

###  1.9.1 webpack-bundle-analyzer

原理是根据 webpack 打包后的 Stats 数据进行分析



<!-- <img src="E:/blog/frontSupperKnowBlog/docs/know/img/前端工程化.png"> -->



step1:npm install --save-dev webpack-bundle-analyzer

step2: vue.config.js

```js
//分析打包大小
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: 'disabled', // 每次构建时自动打开server  手动打开 disabled
                generateStatsFile: true, // 是否生成stats.json文件
                statsOptions: { source: false },
            }),
        ],
    }
}
```

step3: npm run build  后我们在package.json中写入 webpack-bundle-analyzer --port 8888 ./dist/stats.json  就完成了



### 1.9.2 speed-measure-webpack-plugin

这玩意可以评估每一个loader/plugin的耗时









## 2.0   自己编写loader和plugin

如果你在社区找不到你的应用场景的解决方案，那就需要自己动手了写loader或者plugin了。
在你编写自定义webpack扩展前你需要想明白到底是要做一个`loader`还是`plugin`呢？可以这样判断：

```
如果你的扩展是想对一个个单独的文件进行转换那么就编写loader剩下的都是plugin。
babel-loader把es6转为es5；

编写Loader时要遵循单一原则，每个Loader只做一种"转义"工作。 每个Loader的拿到的是源文件内容（source），可以通过返回值的方式将处理后的内容输出，也可以调用this.callback()方法，将内容返回给webpack。 还可以通过 this.async()生成一个callback函数，再用这个callback将处理后的内容输出出去。

Plugin的编写就灵活了许多。 webpack在运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。
```



plugin太难了，就不编写了。

说一下loader吧。

根目录下面新建loader/replaceLoader.js

```js
module.exports = function (source) {
  //不能为箭头函数一定要这个格式,参数为引入文件的原代码
  // console.log("loader之中获取的参数",this.query)
  // 需求1：在编译阶段，把index.js里面的{{ __path__ }}转化为我们真正需要的路径
  // result=source.replace('{{ __path__ }}', 'electrolux')
  // return  result
  //this.callback 也是官方提供的API，替代return
  // this.callback(null, result); content  sourceMap
  // this.callback能传递以下四个参数.第三个参数和第四个参数可以不填.this.callback传递的参数会发送给下一个loader函数接受,每一个loader函数形成了流水线上的一道道工序,最终将代码处理成期待的结果.
  // 万一loader函数里面需要做一些异步的操作就要采用如下方式.
  //上一个loader可能会传递sourceMap和meta过来,没穿就为空
  //   module.exports = function (content, sourceMap, meta) {
  //     const callback = this.async()
  //     setTimeout(() => {
  //       // 模拟异步操作
  //       callback(null, content)
  //     }, 1000)
  //   }
  return source
}

```



vue.config.js 中写入

```js
module.exports = {
	module:{
		{
          test: /\.js$/,
          use: [
            {
              loader: path.resolve(__dirname, "./loaders/replaceLoader.js"),
              options: {
                name: "我的名字是electrolux "
              }
            }
          ]
        }
	}
}


```
















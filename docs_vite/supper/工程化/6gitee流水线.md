# 6.gitee go流水线



**重要：这玩意连接电脑或者打印日志不能通过设置ssh连接。必须要设置主机组。日志组的设置在linux上要sudo，在window上面要powershell**

https://gitee.com/features/gitee-go 中开通，或者具体的项目中开通gitee go

当我们选择用node.js的方式进行创建的时候会生成master-pipeline.yml

## 6.1 开通gitee 流水线

```js
此时会产生一次提交并生成流水线
我们可以看到有图形化配置和代码视图的配置。比较重要的的是
//1.triggers：什么时候触发-触发事件
//2.主要的关系：stages-下方可以有多个阶段。阶段的名字叫做name/displayname。阶段下面我们定义任务。任务我们定义在steps这个集合里面，分别的任务叫做并行任务
commands:
- '# 新建build目录，切换到build目录'
    - 'mkdir build && cd build '
    - '# 生成Unix平台的makefiles文件并执行构建'
    - cmake -G 'Unix Makefiles' ../ && make -j
//如果阶段下面有多个任务我们叫做并行任务
```





## 6.2示例

```yaml
version: '1.0'
name: pipeline-20221104
displayName: 输出
triggers:
  trigger: auto
  push:
    branches:
      prefix:
        - ''
stages:
  - name: stage-14a2cd9a
    displayName: 输出
    strategy: naturally
    trigger: auto
    executor: []
    steps:
      - step: shell@agent
        name: execute_shell
        displayName: Shell 脚本执行
        hostGroupID:
          ID: test
          hostID:
            - e53bd97b-a0d6-4b28-b037-13e24066e1e1
        script:
          - echo 'Hello Gitee!'
        notify: []
        strategy:
          retry: '0'

```






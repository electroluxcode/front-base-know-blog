# 7.tensorFlow.js

[[toc]]

## 7.1   tensorFlow.js | 基础



### 7.1.1 Tensors (张量)

```js
--1.Tensors (张量)：类似于js的数组，用来放数据的。不能改变它们的值
 shape：类似于js的length，简单理解成输出几位几行的函数
 
tf.scalar（零维）, tf.tensor1d（一维）, tf.tensor2d（二维）, tf.tensor3d（三维）、tf.tensor4d（四维）以及 tf.ones（值全是1）或者tf.zeros（值全是0）

const shape = [2, 3] // 2维2行3列
const a = tf.tensor([1, 2, 3, 4, 5, 6], shape)
a.print()
 
const b = tf.tensor([[1, 2, 3] ,[4, 5, 6]])
b.print()


```





### 7.1.2 variable(变量)

```js
通过张量初始化来的，变量的值是可以改变的

const initValue = tf.zeros([5]);
const a = tf.variable(initValue); // 初始化a
const updatValue = tf.tensor1d([0, 1, 0, 1, 0]);
a.assign(updatValue); // 更新 a的值
```



### 7.1.3. 拓扑 Topology |  权重 weight

```js
Topology拓扑:这是一个描述模型架构的文件。包含对外部存储的模型权重的引用---xxx.json

weight权重:.weights.bin 


tf.Model 和 tf.Sequential 都提供了 model.save. 
可以保存 model 模型
```



### 7.1.4 tf.layers | dense

```js
--1.units：它是一个正数，定义了输出空间的维度。
--2.activation：指定要使用的激活函数。
--3.useBias：指定是否应用偏差。
--4.kernelInitializer：指定将哪个初始化程序用于密集内核权重矩阵。
--5.biasInitializer：指定该层的偏置向量。
--6.inputDim：将输入形状定义为 [inputDim]。
--7.kernelConstraint：指定内核的约束。
--8.biasConstraint：偏置向量的特定约束。
--9.kernelRegularizer：指定应用于密集内核权重矩阵的正则化函数。
--10.biasRegularizer：指定应用于偏置向量的正则化函数。
--11.activityRegularizer：指定应用于激活的正则化函数。
--12.inputShape：如果定义了这个参数，它会创建另一个输入层插入到这个层之前。
--13.batchInputShape：如果定义了这个参数，它将创建另一个输入层插入到该层之前。
--14.batchSize ：如果尚未指定，则用于构造 batchInputShape。
--15.dtype：指定该层的数据类型。此参数的默认值为“float32”。
--16.name：指定该层的名称。
--17.trainable：指定该层的权重是否被fit更新。
--18.weights：指定层的初始权重值。
--19。inputDType：用于表示inputDType，其值可以是'float32'或'int32'或'bool'或'complex64'或'string'。
```







```
Layers (图层)
Optimizers (优化器) 和
损失函数
addons:一些有用的额外功能
```









### 7.1.5  model.fit

```js
epochs: // 训练多少次
batchSize: // 每次训练用多少的数据 
shuffle: true,  // 是否打乱数据
validationSplit: 0.1 // 验证集的比例
```





### 7.1.2 内存管理

```js
在 TensorFlow.js 中，我们可以通过 dispose 和 tf.tidy 这两种方法来管理内存
--1.dispose
const x = tf.tensor2d([[0, 2], [4, 6]]);
const x2 = x.square();
x.dispose();
x2.dispose();

2.tf.tidy
tf.tidy执行一个函数并清除所有创建的中间张量，释放它们的GPU内存。 它不清除内部函数的返回值。
```





### 7.1.3 创造模型

```js
创造模型的办法由两种。
--1.是通过ops的方法创造模型（类似于序贯模型）
就是要构造卷积层 xx层之类的（ tf.scalar(2);）

--2.通过高级API tf.model 来创建一个模型（）
tf.sequential();


```

### 7.1.4 线性模型 | 多线性莫i选哪个

```js

```



## 7.2 tensorFlow.js | 一维线性模型

https://gitee.com/Electrolux/front-css-package/blob/master/tensorflow/1（一维数据）/加载数据.html

https://gitee.com/Electrolux/front-css-package/blob/master/tensorflow/1（一维数据）/执行一开始的训练.html

这些方法都是在一个类中加载

### 7.2.1 加载数据 | dataReady

```js


// 数据转化成张量
dataReady() {
    let origin_data = [800, 850, 900, 950, 980, 1000];
    let last_answers = [800000, 850000, 900000, 950000, 980000];
    // 测试数据集
    const dataTest = [886, 1225, 500];
    const answersTest = [886000, 1225000, 500000];
    this.trainTensors = {
        data: tf.tensor2d(origin_data, [origin_data.length, 1]),
        answer: tf.tensor2d(last_answers, [last_answers.length, 1])
    };
    this.testTensors = {
        data: tf.tensor2d(dataTest, [dataTest.length, 1]),
        answer: tf.tensor2d(answersTest, [answersTest.length, 1])
    };
}
```



### 7.2.2 创造模型 | modelCreate

```js
// 神经网络的核心组成部分是model 和 里面的layer.这相当于是你计算机里面的零件
modelCreate() {
    // 创造一个 序贯模型(Sequential) 
    this.model = tf.sequential();
    //这表示我们的输入形式是一个 只有一个值的一维张量，每个值的输出也是一个值的一维向量
    this.model.add(tf.layers.dense({ inputShape: [1], units: 1 }));
    return this.model
}

这里的训练就是kx+b   这里的b就是偏差值
```



### 7.2.3 创造优化器 loss | 训练 | train

```js
// step3：开始训练
async train() {
    this.model.compile({
        // SGD：随机梯度下降-基于LEARNING_RATE学习率，构建迭代步长，一旦收敛那么迭代结束。找最小loss
        // momentum ：累积过去的梯度。权重参数的更新在相同方向上排列更多时会更大，而在方向上变化很大时会变得更小
        // adam:跟踪每个权重梯度的均方根 和 momentum 的结合
        optimizer: tf.train.sgd(this.LEARNING_RATE),
        // 计算预测与目标之间的距离 然后取绝对值
        loss: 'meanAbsoluteError'
    });
    
    let results = await this.model.fit(this.trainTensors.data, this.trainTensors.answer, {
        epochs: this.EPOCHS,
        batchSize: this.BATCH_SIZE,
        shuffle: true,
        validationSplit: 0.1
    });

    console.log('training complete');
    this.infer()
    // await this.save()
}
```



### 7.2.4 根据自定义数据输出 | infer

```js
 async infer() {
     // await this.load()
     // 推理的初始数据
     let predValue = 768;
     let answer = this.model.predict(tf.tensor1d([predValue]));
     answer.print();

     let nonTensorRepresentation = answer.dataSync();
     console.log("预测的y：",Math.floor(nonTensorRepresentation[0]));

 }
```



### 7.2.5  保存模型 | save

```js
async save(){
    // 这里会生成一个 model_save_1d.json文件和一个  model_save_1d.weights.bin 文件
    await this.model.save('downloads://model_save_1d');
}
```





### 7.2.6 加载模型 | load

```js
async load(){
    this.model = await tf.loadLayersModel('../model/model_save_1d.json');
}
```



### 7.2.7 组合



```js
通过我们刚才的分析，基本的架构已经被我们解构出来了 好，我们来做一下排列组合
--1.如果我们要执行一开始的训练，那我们执行
--1.1 dataReady
--1.2 modelCreate
--1.3 train
--1.4 infer
--2.如果我们 需要 保存数据我们在上一步的基础上面save
然后 load
接着infer就可以了

class deepStudy {
    constructor() {
        this.LEARNING_RATE = 0.01;
        this.EPOCHS = 50;
        this.BATCH_SIZE = 8;
    }
    //省略
}

```







## 7.3 tensorFlow.js | 多维线性模型

这里注意数据的归一化,以及这里多维需要用zip打包

### 7.3.1  加载数据 | dataReady

```js
dataReady() {
    //   tf.util.shuffle(this.data);
    // 转换为张量 这里我们制作两个数组，一个用于我们的输入示例，另一个用于真正的输出值（在机器学习中称为标签）。

    let origin_data = [[800,10], [850,10], [900,10]];

    let last_answers = [[8000,230], [8500,230], [9000,230]];
    this.length  = last_answers.length

    const xs = tf.data.array(origin_data);
    const ys = tf.data.array(last_answers);
    this.xyDataset = tf.data.zip({ 
        xs: xs, 
        ys: ys 
    }).batch(this.length).shuffle(this.length);      
}
```



### 7.3.2  创造模型 |  modelCreate

```js
modelCreate() {
    // 创造一个 序贯模型(Sequential) 
    this.model = tf.sequential();

    // 输入空间的维数  输出空间的维数。
    this.model.add(tf.layers.dense({ inputShape: [2], units: 2 }));

    this.LEARNING_RATE = 0.01;
    this.EPOCHS = 50;
    this.BATCH_SIZE = 8;
}
```



### 7.3.3 创造优化器 loss | 训练 | train

```js
async train() {
    this.model.compile({
        optimizer: tf.train.sgd(this.LEARNING_RATE),
        loss: 'meanAbsoluteError'
    });
    let results = await this.model.fitDataset(this.xyDataset,{
        epochs: this.EPOCHS,
        batchSize: this.BATCH_SIZE,
        shuffle: true,

    });

    console.log('training complete');
    this.infer()
}
```

### 7.3.4 infer | 推断

```js
infer() {
    let predValue = [768,10];
    let answer = this.model.predict(tf.tensor2d([predValue]));
    answer.print();
    let non = answer.dataSync();
    console.log("预测的y：",(non[0]),non[1]);
}
```

### 7.3.5 其他

```js
其他模型保存什么的操作一模一样，这里不再进行演示

https://gitee.com/Electrolux/front-css-package/blob/master/tensorflow/3（多维度数据）/index.html
```












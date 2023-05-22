# 6.v-model组件封装
[[toc]]
## 6.1 input封装

父组件：正常使用

```vue
html中
 <inputComponent v-model="Vmodel"></inputComponent>


import inputComponent from "@/components/input/input.vue";

components: {
    TestChart,
    inputComponent,
    buttonComponent
  },


```



子组件: 

1.先绑定value和input

2.script中给一个model prop（这个是当前父子组件的变量，要一致），再给一个event。常规的就给一个prop

3.input上绑定emit，参数传上面第二步的方法

```vue
<template>
    <div>
       <!-- 一个组件上的 v-model 默认会利用名为 value 的 prop 和
       名为 input 的事件。 -->
        <input type="text" :value="vModel"  @input="inputComponent($event)"
        >
        子组件：{{vModel}}
    </div>
</template>

<script>
    export default {
        //你可以提供一个 model 属性，用来定义该组件以何种方式支持 v-model
        model: {
            //代表 v-model 绑定的prop名
            prop: 'vModel', // 对应 props
            //代表 v-model 通知父组件更新属性的事件名,
            //通过@input来反复触碰
            event: 'change'
        },
        props:{
            
            vModel:{ 
                type:String,
                default: ''
            }
        },
        methods:{
            inputComponent(event){        
                this.$emit('change', event.target.value)      
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
```







## 6.2 button封装

父组件上

```js
<buttonComponent v-model="Vmodel"></buttonComponent>

import inputComponent from "@/components/input/input.vue";

components: {
    TestChart,
    inputComponent,
    buttonComponent
  },
```



子组件：跟input相比可能就是,这个通过click来进行父子传值

```vue

<template>
    <div>
       <!-- 一个组件上的 v-model 默认会利用名为 value 的 prop 和
       名为 input 的事件。 -->
         <button @click="inputComponent()">这是一个点击就会增加的button</button> {{vModel}}
          <div>按钮子组件：{{vModel}}</div>  
    </div>
</template>

<script>
    export default {
        //你可以提供一个 model 属性，用来定义该组件以何种方式支持 v-model
        model: {
            //代表 v-model 绑定的prop名
            prop: 'vModel', // 对应 props
            //代表 v-model 通知父组件更新属性的事件名,
            //通过@input来反复触碰
            event: 'change'
        },
        props:{
            
            vModel:{ 
                type:String,
                default: ''
            }
        },
        methods:{
          
            inputComponent(event){
                let temp=this.vModel
                this.$emit('change', temp+'+')
               
            }
        }
   
    }
</script>

<style lang="scss" scoped>

</style>


```

## 6.3 vue3的方法来一个



父

```html
<template>
    <div>
        <Child v-model="message"/> {{message}}
    </div>
</template>

<script setup lang="ts">
import {
  reactive,
  ref,

} from "vue";

import Child from '@/components/input/input.vue';
const message = ref('hello')

</script>

<style lang="scss" scoped>

</style>
```



子

在 `script setup` 的语法中，需要使用 `modelValue` 接收父组件传入的值。用 `update:modelValue` 向上作为向上触发事件的事件名。



```html
<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="inputComponent($event)"
    />
    子组件的传值：{{modelValue}}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { reactive, } from "vue";
// 接收
const emit = defineEmits(['update:modelValue'])
const props = defineProps([
  "modelValue", // 接收父组件使用 v-model 传进来的值，必须用 modelValue 这个名字来接收
]);
const inputComponent = (event:any) =>{
    console.log(event)
    emit('update:modelValue', event.target.value)
}
</script>

<style lang="scss" scoped></style>

```






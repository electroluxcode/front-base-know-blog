

# 1.vueify

[[toc]]

## 1.1 plugin下面新建

```js
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
 
import 'vuetify/dist/vuetify.css';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa'
    }
});

```



## 1.2 直接引入



```js
import  vuetify from '@/plugins/vuetify.js'
new Vue中直接写入
```






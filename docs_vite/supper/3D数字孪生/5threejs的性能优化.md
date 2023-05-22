# 5.threejs的性能优化

[[toc]]

## 5.1 基本的性能优化

```js
1.beforedestory的时候模型dispose
2.模型减顶点减面，使用法线贴图
3.将一个场景的渲染结果作为另一个场景中模型的纹理。由于我们需要的材质是一种玻璃质感的。所以这里我们可以用WebGLRenderTarget来进行贴图（texture）
renderer.render(scene, camera,target); //执行渲染操作
var material = new THREE.MeshLambertMaterial({
  // WebGL渲染目标对象属性.texture返回一张纹理贴图，也就是scene在camera下的渲染结果
  map: target.texture,
});
4.阴影需要的才打开。
renderer.shadowMap.enabled = true; //打开阴影
```





## 5.2  视锥剔除



暂时没有实现，等在久远一些我必将他实现。这里只说一下原理。首先。视锥剔除分成两种。

### 5.2.1  视椎体剔除

这部分threejs已经帮你做了，就是看不到的范围不渲染

### 5.2.2 遮挡剔除

也就是物体相互遮挡的情况下，需要剔除被遮挡的部分。这个功能threejs并没有帮你实现，而且其实在webgl上做遮挡剔除还是有些挑战的。网上大部分示例都是靠webgl2的query功能实现的。



## 5.3 lod 远近

通过多细节层次模型THREE.LOD来设置远近不同距离显示哪一个球体网格模型，距离比较远显示低面数球体网格哦行，距离比较近，显示高面数网格模型

```js


var lod = new THREE.LOD();
//细节层级距离100,距离相机100以内显示该网格模型
lod.addLevel(mesh1, 100);
scene.add(lod);


//--------------------------------------------

 const geometry = [
    [ new THREE.CylinderGeometry( R, R,30 ,30,30  ), 200 ],
    [ new THREE.CylinderGeometry( R, R,30 ,20,20 ), 500 ],
    [ new THREE.CylinderGeometry( R, R,30 ,10,10  ), 800 ],
    [ new THREE.CylinderGeometry( R, R,30 ,5,5  ), 1000 ],
    [ new THREE.CylinderGeometry( R, R,30 ,3,3 ), 1500 ]];

for ( let i = 0; i < geometry.length; i ++ ) {

      const mesh = new THREE.Mesh( geometry[ i ][ 0 ], material );
      //mesh.position.set(posx,posy,posz)
      //mesh:要在此级别显示的Object3D   distance显示此详细级别的距离。
      lod.addLevel( mesh, geometry[ i ][ 1 ] );
      lod.position.set(posx,posy,posz)

    }

```





## 5.4 SimplifyModifier（降低面数）

改功能对于不规则模型，比如人物、动物等效果更佳；对于规则模型，如建筑相关的墙、门、窗，效果一般。原因可想而知，规则的模型一旦化简很容易看出破绽.

https://blog.csdn.net/weixin_52125363/article/details/123084751

```js
import { SimplifyModifier } from 'three/examples/jsm/modifiers/SimplifyModifier'
const modifier = new SimplifyModifier();


//这里的obj 或者是 fbx 模型就是mesh变量。
const modifier = new SimplifyModifier();
const simplified = mesh.clone(); // mesh为需要简化的网格（模型）
simplified.material = simplified.material.clone();
simplified.material.flatShading = true;
const count = Math.floor( simplified.geometry.attributes.position.count * 0.875 ); // 需要移除模型点数的百分比
simplified.geometry = modifier.modify( simplified.geometry, count );
scene.add( simplified );


```


<!--
 * @Author: jay
 * @Date: 2024-04-16 10:32:26
 * @LastEditTime: 2024-04-16 14:57:44
 * @Description: file content
-->

# Buttons
This is an example component.

```jsx
/**
 * title: 极光按钮
 * description: 我是简介，我可以用 `Markdown` 来编写
 */
import { Buttons } from 'afront';

export default () => [
<Buttons>测试</Buttons>,
<Buttons color="#25b1bf">测试</Buttons>,
<Buttons color="#ff6366">测试</Buttons>,
]
```

```jsx
/**
 * title: 3D按钮
 * description: 我是简介，我可以用 `Markdown` 来编写
 */
import { Buttons } from 'afront';

export default () => [
    <Buttons type="3d">测试</Buttons>,
    <Buttons type="3d" color="#25b1bf">测试</Buttons>,
    <Buttons type="3d" color="#ff6366">测试</Buttons>
]
```


```jsx
/**
 * title: 闪动按钮
 * description: 我是简介，我可以用 `Markdown` 来编写
 */
import { Buttons } from 'afront';

export default () => [
    <Buttons type="shake">测试</Buttons>,
    <Buttons type="shake" color="#25b1bf">测试</Buttons>,
    <Buttons type="shake" color="#ff6366">测试</Buttons>
]
```
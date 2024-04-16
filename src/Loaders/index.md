# Loaders

This is an example component.

```jsx
/**
 * title: 文本loading
 * description: 我是简介，我可以用 `Markdown` 来编写
 */
import { Loaders } from 'afront';

export default () => <Loaders text="加载中" />
```

```jsx
/**
 * title: 程序loading
 * description: 我是简介，我可以用 `Markdown` 来编写
 */
import { Loaders } from 'afront';

export default () => <Loaders type="code" />
```

```jsx
/**
 * title: 快乐星球
 * description: 我是简介，我可以用 `Markdown` 来编写
 */
import { Loaders } from 'afront';

export default () => <Loaders type="star" />
```

```jsx
/**
 * title: 铅笔
 * background: '#f6f7f9'
 * description: 我是简介，我可以用 `Markdown` 来编写
 */
import { Loaders } from 'afront';

export default () => <Loaders type="pen" />
```

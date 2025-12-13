## css的引入方式

### 内联样式

![截图](/lsyde1/css1.png)

### 内部样式

![css2.png](/lsyde1/css2.png)

### 外部样式（推荐）

![css3.png](/lsyde1/css3.png)

## 选择器

### 全局选择器：

可以与任何元素匹配，优先级最低，一般做样式初始化

### 元素选择器：

html文档中的元素（`p`，`b`，`div`，`a`等）

### 类选择器：

规定用原点来定义

![截图](/lsyde1/css4.png)

![截图](/lsyde1/css5.png)

### class属性的特点 

1.类选择器可以被多种标签使用 

2.类名不能以数字开头

 3.同一个标签可以使用多个类选择器。用空格隔开

![截图](/lsyde1/css6.png)

![截图](/lsyde1/css7.png)

![截图](/lsyde1/css8.png)

### ID选择器：

针对某一个特定的标签来使用，只能使用一次

![css9.png](/lsyde1/css9.png)

![截图](/lsyde1/css10.png)

![截图](/lsyde1/css11.png)

### 选择器的优先级（CSS中）：

（1）元素选择器的权重为：1

（2） `class`选择器的权重为：10

（3）` id`选择器的权重为：100 

（4）内联样式的权重为：1000 

其优先级从高到低：行内样式>ID选择器>类选择器>元素选择器

## 字体属性

`color`：规定文本的颜色

`font-size`：设置文本的大小

`font-weight`：设置文本的粗细

`font-style` 指定文本的字体样式（`normal` 默认值；`italic` 定义斜体字）

每个值用逗号分开 如果字体名称包含空格，它必须加上引号

![截图](/lsyde1/css12.png)

![截图](/lsyde1/css13.png)

## 背景属性

![截图](/lsyde1/css14.png)

![截图](/lsyde1/css15.png)

![截图](/lsyde1/css16.png)

![截图](/lsyde1/css17.png)

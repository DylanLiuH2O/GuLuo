# GuLuo 算法竞赛社区前端项目



## 简单需求分析

### 1. 用户信息模块

1. 用户登录

    没什么特别。

2. 用户注册

    没什么特别。

3. 个人中心

    有多个标签页。

4. 个人私信

    参照具体页面。

5. 通知中心

    参照具体页面。

### 2. 应用模块

1. 主题商店

    主题商店含有**精选主题**与**用户分享主题**两个标签页，每个标签页有多个分页（考虑BootStrap，也可以直接多个页面实现），登录后有**我创建的主题**标签页。

    登陆后可以对主题进行**编辑**或**应用**（功能实现不考虑）。

    可以根据**更新日期**和**使用人数**进行排序。

2. 图片上传

    这个页面比较简单，没有什么特别的，按照页面模仿即可。

    功能不需要实现。

3. 在线IDE

    待定，暂不做。

4. 云剪贴板

    内嵌一个Markdown编辑器，具体实现待定。

5. 估值排名

    显示用户的排名，可以根据不同的数据进行排序（待定），有多个分页。

6. 反馈问题

    左侧是帖子列表，右侧是板块跳转（跳转不实现)、发布帖子、跳转题目讨论区。

    有多个分页。

### 3. 题库模块

1. 题目列表

    这里存放各种题目，有多个分页，默认按题号排序。

    有查找题目功能，并有高级选项。（功能具体不需实现）。

    通过率考虑用BootStrap进度条

2. 题目详情（**暂定实现2道题的题目详情**）

    主功能参照具体页面。

    右侧标签可以隐藏或显示。

    右侧可以跳转到该题目的提交记录、题解、以及讨论区。（题解不实现，提交记录由负责记录的同学实现，讨论区由负责讨论区的同学实现）

### 5. 题单模块

1. 上部可以搜索或筛选题单（功能不实现）
2. 下部是题单的列表，完成度考虑BootStrap进度条。

### 6.比赛模块

1. 页面显示比赛列表，有多个分页，参照具体页面。

### 7. 记录模块

1. 评测记录，可以根据用户ID或题目进行查找提交记录（功能不实现）
2. **做2个具体题目的评测记录（全站），不需匹配筛选条件，具体与负责题目的同学对接。**

### 8. 讨论区模块

1. 主讨论区

    左侧是帖子列表，右侧是板块跳转（跳转不实现)、发布帖子、跳转题目讨论区。

    有多个分页。

2. **做2个具体题目的讨论区，具体与负责题目的同学对接。**

### 9. 洛谷网校

1. 选课中心

    可以根据不同的类型进行筛选（具体不实现，做一个页面即可）。

### 10. 洛谷有题

​	该页面为真题列表（具体跳转不实现）

### 11. 后台管理

​	待定。

### 12. 其他页面（底部需要跳转的页面）

1. 关于谷洛（一篇博文）
2. 帮助中心（一篇博文）
3. 用户协议（一篇博文）
4. 联系我们（一篇博文）
5. 小黑屋
6. 陶片放逐
7. 社区规则
8. 招贤纳才（不做）



## 任务分配

### LDL（6个页面）

用户信息模块（5个页面）、主页

### WA（6个页面）

应用模块（1、2、5、6）、后台管理

### LPW（3个页面）

题库模块（1个主页面，2个题目详情页面）

### LYC（4个页面）

题单模块、记录模块（主记录，2个具体题目记录）

### CXL（3个页面）

讨论区模块（主讨论区、2个具体题目讨论区）

### QU（3个页面）

比赛模块、洛谷有题、洛谷网校

### ZXY（4个页面）

其他页面（1~4）

### DJ（3个页面）

其他页面（5~7）



## CSS书写规范（推荐性）

1. 位置属性(position, top, right, z-index, display, float…)
2. 大小(width, height,  padding, margin…)
3. 文字系列(font, line-height, letter-spacing, color, text-align…)
4. 背景(background, border…)
5. 其他(animation,  transition…)

选择器尽量具体，防止冲突。
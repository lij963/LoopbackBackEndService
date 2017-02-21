# LoopbackBackEndService
### 刚开始学习后台，写下demo做个记录。###
#### 2017年02月20日####

  - 使用loopback搭建一个服务器，实现注册与登录功能。不涉及界面，仅实现接口。
  - 数据库使用mongodb。
  - 实现步骤[Step1](Step1.md)

#### 2017年02月21日####

- 为项目添加User Idea Inquiry 三个model
  - 配置各个对象之间的关系,User可以有多个Idea,User有多个Inquiry,一个Idea属于一个User,一个Inquiry属于一个User,一个Inquiry有一个Idea.
  - 权限管理,用户登录后才能查看和提交

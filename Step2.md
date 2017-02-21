# 为项目添加model并确定model之间的关系,增加权限管理
#### 创建MyUser model(好像可以也叫User,然后继承自自带的User,好神奇.)
  `slc loopback:model`

  ![](img/slc_loopbackmodel.jpeg)

*  属性先使用继承来的,创建自己的User只是为了方便以后维护.

* 同样的再创建Idea和Inquiry两个model,并添加简单的属性.
    添加属性会有提示,按照提示选择或者输入即可.
    ![](img/slc_loopbackmodel2.jpeg)





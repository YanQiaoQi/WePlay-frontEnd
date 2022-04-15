## API接口



### 用户相关接口 /user/

login() 登录

info() 显示当前用户状态

notice()  获取当前公告

setphone(Phone) 设置手机号

history() 显示历史购买记录

pay_info() 显示充值相关信息

pay(method,money) 充值 method=Alipay/WechatPay

list_panel() 查看当前面板服务器信息

list_vps() 查看当前VPS服务器信息

### 商城相关接口 /shop/

list_all() 显示所有产品

buy(ID,time) 购买指定ID的产品指定时间 time=月付/季付/年付

### 面板服务器相关接口 /panel/ServerID/

info()  显示当前ID的面板服务器信息

list_game() 获取当前面板支持的游戏种类

change_game(GameID)  修改当前游戏

renew(time)  续期产品指定时间 time=月付/季付/年付

upgrade_info() 查看当前升级价格信息

upgrade(UpgradeID) 升级到对应配置

history() 查看历史操作记

migrate(OldServerID) 迁移服务器

reinstall() 重装服务器

resetpasswd() 重置面板服务器密码

push(QQ) 将服务器转让给QQ

destory() 人工销毁面板服务器

 

### VPS服务器相关接口 /vps/ServerID/

info()  显示当前ID的VPS服务器信息，包括登录信息

poweroff() 硬关机

poweron() 开机

powerreset() 硬重启

resetpasswd() 重置密码

list_os() 查看当前支持的操作系统

reinstall(OSID) 重装服务器到指定的操作系统

renew(time)  续期产品指定时间 time=月付/季付/年付

upgrade_info() 查看当前升级价格信息

upgrade(UpgradeID) 升级到对应配置

history() 查看历史操作记

push(QQ) 将服务器转让给QQ

destory() 人工销毁面板服务器

 
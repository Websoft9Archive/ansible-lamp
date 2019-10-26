Playbook 主体结构
  - group_vars:组变量
  - roles:角色
  - example.yml : playbook入口文件

roles 结构

 - files: 需要上传的文件

 - handlers: 服务重启

 - tasks: 核心任务部分

 - templates: 模板文件,多用于需要动态改变的配置文件

 - meta: 保存当前roles所依赖的其他roles信息(当前roles运行前所需要的roles)

 - defaults: 保存当前roles默认变量

group_vars 结构
  - local.yml: local本地变量(一般不需要进行修改)
  - example.yml: 当前playbook变量


roles 编写注意事项:
 1. 尽量可以单独使用
 2. 不能单独使用的,一定要在 meta中声明依赖关系,比如在php需要依赖apache,写法看本模板中example中的 meta 
 3. 上传的配置文件存在多版本问题 使用template模块上传 配置文件差异使用jinja模板处理


变量注意事项:
  1. 变量优先级 -e 选项指定的变量 > group_vars > inventory 主机清单中定义的变量 > play剧本中vars
  2. roles中的变量修改使用优先级覆盖,使用-e参数以及group_vars,保持roles变量默认
  3. remote_user 变量 默认root,为了适应aws和azure,使用-e覆盖[-e remote_user=ubuntu]

common 和 final 默认是空文件夹 运行是会从GitHub上clone下来,common 和 final 已经clone 则会更新,以保持最新

**play编写尽量使用模块,少用shell,command等模块**
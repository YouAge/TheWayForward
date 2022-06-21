
## 代码合并

> 多分支下，经常要做代码合并

```sh
```




## 尝试检测一下在所有历史记录中，对该文件的处理，用到的命令如下：

```sh
git log --stat --full-history --simplify-merges -- A/index.js
```

```sh
git log -- A/index.js  #查看对指定文件修改过的 commit

--stat #生成文件差异统计
--full-history # git log 的默认模式是会简化文件历史的。为此，我们需要加上 --full-history 这个参数

#--simplify-merges 可以增强 --full-history 的能力，因为 --full-history 会把一些无用的合并 commit 也输出出来（可以看 2.2.3 中的 commit 信息，有一些是 Merge branch xxx），增加 --simplify-merges 参数可以去除这些无用的 commit 信息

--simplify-merges

git log --full-history --simplify-merges -- A/index.js
```


## 缓存区

> 本开开发的代码，不想回退或者提交，可以暂时添加到缓存区，再去拉去远端代码

```sh
git stash # 加入缓存
git stash save "save message"  #执行存储时，添加备注，方便查找，
git stash list # 查看stash了哪些存储
git stash show #显示做了哪些改动，默认show第一个存储,如果要显示其他存贮，后面加stash@{$num}，比如第二个 git stash show stash@{1}
git stash pop #命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下,默认为第一个stash,即stash@{0}，如果要应用并删除其他stash，命令：git stash pop stash@{$num} ，比如应用并删除第二个：git stash pop stash@{1}

git stash drop stash@{$num} #丢弃stash@{$num}存储，从列表中删除这个存储

git stash clear #删除所有缓存的stash
```
c

adcode: 341102
address_name: "滁州北站"
area: "琅琊区"
city: "滁州市"
detail: "滁州北站"
location: {lat: 32.308081799, lng: 118.327786899}
province: "安徽省"
street: "清流街道"
value: "滁州"















//webstrom 配置prettier

ProjectFileDir\node_modules.bin\prettier
--write FilePathRelativeToProjectRoot
FilePathRelativeToProjectRoot
# webpack.config.je 采用 commonjs

## 打包

打包前去掉 package.json 中的"type":"module"

## 测试

package.json 中加上"type":"module"

```
node test.mjs
```

# webpack.config.je 采用 ESM

## 打包

package.json 中加上"type":"module"

## 测试

package.json 中的"type":"module"不需要去掉

```
node test.js
```

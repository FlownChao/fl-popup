# fl-popup 移动端弹框
## Install
* npm
   > npm install fl-popup -D
* yarn 
    > yarn fl-popup  -D
- - - - - - - -
## start
    import $popup from 'fl-popup'
    $popup.toast(data)




### toast (data)
data:

类型: `object`或者 `string` 或者 `html片段`

字段： 

    content 
    
    类型：string或者HTML片段
    必填:  ❎
    说明：如果data传入object类型则必须传入content字段



### alert(data)

data:

类型: `object`

字段：

    title
    类型：string或者HTML片段
    必填:  ❎
    说明：弹框标题

    content
    类型：string或者HTML片段
    必填:  ✅
    说明：弹框内容

    button
    类型：string或者HTML片段
    必填:  ✅
    说明：弹框按钮内容

    callback
    类型：function
    必填:  ✅
    说明：按钮点击消失后回调



### comfirm(data)

data:

类型: `object`

字段：

    title
    类型：string或者HTML片段
    必填:  ❎
    说明：弹框标题

    content
    类型：string或者HTML片段
    必填:  ✅
    说明：弹框内容

    button
    类型：length为2的Array,[String,String]
    必填:  ✅
    说明：弹框按钮内容 如['确定','取消']

    callback
    类型：length为2的Array,[Function,Function]
    必填:  ✅
    说明：按钮点击消失后回调,如[()=>{},()=>{}]



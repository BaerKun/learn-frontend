const date = Date()
// 建议用let,const，它们的作用域和c语言变量相同
// var作用于全局或整个函数，不建议
// 如果不加任何标识的声明，则为全局变量


window.alert("FuckU!!!")
document.getElementById("p1").innerHTML = date
// window.alert(...)    弹出警告窗
// document.write(...)  类似宏，直接在html文件写入，不能动态写入
// innerHTML    html内元素的值


// ------------------------------------------------------------
// 数据类型 typeof
// Boolean Number String Null Undefined Symbol Object

// 数组
var arr

1.
arr = new Array() // arr = []
arr[0] = 0
arr[1] = 1
arr[2] = 2

2.
arr = new Array(1, 2, 3)

3.
arr = [1, 2, 3]

// 对象
var obj

obj = new Object()
obj = { A: 1, B: true, C: "str" }

// 两种访问方式
var a = obj.A
obj['A'] = a

obj.F = function () {
    // code
    this.A = 2 // 用this访问对象成员
}

// 模版字符串
var str = `1+1=${1+1}` // "1+1=2"   ${表达式}
str += 1    // str += "1"

// ------------------------------------------------------------
// 比较
var a = 1
var b = "1"

a == b      // true     转换 "1" -> 1
a === b     // false    不转换数据类型
a != b
a !== b
a <= b      // true     会转换

'a' < 'b'   // true     两边字符串，比较ascii

// ------------------------------------------------------------
// 条件和循环
// switch/case, if/else, for(;;), while, do/while 与c语言相同
// for(x in obj) 与python类似

outerloop:
while(true){
    innerloop:
    while(true){
        break outerloop     // 跳出标签下的代码块
        break innerloop     // 此处等同break，跳出当前代码块
        continue outerloop
        continue innerloop  // continue
    }
}
function Person(name){
  this.name = name
  this.aabc = function(){
    console.log('lallalalalla')
  }
}
Person.prototype.age = 18; //给构造函数添加了原型属性
// 原型链继承
function Boy(){
  this.name = "boy"
}
Boy.prototype = new Person()
var xiaoli = new Boy()
//要点：让新实例的原型等于父类的实例
/**
 * 实例可继承：实例的构造函数属性，父类构造函数属性，父类原型的属性
 * 新实例不会继承父类实例的属性
 * 新实例无法想父类构造函数传参、继承单一、所有新实例都共享父类实例的属性（原型链上属性共享）
 * */
//借用构造函数继承！！
function Con(){
  Person.call(this,'lalala')
  this.age = 12
}
var con1 = new Con()
//要点：用call() apply()将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行）
/**
 * 只继承了父类构造函数的属性，没有继承父类原型的属性
 * 可以像父类构造函数中传参
 * 只能继承父类构造函数的属性，无法实现构造函数的服用，每个新实例都有父类构造函数的副本，导致比较臃肿
 * */
//组合继承【！！常用！！】
function Sub(name){
  Person.call(this,name)
}
Sub.prototype = new Person()
//结合和两种模式，可以继承父类原型上的属性，可以传参、复用
//每个新实例引入的构造函数属性是私有的
//调用了两次父类构造函数（耗内存），子类构造函数会代替原型上父类构造函数
//原型式继承
function content(obj){
  function F(){}
  F.prototype = obj
  return new F()
}
var a = new Person()
var a1 = content(sup)
//先封装一个函数容器，用来输出对象和承载继承的原型
//用一个函数包装成一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象
//类似于复制对象，用函数来包装
//所有实例都会继承原型上的属性，无法实现复用
//寄生式继承
function content(obj){
  function F(){}
  F.prototype = obj
  return new F()
}
var sup = new Person()
function subobject(obj){
  var sub = content(obj)
  sub.name = "gar"
  return sub;
}
var sup2 = subobject(sup)
//寄生组合式继承（常用）
function Sub(){
  Person.call(this)
}
Sub.prototype = con
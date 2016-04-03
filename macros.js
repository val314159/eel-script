;(function(){
    var C=require('eel-compiler')
    print('############################## 1')
    var M=C._Macros;
    print('############################## 2')
    M.Cond=function(){
	var head=[].shift.apply(arguments);
	var cond=C.Expr(head[0]);
	var body=C.Expr(head[1]);
	var prefix = "("+head+")?("+body+"):";
	return prefix+(arguments.length?
		       C.Cond.apply(arguments):'nil');
    }
    print(M)
    print('############################## 3')
});

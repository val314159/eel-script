//23456789012345678901234567890123456789 123456789012345678901234567890123456789
print=console.log.bind(console)
str=JSON.stringify
Parse=require('eel-parser')
Compile=require('eel-compiler')
require('./macros.js')

function runShell(c){
    var cp = require('child_process');
    print("===============")
    try     {print(String(cp.execFileSync(c)),"\n===============")}
    catch(e){print(e,"\n#=#=#=#=#=#=#=#")}}

function execstr(pfx,c){
    print(pfx+" c ", c)
    try{
	var r = eval(c)
	print(pfx+" r ", r)
	return r
    }catch(e){
	print(pfx+" e ", e)
	return e}}

function evalstr(pfx,i){
    print(pfx+" i ", str(i))
    if     (i.startsWith('!')){return runShell(i.slice(1))}
    else if(i.startsWith('~')){return execstr(pfx,i.slice(1))}
    else if(i.startsWith('(')){
	var p = Parse(i)
	print(pfx+" p ", p)
	return execstr(pfx,Compile.File(p))
    }else{
	var p = Parse(i)
	print(pfx+" p ", p)
	return execstr(pfx,Compile.File(p))}}

function load(filename){
    print("F f ", filename);
    return evalstr("F",require('fs')
		   .readFileSync(filename).toString())}

require('./repl.js')(function(i){return evalstr('.',i)})()

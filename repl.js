function repl(callback) {
    var rl=require('readline').createInterface(
	{input:process.stdin, output:process.stdout})
    rl.on('close',  ()=>console.log('\n  r  <EOF>\n**>> Bye!'))
    rl.on('SIGCONT',()=>rl.prompt(true))
    var loop=()=>rl.question('eel-script>>> ',(x)=>{callback(x);loop()})
    return loop }
module.exports=repl

/*

2. Explain difference ways in which child process can be created and difference b/w them.

*/

/** There are 4 way to do that 
 * 
 * -> spawn
 *      it creates a child process usually a heavy process, 
 *      the data is given to and from the parent in streams and in no format(only manual formatting)
 *      it gives 5 events for parent to listern to data
 *         stdout.on(data ,());
 *         stderr.on(data ,());
 *         .on("error" ,());
 *         .on("close",());
 *         .on("exit",());
 *         
 * -> exec
 *      used to execute binaries from shell 
 *      has event for parent : error,close,exit
 * 
 * 
 * -> execFile
 *      only executes binaries directly.
 *      has event same as exec.
 * 
 * -> fork
 *      similar to spawn but only creates subprocess of the same language.
 *      has two special communication message and disconnect to send message in formatted way
 *      
 *      has event : message,disconnect,error,exit,close,stdout(data),stderr(data).
 *      
 * 
 */
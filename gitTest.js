
var exec = require('child_process').spawn;
//var exec = require('child_process').execFile;
//var exec = require('child_process').exec;


/*update();

function update() 
{*/
    var child = exec('git pull');
    child.stdout.on("data",function(data)
    {
        console.log('子线程标准输出: ' + data);
    });
    child.on("error",function(err)
    {
        console.log('子线程开启失败: ' + err);
    });
    child.on("exit",function(code,signal)
    {
        console.log('子线程退出: ' + code);
        process.exit();
    });
    /*{
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
                //iotDevice.gwCheckGatewayUpdataRsp(0,false)
            }
            else
            {
                if(stdout != "Already up-to-date")
                {
                    
                }
            }
        });*/
        
        continuefun();
//}

function continuefun(){
    
    setTimeout(function() {
            
            continuefun();
            
        }, 3000);
    
}
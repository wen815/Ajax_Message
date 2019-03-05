function $(id){
    return document.getElementById(id);
}
//显示提交键
var csub,cname,ccon;
function check(){
    if((csub==='yes')&&(cname==='yes')&&(ccon==='yes')){
    $('bsub').disabled=false;
}
else{
      $('bsub').disabled=true;
}
}

$('subject').focus();
//检测标题
$('subject').onkeyup=function(){
    $subject=$('subject').value;
    if($subject.length===0){
$('sp1').innerHTML='<font color=red>标题不能为空</font>';  
csub='';
    }
    else{
   $('sp1').innerHTML='<font color=green>√</font>';  
   csub='yes';
    }check();
}
//检测姓名
$('name').onkeyup=function(){
    $name=$('name').value;
    if($name.length===0){
$('spn').innerHTML='<font color=red>姓名不能为空</font>';  
cname='';
    }
    else{
   $('spn').innerHTML='<font color=green>√</font>';  
   cname='yes';
    }check();
}
//检测内容
$('content').onkeyup=function(){
    $content=$('content').value;
    if($content.length===0){
$('sp2').innerHTML='<font color=red>内容不能为空</font>';  
ccon='';
    }
    else{
   $('sp2').innerHTML='<font color=green>√</font>';  
   ccon='yes';
    }check();
}
//Ajax传送数据
$('bsub').onclick=function(){
   var subject=$('subject').value,name=$('name').value,content=$('content').value;
url='./submit.php';
url+="?subject="+subject+"&name="+name+"&content="+content;
xmlHttp.open("get",url,true);
xmlHttp.send(); 
}


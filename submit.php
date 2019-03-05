<?php
include'includes/connect.php';
//设置时间
date_default_timezone_get('PRC');
$date=date("Y-m-d h:i:s");
//获取留言信息
$subject=$_GET['subject'];
$name=$_GET['name'];
$content=$_GET['content'];
$q1="select * from gbook where subject='$subject' AND name='$name' AND content='$content'";
$r1=mysqli_query($dbc, $q1);
if(mysqli_num_rows($r1)==0){
   $q="insert into gbook(subject,name,content,date)values('$subject','$name','$content','$date')";
$r= mysqli_query($dbc, $q); 
}
else{
    exit();
}


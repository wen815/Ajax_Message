<?php
include'includes/header.html';
include'includes/connect.php';
error_reporting(0);
$id=$_REQUEST['id'];
$reply=$_REQUEST['reply'];
$q="UPDATE gbook SET reply='$reply' where ID='$id'";
$r= mysqli_query($dbc, $q);
?>
<form>
       <input type="text" name="id" value="<?php echo $_REQUEST['id'];?>">
    <input type="text" name="reply">
    <input type="submit">
</form>





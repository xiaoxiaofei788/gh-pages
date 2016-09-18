<?php 
 if(isset($_REQUEST['authcode']))
     {
     	session_start();
     	if (strtolower($_REQUEST['authcode'])==$_SESSION['authcode']) 
     	{
     		header('Content-type: text/html; charset=UTF8'); 
			echo '<font color="#0000CC">输入正确</font>';
     	}
     	else{
            header('Content-type: text/html; charset=UTF8'); 
			echo '<font color="#CC0000"><b>输入错误</b></font>';
     	    }
     	exit();
     }

 ?>
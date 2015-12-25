<?php
header("Access-Control-Allow-Origin:http://mama-hack.com");
require_once('config.php');

$key = urldecode($_POST['key']);

$link = mysql_connect($DSN,$DB_USER,$DB_PASSWORD) or die("MySQLへの接続に失敗しました。");
$sdb = mysql_select_db($DB_NAME,$link) or die("データベースの選択に失敗しました。");
mysql_set_charset('utf8'); // 文字化け対策

$sql = "insert into `".$DB_NAME."`.`".$TABLE."` (`date`,`word`,`engine`,`asp`,`viewsite`,`refurl`) values (now(),'".$key."','yahoo','".$_POST['asp']."','".$_POST['viewsite']."','".$_POST['refurl']."')";

$result = mysql_query($sql, $link);
mysql_close($link) or die("MySQL切断に失敗しました。");
?>

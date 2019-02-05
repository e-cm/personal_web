<!doctype html>
<html>



    <head>
        <meta charset="UTF-8">
        <title>ERIC MORGAN</title>
        <link rel="stylesheet" type="text/css" href="css/mainStyle.css">
        <link rel="stylesheet" href="css/pills.css">
        <link rel="stylesheet" href="css/pills.min.css">
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400" rel="stylesheet">
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/couture" type="text/css"/>
    </head>



    <body>


        <div id="mountains">
            <div class="peakWrap"><div class="peaks one"></div></div>
            <div class="peakWrap"><div class="peaks three"></div></div>
            <div class="peakWrap"><div class="peaks five"></div></div>
            <div class="peakWrap"><div class="peaks seven"></div></div>
            <div class="peakWrap"><div class="peaks eight"></div></div>

            <div class="peakWrap"><div class="peaks topone"></div></div>
            <div class="peakWrap"><div class="peaks toptwo"></div></div>
            <div class="peakWrap"><div class="peaks topthree"></div></div>
            <div class="peakWrap"><div class="peaks topfour"></div></div>
            <div class="peakWrap"><div class="peaks topfive"></div></div>
         </div>

        <div id="title">
            <img id="logo" src="images/emWhite.png" />
            <div id="nameOuter">
                <div id="name">ERIC</div>
                <div id="lastname">MORGAN</div>
            </div>

            <div id="menu">
                <a href="."><div class="option port">Portfolio</div><div class="porthill"></div></a>
                <a href="about.html"><div class="option about">About</div><div class="abouthill"></div></a>
                <a href="contact.php"><div class="option cont">Contact</div><div class="conthill"></div></a>
            </div>
        </div>


        <div class="wrapper">
            <div class="projfeed">

<div class="row">
<?php
$action = ( array_key_exists( 'action', $_REQUEST) ? $_REQUEST['action'] : "" );
if ($action=="")    /* display the contact form */
    {
    ?>
    <form class="error" action="" method="POST" enctype="multipart/form-data">
    <input type="hidden" name="action" value="submit">
    <br>NAME<br>
    <input name="name" type="text" value="" size="49"/><br>
    <br>EMAIL<br>
    <input name="email" type="text" value="" size="49"/><br>
    <br>MESSAGE<br>
    <textarea name="message" rows="10" cols="50"></textarea><br>
    <input type="submit" class="button" value="Send"/>
    </form>
    <?php
    } 
else                /* send the submitted data */
    {
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $message=$_REQUEST['message'];
    if (($name=="")||($email=="")||($message==""))
        {
        echo "<div class='error'>All fields are required, please fill <a href=\"\">the form</a> again.</div>";
        }
    else{        
        $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="PORTFOLIO SITE";
        mail("ericchiassonmorgan@gmail.com", $subject, $message, $from);
        echo "<div class='success'>Email Sent</div>";
        }
    }  
?>
</div>

            </div>

        </div>

    </body>

</html>
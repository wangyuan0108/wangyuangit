<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Examples</title>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="" rel="stylesheet">
<style>
    .odd{
        background: red;
    }
    .even{
        background: blue;
    }
</style>
</head>
<body>
    <ul>
        <?php
            for($i=0; $i<10; $i++){
                if($i%2){
                    echo '<li class="odd"></li>';
                }else{
                    echo '<li class="even"></li>';
                }
            }
        ?>
    </ul>
</body>
</html>
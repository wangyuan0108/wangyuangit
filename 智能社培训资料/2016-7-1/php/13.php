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
        <?php for($i=0; $i<15; $i++){?>
        <?php if($i%2){?>
        <li class="odd">
        <?php }else{?>
        <li class="even">
        <?php }?>
        <?php }?>
    </ul>
</body>
</html>
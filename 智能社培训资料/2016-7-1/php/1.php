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
    #div1{
        width: 200px;
        height: 200px;
        background: red;
    }
</style>
<script>
    window.onload=function(){
        var oDiv=document.getElementById('div1');

        oDiv.onclick=function(){
            this.style.background='blue';
        };
    };
</script>
</head>
<body>
    <div id="div1"></div>
</body>
</html>
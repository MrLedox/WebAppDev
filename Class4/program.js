function showData(){
    document.getElementById("demo").innerHTML=Date();}
    function show(par1){
    if(par1===false){
    document.getElementById("myDiv").style.display="none";
    document.getElementById("btnHide").style.display="none";
    document.getElementById("btnShow").style.display="inline";
    
    }
    else
    {
    document.getElementById("myDiv").style.display="inline";
    document.getElementById("btnHide").style.display="inline";
    document.getElementById("btnShow").style.display="none";
    }
    }
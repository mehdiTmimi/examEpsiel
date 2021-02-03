fonction convertir()
{
    let input=document.getElementsById("input");
    let nbr=parseInt(input.value);
    alert(nbr*10);
    input.value="";
}
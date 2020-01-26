  $(document).ready(function()
  {
  	var a="";
  	var b="";
  	$(function()
  	{
  		$("#accordion").accordion();
  	});
  	$("#sub").click(function()
  	{
  		a=$("#title").val();
  		b=$("#data").val();
  		if(a.length==0&&b.length==0)
  		{
  			alert("Please enter the data in fields");
  		}
  		else if (a.length==0) 
  		{
  			alert("Please enter some title");
  		}
  		else if(b.length==0)
  		{
  			alert("Please enter the message");
  		}
  		else
  		{
  			var c="";
  			$(".nopost").remove();
  			$("#title").val("");
  			$("#data").val("");
  			c=c+"<h3>"+a+"</h3><div><p>"+b+"</p></div>";
  			$("#accordion").append(c);
	  		}
  	});
  	  	$("#sub").click(function a() 
  	{
    	$("#accordion").accordion("refresh");
  	});
  });

$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){

	$(this).parent().fadeOut(500,function(){ //removes the parent elements along with span so use parent()
		$(this).remove();
	}); 
	event.stopPropogation(); //prevents bubbeling effect, ie one function on a particular tag also affects it's parent tags
});

$("input[type='text']").on("keypress",function(event){
     if(event.which === 13){ //PRessing Enter KEY

        if($(this).val() == ""){
        	alert("Please enter something in the box")
        }

       else{
       var todotext = $(this).val();
       $(this).val("");
       $("ul").append("<li> <span>X</span> " + todotext + "</li>");
                                                                     }
                                                                         }

      
});
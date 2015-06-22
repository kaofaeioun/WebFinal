$(document).ready(function()
{
	$(".jQzoom").mlens(
	{
		imgSrc: $(".jQzoom").attr("data-big"),
		lensShape: "circle",
		lensSize: 180,
		borderSize: 4,
		borderColor: "#fff"
	});

	$(".droplist").slideUp(0)
        for(i=0;i<$(".toggle").length;i++){
            $(".toggle:eq("+i+")").mouseover({id:i},function(e){
            	n=e.data.id
                $(".droplist:eq("+n+")").slideToggle()
                $(".droplist:not(:eq("+n+"))").slideUp()
            })
            $(".toggle").mouseout({id:i},function(e){
                n=e.data.id
            })
        }

});
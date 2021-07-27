function navNext1()

{

        document.getElementById("canvas1").style.visibility="hidden";

        document.getElementById("canvas2").style.visibility="visible";//canvas2-6      

}



function navNext2()

{

        document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";//canvas3

        

}



function navNext3()

{

        document.getElementById("canvas3").style.visibility="hidden";

        document.getElementById("canvas4").style.visibility="visible";


}



function navNext4()

{

        document.getElementById("canvas4").style.visibility="hidden";

        document.getElementById("canvas5").style.visibility="visible";

}


function navNext5()

{

        document.getElementById("canvas5").style.visibility="hidden";

        document.getElementById("canvas6").style.visibility="visible";


        /*Countdown Timer Animation Code Start*  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("value", 0, 250, 7000);
        /*Countdown Timer Animation Code End*/

}


function navNext6()

{

        document.getElementById("canvas6").style.visibility="hidden";

        document.getElementById("canvas7").style.visibility="visible";

        //document.getElementById("arrow4").style.visibility="visible";

        //document.getElementById("cubedatehidden").style.visibility="visible";
}

function navNext7()

{

        document.getElementById("canvas7").style.visibility="hidden";

        document.getElementById("canvas8").style.visibility="visible";

}
function navNext8()
{

        document.getElementById("canvas8").style.visibility="hidden";

        document.getElementById("canvas9").style.visibility="visible";

}

function navNext9()
{

        document.getElementById("canvas9").style.visibility="hidden";

        document.getElementById("canvas10").style.visibility="visible";

}
var case1 = 0;
var thick = 0;
var dia = 0;
var condition = 0;

function showhammer()

{


	case1 = document.getElementById("x1").value;
    thick = document.getElementById("x2").value;
	dia = document.getElementById("x3").value;
    condition1 = document.getElementById("x4").value;

if (case1 !== "" && thick !== "" && dia !== "" && condition1 !== "")
    {
    	
    	if (case1 == "bwor")
    	{
    	document.getElementById("show1").style.visibility="hidden";	
        document.getElementById("hammer1").style.visibility="visible";
        document.getElementById("wiregif1").style.visibility="visible";
        document.getElementById("ttop").style.visibility="visible";
        document.getElementById("fillBox").innerHTML = "&nbsp;";
        document.getElementById("s1a").style.visibility="hidden";
        document.getElementById("s1b").style.visibility="visible";
        document.getElementById("hammerarrow1").style.visibility="visible";
        document.getElementById("cond1").style.visibility="visible";
        document.getElementById("pinside1").style.visibility="visible";
        document.getElementById("wallside1").style.visibility="visible";

    	}
        //document.getElementById("numoutnext").innerHTML = "Click Next";

        if (case1 == "lslhsr")
    	{
        document.getElementById("show1").style.visibility="hidden"; 
        document.getElementById("hammer1").style.visibility="visible";
        document.getElementById("wiregif2").style.visibility="visible";
        document.getElementById("ttop").style.visibility="visible";
        document.getElementById("fillBox").innerHTML = "&nbsp;";
        document.getElementById("s1a").style.visibility="hidden";
        document.getElementById("s1b").style.visibility="visible";
        document.getElementById("hammerarrow1").style.visibility="visible";
        document.getElementById("cond2").style.visibility="visible";
        document.getElementById("wirerotate1").style.visibility="visible";
        document.getElementById("pinside1").style.visibility="visible";
        document.getElementById("pinside2").style.visibility="visible";
        

    	}

        if (case1 == "uc")
        {
        document.getElementById("show1").style.visibility="hidden"; 
        document.getElementById("hammer1").style.visibility="visible";
        document.getElementById("wiregif3").style.visibility="visible";
        document.getElementById("ttop").style.visibility="visible";
        document.getElementById("fillBox").innerHTML = "&nbsp;";
        document.getElementById("s1a").style.visibility="hidden";
        document.getElementById("s1b").style.visibility="visible";
        document.getElementById("hammerarrow1").style.visibility="visible";
        document.getElementById("cond3").style.visibility="visible";
        document.getElementById("wirerotate1").style.visibility="visible";
        document.getElementById("pinside1").style.visibility="visible";
        document.getElementById("pinside2").style.visibility="visible";

        }

        if (case1 == "hsllsr")
        {
        document.getElementById("show1").style.visibility="hidden"; 
        document.getElementById("hammer1").style.visibility="visible";
        document.getElementById("wiregif4").style.visibility="visible";
        document.getElementById("ttop").style.visibility="visible";
        document.getElementById("fillBox").innerHTML = "&nbsp;";
        document.getElementById("s1a").style.visibility="hidden";
        document.getElementById("s1b").style.visibility="visible";
        document.getElementById("hammerarrow1").style.visibility="visible";
        document.getElementById("cond4").style.visibility="visible";
        document.getElementById("wirerotate2").style.visibility="visible";
        document.getElementById("pinside1").style.visibility="visible";
        document.getElementById("pinside2").style.visibility="visible";
        }

        if (case1 == "zmsr")
        {
        document.getElementById("show1").style.visibility="hidden"; 
        document.getElementById("hammer1").style.visibility="visible";
        document.getElementById("wiregif5").style.visibility="visible";
        document.getElementById("ttop").style.visibility="visible";
        document.getElementById("fillBox").innerHTML = "&nbsp;";
        document.getElementById("s1a").style.visibility="hidden";
        document.getElementById("s1b").style.visibility="visible";
        document.getElementById("hammerarrow1").style.visibility="visible";
        document.getElementById("cond5").style.visibility="visible";
        document.getElementById("wirerotate3").style.visibility="visible";
        document.getElementById("pinside1").style.visibility="visible";
        document.getElementById("pinside2").style.visibility="visible";

        }
    }
    
    else
    {
        document.getElementById("fillBox").innerHTML = "Please Enter all Values";
        // alert("Wrong");
        
    }

}

function reset()
{
    location.reload();
}

function showgraph1()
{
	document.getElementById("cond1").style.visibility="hidden";
	document.getElementById("hammerarrow1").style.visibility="hidden";
    document.getElementById("hammer1").style.animation="fixhand1 2s forwards";
    document.getElementById("gif1").style.visibility="visible";
    document.getElementById("wiregif1").style.visibility="hidden";

    setTimeout(function()
            {
                document.getElementById("gif1").style.visibility="hidden";
                document.getElementById("wiregif1").style.visibility="visible";
            },4500);

    setTimeout(function()
            {
                document.getElementById("graph1_1").style.visibility="visible";
                document.getElementById("graph1_2").style.visibility="visible";
            },4500);
}   




function showgraph2()
{
    document.getElementById("cond2").style.visibility="hidden";
    document.getElementById("hammerarrow1").style.visibility="hidden";
    document.getElementById("hammer1").style.animation="fixhand1 2s forwards";
    document.getElementById("gif2").style.visibility="visible";
    document.getElementById("wiregif2").style.visibility="hidden";

    setTimeout(function()
            {
                document.getElementById("gif2").style.visibility="hidden";
                document.getElementById("wiregif2").style.visibility="visible";
            },3500);

    setTimeout(function()
            {
                document.getElementById("graph2_1").style.visibility="visible";
                document.getElementById("graph2_2").style.visibility="visible";
            },3500);
} 

function showgraph3()
{
    document.getElementById("cond2").style.visibility="hidden";
    document.getElementById("hammerarrow1").style.visibility="hidden";
    document.getElementById("hammer1").style.animation="fixhand1 2s forwards";
    document.getElementById("gif3").style.visibility="visible";
    document.getElementById("wiregif3").style.visibility="hidden";

    setTimeout(function()
            {
                document.getElementById("gif3").style.visibility="hidden";
                document.getElementById("wiregif3").style.visibility="visible";
            },2500);

    setTimeout(function()
            {
                document.getElementById("graph3_1").style.visibility="visible";
                document.getElementById("graph3_2").style.visibility="visible";
            },2500);
}  

function showgraph4()
{
    document.getElementById("cond2").style.visibility="hidden";
    document.getElementById("hammerarrow1").style.visibility="hidden";
    document.getElementById("hammer1").style.animation="fixhand1 2s forwards";
    document.getElementById("gif4").style.visibility="visible";
    document.getElementById("wiregif4").style.visibility="hidden";

    setTimeout(function()
            {
                document.getElementById("gif4").style.visibility="hidden";
                document.getElementById("wiregif4").style.visibility="visible";
            },2500);

    setTimeout(function()
            {
                document.getElementById("graph4_1").style.visibility="visible";
                document.getElementById("graph4_2").style.visibility="visible";
            },2500);
} 

function showgraph5()
{
    document.getElementById("cond2").style.visibility="hidden";
    document.getElementById("hammerarrow1").style.visibility="hidden";
    document.getElementById("hammer1").style.animation="fixhand1 2s forwards";
    document.getElementById("gif5").style.visibility="visible";
    document.getElementById("wiregif5").style.visibility="hidden";

    setTimeout(function()
            {
                document.getElementById("gif5").style.visibility="hidden";
                document.getElementById("wiregif5").style.visibility="visible";
            },2200);

    setTimeout(function()
            {
                document.getElementById("graph5_1").style.visibility="visible";
                document.getElementById("graph5_2").style.visibility="visible";
            },2200);
} 
//    if (case1 == "sn")
 //    	{
    		
	// 	}
	// else if (case1 == "dn")
 //    	{
 //    		setTimeout(function()
 //            {
	// 			document.getElementById("graph2").style.visibility="visible";
	// 		},1000);
	// 	}
	// else
 //    	{
 //        	alert("Wrong");     
 //    	}
     


function showgraph7()
{
	document.getElementById("cond2").style.visibility="hidden";
	document.getElementById("hammerarrow1").style.visibility="hidden";
    document.getElementById("hammer1").style.animation="freehand1 2s forwards";
	
	if (case1 == "sn")
    	{
    		setTimeout(function()
            {
				document.getElementById("graph1").style.visibility="visible";
			},1000);
		}
	else if (case1 == "dn")
    	{
    		setTimeout(function()
            {
				document.getElementById("graph2").style.visibility="visible";
			},1000);
		}
	else
    	{
        	alert("Wrong");     
    	}
}
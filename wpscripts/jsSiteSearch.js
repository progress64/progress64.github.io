function GetSiteSearchResults(newWindow,frameObject,frameObjectName,fontFace,fontSize,fontColour,linkFace,linkSize,linkColour,bgColour,resultsText)
{
var sTerms="";
var iDepth = 0;
var sURL = new String(window.location.href);
if (sURL.indexOf("swr=true") != -1)
	return;
if (sURL.indexOf("?") > 0)
{
var arrParams = sURL.split("?" );
var arrURLParams = arrParams[1].split("&" );
for (var i=0;i<arrURLParams.length;i++)
{
var sParam = arrURLParams[i].split("=" );
var sValue = decodeURIComponent(sParam[1]);
if( decodeURIComponent(sParam[0]) == frameObjectName)
	sTerms = sValue;
if( decodeURIComponent(sParam[0]) == "depth")
	iDepth = parseInt(sValue);
}
}
var d=frameObject.document;
if (sTerms=="") {d.open(); d.write("<html><head></head><body style=\"background: transparent;\"></body></html>" ); d.close();return;}
var sBack=""; for (i=0; i<iDepth; i++) sBack+='..\\\\';
d.open();
d.write("<!doctype html>" );
d.write("<html lang=\"en\">" );
d.write("<head>" );
d.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">" );
d.write("</head>" );
d.write("<body style=\"margin: 0px 0px 0px 0px; font-family: "+fontFace+"; font-size: "+fontSize+"; color: "+fontColour+"; background: "+bgColour+";\">" );
d.write("<div id=\"wpSearchResults\"></div>" );
d.write("<script type=\"text/javascript\">" );
d.write("var wordMap = new Array(\" welcome… classic cars inside will find very finest historical vintage dating back over century motoring history this more than just hobby vivamus sapien praesent nisl tortor laoreet dapibus quis egestas mauris sociis natoque penatibus magnis parturient montes nascetur ridiculus nullam eleifend pharetra felis mauris nibh velit tristique lacinia scelerisque ante donec viverra nulla phasellus magna aenean vehicula turpis congue lorem aliquam odio pede vitae amet rhoncus curabitur facilisis urna vulputate tellus purus accumsan nunc nulla vestibulum suspendisse potenti aliquam nisi venenatis imperdiet lacus mattis eget fermentum help? massa metus semper tincidunt ultrices quam dictum libero bibendum elit lectus diam lobortis dignissim condimentum pellentesque risus auctor vestibulum dolor suscipit pulvinar erat volutpat habitasse platea dictumst ultricies consequat integer justo class aptent taciti sociosqu litora torquent conubia nostra inceptos hymenaeos morbi pellentesque interdum porta neque orci molestie iaculis maecenas \",\" contact forename surname email comments 7890 info classiccarsco twitter \",\" \",\" \" );" );
d.write("var pageMap = new Array(\"Classic Cars co\",\"Classic Cars co - Support\",\"Classic Cars co - Page 3\",\"Classic Cars co - Search\" );" );
d.write("var linkMap = new Array(\"index.html\",\"support.html\",\"sitemap.html\",\"search.html\" );" );
d.write("var preMap = new Array(\"Welcome… to Classic Cars co  Inside you will find the very finest Historical  Vintage and Classic Cars  dating back to over a century of motoring history  This is more than just a  hobby   Who are we?\",\"Contact Us Forename Surname Email Comments  123  456 7890 info classiccarsco com Twitter   classiccarsco \",\"\",\"\" );" );
d.write("function doNav(ind)" );
d.write("{" );
if (newWindow)
d.write("		 window.open(\""+sBack+"\"+linkMap[ind],\"_blank\" );" );
else
d.write("		 parent.window.location.href=linkMap[ind];" );
d.write("}" );
d.write("function wpDoSearch(searchTerms){" );
d.write("var terms = searchTerms.split(\" \" );" );
d.write("if (terms==\"\") return;" );
d.write("var results = \"\";" );
d.write("var resultscount = 0;" );
d.write("for (var i=0; i<wordMap.length; i++)" );
d.write("{" );
d.write("			var found=true;" );
d.write("			for (var j=0; j<terms.length; j++)" );
d.write("					if (wordMap[i].indexOf(terms[j].toLowerCase())==-1) found=false;" );
d.write("			if (found)" );
d.write("			{" );
d.write("				 results+=\"<a style=\\\"cursor: pointer; font-family: "+linkFace+"; font-size: "+linkSize+"; color: "+linkColour+"; \\\" onclick=\\\"doNav(\"+i+\" );\\\"><u>\"+pageMap[i]+\"</u></a><br>\"+preMap[i]+\"...<br><br>\";" );
d.write("				 resultscount++;" );
d.write("			}" );
d.write("}" );
d.write("document.getElementById(\"wpSearchResults\").innerHTML=resultscount+\" "+resultsText+" \"+searchTerms+\"<br><br>\"+results;" );
d.write("}" );
while(sTerms.indexOf("\"") != -1 ) {
sTerms = sTerms.replace("\"","" );
};
d.write("wpDoSearch(\""+sTerms+"\" );" );
d.write("</script>" );
d.write("</body></html>" );
d.close();
}
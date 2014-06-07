<!-- updated for 9.1 track -->
<!-- specify lessons and number of pages in each lesson -->
var m0=16; 
var m1=35; 
var m2=45;
var m200=33; 
var m3=26;
var m300=25;
var m4=55; 
var m5=55; 
var m6=42;
var m7=40; 
var m8=40; 
var m9=29;
var m10=37;
var m11=40;
var m12=48;
var m13=28;
var m14=32;
var m16=34;
var m1600=29;
var m18=32;
var m19=34;
var m20=49;
var m22=47;
var m23=40;
var m24=31;
var m25=20;
var m26=33;
var m27=30;
var m28=23;
var m30=95;
var m31=25;
var m32=45;
var m34=34;
var m35=35;
var m39=36;
var m40=40;
var m41=41;
var m42=34;
var m50=63;
var m51=41;
var m52=61;
var m53=35;
var m5300=28;
var m54=42;
var m55=28;
var m56=38;
var m57=27;
var m58=35;
var m59=60;
var m70=62;
var m71=40;
var m72=33;
var m73=60;
var m74=25;
var m75=21;
var m76=28;
var m80=40;
var m81=40;
var m83=40;
var m84=40;
var m87=40;

<!-- TRANSLATE -->
<!-- specify titles for each lesson -->
var m0title="Quick Tour"; 
var m1title="Basic Concepts";
var m2title="Editing and Debugging SAS Programs";
var m200title="Editing and Debugging SAS Programs";
var m3title="Using the Programming Workspace";
var m300title="Using the Programming Workspace";
var m4title="Creating List Reports";
var m5title="Creating Tabular Reports";
var m6title="Creating Plots";
var m7title="Creating Bar and Pie Charts";
var m8title="Enhancing and Exporting Charts and Plots";
var m9title="Creating Drill-Down Graphs in HTML";
var m10title="Performing Queries Using PROC SQL";
var m11title="Enhancing HTML Tabular Reports";
var m12title="Creating SAS Data Sets from Raw Data";
var m13title="Accessing DBMS Data";
var m14title="Reading SAS Data Sets";
var m16title="Referencing Files and Setting Options";
var m1600title="Referencing Files and Setting Options";
var m18title="Producing HTML Output";
var m19title="Reading Raw Data in Fixed Fields";
var m20title="Combining SAS Data Sets";
var m22title="Understanding DATA Step Processing";
var m23title="Reading Free-Format Data";
var m24title="Reading Date and Time Values";
var m25title="Creating a Single Observation from Multiple Records";
var m26title="Creating Multiple Observations from a Single Record";
var m27title="Reading Hierarchical Files";
var m28title="Reading Variable-Length Records";
var m30title="Transforming Data with SAS Functions";
var m31title="Creating and Applying User-Defined Formats";
var m32title="Improving Program Efficiency with Macro Variables";
var m34title="Generating Data with DO Loops";
var m35title="Processing Variables with Arrays";
var m39title="Creating and Managing Variables";
var m40title="Creating Enhanced List and Summary Reports";
var m41title="Producing Descriptive Statistics";
var m42title="Basic Concepts for EG - temp title";
var m50title="Introducing Macro Variables";
var m51title="Processing Macro Variables at Execution Time";
var m52title="Creating and Using Macro Programs";
var m53title="Storing Macro Programs";
var m5300title="Storing Macro Programs";
var m54title="Creating Samples and Indexes";
var m55title="Combining Data Vertically";
var m56title="Combining Data Horizontally";
var m57title="Using Lookup Tables to Match Data";
var m58title="Formatting Data";
var m59title="Modifying SAS Data Sets and Tracking Changes";
var m70title="Performing Advanced Queries Using PROC SQL";
var m71title="Combining Tables Horizontally Using PROC SQL";
var m72title="Combining Tables Vertically Using PROC SQL";
var m73title="Creating and Managing Tables Using PROC SQL";
var m74title="Creating and Managing Indexes Using PROC SQL";
var m75title="Creating and Managing Views Using PROC SQL";
var m76title="Managing Processing Using PROC SQL"; 
var m80title="Measuring Efficiency";
var m81title="Controlling Memory Usage";
var m83title="Utilizing Best Practices";
var m84title="Selecting Efficient Sorting Strategies";
var m87title="Combining Data Horizontally"; 






<!-- TRANSLATE -->
<!-- specify titles for each section of TOC -->
var s1title="Introduction to SAS Programming";
var s2title="Producing Reports";
var s3title="Producing Graphical Reports";
var s4title="Creating and Modifying SAS Data Sets";
var s5title="Reading Various Types of Raw Data";
var s6title="SQL Processing with SAS";
var s7title="SAS Macro Language";
var s8title="Advanced SAS Programming Techniques";
var s9title="Optimizing SAS Programs";

<!-- developers: don't edit below this line ----------------------------------- -->
<!-- -------------------------------------------------------------------------- -->
<!-- -------------------------------------------------------------------------- -->
<!-- -------------------------------------------------------------------------- -->

var thisWindow = window.location.href;
var myName = thisWindow.substring(thisWindow.lastIndexOf("/")+1,thisWindow.lastIndexOf("."));
var myModule = myName.substring(myName.lastIndexOf("m"),myName.lastIndexOf("_"));
var moduleTitle = myModule+"title";
var myModuleNumber = myModule.substring(1);
var myPage = myName.substring(myName.lastIndexOf("_")+1, myName.length);
var resultsWindow = myName + "x.htm";
var lastChar = myName.charAt(myName.length-1);
var alreadyopen = true;
if (lastChar >= 'a') var setTitle = 0;
else {
   var setTitle = 1;
   self.name="SAS";
}
if (setTitle == 1) {
   var goNext=eval(myPage)+1;
   var goPrev=eval(myPage)-1;
}
if (myName.indexOf("certquiz") !=-1) var numQues = 50; else var numQues = 10; 
var numChoi = 4;
var pctscore="";
var score=0;
var myPath = thisWindow.substring(0,thisWindow.lastIndexOf("/"));
var myDir = myPath.substring(myPath.lastIndexOf("/")+1);
var testForM=myDir.substring(0,1);
if (testForM == "m" || testForM == "l") {
   myPath = myPath.substring(0,myPath.lastIndexOf("/"));
   var myPubcode = myPath.substring(myPath.lastIndexOf("/")+1);
   }
else var myPubcode = myDir;
var courseTitle="";
var courseOrLesson ="";
var lessonTitle="";

<!-- check pubcode to see if course or lesson -------------------------------- -->
if((myPubcode == "58865") || (myPubcode == "59070") || (myPubcode == "59077") || (myPubcode == "59078") || 
   (myPubcode == "59079") || (myPubcode == "59080") || (myPubcode == "59081") || (myPubcode == "59280") || 
   (myPubcode == "59218") || (myPubcode == "59219") || (myPubcode == "59220") || (myPubcode == "59267") || 
   (myPubcode == "59322") || (myPubcode == "59366") || (myPubcode == "59367") || (myPubcode == "59368") || 
   (myPubcode == "59460") || (myPubcode == "Library") 
  )
   courseOrLesson = "course"; 
else courseOrLesson = "lesson"; 

function setCourseOrLesson() {
   document.write(courseOrLesson);
}

<!-- TRANSLATE -->
<!-- set course titles dynamically ------------------------------------ -->
        if(myPubcode == "59080") courseTitle="SAS<font size='-2'>&reg;</font> Certification: Base Programming";
   else if(myPubcode == "59081") courseTitle="SAS<font size='-2'>&reg;</font> Certification: Advanced Programming";
   else if(myPubcode == "59070") courseTitle="Introduction to SAS<font size='-2'>&reg;</font> Programming";
   else if(myPubcode == "59077") courseTitle="Producing Reports";
   else if(myPubcode == "59460") courseTitle="Producing Graphical Reports";
   else if(myPubcode == "59078") courseTitle="Creating and Modifying SAS<font size='-2'>&reg;</font> Data Sets";
   else if(myPubcode == "59079") courseTitle="Reading Various Types of Raw Data";
   else if(myPubcode == "58865") courseTitle="SAS<font size='-2'>&reg;</font> Macro Language";
   else if(myPubcode == "59218") courseTitle="Optimizing SAS<font size='-2'>&reg;</font> Programs";
   else if(myPubcode == "59219") courseTitle="Advanced SAS<font size='-2'>&reg;</font> Programming Techniques";
   else if(myPubcode == "59220") courseTitle="SQL Processing with SAS<font size='-2'>&reg;</font>";
   else if(myPubcode == "59322") courseTitle="SAS<font size='-2'>&reg;</font> OnlineTutor 9.1: Programming";
   else if(myPubcode == "59267") courseTitle="SAS<font size='-2'>&reg;</font> OnlineTutor 9.1: Advanced Programming";
   else if(myPubcode == "59366") courseTitle="SAS<font size='-2'>&reg;</font> Programming Library";
   else if(myPubcode == "59367") courseTitle=" SAS<font size='-2'>&reg;</font> Certified Advanced Programmer Library";
   else if(myPubcode == "59368") courseTitle="Advanced SAS<font size='-2'>&reg;</font> Programming Library";
   else if(myPubcode == "Library") courseTitle="SAS<font size='-2'>&reg;</font> Programming: Development Library";
   else courseTitle="SAS<font size='-2'>&reg;</font> Programming";

function setCourseTitle() {
   document.write(courseTitle);
}

<!-- TRANSLATE -->
<!-- set text for setup.htm depending on whether the deliverable is a lesson or course -->
<!-- only change text in the document.write string -------------------------------------->
function setLessonChecksText() {
  if (courseOrLesson=="course") document.write(" or see lessons marked as completed on the Learning Path.");
  else document.write(".");
}

<!-- set pubcodes for lessons ------------------------------------ -->
if (courseOrLesson=="lesson") {
        if(myPubcode == "59128") lessonTitle=m1title;
   else if(myPubcode == "59225") lessonTitle=m2title;
   else if(myPubcode == "59190") lessonTitle=m3title;
   else if(myPubcode == "59226") lessonTitle=m4title;
   else if(myPubcode == "59233") lessonTitle=m5title;
   else if(myPubcode == "59234") lessonTitle=m6title;
   else if(myPubcode == "59235") lessonTitle=m7title;
   else if(myPubcode == "59236") lessonTitle=m8title;
   else if(myPubcode == "59237") lessonTitle=m9title;
   else if(myPubcode == "59241") lessonTitle=m10title;
   else if(myPubcode == "59297") lessonTitle=m11title;
   else if(myPubcode == "59227") lessonTitle=m12title;
   else if(myPubcode == "59243") lessonTitle=m13title;
   else if(myPubcode == "59239") lessonTitle=m14title;
   else if(myPubcode == "59223") lessonTitle=m16title;
   else if(myPubcode == "59232") lessonTitle=m18title;
   else if(myPubcode == "59247") lessonTitle=m19title;
   else if(myPubcode == "59240") lessonTitle=m20title;
   else if(myPubcode == "59228") lessonTitle=m22title;
   else if(myPubcode == "59248") lessonTitle=m23title;
   else if(myPubcode == "59249") lessonTitle=m24title;
   else if(myPubcode == "59258") lessonTitle=m25title;
   else if(myPubcode == "59259") lessonTitle=m26title;
   else if(myPubcode == "59260") lessonTitle=m27title;
   else if(myPubcode == "59261") lessonTitle=m28title;
   else if(myPubcode == "59242") lessonTitle=m30title;
   else if(myPubcode == "59229") lessonTitle=m31title;
   else if(myPubcode == "59246") lessonTitle=m32title;  
   else if(myPubcode == "59244") lessonTitle=m34title;
   else if(myPubcode == "59245") lessonTitle=m35title;
   else if(myPubcode == "59238") lessonTitle=m39title;
   else if(myPubcode == "59230") lessonTitle=m40title;
   else if(myPubcode == "59231") lessonTitle=m41title;
   else if(myPubcode == "59262") lessonTitle=m50title;
   else if(myPubcode == "59263") lessonTitle=m51title;
   else if(myPubcode == "59264") lessonTitle=m52title;
   else if(myPubcode == "59265") lessonTitle=m53title;
   else if(myPubcode == "59339") lessonTitle=m54title;
   else if(myPubcode == "59336") lessonTitle=m55title;
   else if(myPubcode == "59341") lessonTitle=m56title;
   else if(myPubcode == "59337") lessonTitle=m57title;
   else if(myPubcode == "59334") lessonTitle=m58title;
   else if(myPubcode == "59335") lessonTitle=m59title;
   else if(myPubcode == "59333") lessonTitle=m70title; 
   else if(myPubcode == "59338") lessonTitle=m71title; 
   else if(myPubcode == "59369") lessonTitle=m72title; 
   else if(myPubcode == "59340") lessonTitle=m73title; 
   else if(myPubcode == "59398") lessonTitle=m74title; 
   else if(myPubcode == "59399") lessonTitle=m75title; 
   else if(myPubcode == "59342") lessonTitle=m76title; 
   <!-- add lessons from Optimizing course as available -->
   else lessonTitle="UNKNOWN LESSON";
}

<!-- set text for splash titles depending on whether the deliverable is a lesson or course -->
if (courseOrLesson == "course") {
   if(courseTitle.indexOf(":") !=-1) {
      var courseTitleFirstLine=courseTitle.substring(0,courseTitle.indexOf(":")+1);
      var courseTitleSecondLine=courseTitle.substring(courseTitle.indexOf(":")+2);
   }
   else {
      var courseTitleFirstLine=courseTitle;
      var courseTitleSecondLine="";
   }
}
else if (courseOrLesson == "lesson") {
   var courseTitleFirstLine=courseTitle;
   var courseTitleSecondLine=lessonTitle;
}

function setLessonTitle() {
   document.write(eval(moduleTitle));
}

function setLessonTitleLowcase() {
   myString=eval(moduleTitle);
   firstChar=myString.charAt(0);
   lowcaseTitle=firstChar.toLowerCase()+myString.substring(1);
   document.write(lowcaseTitle);
}

function setPageTitle() {
   if (setTitle == 1) {  
   document.write('<TITLE>'+eval(moduleTitle)+' - '+myPage+' of '+eval(myModule)+'</TITLE>');
   }
<!-- TRANSLATE -->
<!-- set page title dynamically; change only "Additional Information" -->
   else document.write('<TITLE>'+eval(moduleTitle)+': Additional Information</TITLE>');
}

if(document.images){
one1n=new Image();one1n.src="../navimages/one1n.gif";
one1y=new Image();one1y.src="../navimages/one1y.gif";
two1n=new Image();two1n.src="../navimages/two1n.gif";
two1y=new Image();two1y.src="../navimages/two1y.gif";
three1n=new Image();three1n.src="../navimages/three1n.gif";
three1y=new Image();three1y.src="../navimages/three1y.gif";
four1n=new Image();four1n.src="../navimages/four1n.gif";
four1y=new Image();four1y.src="../navimages/four1y.gif";
tourn=new Image();tourn.src="../navimages/tourmenu.gif";
toury=new Image();toury.src="../navimages/tourmn_h.gif";
pathn=new Image();pathn.src="../navimages/path.gif";
pathy=new Image();pathy.src="../navimages/path_h.gif";
helpn=new Image();helpn.src="../navimages/help.gif";
helpy=new Image();helpy.src="../navimages/help_h.gif";
resumen=new Image();resumen.src="navimages/resume.gif";
resumey=new Image();resumey.src="navimages/resume_h.gif";
bybn=new Image();bybn.src="navimages/byb.gif";
byby=new Image();byby.src="navimages/byb_h.gif";
homen=new Image();homen.src="navimages/home.gif";
homey=new Image();homey.src="navimages/home_h.gif";
contentsn=new Image();contentsn.src="../navimages/contents.gif";
contentsy=new Image();contentsy.src="../navimages/contenth.gif";
tocn=new Image();tocn.src="../navimages/toc.gif";
tocy=new Image();tocy.src="../navimages/toc_h.gif";
backn=new Image();backn.src="../navimages/back.gif";
backy=new Image();backy.src="../navimages/back_h.gif";
backpn=new Image();backpn.src="navimages/back.gif";
backpy=new Image();backpy.src="navimages/back_h.gif";
nextn=new Image();nextn.src="../navimages/next.gif";
nexty=new Image();nexty.src="../navimages/next_h.gif";
glossn=new Image();glossn.src="../navimages/gloss.gif";
glossy=new Image();glossy.src="../navimages/gloss_h.gif";
toc2n=new Image();toc2n.src="../navimages/toc.gif";
toc2y=new Image();toc2y.src="../navimages/toc_h.gif";
back2n=new Image();back2n.src="../navimages/back2.gif";
back2y=new Image();back2y.src="../navimages/back2_h.gif";
backp2n=new Image();backp2n.src="navimages/back2.gif";
backp2y=new Image();backp2y.src="navimages/back2_h.gif";
next2n=new Image();next2n.src="../navimages/next2.gif";
next2y=new Image();next2y.src="../navimages/next2_h.gif";
gloss2n=new Image();gloss2n.src="../navimages/gloss.gif";
gloss2y=new Image();gloss2y.src="../navimages/gloss_h.gif";
resetn=new Image();resetn.src="navimages/reset.gif";
resety=new Image();resety.src="navimages/reset_h.gif";
   if ((setTitle == 1) && (eval(myModule) < goNext)) {
      nextn.src="../navimages/next_g.gif";
      nexty.src="../navimages/next_g.gif";
      next2n.src="../navimages/next2_g.gif";
      next2y.src="../navimages/next2_g.gif";
   }
}

<!-- code for expandable table of contents -->

if (!document.getElementById)
    document.getElementById = function() { return null; }

function initializeMenu(lessontopicsID, lessonID, modulelessonsID, moduleID) {
    var lessontopics = document.getElementById(lessontopicsID);
    var lesson = document.getElementById(lessonID);
    var modulelessons = document.getElementById(modulelessonsID);
    var module = document.getElementById(moduleID);
    if (lessontopics == null || lesson == null || modulelessons == null || module == null) return;
    lesson.onclick = function() {
        var display = lessontopics.style.display; 
        this.parentNode.style.backgroundImage =
            (display == "block") ? "url(navimages/cntplus.gif)" : "url(navimages/cntminus.gif)";
        lessontopics.style.display = (display == "block") ? "none" : "block";
        return false;
    }
	    module.onclick = function() {
        var display = modulelessons.style.display; 
        this.parentNode.style.backgroundImage =
            (display == "block") ? "url(navimages/cntplus.gif)" : "url(navimages/cntminus.gif)";
        modulelessons.style.display = (display == "block") ? "none" : "block";
        return false;
    }
}

<!--  end of code for expandable table of contents -->

function lessonMenu() {
   window.location.href=myModule+"_0.htm";
}

function prevPage() {
   if ((goPrev=="0") && (myModule != "m0")) window.location.href="../paths.htm";
   else if ((goPrev=="0") && (myModule == "m0")) window.location.href="m0_paths.htm";
   else window.location.href=myModule+"_"+goPrev+".htm";
}

function nextPage() {
   if (eval(myModule) < goNext) {
      document.images.next.src="../navimages/next_g.gif";
      alert('This is the end of this section.');
   }
   else window.location.href=myModule+"_"+goNext+".htm";
}
 
function setNextGray() {
   if (eval(myModule) < goNext) {
      document.write('<img src="../navimages/next_g.gif" alt="next" width="30" height="19" border="0" name="next">');
   }
   else document.write('<img src="../navimages/next.gif" alt="next" width="30" height="19" border="0" name="next">');
}

function setNextGray2() {
   if (eval(myModule) < goNext) {
      document.write('<img src="../navimages/next2_g.gif" alt="next" width="30" height="19" border="0" name="next2">');
   }
   else document.write('<img src="../navimages/next2.gif" alt="next" width="30" height="19" border="0" name="next2">');
}

function rOver(boxL){
   if(document.images)
      {document[boxL].src=eval(boxL+'y.src');}
}

function rOut(boxL){
   if(document.images)
      {document[boxL].src=eval(boxL+'n.src');}
}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_jumpMenuGo(selName,targ,restore){ //v3.0
  var selObj = MM_findObj(selName); if (selObj) MM_jumpMenu(targ,selObj,restore);
}

////////////// version code ///////////////////////////

function openJumpMenu(sasversfile) {
   newWindow = window.open('','SASVersion','top=0,left=0,width=400,height=150,resizable=1,scrollbars=yes');
      if (alreadyopen) {
         alreadyopen = false;
      }
   alreadyopen = true;
   newWindow.location.href=sasversfile;
}

function hideForOltutor(element) {
   <!-- hide reset button for OnlineTutor -->
   if ((myPubcode=="59322") || (myPubcode=="59267")) { 
      if (element=="resetbtn") {
         if (document.getElementById('resetbtn').style.visibility != "hidden") {
             document.getElementById('resetbtn').style.visibility = "hidden";
         }
	  }
   }
   else return;
}

function checkVersion() {
    if(document.cookie) {
       version = document.cookie.indexOf('SASVersion=');
	   <!-- if SAS OnlineTutor CD for base or advanced, automatically assign 9.1 as version -->
 	      if ((myPubcode=="59322") || (myPubcode=="59267")) { 
             setVersion('v91');
	      }
          else if (version == -1) {
             openJumpMenu('sasvers.htm');
		  }
	      else getVersion();
    }
    else {
	   setInitialCookie();
	   checkVersion();
	}
}

function setVersion(myVersion) {
   document.cookie = 'SASVersion='+myVersion+';path=/;expires='+exp.toGMTString();
}

var myVersion="";
function getVersion() {
    if(document.cookie) {
        index = document.cookie.indexOf('SASVersion=');
		    <!--  if no version is specified, pop up selection window -->
            if (index == -1) {
			openJumpMenu('sasvers.htm')
            }
			<!--  otherwise, get existing version info -->
			else {
			   <!-- get version from cookie -->
		       version_begin = (document.cookie.indexOf('SASVersion=')+11);
               version_end   = (document.cookie.indexOf(";",version_begin));
               if (version_end == -1) version_end = document.cookie.length;
               myVersion = (document.cookie.substring(version_begin,version_end));
               <!--  define full text for version -->
<!-- TRANSLATE -->
<!-- set text to define the SAS software used -->
<!-- versionText text must match myVersion text in displaySetupDirections() below -->
               if      (myVersion == "v91") var versionText='9.1';
               else if (myVersion == "v89") var versionText='8 or 9.0';
               else if (myVersion == "le1") var versionText='Learning Edition';
               else if (myVersion == "eg1") var versionText='Enterprise Guide 1.3';
               else if (myVersion == "eg2") var versionText='Enterprise Guide 2.0';
               else var versionText="";
			   return versionText;
			}
	}
	else {
<!-- TRANSLATE -->
<!-- set text to warn about missing cookie -->
<!-- must match text for checkForRawDataLesson('overview') below -->
       if (confirm('Your SAS version needs to be reset. \nFirst, please be sure that cookies are turned on in your browser. \nThen return to the home page to reset your SAS version. ')) {
          if (!myModule) window.location.href="index.htm";
		  else window.location.href="../index.htm";
	   }
<!-- TRANSLATE -->
<!-- set text to warn if select cancel -->
<!-- must match text for checkForRawDataLesson('overview') below -->
	   else alert('Your SAS version is not set properly. \nSAS online training may not work as expected.');
	}
}

function filterEG(lesson,linkOrNot) {
   <!-- if version is not EG or LE, send to regular lesson -->
   if ((myVersion.indexOf('eg') == "-1") && (myVersion.indexOf('le') == "-1")) {
	  if (linkOrNot == "link") window.location.href=lesson+"/"+lesson+"_1.htm";
      else return lesson;
   }
   <!-- if version is EG or LE, send to regular+00 lesson -->
   else {
	  if (linkOrNot == "link") window.location.href=lesson+"00/"+lesson+"00_1.htm";
      else return lesson+"00";
   }
}  

<!-- This code is used to write specific DMS or EG content on the page. The logic for checking the version is related -->
<!-- to the logic in the checkVersion function. -->
var dmsSolutionText;
var eg1SolutionText;
var eg2SolutionText;
var docInfo1;
var docInfo2;
var docInfo3;


function writeInterface(variableName) {
   document.write(variableName);
}   

function setInterfaceVersion() {

    if(document.cookie) {
       version = document.cookie.indexOf('SASVersion=');
	   <!-- if SAS OnlineTutor CD for base or advanced, automatically assign 9.1 as version -->
 	      if ((myPubcode=="59322") || (myPubcode=="59267")) { 
             setVersion('v91');
	      }
          else if (version == -1) {
             if (confirm('Your SAS version needs to be reset. \nPlease return to the home page to reset it.'))           {
		        window.location.href="../index.htm";
	         }
	         else alert('Your SAS version is not set properly. \nSAS online training may not work as expected.');
		  }
	      else getVersion();
    }
    else {
             if (confirm('Your SAS training cookie needs to be reset. \nPlease return to the home page to reset it.'))           {
		        window.location.href="../index.htm";
	         }
	         else alert('Your SAS training cookie is not set properly. \nSAS online training may not work as expected.');
	}

   if ((myVersion.indexOf('eg') == "-1") && (myVersion.indexOf('le') == "-1")) {
      if (dmsInfo1) docInfo1=dmsInfo1;
      if (dmsInfo2) docInfo2=dmsInfo2;
      if (dmsInfo3) docInfo3=dmsInfo3;
	  if (dmsSolutionText) solutionText=dmsSolutionText;
   }
//   else {
//      if (egInfo1) docInfo1=egInfo1;
//      if (egInfo2) docInfo2=egInfo2;
//      if (egInfo3) docInfo3=egInfo3;
//	  if (egSolutionText) solutionText=egSolutionText;
//   }

//adding logic to distinguish between EG 1.3 and EG 2.0... this change will require going back to all the EG specific info
//and changing the name to eg1...
   else if ((myVersion == "eg1") || (myVersion == "le1")) {
      if (eg1Info1) docInfo1=eg1Info1;
      if (eg1Info2) docInfo2=eg1Info2;
      if (eg1Info3) docInfo3=eg1Info3;
	  if (eg1SolutionText) solutionText=eg1SolutionText;
   }
   else if (myVersion =="eg2"){
      if (eg2Info1) docInfo1=eg2Info1;
      if (eg2Info2) docInfo2=eg2Info2;
      if (eg2Info3) docInfo3=eg2Info3;
	  if (eg2SolutionText) solutionText=eg2SolutionText;
   }
<!-- the end of the change for EG1.3 and EG2.0 -->
}
	
function checkForRawDataLesson(location) {
<!-- check for associated raw data lessons only -->
if (location=="reminder") {
   if ((opener.myModule == "m12") || 
       (opener.myModule == "m19") || 
       (opener.myModule == "m23") ||
       (opener.myModule == "m24") || 
       (opener.myModule == "m25") || 
       (opener.myModule == "m26") || 
       (opener.myModule == "m27") || 
       (opener.myModule == "m28") || 
       (opener.myModule == "m39") || 
       (opener.myModule == "m54") || 
       (opener.myModule == "m55"))
   {
      if ((myVersion == "9.1") || (myVersion == "8 or 9.0")) { 
<!-- TRANSLATE -->
<!-- set message for reminder page: submitting program to set up filerefs -->
   document.write('<br><br><li>Submit <a href="JavaScript: openOther(\'rawdata.txt\')">this SAS ');
   document.write('program</a> to set up filerefs for practices.  If you have already done this ');
   document.write('in the current SAS session, you can skip this task. (This program is the same for all lessons.)');
	  }
      else if ((myVersion == "Learning Edition") || 
	           (myVersion == "Enterprise Guide 1.3") || 
			   (myVersion == "Enterprise Guide 2.0"))
      {
<!-- TRANSLATE -->
<!-- set message for reminder page: submitting program to set up filerefs -->
   document.write('<br><li>Submit <a href="JavaScript: openOther(\'rawdata.txt\')">this SAS ');
   document.write('program</a> to set up filerefs for practices.  If you have already done this ');
   document.write('in the current SAS session, you can skip this task. (This program is the same for all lessons.)');
  
      }
   <!-- TRANSLATE -->
<!-- set text to warn about missing cookie -->
<!-- must match text for checkForRawDataLesson('overview') below -->
      else if (confirm('Your SAS version needs to be reset. \nPlease return to the home page to reset it.')) {
           opener.resizePage();
		   opener.location.href="index.htm";
	  }
<!-- TRANSLATE -->
<!-- set text to warn if select cancel -->
<!-- must match text for checkForRawDataLesson('overview') below -->
	  else alert('Your SAS version is not set properly. \nSAS online training may not work as expected.');
	// }
   } <!-- end of opener.myModule -->
} <!-- end of "reminder" -->

else if (location=="setup") {
<!-- check for associated courses and raw data lessons -->
   if ((myPubcode == "59079")   || <!-- Reading Various Types of Raw Data -->
       (myPubcode == "59070")   || <!-- Introduction to SAS Programming -->
       (myPubcode == "59080")   || <!-- SAS Certification: Base Programming -->
       (myPubcode == "59081")   || <!-- SAS Certification: Advanced Programming -->
       (myPubcode == "59322")   || <!-- SAS OnlineTutor 9.1: Programming -->
       (myPubcode == "59267")   || <!-- SAS OnlineTutor 9.1: Advanced Programming -->
       (myPubcode == "59366")   || <!-- SAS Programming Library -->
       (myPubcode == "59367")   || <!-- SAS Certified Advanced Programmer Library -->
       (myPubcode == "59368")   || <!-- Advanced SAS Programming Library -->
	   (myPubcode == "59219")   || <!-- Advanced SAS Programming Techniques -->
	   (myPubcode == "59078")   || <!-- Creating and Modifying SAS Data Sets -->
       (myPubcode == "Library") || <!-- development library -->
       (myPubcode == "59227")   || <!-- m12 -->
       (myPubcode == "59247")   || <!-- m19 -->
       (myPubcode == "59248")   || <!-- m23 -->
       (myPubcode == "59249")   || <!-- m24 --> 
       (myPubcode == "59258")   || <!-- m25 --> 
       (myPubcode == "59259")   || <!-- m26 --> 
       (myPubcode == "59260")   || <!-- m27 -->
       (myPubcode == "59261")   || <!-- m28 --> 
	   (myPubcode == "59238")   || <!-- m39 -->
	   (myPubcode == "59339")   || <!-- m54 -->
       (myPubcode == "59336"))     <!-- m55 --> 
   {
<!-- TRANSLATE -->
<!-- set message for setup page: note about raw data lessons -->
   document.write('<br><br><li>When you take any lesson related to reading raw data, in the lesson overview ');
   document.write('you\'ll be prompted to submit additional setup code in each new SAS session.');
   } <!-- end of myPubcode -->
} <!-- end of "setup" -->

else if (location=="overview") {
<!-- check for associated raw data lessons only -->
   if ((myModule == "m12") || 
       (myModule == "m19") || 
       (myModule == "m23") ||
       (myModule == "m24") || 
       (myModule == "m25") || 
       (myModule == "m26") || 
       (myModule == "m27") || 
       (myModule == "m28") || 
       (myModule == "m39") || 
       (myModule == "m54") || 
       (myModule == "m55")) 
   {
   document.write('Submit <a href="JavaScript: openOther(\'../rawdata.txt\')">this SAS ');
   document.write('program</a> to set up filerefs for practices.  If you have already done this ');
   document.write('in the current SAS session, you can skip this task. (This program is the same for all lessons.)');
   } <!-- end of myModule -->
} <!-- end of "overview" -->

   else return;
} 
	
function displayVersionText() {
   document.write(getVersion());
}

function displayVersionReminderText() {
   myVersion=getVersion();
   if (myVersion == "9.1") {
<!-- TRANSLATE -->
   reminderText= 'select <strong>Help<img src="navimages/arrow.gif" width="14" height="10" alt="then">Learning ';
   reminderText+='SAS Programming</strong> from the SAS menu. When the SAS Online Training Sample ';
   reminderText+='Data window appears, click <strong>OK</strong> to create sample data.';
   }
   else if (myVersion == "8 or 9.0") {
<!-- TRANSLATE -->
   reminderText= 'copy and paste <a href="JavaScript: openOther(\'sampdata.txt\')">this SAS program</a> ';
   reminderText+='into the Editor or Program Editor window in SAS. Then select <strong>Run<img ';
   reminderText+=' src="navimages/arrow.gif" width="14" height="10" alt="then">Submit</strong> ';
   reminderText+='from the SAS menu.';
   }
   else if ((myVersion == "Learning Edition") || (myVersion == "Enterprise Guide 1.3")) {
<!-- TRANSLATE -->
   reminderText= 'copy and paste <a href="JavaScript: openOther(\'sampdata.txt\')">this SAS program</a> ';
   reminderText+='into a Code Editor window and submit it.';
   reminderText+='<br><br><table border="0" cellspacing="0" cellpadding="0"><tr valign="top"> ';
   reminderText+='<td width="24"><img src="navimages/tip.gif" width="20" height="20" alt="Tip:"></td>';
   reminderText+='<td>If you have never used SAS Enterprise Guide before, follow these ';
   reminderText+='<a href="Javascript: openOther(\'linklib/egsetup.htm\')">step-by-step directions</a> ';
   reminderText+='to create the practice data.</td></tr></table>';  
   }
      else if (myVersion == "Enterprise Guide 2.0") {
<!-- TRANSLATE -->
   reminderText= 'copy and paste <a href="JavaScript: openOther(\'sampdata.txt\')">this SAS program</a> ';
   reminderText+='into a Code Editor window and submit it.';
   reminderText+='<br><br><table border="0" cellspacing="0" cellpadding="0"><tr valign="top"> ';
   reminderText+='<td width="24"><img src="navimages/tip.gif" width="20" height="20" alt="Tip:"></td>';
   reminderText+='<td>If you have never used SAS Enterprise Guide before, follow these ';
   reminderText+='<a href="Javascript: openOther(\'linklib/eg2setup.htm\')">step-by-step directions</a> ';
   reminderText+='to create the practice data.</td></tr></table>';  
   }
//////////////// add link and so on /////////////////////////////
   else reminderText='you need to do so. First, <font color="red">please return to the home page to reset your SAS version.</font>';
   document.write(reminderText);
}

function displaySetupDirections() {
   myVersion=getVersion();

<!-- TRANSLATE -->
<!-- set message for setting up the training environment for V9.1 and higher -->
<!-- myVersion text must match versionText text in getVersion() above -->
      if (myVersion == "9.1") {
         setupText='Select <strong>Help<img src="navimages/arrow.gif" width="14" height="10" ';
	     setupText+='border="0" alt="then">Learning SAS Programming</strong> from the menu. ';
	     setupText+='When the SAS Online Training Sample Data window appears, click ';
	     setupText+='<strong>OK</strong> to create sample data.<br><br>';
      }
<!-- TRANSLATE -->
<!-- set message for setting up the training environment for V9.0 and V8 -->
<!-- myVersion text must match versionText text in getVersion() above -->
      else if (myVersion == "8 or 9.0") {
         setupText='Copy and paste <a href="JavaScript: ';
	     setupText+='openOther(\'sampdata.txt\')">this SAS program</a> into the Editor or ';
	     setupText+='Program Editor window in SAS. Then select <strong>Run<img ';
	     setupText+='src="navimages/arrow.gif" width="14" height="10" alt="then">Submit</strong> ';
	     setupText+='from the SAS menu.<br><br>';
      }
<!-- TRANSLATE -->
<!-- set message for setting up the training environment for Learning Edition or EG 1.3 or EG 2.0-->
<!-- myVersion text must match versionText text in getVersion() above -->
      else if ((myVersion == "Learning Edition") || (myVersion == "Enterprise Guide 1.3")) {
         setupText='If you have never used Enterprise Guide before, follow these ';
		 setupText+='<a href="Javascript: openOther2(\'linklib/egsetup.htm\')">step-by-step directions</a> ';
		 setupText+='to create practice data.<br><br> If you are already familiar with SAS Enterprise Guide, copy and paste ';
	     setupText+='<a href="Javascript: openOther2(\'sampdata.txt\')">this SAS program</a> into a Code Editor window and submit it.<br><br>';
       }
	    else if (myVersion == "Enterprise Guide 2.0") {
         setupText='If you have never used Enterprise Guide before, follow these ';
		 setupText+='<a href="Javascript: openOther2(\'linklib/eg2setup.htm\')">step-by-step directions</a> ';
		 setupText+='to create practice data.<br><br> If you are already familiar with SAS Enterprise Guide, copy and paste ';
	     setupText+='<a href="Javascript: openOther2(\'sampdata.txt\')">this SAS program</a> into a Code Editor window and submit it.<br><br>';
       }
<!-- TRANSLATE -->
<!-- set error message for setting up the training environment -->
      else {
	     setupText='<font color="red">Your SAS software is not specified. Please ';
	     setupText+='<a href="JavaScript: openJumpMenu(\'sasvers.htm\')">select the SAS software</a> that you are using.</font><br><br>';
	  }
   document.write(setupText);
}

////////////// end of version code ///////////////////////////

function openGlossary(docname) {
   newWindow = window.open('','Glossary','top=0,left=0,width=370,height=360,resizable=1,scrollbars=yes');
      if (alreadyopen) {
         alreadyopen = false;
      }
   alreadyopen = true;
   newWindow.location.href=docname;
}

function openContentsIndex() {
   newWindow = window.open('conttab.htm','ContentsIndex','top=0,left=0,width=550,height=500,resizable=1,scrollbars=yes');
      if (alreadyopen) {
         alreadyopen = false;
      }
   alreadyopen = true;
}

function openNotes() {
   notesPage=myName + "a.htm";
   newWindow = window.open('','Notes','top=0,left=0,width=500,height=500,resizable=1,scrollbars=yes');
      if (alreadyopen) {
         alreadyopen = false;
      }
   alreadyopen = true;
   newWindow.location.href=notesPage;
}

function openMenu(page) {
   newWindow = window.open(page,'Menu','top=0,left=0,width=400,height=450,resizable=1,scrollbars=yes');
      if (alreadyopen) {
         alreadyopen = false;
      }
   alreadyopen = true;
}

function openOther(page) {
   newWindow = window.open('','Other','top=0,left=0,width=600,height=750,resizable=1,scrollbars=yes');
      if (alreadyopen) {
         alreadyopen = false;
      }
   alreadyopen = true;
   newWindow.location.href=page;
}

function openOther2(page) {
   newWindow = window.open('','Other2','top=25,left=25,width=600,height=750,resizable=1,scrollbars=yes');
      if (alreadyopen) {
         alreadyopen = false;
      }
   alreadyopen = true;
   newWindow.location.href=page;
}

function openOther3(page) {
   newWindow = window.open('','Other3','top=50,left=50,width=600,height=750,resizable=1,scrollbars=yes');
      if (alreadyopen) {
         alreadyopen = false;
      }
   alreadyopen = true;
   newWindow.location.href=page;
}

function openOther4(page) {
   newWindow = window.open('','Other4','top=75,left=75,width=600,height=750,resizable=1,scrollbars=yes');
      if (alreadyopen) {
         alreadyopen = false;
      }
   alreadyopen = true;
   newWindow.location.href=page;
}

function openDoc(page) {
   newWindow = window.open('','Documentation','top=0,left=0,width=640,height=520,resizable=1,scrollbars=yes');
   var newURL=newWindow.document.URL;
   if (newURL=="about:blank") newWindow.location.href=page;
   else {
      newWindow.close();
      openDoc(page);
   }
}

<!-- TRANSLATE -->
<!-- change "<TITLE>Details</TITLE>" and button text "VALUE='Close'" if needed -->
var newWind;
function openImage(img,x,y){ 
   var output; 
   if (newWind != null) newWind.close(); 
   x=eval(x+50);
   y=eval(y+80);
   newWind = window.open("","Details","HEIGHT="+y+",WIDTH="+x+",scrollbars,resizable,top=5,left=5"); 
   output="<HTML><HEAD><TITLE>Details</TITLE></HEAD><BODY BGCOLOR='#FFFFF0' ";  
   output+="onLoad='this.focus()' onBlur='opener.newWind=null'><CENTER>"; 
   output+="<IMG SRC='"+img+"'>"; 
   output+="<FORM name='form1'><INPUT TYPE='button' name='Button' VALUE='Close' onClick='self.close()'>"; 
   output+="</FORM></CENTER></BODY></HTML>"; 
   newWind.document.write(output); 
   newWind.document.close(); 
} 

<!-- TRANSLATE -->
<!-- change "<TITLE>Answer</TITLE>" and button text "VALUE='Close'" if needed -->
function openAnswer(choice){ 
   var output; 
   if (newWind != null) newWind.close(); 
   newWind = window.open("","Answer","HEIGHT=200,WIDTH=500,scrollbars,resizable,top=5,left=5"); 
   output="<HTML><HEAD><TITLE>Answer</TITLE>";
   output+='<link rel="stylesheet" href="../tut.css">';
   output+="</HEAD><BODY BGCOLOR='#FFFFE0' ";  
   output+="onLoad='this.focus()' onBlur='opener.newWind=null'><CENTER>"; 
   output+='<table width="90%" height="73%" border="0" cellspacing="0" cellpadding="3">';
   output+='<tr valign="top"><td>'+choice+"</td></tr></table><p align='bottom'>"; 
   output+="<FORM name='form1'><INPUT TYPE='button' name='Button' VALUE='Close' onClick='self.close()'>"; 
   output+="</FORM></CENTER></BODY></HTML>"; 
   newWind.document.write(output); 
   newWind.document.close(); 
} 

<!-- TRANSLATE -->
<!-- change "<TITLE>Solution</TITLE>" and button text "VALUE='Close'" if needed -->
function openSolution(solution){ 
   var output; 
   if (newWind != null) newWind.close(); 
   newWind = window.open("","Solution","HEIGHT=500,WIDTH=500,scrollbars,resizable,top=5,left=5"); 
   output="<HTML><HEAD><TITLE>Solution</TITLE>";
   output+='<link rel="stylesheet" href="../tut.css">';
   output+="</HEAD><BODY BGCOLOR='#FFFFE0' ";  
   output+="onLoad='this.focus()' onBlur='opener.newWind=null'><CENTER>"; 
   output+='<table width="90%" height="90%" border="0" cellspacing="0" cellpadding="3">';
   output+='<tr valign="top"><td>'+solution+"</td></tr></table><p align='bottom'>"; 
   output+="<FORM name='form1'><INPUT TYPE='button' name='Button' VALUE='Close' onClick='self.close()'>"; 
   output+="</FORM></CENTER></p></BODY></HTML>"; 
   newWind.document.write(output); 
   newWind.document.close(); 
} 

// Code for fill-in questions ------------------------------------------------------------------

// Set instructions -------------------
<!-- TRANSLATE -->
<!-- change text for standard messages if needed -->
   press1 ='Type your answer and select <strong>Check My Answer</strong>.';
   press2 ='Select <strong>Show Correct Answer</strong> for a correct answer and explanation.';
   press3 ='';
   press4 ='<p>Please try again or select <strong>Show Correct Answer</strong>.';

// Strip extra blanks around delimiters --------

function stripBlanks() {

   chkfld1  = document.form1.anstext.value;
   cls      = chkfld1;               
   tmp      = '';
   blankcnt = 0;
   quote    = ' ';
   quoteflg = 0;
   len      = cls.length;

   array1 = new Array(len);

   for (n=0; n<=len-1; n++) {
      anschar = cls.substring(n,n+1);

 /* ----- Count the blank number ----------------------------------- */

      if (anschar == ' ') blankcnt = (blankcnt + 1);
      if ((anschar != ' ') && (blankcnt > 0)) blankcnt = 0;

 /* ----- Spotted a quote, so set flags ---------------------------- */

      if ((anschar == "'") || (anschar == '"')) {
            if (quoteflg == 0) {
                  quote = anschar;
                  quoteflg = 1;
            }
            else {
                  if (anschar == quote) {
                        quote = ' ';
                        quoteflg = 0;
                  }
            }
      }

      if (quoteflg == 0) {
            if (blankcnt <= 1) tmp = tmp + anschar;
      }
      else tmp = tmp + anschar;
   }

   chkfld1  = document.form1.anstext.value;
   cls      = tmp;               
   tmp      = '';
   delim    = '()*=,;-></+**$|!{}';
   blankcnt = 0;
   quote    = ' ';
   quoteflg = 0;
   len      = cls.length;

   array2 = new Array(len);

   for (n=0; n<=len-1; n++) {

      anschar = cls.substring(n,n+1);

      if (n < len-1) nextanschar = cls.substring(n+1,n+2);
         else nextanschar = cls.substring(len-1,len);

      if (n == 0 && cls.substring(0,1) ==' ') prevanschar = '';
         else if (n > 0) prevanschar = cls.substring(n-1,n);
         else prevanschar = cls.substring(n,n+1);

 /* ----- Spotted a quote, so set flags ---------------------------- */

      if ( (anschar == "'") || (anschar == '"') ) {
            if (quoteflg == 0) {
                  quote = anschar;
                  quoteflg = 1;
            }
               else {
                  if (anschar == quote) {
                        quote = ' ';
                        quoteflg = 0;
                  }
               }
      }

      if (quoteflg == 0) {
            if (n == len-1 && anschar==' ') tmp = tmp;
            else if ( (anschar == ' ') && 
               (((delim.indexOf(nextanschar) != "-1") ||
                 (delim.indexOf(prevanschar) != "-1"))) ) {

               if (useParens=="no") {
                     if (((anschar == ' ') &&
                        ((nextanschar == '(') ||
                         (prevanschar == ')'))) ) {
                        tmp = tmp + anschar;
                     }
                        else tmp = tmp;
				}
				else if (useParens=="yes") tmp = tmp;
            }
                  else tmp = tmp + anschar;
      }
         else tmp = tmp + anschar;
   }
}

// Display feedback to user -----------

function keywordCheck() {
        keyword  = answer[1].substring(0,answer[1].indexOf(" "));
        if (tmp.indexOf(" ")!= "-1") {
           checkkey = tmp.toLowerCase().substring(0,tmp.indexOf(" "));
        }
        else  if (tmp.indexOf(";")!=-1) {
           checkkey = tmp.toLowerCase().substring(0,tmp.indexOf(";"));
        }
        else checkkey = tmp.toLowerCase();
           if (keyword != checkkey) keyflg = '1'; 
           else keyflg = '0';
}

function semicolonCheck() {
           if (tmp.substring((tmp.length)-1,tmp.length) != ';') {
              semiflg = '1';
           }
              else semiflg = '0';
}
    
function setFeedback (checkKeyword,checkSemicolon,useParens){
   stripBlanks();
   for (i=1; i<=answer.length; i++) {
      alertMsg = "";

      //  ----- If answer is correct ------------------------------ */
      if (answer[i] == tmp.toLowerCase()) {
	   
	   // ----- check any quoted strings -------------- */
          var stringsCorrect=0;
          for (i=1; i<=quotedString.length-1; i++) {
             if (tmp.indexOf(quotedString[i]) == -1) {
			    stringsCorrect++;
             }
		  }
          if (stringsCorrect==0) {
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
		     openAnswer("<strong>Correct.</strong><p>"+right1+right2+right3);
             break;
		  }	 
          else if (stringsCorrect>0) {
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
             wrong4='Your answer is correct&#151;except for one or more words in a ';
             wrong5='<strong>different case</strong> than the question specified. ';
             wrong6='SAS would accept this statement, but your results may not be what ';
	         wrong7='you intended. <p>If you want to try again, please check the directions.';
		     openAnswer(wrong4+wrong5+wrong6+wrong7);
            break;
		  }	 
       }

      //  ----- If answer is blank -------------------------------- */

      else if (chkfld1 == '') {
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
         fb1='Please do one of the following:';
         fb2='';
         fb3='<ol><li>' + press1;
         fb4='<li>' + press2 + "</ol>"; 
         fb5='' + press3;         
         openAnswer(fb1+"\n"+fb2+"\n"+fb3+"\n"+fb4+"\n"+fb5);
         break;
      }

      //  ----- If answer is incorrect ---------------------------- */

      else {

        keyflg = '0';
        semiflg = '0';
        fb1 = "";
        fb2 = "";
        fb3 = "";
        fb4 = "";
        fb5 = "";

        //  ----- Check the keyword ------------------------------- */
		
    if (checkKeyword=="yes") keywordCheck();
                           
        //  ----- Check the semicolon ----------------------------- */

    if (checkSemicolon=="yes") semicolonCheck();

        //  ----- Build the screen messages ----------------------- */

           if (keyflg == '1') {
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
              fb1='You must specify the keyword '+ keyword.toUpperCase() + ' at the ';
              fb2='beginning of the statement. \nYour answer might also contain other errors. ';
           }

           if (semiflg == '1') {
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
              fb3='Add a semicolon and check for other mistakes. ';
           }

           fb4 = "";
           fb5 = press4;

        
        //  ----- If all else failed, give generic error message -- */

           if ( (keyflg != '1') && (semiflg != '1') ) {
              fb1=wrong1;
              fb2=wrong2;
              fb3=wrong3;
              fb4 = "";
              fb5 = press4;

           }
      }
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
        alertMsg="<strong>Incorrect.</strong><p>"+fb1+fb2+fb3+fb4+"<p>"+fb5;
   }
        if (alertMsg != "") openAnswer(alertMsg);
}

function showAnswer() {
   fb1 = right1;
   fb2 = right2; 
   fb3 = right3;       
   fb4 = " ";
   fb5 = press3;
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
   openAnswer("The correct answer is <pre><font color='#003399'>"+answer[1]+"</font></pre>"+fb1+fb2+fb3+fb4+fb5);
}

function resizePage() {
  if(navigator.appVersion.indexOf("Win")!=-1) {
   if(window.resizeTo) {
      if(window.innerHeight) {
         currentWidth=window.innerWidth;
      }
      else if (document.body.clientHeight) {
         currentWidth=document.body.clientWidth;
      }
      else currentWidth=550;
      self.resizeBy((mywidth-currentWidth),0);
   }
  }
}

function sizePractice() {
  if(navigator.appVersion.indexOf("Win")!=-1) {
   if (window.resizeTo) {
      if (window.innerHeight) {
         mywidth = window.innerWidth;
      }
      else if (document.body.clientHeight) {
         mywidth = document.body.clientWidth;
      }
      else mywidth=465;
      if (mywidth>465) self.resizeBy(-(mywidth-465),0);
    }
   }
}

function suggestBack() {
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
   alert("After you visit this link, return by selecting the browser's\n"+
         "Back button or Back from the browser's pop-up menu.\n\n"+
         "(Don't use the lesson's back button.)");
}

<!-- need to consolidate all three certificates in next development phase -->
function writeCertificate(certName) {
   newWindow = window.open('../linklib/cert.htm','Certificate','top=0,left=0,width=760,height=620,resizable=yes,scrollbars=yes');
      if (alreadyopen) {
         alreadyopen = false
      }
   alreadyopen = true
   if (newWindow != null) {
      if (newWindow.opener == null) {
         newWindow.opener = self;
      }
   }
      newWindow.certificateName=certName;
}

function writeCourseCertificate(certName) {
   newWindow = window.open('linklib/cert_crs.htm','Certificate','top=0,left=0,width=760,height=620,resizable=yes,scrollbars=yes');
      if (alreadyopen) {
         alreadyopen = false
      }
   alreadyopen = true
   if (newWindow != null) {
      if (newWindow.opener == null) {
         newWindow.opener = self;
      }
   }
      newWindow.certificateName=certName;
}

function writeLibraryCertificate(certName) {
   newWindow = window.open('linklib/cert_lib.htm','Certificate','top=0,left=0,width=760,height=620,resizable=yes,scrollbars=yes');
      if (alreadyopen) {
         alreadyopen = false
      }
   alreadyopen = true
   if (newWindow != null) {
      if (newWindow.opener == null) {
         newWindow.opener = self;
      }
   }
      newWindow.certificateName=certName;
}

var certName="Your Name Here";
function downloadCertificate() {
      if(document.cookie){
         var quizString=new String(checkForQuizString('quizPass'));
		 var modulePound=myModule+"#";
            if(quizString.indexOf(modulePound)!=-1) {
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
               certName=prompt("Congratulations! You've mastered the material in this lesson.\n"+
                     "Please enter your name as you want it to appear on the certificate:", "Your Name Here");
               if(certName==null) return;
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
               else if(certName=="Your Name Here" || certName=="") certName=prompt("Please enter your name as you want it to appear on the certificate:", "Your Name Here");
               if(certName!="Your Name Here" && certName!="" && certName!=null) writeCertificate(certName);
            }
		  
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
            else alert("Sorry, but you haven't yet scored 80% or higher on the quiz\n"+
                       "for this lesson. \n\n"+
					   "When you've successfully completed the quiz, please return \n"+
                       "here to print your certificate.")
	  }
}

function downloadCourseCertificate() {
     if(document.cookie){
	    // for SAS OnlineTutor 9.1: Programming
	    if(myPubcode == "59322") {
           var courseLessons = new Array("m1#","m2#","m3#","m4#","m5#","m6#","m7#","m8#","m9#","m10#","m11#","m12#","m13#","m14#","m16#","m18#","m19#","m20#","m22#","m23#","m24#","m25#","m26#","m27#","m28#","m30#","m31#","m32#","m34#","m35#","m39#","m40#","m41#");
		}
	    // for SAS OnlineTutor 9.1: Advanced Programming
	    else if(myPubcode == "59267") {
           var courseLessons = new Array("m10#","m50#","m51#","m52#","m53#","m54#","m55#","m56#","m57#","m58#","m59#","m70#","m71#","m72#","m73#","m74#","m75#","m76#");
		}
	    // for SAS Certification: Base Programming
	    else if(myPubcode == "59080") {
           var courseLessons = new Array("m1#",filterEG('m2','')+"#",filterEG('m3','')+"#","m4#","m12#","m14#",filterEG('m16','')+"#","m18#","m19#","m20#","m22#","m23#","m24#","m25#","m26#","m27#","m30#","m31#","m34#","m35#","m39#","m40#","m41#");
		}
	    // for SAS Certification: Advanced Programming
		else if(myPubcode == "59081") {
           var courseLessons = new Array("m10#","m70#","m71#","m72#","m73#","m74#","m75#","m76#","m50#","m51#","m52#",filterEG('m53','')+"#","m54#","m55#","m56#","m57#","m58#","m59#");
		}
	    // for Introduction to SAS Programming
		else if(myPubcode == "59070") {
           var courseLessons = new Array("m1#",filterEG('m2','')+"#",filterEG('m3','')+"#","m4#","m12#",filterEG('m16','')+"#","m22#");
		}
	    // for Producing Reports
		else if(myPubcode == "59077") {
           var courseLessons = new Array("m31#","m40#","m41#","m18#","m5#","m11#");
		}
	    // for Producing Graphical Reports
		else if(myPubcode == "59460") {
           var courseLessons = new Array("m6#","m7#","m8#","m9#");
		}
	    // for Creating and Modifying SAS Data Sets
		else if(myPubcode == "59078") {
           var courseLessons = new Array("m39#","m14#","m20#","m10#","m30#","m13#","m34#","m35#","m32#");
		}
	    // for Reading Various Types of Raw Data
		else if(myPubcode == "59079") {
           var courseLessons = new Array("m19#","m23#","m24#","m25#","m26#","m27#","m28#");
		}
	    // for SAS Macro Language
		else if(myPubcode == "58865") {
           var courseLessons = new Array("m50#","m51#","m52#",filterEG('m53','')+"#");
		}
///////////////////// fix lessons for this course
	    // for Optimizing SAS Programs
		else if(myPubcode == "59218") {
           var courseLessons = new Array("m60#","m61#","m62#","m63#","m64#","m65#","m66#");
		}
	    // for Advanced SAS Programming Techniques
		else if(myPubcode == "59219") {
           var courseLessons = new Array("m54#","m55#","m56#","m57#","m58#","m59#");
		}
	    // for SQL Processing with SAS
		else if(myPubcode == "59220") {
           var courseLessons = new Array("m10#","m70#","m71#","m72#","m73#","m74#","m75#","m76#");
		}
		// for development library -- testing //
	    else if(myPubcode == "Library") {
           var courseLessons = new Array("m1#",filterEG('m3','')+"#");
		}

<!-- TRANSLATE -->
<!-- change feedback text for bad course pubcode if needed -->
		else {
		   var courseLessons="none";
		   alert('The course you are taking is not recognized.\nPlease see your course administrator.');
           }
 
           var quizString=new String(checkForQuizString('quizPass'));
		   var quizflag=0;
	          for (i=0; i<courseLessons.length; i++) {
                 if(quizString.indexOf(courseLessons[i])==-1) {
				 quizflag=1;
				 }
              }
              if(quizflag==0) {
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
                 certName=prompt("Congratulations! You've mastered the material in this course.\n"+
                                 "Please enter your name as you want it to appear on the certificate:", "Your Name Here");
                 if(certName==null) return;
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
                 else if(certName=="Your Name Here" || certName=="") certName=prompt("Please enter your name as you want it to appear on the certificate:", "Your Name Here");
                 if(certName!="Your Name Here" && certName!="" && certName!=null) writeCourseCertificate(certName);
              }
		  
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
              else alert("Sorry, but you haven't yet completed all the quizzes for this\n"+
                         "course with a score of 80% or higher. \n\n"+
                         "When you've successfully completed all quizzes, please return \n"+
                         "here to print your certificate.")
	  }
}

function downloadLibraryCertificate() {
     if(document.cookie){
	    // for SAS OnlineTutor 9.1: Programming
	    if(myPubcode == "59322") {
           var courseLessons = new Array("m1#","m2#","m3#","m4#","m5#","m6#","m7#","m8#","m9#","m10#","m11#","m12#","m13#","m14#","m16#","m18#","m19#","m20#","m22#","m23#","m24#","m25#","m26#","m27#","m28#","m30#","m31#","m32#","m34#","m35#","m39#","m40#","m41#");
		}
	    // for SAS OnlineTutor 9.1: Advanced Programming
	    else if(myPubcode == "59267") {
           var courseLessons = new Array("m10#","m50#","m51#","m52#","m53#","m54#","m55#","m56#","m57#","m58#","m59#","m70#","m71#","m72#","m73#","m74#","m75#","m76#");
		}
	    // for SAS Programming Library
	    else if(myPubcode == "59366") { 
           var courseLessons = new Array("m1#",filterEG('m2','')+"#",filterEG('m3','')+"#","m4#","m5#","m6#","m7#","m8#","m9#","m10#","m11#","m12#","m13#","m14#",filterEG('m16','')+"#","m18#","m19#","m20#","m22#","m23#","m24#","m25#","m26#","m27#","m28#","m30#","m31#","m32#","m34#","m35#","m39#","m40#","m41#");
		}   
	    // for Advanced SAS Programming Library
	    else if(myPubcode == "59368") {
           var courseLessons = new Array("m10#","m70#","m71#","m72#","m73#","m74#","m75#","m76#","m50#","m51#","m52#",filterEG('m53','')+"#","m54#","m55#","m56#","m57#","m58#","m59#");
		}
<!-- TRANSLATE -->
<!-- change feedback text for bad course pubcode if needed -->
		else {
		   var courseLessons="none";
		   alert('The library you are taking is not recognized.\nPlease see your training administrator.');
           }
 
           var quizString=new String(checkForQuizString('quizPass'));
		   var quizflag=0;
	          for (i=0; i<courseLessons.length; i++) {
                 if(quizString.indexOf(courseLessons[i])==-1) {
				 quizflag=1;
				 }
              }
              if(quizflag==0) {
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
                 certName=prompt("Congratulations! You've mastered the material in this library.\n"+
                                 "Please enter your name as you want it to appear on the certificate:", "Your Name Here");
                 if(certName==null) return;
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
                 else if(certName=="Your Name Here" || certName=="") certName=prompt("Please enter your name as you want it to appear on the certificate:", "Your Name Here");
                 if(certName!="Your Name Here" && certName!="" && certName!=null) writeLibraryCertificate(certName);
              }
		  
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
              else alert("Sorry, but you haven't yet completed all the quizzes in this\n"+
                         "library with a score of 80% or higher. \n\n"+
                         "When you've successfully completed all quizzes, please return \n"+
                         "here to print your certificate.")
	  }
}

// writes as January 1, 2002
  function GetMonth(intMonth){
<!-- TRANSLATE -->
<!-- change month text if needed -->
    var MonthArray = new Array("January", "February", "March",
                               "April", "May", "June",
                               "July", "August", "September",
                               "October", "November", "December") 
    return MonthArray[intMonth] 	  	 
    }
  function getDateStr(){
    var today = new Date()
    var year = today.getYear()
    if(year<1000) year+=1900
    var todayStr = GetMonth(today.getMonth()) + " " + today.getDate()
    todayStr += ", " + year
    return todayStr
    }

// writes as 1/2/2002	
function DateToday() {
   var Today=new Date();
   var ThisDay=Today.getDate();
   var ThisMonth=Today.getMonth()+1;
   var ThisYear=Today.getFullYear();
   return ThisMonth+"/"+ThisDay+"/"+ThisYear;
}

// quiz programming ----------------------

function setAnswer(form) {
  var score = 0;
  var currElt;
  var currSelection;

  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
          userAns[i] = currSelection.value;
          break;
      }
    }
  }
}

function openResults(docname) {
   newWindow = window.open(docname,'Results','top=0,left=0,width=525,height=525,resizable=yes,scrollbars=yes');
      if (alreadyopen) {
         alreadyopen = false
      }
   alreadyopen = true
   if (newWindow != null) {
      if (newWindow.opener == null) {
         newWindow.opener = self;
      }
   }
}

function getScore() {
  for (i=0; i<numQues; i++) {
     if (ans[i] == correctAns[i]) score++;
  }
  pctscore = Math.round(score/numQues*100) + "%";
}

function markAns(quesnum) {
   if (ans[quesnum] == correctAns[quesnum]) { 
      document.write("<IMG SRC='../navimages/qcorrect.gif' width='22' height='22' border='0' alt='Correct'>");
   }
   else {
      document.write("<IMG SRC='../navimages/qwrong.gif' width='22' height='22' border='0' alt='Incorrect'>");
   }
}

function showStar() {
   starScore = Math.round(score/numQues*100);
   if (myName.indexOf("certquiz") !=-1) {
   document.write('<img src="../navimages/gauge'+Math.ceil(eval(score / 5))+'.gif" width="124" height="73" alt="Your score">');
   }
   else {
   document.write('<img src="../navimages/gauge'+score+'.gif" width="124" height="73" alt="Your score">');
   }
}

exp=new Date();exp.setTime(exp.getTime()+(365*86400000));

function checkForQuizString(quizStringPrefix){
   var quizStringPrefixEquals=quizStringPrefix+'=';
   var lessonCookie=document.cookie;
   if(lessonCookie.length>0){
      begin=lessonCookie.indexOf(quizStringPrefixEquals);
         if(begin!=-1){
           begin+=quizStringPrefixEquals.length;
           end=lessonCookie.indexOf(';',begin);
           if(end==-1) end=lessonCookie.length;
           return unescape(lessonCookie.substring(begin,end));
         }
   }
return null;
}

function markLesson() {
   starScore=Math.round(score/numQues*100);
   if(starScore>=80){
      if(document.cookie){
         var quizString=new String(checkForQuizString('quizPass'));
		 var modulePound=myModule+"#";
            if(quizString.indexOf(modulePound)!=-1)
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
               alert("Congratulations! Your score of "+starScore+"% indicates that\n"+
                     "you've mastered the material in this lesson.\n\n"+
                     "Our records show that you've already completed\n"+
                     "the quiz for this lesson.");
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
            else if(confirm("Congratulations! Your score of "+starScore+"% indicates that\n"+
                            "you've mastered the material in this lesson.\n\n"+
                            "Click OK to mark the lesson as completed.\n"+
                            "Otherwise, click Cancel.\n\n"+
                            "If you choose Cancel, you can later mark the\n"+
                            "lesson as completed by clicking the Return to Quiz\n"+
                            "button at the bottom of the Quiz Results window."))
               document.cookie='quizPass='+quizString+modulePound+';path=/;expires='+exp.toGMTString();
			}
	  }
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
      else alert("Your score of "+starScore+"% indicates that you would benefit\n"+
                 "from reviewing some material in this lesson.\n\n"+
                 "Check the feedback for quiz questions and select\n"+
                 "links to review material for questions you missed.\n"+
                 "When you are ready, take the quiz again.");
}

function markLessonCertPracticeExam() {
   starScore=Math.round(score/numQues*100);
   if(starScore>=80){
      
            
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
             alert("Congratulations! Your score of "+starScore+"% indicates that\n"+
                            "you've mastered the material that is covered\n"+
                            "on this Certification practice exam.");

	  }
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
      else alert("Your score of "+starScore+"% indicates that you would benefit\n"+
                 "from reviewing some material that is covered on\n"+
		         "this practice exam. \n\n"+
			     "Check the feedback for practice exam questions\n"+
                 "and select links to review training material for the\n"+
                 "questions you missed. When you are ready, take \n"+
                 "the practice exam again.");
}

function markPath(myModule) {
   if(document.cookie){
      var quizString=new String(checkForQuizString('quizPass'));
	  var modulePound=myModule+"#";
      if(quizString.indexOf(modulePound)!=-1)
         document.write("<IMG SRC='navimages/block_ck.gif' width='13' height='17' border='0' alt='Lesson completed'>");
      else 
	     document.write("<IMG SRC='navimages/block_md.gif' width='13' height='17' border='0' alt='Checkbox'>");
   }
   else if ( ((myPubcode=="59322") || (myPubcode=="59267")) && (confirm('Please be sure that cookies are turned on in your browser.\nThen return to the home page to set your SAS online training cookie. \nFinally, revisit this Learning Path page.')) ) { window.location.href="index.htm";
   }
   else if (confirm('Please be sure that cookies are turned on in your browser. \nThen return to the home page to reset your SAS version. ')) {
          if (!myModule) window.location.href="index.htm";
		  else window.location.href="../index.htm";
   }

}

function askCheck(){
   starScore=Math.round(score/numQues*100);
   if(starScore>=80)if(document.cookie){
      var quizString=new String(checkForQuizString('quizPass'));
      var modulePound=myModule+"#";
      if(quizString.indexOf(modulePound)==-1)
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
         if(confirm("Click OK to mark the lesson as completed.\n"+
                    "Otherwise, click Cancel."))
            document.cookie='quizPass='+quizString+modulePound+';path=/;expires='+exp.toGMTString();
   }
}

function showPage(url) {
   opener.location = url;
}

function closeQuizResults() {
   opener.location=myName.substring(0,myName.length-1)+".htm";
   self.close();
}

// end of quiz programming ---------------------------------

function removeFrames() {
   if (window != top) top.location.href = location.href;
}

function setInitialCookie() {
   document.cookie = "Resume=YES;expires="+exp.toGMTString();
}

function setCookie() {
   if (document.cookie.indexOf("Resume=YES") != -1) {
      document.cookie = myPubcode+'='+window.location.href+';path=/;expires='+exp.toGMTString();
   }
}

function resumeTopic() {
    if(document.cookie) {
        index = document.cookie.indexOf(myPubcode+'=');
            if (index == -1) {
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
               alert("You haven't started a lesson yet, so Resume isn't   \n"+
                     "available.\n\n"+
					 "After you visit a lesson page, Resume will work.");
            }
            else {
		       topic_begin = (document.cookie.indexOf(myPubcode+'=')+6);
               topic_end   = (document.cookie.indexOf(";",topic_begin));
               if (topic_end == -1) topic_end = document.cookie.length;
               topic = (document.cookie.substring(topic_begin,topic_end));
			   pageFile=topic.substring(topic.lastIndexOf("/")+1,topic.length);
               pageModule = pageFile.substring(0,pageFile.lastIndexOf("_"));
               window.location.href=myPath+"/"+pageModule+"/"+pageFile;
            }
   }
   else {
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
      alert("Resume has detected one or both of these problems:\n\n"+
            "1. Cookies are turned off in your browser.\n"+
            "2. The Resume cookie has been deleted.\n\n"+
            "Please make sure cookies are enabled in your browser.\n"+
            "Then refresh this page.\n\n"+
            "To activate the Resume feature, begin a lesson. After \n"+
            "you visit a lesson page, Resume will work.");
   }
}

function checkPracticeCookie() {
    if(document.cookie) {
        index = document.cookie.indexOf("Practice=YES");
		    <!-- if no practice cookie set, display reminder and set cookie -->
            if (index == -1) {
               openReminder();
               document.cookie = "Practice=YES;";
            }
            else return;
   }
   else {
      if(confirm('Your SAS online training cookie has been deleted.\n '+
	             'Please return to the home page and reset your SAS\n '+
				 'version before continuing this lesson.'))
	  {
	  window.location.href="../index.htm";
	  }
	  else alert('Your SAS version is not set properly.\n '+
	             'SAS online training may not work as expected.');

   }
}

function openReminder() {
   newWindow = window.open('../reminder.htm','Reminder','top=0,left=0,width=420,height=550,resizable=1,scrollbars=yes');
      if (alreadyopen) {
         alreadyopen = false
      }
   alreadyopen = true
}

function checkCookie() {
   document.cookie = "Check=YES;";
   if (document.cookie.indexOf("Check=YES") != -1) {
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
      alert("You're doing great! Cookies are enabled in your browser.   \n"+
            "_____________________________________________\n\n"+
            "If you just received an alert message about cookies or\n"+
            "Web sites saving files to your computer:\n\n"+
            "You have specified that your browser alert you about\n"+
            "each cookie. To avoid annoying messages, it's a good\n"+
            "idea to accept cookies unconditionally while you use \n"+
            "SAS online training.");
   document.cookie = "Check=NO; expires=Friday, 01-Jan-1999 12:00:00 GMT;";
   }
   else {
<!-- TRANSLATE -->
<!-- change standard feedback text if needed -->
      alert("Bad news. Cookies aren't enabled in your browser, or\n"+
            "you just refused the cookie SAS online training tried to set.\n"+
            "You won't be able to use the resume feature or see which\n"+
            "lessons you've completed.\n\n"+
            "To enable cookies, change the cookie setting in the\n"+
            "Advanced section of your browser options/preferences.");
   }
}

function preLoad(GIFname) {
  if   (document.images) {
    var newGIF = new Image();
    newGIF.src = GIFname;
  }
}

timer1 = null;
  
function swapGIF(GIFname,newGIF){
  if (document.images) {
    eval("document."+GIFname+".src=\""+newGIF+"\";");
  }
  else {
    if ((timer1 != null) && (swapGIF.arguments.length == 2)) return;
    var oldLoc = eval("document."+GIFname+".location.href");
    if (swapGIF.arguments.length == 5) {
      timer1 = setTimeOut('swapGIF("'+GIFname+'","'+oldLoc+'",1);',2000);
    }
    else { timer1=null; }
    eval("document."+GIFname+".location.href=\""+newGIF+"\";");
  }
}

function scroll(backnext,totalanim) {
   if (document.images) {
      period = (document.images.animation.src.lastIndexOf("."));
      alocation = (document.images.animation.src.lastIndexOf("a"));
      imgnum = (eval(document.images.animation.src.substring(alocation+1,period)));
   }
   else {
      period = (document.animation.location.href.lastIndexOf("."));
	  alocation = (document.animation.location.href.lastIndexOf("a"));
      imgnum = (eval(document.animation.location.href.substring(alocation+1,period)));
   }
   if (backnext=="back" && imgnum>1) {
      swapGIF('animation','images/'+myName+'a'+eval(imgnum-1)+'.gif');
	  document.frameplay.page.value=' '+eval(imgnum-1)+' of '+totalanim;return false;
   }
   if (backnext=="next" && imgnum<totalanim) {
      swapGIF('animation','images/'+myName+'a'+eval(imgnum+1)+'.gif');
	  document.frameplay.page.value=' '+eval(imgnum+2-1)+' of '+totalanim;return false;
   }
   if (backnext=="same") {
      swapGIF('animation','images/'+myName+'a'+eval(imgnum)+'.gif');
	  document.frameplay.page.value=' '+eval(imgnum)+' of '+totalanim;return false;
   }
   if (backnext=="all") {
      swapGIF('animation','images/'+myName+'a0.gif');
	  document.frameplay.page.value=' All of '+totalanim;return false;
   }
}

// menu code starts here ///////////////////////////////////////

<!-- code for drop-down -->
<!-- Drop down menu by http://www.dynamicdrive.com -->

var zindex=100;
var ns4=document.layers;
var ns6=document.getElementById&&!document.all;
var ie4=document.all;
var opr=navigator.userAgent.indexOf("Opera");

function dropit(e,whichone){
   curmenuID=ns6? document.getElementById(whichone).id : eval(whichone).id;
   if (window.themenu&&themenu.id!=curmenuID)
      themenuStyle.visibility=ns4?"hide" : "hidden";

   themenu=ns6? document.getElementById(whichone): eval(whichone);
   themenuStyle=(ns6||ie4)? themenu.style : themenu;

   themenuoffsetX=(ie4&&opr==-1)? document.body.scrollLeft : 0;
   themenuoffsetY=(ie4&&opr==-1)? document.body.scrollTop : 0;

   themenuStyle.left=ns6||ns4? e.pageX-e.layerX : themenuoffsetX+event.clientX-event.offsetX;
   themenuStyle.top=ns6||ns4? e.pageY-e.layerY+19 : themenuoffsetY+event.clientY-event.offsetY+18;

   hiddenconst=(ns6||ie4)? "hidden" : "hide";
   if (themenuStyle.visibility==hiddenconst){
      themenuStyle.visibility=(ns6||ie4)? "visible" : "show";
      themenuStyle.zIndex=zindex++;
   }
   else
      hidemenu();
   return false;
}

function hidemenu(){
   if ((ie4||ns6)&&window.themenu)
      themenuStyle.visibility="hidden";
   else if (ns4)
      themenu.visibility="hide";
}

if (ie4||ns6)
   document.onclick=hidemenu;

<!-- document.write insertions into document for menus -->

function writeHelpMenu() {
   document.write('<ilayer><layer visibility=show><span onClick="dropit(event, \'helpmenu\');event.cancelBubble=true;return false"><a href="JavaScript: openMenu(\'../menuhelp.htm\')" onClick="if(ns4) return dropit(event, \'document.helpmenu\')" onMouseOver="rOver(\'help\');window.status=\'Display the help menu.\';return true" onMouseOut="rOut(\'help\');window.status=\'\';return true" accesskey="h"><img src="../navimages/help.gif" width="48" height="19" border="0" alt="help menu" name="help"></a></span></layer></ilayer>');
}

function writeTourMenu() {
   document.write('<ilayer><layer visibility=show><span onClick="dropit(event, \'tourmenu\');event.cancelBubble=true;return false"><a href="m0_paths.htm" onClick="if(ns4) return dropit(event, \'document.tourmenu\')" onMouseOver="rOver(\'tour\');window.status=\'Display the tour menu.\';return true" onMouseOut="rOut(\'tour\');window.status=\'\';return true" accesskey="h"><img src="../navimages/tourmenu.gif" alt="Tour Menu" width="72" height="19" border="0" name="tour"></a></span></layer></ilayer>');
}

function writeLessonMenu() {
   document.write('<ilayer><layer visibility=show><span onClick="dropit(event, \'dropmenu0\');event.cancelBubble=true;return false"><a href="JavaScript: openMenu(\'../menuless.htm\')" onClick="if (ns4) return dropit(event, \'document.dropmenu0\')" onMouseOver="rOver(\'contents\');window.status=\'Display the lesson menu.\';return true" onMouseOut="rOut(\'contents\');window.status=\'\';return true" accesskey="m"><img src="../navimages/contents.gif" width="122" height="19" border="0" alt="lesson menu" name="contents"></a></span></layer></ilayer>');
}

var beginHelpLink='<a class="menulink" href="JavaScript: ';
var beginLink='<a class="menulink" href="'; 
var middleLink='" target="SAS">&nbsp;';
var endLink='&nbsp;</a><br>';
var pathBlockImage='<tr><td width="17"><img src="navimages/block_md.gif" width="13" height="17"></td>';
var beginPathLink='<td nowrap><a class="menulink" href="';
var middlePathLink='">';
var endPathLink='</a></td></tr>';

<!-- create Lesson Paths page -->
function createLessonPath() {
   menunum="menu"+myLessonNumber;
   anum=eval(menunum).length;
   for (var i=0; i<anum; i++)
   document.write(pathBlockImage+beginPathLink+myLessonCode+"/"+eval("menu" + myLessonNumber + "[i][0]")+middlePathLink+eval("menu" + myLessonNumber + "[i][1]")+endPathLink);
}

function padLessonPath() {
   menunum="menu"+myLessonNumber;
   anum=eval(menunum).length;
   blank=18-anum;
   if (blank>0){
   for (var i=0;i<blank; i++)
   document.write("<tr><td>&nbsp;</td><td>&nbsp;</td></tr>");
}
else return;
}
<!-- ------------------ -->

<!-- create TOC entries in conttab.htm -->
function writeTOC(toclsn) {
   if ((toclsn=="m2") || (toclsn=="m3") || (toclsn=="m16") || (toclsn=="m53"))
      lsn=filterEG(toclsn,'').substring(1);
   else lsn=toclsn.substring(1);
   menunum="menu"+lsn;
   anum=eval(menunum).length;
   for (var i=0; i<anum; i++)
document.write('<LI><A href="m'+lsn+'/'+eval('menu'+lsn+'[i][0]')+'" target="SAS">' +eval('menu'+lsn+'[i][1]')+'</A></LI>');
}

function writeHelpDiv() {
document.write('<div id=helpmenu style="position:absolute;left:0;top:0;layer-background-color:lightyellow;background-color:#F7F7DE;width:160;visibility:hidden;border:1px solid black;padding:0px;">');
document.write('<script language="JavaScript1.2">if (document.all) helpmenu.style.padding="4px"; for (i=0;i<menuHelp.length;i++) document.write(beginHelpLink+menuHelp[i][0]+middleLink+menuHelp[i][1]+endLink); </script></div>');
document.write('<script language="JavaScript1.2">if (document.layers) {document.helpmenu.captureEvents(Event.CLICK); document.helpmenu.onclick=hidemenu}</script>');
}

function writeTourDiv() {
document.write('<div id=tourmenu style="position:absolute;left:0;top:0;layer-background-color:lightyellow;background-color:#F7F7DE;width:300;visibility:hidden;border:1px solid black;padding:0px;">');
document.write('<script language="JavaScript1.2">if (document.all) tourmenu.style.padding="4px"; for (i=0;i<menuTour.length;i++) document.write(beginLink+menuTour[i][0]+middleLink+menuTour[i][1]+endLink); </script></div>');
document.write('<script language="JavaScript1.2">if (document.layers) {document.tourmenu.captureEvents(Event.CLICK); document.tourmenu.onclick=hidemenu}</script>');
}

function writeLessonDiv() {
document.write('<div id=dropmenu0 style="position:absolute;left:0;top:0;layer-background-color:lightyellow;background-color:#F7F7DE;width:450;visibility:hidden;border:1px solid black;padding:0px;">');
document.write('<script language="JavaScript1.2">');
document.write('if (document.all) dropmenu0.style.padding="4px"; for (i=0;i<menu'+myModuleNumber+'.length;i++)'); 
document.write('document.write(beginLink+menu'+myModuleNumber+'[i][0]+middleLink+menu'+myModuleNumber+'[i][1]+endLink);</script></div>');
document.write('<script language="JavaScript1.2">if (document.layers) {document.dropmenu0.captureEvents(Event.CLICK); document.dropmenu0.onclick=hidemenu}</script>');
}

function writeLessonContentsPage() {
document.write('<div>');
document.write('<script language="JavaScript1.2">');
document.write('if (document.all) for (i=0;i<menu'+opener.myModuleNumber+'.length;i++)'); 
document.write('document.write(beginLink+opener.myModule+"/"+menu'+opener.myModuleNumber+'[i][0]+middleLink+menu'+opener.myModuleNumber+'[i][1]+endLink);</script></div>');
}

function writeHelpContentsPage() {
document.write('<div>');
document.write('<script language="JavaScript1.2">');
document.write('if (document.all) for (i=0;i<menuHelp.length;i++)'); 
document.write('document.write(beginHelpLink+menuHelp[i][0]+middleLink+menuHelp[i][1]+endLink);</script></div>');
}

// menu contents /////////////////////////////////////////////////////////////////

<!-- TRANSLATE -->
<!-- change all topic titles in pull-down lesson menus if needed; ----------------------->
<!-- need to change this for all menus below; these MUST match the translations for ----->
<!-- the topic titles (blue page headings below navigation area); do not remove &nbsp; -->
<!-- if it is specified (this indents subheadings where necessary) ------------------- -->

<!-- Contents for help menu -->
var menuHelp=new Array();
menuHelp[0]=new Array('openOther(\'../setup.htm\')','Before You Begin');
menuHelp[1]=new Array('openOther(\'../trouble.htm\')','Troubleshooting Tips');
menuHelp[2]=new Array('openGlossary(\'../glossary.htm\')','Glossary');
menuHelp[3]=new Array('openDoc(\'../sasdoc.htm\')','SAS Documentation');
menuHelp[4]=new Array('openOther(\'../m0/m0_paths.htm\')','Quick Tour');
menuHelp[5]=new Array('openOther(\'../copyrite.htm\')','Copyright');
<!-- link to license agreement only if not OnlineTutor -->
if ((myPubcode != "59322") && (myPubcode != "59322")) menuHelp[6]=new Array('openOther(\'../license.htm\')','License Agreement');

<!-- Contents for tour menu -->
var menuTour=new Array();
menuTour[0]=new Array("m0_paths.htm","Quick Tour Home Page");
menuTour[1]=new Array("m0_1.htm","Finding Your Way Around");
menuTour[2]=new Array("m0_2.htm","Learning Paths");
menuTour[3]=new Array("m0_3.htm","Lesson Menu");
menuTour[4]=new Array("m0_4.htm","Table of Contents and Index");
menuTour[5]=new Array("m0_5.htm","Saving Your Place");
menuTour[6]=new Array("m0_6.htm","Looking at Lesson Content");
menuTour[7]=new Array("m0_7.htm","Lesson Overview Pages");
menuTour[8]=new Array("m0_8.htm","Lesson Topics");
menuTour[9]=new Array("m0_9.htm","Animations");
menuTour[10]=new Array("m0_10.htm","Interactive Fill-in-the-Blank Questions");
menuTour[11]=new Array("m0_11.htm","Interactive Multiple Choice Questions");
menuTour[12]=new Array("m0_12.htm","Guided Practices");
menuTour[13]=new Array("m0_13.htm","Lesson Summary Pages");
menuTour[14]=new Array("m0_14.htm","Testing Your Knowledge");
menuTour[15]=new Array("m0_15.htm","Printing Certificates");
menuTour[16]=new Array("m0_16.htm","Getting More Help");

//Contents for lesson 1
var menu1=new Array();
menu1[0]=new Array("m1_1.htm","Lesson Overview");
menu1[1]=new Array("m1_2.htm","SAS Programs");
menu1[2]=new Array("m1_12.htm","SAS Libraries");
menu1[3]=new Array("m1_17.htm","Referencing SAS Files");
menu1[4]=new Array("m1_22.htm","SAS Data Sets");
menu1[5]=new Array("m1_27.htm","Variable Attributes");
menu1[6]=new Array("m1_33.htm","Lesson Summary");
menu1[7]=new Array("m1_34.htm","Lesson Quiz");
menu1[8]=new Array("m1_35.htm","End of Lesson");

//Contents for lesson 10
var menu10=new Array();
menu10[0]=new Array("m10_1.htm","Lesson Overview");
menu10[1]=new Array("m10_2.htm","PROC SQL Basics");
menu10[2]=new Array("m10_5.htm","Writing a PROC SQL Step");
menu10[3]=new Array("m10_7.htm","Selecting Columns");
menu10[4]=new Array("m10_10.htm","Specifying the Table");
menu10[5]=new Array("m10_12.htm","Specifying Subsetting Criteria");
menu10[6]=new Array("m10_14.htm","Ordering Rows");
menu10[7]=new Array("m10_19.htm","Querying Multiple Tables");
menu10[8]=new Array("m10_28.htm","Summarizing Groups of Data");
menu10[9]=new Array("m10_32.htm","Creating Output Tables");
menu10[10]=new Array("m10_34.htm","Additional Features");
menu10[11]=new Array("m10_35.htm","Lesson Summary");
menu10[12]=new Array("m10_36.htm","Lesson Quiz");
menu10[13]=new Array("m10_37.htm","End of Lesson");

//Contents for lesson 11
var menu11=new Array();
menu11[0]=new Array("m11_1.htm","Lesson Overview");
menu11[1]=new Array("m11_2.htm","Applying the STYLE= Option");
menu11[2]=new Array("m11_3.htm","Adding Color to Table Cells");
menu11[3]=new Array("m11_17.htm","Inheriting Style Attributes");
menu11[4]=new Array("m11_26.htm","Changing the Appearance of Text");
menu11[5]=new Array("m11_28.htm","Adding Trafficlighting to Cells");
menu11[6]=new Array("m11_31.htm","Adding Flyover Text");
menu11[7]=new Array("m11_34.htm","Including HTML Tags Directly in SAS Statements");
menu11[8]=new Array("m11_38.htm","Lesson Summary");
menu11[9]=new Array("m11_39.htm","Lesson Quiz");
menu11[10]=new Array("m11_40.htm","End of Lesson");

//Contents for lesson 12
var menu12=new Array();
menu12[0]=new Array("m12_1.htm","Lesson Overview");
menu12[1]=new Array("m12_2.htm","Raw Data Files");
menu12[2]=new Array("m12_3.htm","Steps to Create a SAS Data Set");
menu12[3]=new Array("m12_4.htm","Referencing a SAS Library");
menu12[4]=new Array("m12_6.htm","Referencing a Raw Data File");
menu12[5]=new Array("m12_11.htm","Writing a DATA Step Program");
menu12[6]=new Array("m12_19.htm","Submitting the DATA Step Program");
menu12[7]=new Array("m12_30.htm","Creating and Modifying Variables");
menu12[8]=new Array("m12_35.htm","Subsetting Data");
menu12[9]=new Array("m12_37.htm","Reading Instream Data");
menu12[10]=new Array("m12_39.htm","Creating a Raw Data File");
menu12[11]=new Array("m12_44.htm","Additional Features");
menu12[12]=new Array("m12_46.htm","Lesson Summary");
menu12[13]=new Array("m12_47.htm","Lesson Quiz");
menu12[14]=new Array("m12_48.htm","End of Lesson");

//Contents for lesson 13
var menu13=new Array();
menu13[0]=new Array("m13_1.htm","Lesson Overview");
menu13[1]=new Array("m13_2.htm","Referencing a DBMS");
menu13[2]=new Array("m13_5.htm","Using Engine Connection Options");
menu13[3]=new Array("m13_6.htm","Using LIBNAME Options");
menu13[4]=new Array("m13_8.htm","Preserving Table and Column Names");
menu13[5]=new Array("m13_10.htm","Referencing a DBMS Using the Explorer Window");
menu13[6]=new Array("m13_12.htm","Referencing DBMS Objects in SAS Programs");
menu13[7]=new Array("m13_16.htm","Processing SQL Statements"); 
menu13[8]=new Array("m13_17.htm","Establishing a DBMS Connection");
menu13[9]=new Array("m13_19.htm","Specifying the DBMS Connection to Use");
menu13[10]=new Array("m13_21.htm","Sending SQL Statements to the DBMS");
menu13[11]=new Array("m13_23.htm","Disconnecting from the DBMS");
menu13[12]=new Array("m13_26.htm","Lesson Summary");
menu13[13]=new Array("m13_27.htm","Lesson Quiz");
menu13[14]=new Array("m13_28.htm","End of Lesson");

//Contents for lesson 14
var menu14=new Array();
menu14[0]=new Array("m14_1.htm","Lesson Overview");
menu14[1]=new Array("m14_2.htm","Reading a Single Data Set");
menu14[2]=new Array("m14_5.htm","Manipulating Data");
menu14[3]=new Array("m14_10.htm","Using BY-Group Processing");
menu14[4]=new Array("m14_14.htm","Reading Observations Using Direct Access");
menu14[5]=new Array("m14_17.htm","Detecting the End of a Data Set");
menu14[6]=new Array("m14_20.htm","Understanding How Data Sets Are Read");
menu14[7]=new Array("m14_29.htm","Additional Features");
menu14[8]=new Array("m14_30.htm","Lesson Summary");
menu14[9]=new Array("m14_31.htm","Lesson Quiz");
menu14[10]=new Array("m14_32.htm","End of Lesson");

//Contents for lesson 16
var menu16=new Array();
menu16[0]=new Array("m16_1.htm","Lesson Overview");
menu16[1]=new Array("m16_2.htm","Referencing Files in SAS Libraries");
menu16[2]=new Array("m16_9.htm","Viewing SAS Libraries");
menu16[3]=new Array("m16_14.htm","Specifying Results Formats");
menu16[4]=new Array("m16_19.htm","Setting System Options");
menu16[5]=new Array("m16_31.htm","Additional Features");
menu16[6]=new Array("m16_32.htm","Lesson Summary");
menu16[7]=new Array("m16_33.htm","Lesson Quiz");
menu16[8]=new Array("m16_34.htm","End of Lesson");

//Contents for lesson 18
var menu18=new Array();
menu18[0]=new Array("m18_1.htm","Lesson Overview");
menu18[1]=new Array("m18_2.htm","The Output Delivery System");
menu18[2]=new Array("m18_4.htm","Opening and Closing ODS Destinations");
menu18[3]=new Array("m18_10.htm","Creating Simple HTML Output");
menu18[4]=new Array("m18_16.htm","Creating HTML Output with a Table of Contents");
menu18[5]=new Array("m18_20.htm","Using Options to Specify Links and Paths");
menu18[6]=new Array("m18_26.htm","Changing the Appearance of HTML Output");
menu18[7]=new Array("m18_29.htm","Additional Features");
menu18[8]=new Array("m18_30.htm","Lesson Summary");
menu18[9]=new Array("m18_31.htm","Lesson Quiz");
menu18[10]=new Array("m18_32.htm","End of Lesson");

//Contents for lesson 19
var menu19=new Array();
menu19[0]=new Array("m19_1.htm","Lesson Overview");
menu19[1]=new Array("m19_2.htm","Review of Column Input");
menu19[2]=new Array("m19_5.htm","Identifying Nonstandard Numeric Data");
menu19[3]=new Array("m19_7.htm","Choosing an Input Style");
menu19[4]=new Array("m19_8.htm","Using Formatted Input");
menu19[5]=new Array("m19_18.htm","Using Informats");
menu19[6]=new Array("m19_28.htm","Record Formats");
menu19[7]=new Array("m19_32.htm","Lesson Summary");
menu19[8]=new Array("m19_33.htm","Lesson Quiz");
menu19[9]=new Array("m19_34.htm","End of Lesson");

//Contents for lesson 2
var menu2=new Array();
menu2[0]=new Array("m2_1.htm","Lesson Overview");
menu2[1]=new Array("m2_2.htm","Opening a Stored SAS Program");
menu2[2]=new Array("m2_8.htm","Editing SAS Programs");
menu2[3]=new Array("m2_23.htm","Clearing SAS Programming Windows");
menu2[4]=new Array("m2_24.htm","Interpreting Error Messages");
menu2[5]=new Array("m2_26.htm","Correcting Errors");
menu2[6]=new Array("m2_29.htm","Resolving Common Problems");
menu2[7]=new Array("m2_39.htm","Additional Features");
menu2[8]=new Array("m2_43.htm","Lesson Summary");
menu2[9]=new Array("m2_44.htm","Lesson Quiz");
menu2[10]=new Array("m2_45.htm","End of Lesson");

//Contents for lesson 20
var menu20=new Array();
menu20[0]=new Array("m20_1.htm","Lesson Overview");
menu20[1]=new Array("m20_2.htm","One-to-One Reading");
menu20[2]=new Array("m20_7.htm","Concatenating");
menu20[3]=new Array("m20_11.htm","Interleaving");
menu20[4]=new Array("m20_14.htm","Match-Merging");
menu20[5]=new Array("m20_21.htm","Match-Merge Processing");
menu20[6]=new Array("m20_31.htm","Renaming Variables");
menu20[7]=new Array("m20_36.htm","Excluding Unmatched Observations");
menu20[8]=new Array("m20_42.htm","Selecting Variables");
menu20[9]=new Array("m20_46.htm","Additional Features");
menu20[10]=new Array("m20_47.htm","Lesson Summary");
menu20[11]=new Array("m20_48.htm","Lesson Quiz");
menu20[12]=new Array("m20_49.htm","End of Lesson");

//Contents for lesson 22
var menu22=new Array();  
menu22[0]=new Array("m22_1.htm","Lesson Overview");
menu22[1]=new Array("m22_2.htm","Writing Basic DATA Steps");
menu22[2]=new Array("m22_3.htm","How SAS Processes Programs");
menu22[3]=new Array("m22_4.htm","Compilation Phase");
menu22[4]=new Array("m22_8.htm","Execution Phase");
menu22[5]=new Array("m22_30.htm","Debugging a DATA Step");
menu22[6]=new Array("m22_37.htm","Testing Your Programs");
menu22[7]=new Array("m22_45.htm","Lesson Summary");
menu22[8]=new Array("m22_46.htm","Lesson Quiz");
menu22[9]=new Array("m22_47.htm","End of Lesson");

//Contents for lesson 23
var menu23=new Array();  
menu23[0]=new Array("m23_1.htm","Lesson Overview");
menu23[1]=new Array("m23_2.htm","Free-Format Data");
menu23[2]=new Array("m23_3.htm","Using List Input");
menu23[3]=new Array("m23_13.htm","Reading Missing Values");
menu23[4]=new Array("m23_18.htm","Specifying the Length of Character Values");
menu23[5]=new Array("m23_22.htm","Modifying List Input");
menu23[6]=new Array("m23_29.htm","Creating Free-Format Data");
menu23[7]=new Array("m23_35.htm","Mixing Input Styles");
menu23[8]=new Array("m23_37.htm","Additional Features");
menu23[9]=new Array("m23_38.htm","Lesson Summary");
menu23[10]=new Array("m23_39.htm","Lesson Quiz");
menu23[11]=new Array("m23_40.htm","End of Lesson");

//Contents for lesson 24
var menu24=new Array();  
menu24[0]=new Array("m24_1.htm","Lesson Overview");
menu24[1]=new Array("m24_2.htm","How SAS Stores Date Values");
menu24[2]=new Array("m24_4.htm","How SAS Stores Time Values");
menu24[3]=new Array("m24_6.htm","More About SAS Date and Time Values");
menu24[4]=new Array("m24_7.htm","Reading Dates and Times with Informats");
menu24[5]=new Array("m24_8.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MMDDYYw. Informat");
menu24[6]=new Array("m24_10.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DATEw. Informat");
menu24[7]=new Array("m24_11.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TIMEw. Informat");
menu24[8]=new Array("m24_14.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DATETIMEw. Informat");
menu24[9]=new Array("m24_16.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YEARCUTOFF= SAS System Option");
menu24[10]=new Array("m24_20.htm","Using Dates and Times in Calculations");
menu24[11]=new Array("m24_25.htm","Using Date and Time Formats");
menu24[12]=new Array("m24_29.htm","Lesson Summary");
menu24[13]=new Array("m24_30.htm","Lesson Quiz");
menu24[14]=new Array("m24_31.htm","End of Lesson");

//Contents for lesson 25
var menu25=new Array();  
menu25[0]=new Array("m25_1.htm","Lesson Overview");
menu25[1]=new Array("m25_2.htm","Using Line Pointer Controls");
menu25[2]=new Array("m25_3.htm","Reading Multiple Records Sequentially");
menu25[3]=new Array("m25_10.htm","Reading Multiple Records Non-Sequentially");
menu25[4]=new Array("m25_16.htm","Combining Line Pointer Controls");
menu25[5]=new Array("m25_18.htm","Lesson Summary");
menu25[6]=new Array("m25_19.htm","Lesson Quiz");
menu25[7]=new Array("m25_20.htm","End of Lesson");

//Contents for lesson 26
var menu26=new Array();  
menu26[0]=new Array("m26_1.htm","Lesson Overview");
menu26[1]=new Array("m26_2.htm","Reading Repeating Blocks of Data");
menu26[2]=new Array("m26_12.htm","Reading the Same Number of Repeating Fields");
menu26[3]=new Array("m26_22.htm","Reading a Varying Number of Repeating Fields");
menu26[4]=new Array("m26_31.htm","Lesson Summary");
menu26[5]=new Array("m26_32.htm","Lesson Quiz");
menu26[6]=new Array("m26_33.htm","End of Lesson");

//Contents for lesson 27
var menu27=new Array();  
menu27[0]=new Array("m27_1.htm","Lesson Overview");
menu27[1]=new Array("m27_2.htm","Creating One Observation per Detail Record");
menu27[2]=new Array("m27_15.htm","Creating One Observation per Header Record");
menu27[3]=new Array("m27_28.htm","Lesson Summary");
menu27[4]=new Array("m27_29.htm","Lesson Quiz");
menu27[5]=new Array("m27_30.htm","End of Lesson");

//Contents for lesson 28
var menu28=new Array();  
menu28[0]=new Array("m28_1.htm","Lesson Overview");
menu28[1]=new Array("m28_2.htm","Reading Variable-Length Fields");
menu28[2]=new Array("m28_11.htm","Reading Records That Have a Varying Number of Fields");
menu28[3]=new Array("m28_21.htm","Lesson Summary");
menu28[4]=new Array("m28_22.htm","Lesson Quiz");
menu28[5]=new Array("m28_23.htm","End of Lesson");

//Contents for lesson 3
var menu3=new Array();  
menu3[0]=new Array("m3_1.htm","Lesson Overview");
menu3[1]=new Array("m3_2.htm","Using the Main SAS Windows");
menu3[2]=new Array("m3_15.htm","Creating SAS Libraries");
menu3[3]=new Array("m3_18.htm","Creating and Using File Shortcuts");
menu3[4]=new Array("m3_20.htm","Using SAS Solutions and Tools");
menu3[5]=new Array("m3_22.htm","Getting Help");
menu3[6]=new Array("m3_24.htm","Lesson Summary");
menu3[7]=new Array("m3_25.htm","Lesson Quiz");
menu3[8]=new Array("m3_26.htm","End of Lesson");

//Contents for lesson 30
var menu30=new Array();  
menu30[0]=new Array("m30_1.htm","Lesson Overview");
menu30[1]=new Array("m30_2.htm","Understanding SAS Functions");
menu30[2]=new Array("m30_4.htm","General Form of SAS Functions");
menu30[3]=new Array("m30_8.htm","Converting Data with Functions");
menu30[4]=new Array("m30_8.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Introduction to Converting Data with Functions");
menu30[5]=new Array("m30_9.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Automatic Character-to-Numeric Conversion");
menu30[6]=new Array("m30_10.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Restriction for WHERE Expressions");
menu30[7]=new Array("m30_11.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Explicit Character-to-Numeric Conversion (INPUT)");
menu30[8]=new Array("m30_17.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Automatic Numeric-to-Character Conversion");
menu30[9]=new Array("m30_19.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Explicit Numeric-to-Character Conversion (PUT)");
menu30[10]=new Array("m30_25.htm","Manipulating SAS Date Values with Functions");
menu30[11]=new Array("m30_25.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SAS Date and Time Values");
menu30[12]=new Array("m30_27.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SAS Date Functions");
menu30[13]=new Array("m30_28.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YEAR, QTR, MONTH, and DAY Functions");
menu30[14]=new Array("m30_40.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WEEKDAY Function");
menu30[15]=new Array("m30_42.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MDY Function");
menu30[16]=new Array("m30_46.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DATE and TODAY Functions");
menu30[17]=new Array("m30_48.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INTCK Function");
menu30[18]=new Array("m30_52.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INTNX Function");
menu30[19]=new Array("m30_55.htm","Modifying Character Values with Functions");
menu30[20]=new Array("m30_55.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Introduction to Modifying Character Values");
menu30[21]=new Array("m30_56.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SCAN Function");
menu30[22]=new Array("m30_63.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SCAN versus SUBSTR");
menu30[23]=new Array("m30_65.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUBSTR Function");
menu30[24]=new Array("m30_75.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TRIM Function");
menu30[25]=new Array("m30_78.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDEX Function");
menu30[26]=new Array("m30_83.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UPCASE Function");
menu30[27]=new Array("m30_85.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOWCASE Function");
menu30[28]=new Array("m30_87.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TRANWRD Function");
menu30[29]=new Array("m30_89.htm","Modifying Numeric Values with Functions");
menu30[30]=new Array("m30_89.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Introduction to Modifying Numeric Values");
menu30[31]=new Array("m30_89.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INT Function");
menu30[32]=new Array("m30_90.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ROUND Function");
menu30[33]=new Array("m30_92.htm","Nesting SAS Functions");
menu30[34]=new Array("m30_93.htm","Lesson Summary");
menu30[35]=new Array("m30_94.htm","Lesson Quiz");
menu30[36]=new Array("m30_95.htm","End of Lesson");

//Contents for lesson 31
var menu31=new Array();  
menu31[0]=new Array("m31_1.htm","Lesson Overview");
menu31[1]=new Array("m31_2.htm","Introduction to PROC FORMAT");
menu31[2]=new Array("m31_3.htm","Invoking PROC FORMAT");
menu31[3]=new Array("m31_6.htm","Defining a Unique Format");
menu31[4]=new Array("m31_16.htm","Associating User-Defined Formats with Variables");
menu31[5]=new Array("m31_23.htm","Lesson Summary");
menu31[6]=new Array("m31_24.htm","Lesson Quiz");
menu31[7]=new Array("m31_25.htm","End of Lesson");

//Contents for lesson 32
var menu32=new Array();  
menu32[0]=new Array("m32_1.htm","Lesson Overview");
menu32[1]=new Array("m32_2.htm","Understanding Macro Variables");
menu32[2]=new Array("m32_6.htm","Using Automatic Macro Variables");
menu32[3]=new Array("m32_16.htm","Creating Your Own Macro Variables");
menu32[4]=new Array("m32_33.htm","Creating Macro Variables During DATA Step Execution");
menu32[5]=new Array("m32_43.htm","Lesson Summary");
menu32[6]=new Array("m32_44.htm","Lesson Quiz");
menu32[7]=new Array("m32_45.htm","End of Lesson");

//Contents for lesson 34
var menu34=new Array();  
menu34[0]=new Array("m34_1.htm","Lesson Overview");
menu34[1]=new Array("m34_2.htm","Constructing DO Loops");
menu34[2]=new Array("m34_2.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Introduction to Constructing DO Loops");
menu34[3]=new Array("m34_4.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DO Loop Execution");
menu34[4]=new Array("m34_7.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Counting Iterations of DO Loops");
menu34[5]=new Array("m34_9.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Decrementing DO Loops");
menu34[6]=new Array("m34_13.htm","Nesting DO Loops");
menu34[7]=new Array("m34_16.htm","Iteratively Processing Data That Is Read from a Data Set");
menu34[8]=new Array("m34_19.htm","Conditionally Executing DO Loops");
menu34[9]=new Array("m34_27.htm","Using Conditional Clauses with the Iterative DO Statement");
menu34[10]=new Array("m34_30.htm","Creating Samples");
menu34[11]=new Array("m34_32.htm","Lesson Summary");
menu34[12]=new Array("m34_33.htm","Lesson Quiz");
menu34[13]=new Array("m34_34.htm","End of Lesson");

//Contents for lesson 35
var menu35=new Array();  
menu35[0]=new Array("m35_1.htm","Lesson Overview");
menu35[1]=new Array("m35_2.htm","Creating One-Dimensional Arrays");
menu35[2]=new Array("m35_2.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Understanding SAS Arrays");
menu35[3]=new Array("m35_3.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Defining an Array");
menu35[4]=new Array("m35_4.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Variable Lists as Array Elements");
menu35[5]=new Array("m35_7.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Referencing Elements of an Array");
menu35[6]=new Array("m35_8.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Compilation and Execution");
menu35[7]=new Array("m35_9.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Graphical Display of Array Processing");
menu35[8]=new Array("m35_11.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Using the DIM Function in an Iterative DO Statement");
menu35[9]=new Array("m35_14.htm","Expanding Your Use of Arrays");
menu35[10]=new Array("m35_14.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creating Variables in an ARRAY Statement");
menu35[11]=new Array("m35_18.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assigning Initial Values to Arrays");
menu35[12]=new Array("m35_20.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creating Temporary Array Elements");
menu35[13]=new Array("m35_22.htm","Creating Multidimensional Arrays");
menu35[14]=new Array("m35_22.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Understanding Multidimensional Arrays");
menu35[15]=new Array("m35_23.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Defining a Multidimensional Array");
menu35[16]=new Array("m35_26.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Referencing Elements of a Two-Dimensional Array");
menu35[17]=new Array("m35_32.htm","Additional Features");
menu35[18]=new Array("m35_33.htm","Lesson Summary");
menu35[19]=new Array("m35_34.htm","Lesson Quiz");
menu35[20]=new Array("m35_35.htm","End of Lesson");

//Contents for lesson 39
var menu39=new Array();  
menu39[0]=new Array("m39_1.htm","Lesson Overview");
menu39[1]=new Array("m39_2.htm","Creating and Modifying Variables");
menu39[2]=new Array("m39_8.htm","Assigning Values Conditionally");
menu39[3]=new Array("m39_15.htm","Specifying Lengths for Variables");
menu39[4]=new Array("m39_18.htm","Subsetting Data");
menu39[5]=new Array("m39_26.htm","Assigning Permanent Labels and Formats");
menu39[6]=new Array("m39_28.htm","Assigning Values Conditionally Using SELECT Groups");
menu39[7]=new Array("m39_32.htm","Grouping Statements Using DO Groups");
menu39[8]=new Array("m39_34.htm","Lesson Summary");
menu39[9]=new Array("m39_35.htm","Lesson Quiz");
menu39[10]=new Array("m39_36.htm","End of Lesson");

//Contents for lesson 4
var menu4=new Array();  
menu4[0]=new Array("m4_1.htm","Lesson Overview");
menu4[1]=new Array("m4_2.htm","Creating a Basic Report");
menu4[2]=new Array("m4_6.htm","Selecting Variables");
menu4[3]=new Array("m4_9.htm","Identifying Observations");
menu4[4]=new Array("m4_11.htm","Selecting Observations");
menu4[5]=new Array("m4_16.htm","Sorting Data");
menu4[6]=new Array("m4_20.htm","Generating Column Totals");
menu4[7]=new Array("m4_30.htm","Double Spacing Listing Output");
menu4[8]=new Array("m4_32.htm","Specifying Titles and Footnotes");
menu4[9]=new Array("m4_41.htm","Assigning Descriptive Labels");
menu4[10]=new Array("m4_45.htm","Formatting Data Values");
menu4[11]=new Array("m4_51.htm","Using Permanently Assigned Labels and Formats");
menu4[12]=new Array("m4_52.htm","Additional Features");
menu4[13]=new Array("m4_53.htm","Lesson Summary");
menu4[14]=new Array("m4_54.htm","Lesson Quiz");
menu4[15]=new Array("m4_55.htm","End of Lesson");

//Contents for lesson 40
var menu40=new Array();  
menu40[0]=new Array("m40_1.htm","Lesson Overview");
menu40[1]=new Array("m40_2.htm","Creating a Default List Report");
menu40[2]=new Array("m40_5.htm","Selecting Variables");
menu40[3]=new Array("m40_8.htm","Selecting Observations");
menu40[4]=new Array("m40_10.htm","Defining Variables");
menu40[5]=new Array("m40_12.htm","Defining Column Attributes");
menu40[6]=new Array("m40_20.htm","Defining Column Headings");
menu40[7]=new Array("m40_22.htm","Specifying Column Justification");
menu40[8]=new Array("m40_24.htm","Enhancing the Heading's Appearance");
menu40[9]=new Array("m40_26.htm","Defining Variable Usage");
menu40[10]=new Array("m40_38.htm","Lesson Summary");
menu40[11]=new Array("m40_39.htm","Lesson Quiz");
menu40[12]=new Array("m40_40.htm","End of Lesson");

//Contents for lesson 41
var menu41=new Array();  
menu41[0]=new Array("m41_1.htm","Lesson Overview");
menu41[1]=new Array("m41_2.htm","Computing Statistics Using PROC MEANS");
menu41[2]=new Array("m41_3.htm","Selecting Statistics");
menu41[3]=new Array("m41_7.htm","Limiting Decimal Places");
menu41[4]=new Array("m41_9.htm","Specifying Variables in PROC MEANS");
menu41[5]=new Array("m41_13.htm","Group Processing Using the CLASS Statement");
menu41[6]=new Array("m41_15.htm","Group Processing Using the BY Statement");
menu41[7]=new Array("m41_19.htm","Creating a Summarized Data Set Using PROC MEANS");
menu41[8]=new Array("m41_20.htm","Creating a Summarized Data Set Using PROC SUMMARY");
menu41[9]=new Array("m41_23.htm","Producing Frequency Tables Using PROC FREQ");
menu41[10]=new Array("m41_25.htm","Specifying Variables in PROC FREQ");
menu41[11]=new Array("m41_29.htm","Creating Two-Way Tables");
menu41[12]=new Array("m41_32.htm","Creating <em>N</em>-Way Tables");
menu41[13]=new Array("m41_34.htm","Creating Tables in List Format");
menu41[14]=new Array("m41_36.htm","Suppressing Table Information");
menu41[15]=new Array("m41_39.htm","Lesson Summary");
menu41[16]=new Array("m41_40.htm","Lesson Quiz");
menu41[17]=new Array("m41_41.htm","End of Lesson");

//Contents for lesson 5
var menu5=new Array();  
menu5[0]=new Array("m5_1.htm","Lesson Overview");
menu5[1]=new Array("m5_2.htm","Setting Up a Table");
menu5[2]=new Array("m5_4.htm","Beginning Your PROC TABULATE Step");
menu5[3]=new Array("m5_7.htm","Specifying Variables");
menu5[4]=new Array("m5_15.htm","Describing the Table");
menu5[5]=new Array("m5_23.htm","Specifying Statistics");
menu5[6]=new Array("m5_28.htm","Selecting Observations");
menu5[7]=new Array("m5_30.htm","Specifying Totals");
menu5[8]=new Array("m5_33.htm","Enhancing Your Table");
menu5[9]=new Array("m5_38.htm","Labeling Keywords for Statistics and ALL");
menu5[10]=new Array("m5_42.htm","Formatting the Table");
menu5[11]=new Array("m5_45.htm","Creating One- and Three-Dimensional Tables");
menu5[12]=new Array("m5_49.htm","Additional Features");
menu5[13]=new Array("m5_53.htm","Lesson Summary");
menu5[14]=new Array("m5_54.htm","Lesson Quiz");
menu5[15]=new Array("m5_55.htm","End of Lesson");

//Contents for lesson 6
var menu6=new Array();  
menu6[0]=new Array("m6_1.htm","Lesson Overview");
menu6[1]=new Array("m6_2.htm","Creating a Basic Plot");
menu6[2]=new Array("m6_6.htm","Specifying Tick-Mark Values for the Axes");
menu6[3]=new Array("m6_10.htm","Overlaying Plots");
menu6[4]=new Array("m6_12.htm","Enhancing Plots");
menu6[5]=new Array("m6_13.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Specifying SYMBOL Statements");
menu6[6]=new Array("m6_14.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Specifying Plotting Symbols");
menu6[7]=new Array("m6_16.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Specifying the Height of Plotting Symbols");
menu6[8]=new Array("m6_18.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Specifying Connecting Lines");
menu6[9]=new Array("m6_20.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Specifying Line Width");
menu6[10]=new Array("m6_21.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Specifying Color");
menu6[11]=new Array("m6_23.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Changing SYMBOL Statement Options");
menu6[12]=new Array("m6_25.htm","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Canceling SYMBOL Statement Options");
menu6[13]=new Array("m6_27.htm","Using RUN-Group Processing");
menu6[14]=new Array("m6_29.htm","Selecting Observations");
menu6[15]=new Array("m6_32.htm","Viewing and Storing Plots");
menu6[16]=new Array("m6_38.htm","Additional Features");
menu6[17]=new Array("m6_40.htm","Lesson Summary");
menu6[18]=new Array("m6_41.htm","Lesson Quiz");
menu6[19]=new Array("m6_42.htm","End of Lesson");

//Contents for lesson 7
var menu7=new Array();  
menu7[0]=new Array("m7_1.htm","Lesson Overview");
menu7[1]=new Array("m7_2.htm","Invoking the GCHART Procedure");
menu7[2]=new Array("m7_6.htm","Specifying the Chart Type and the Chart Variables");
menu7[3]=new Array("m7_10.htm","Specifying Statistics");
menu7[4]=new Array("m7_14.htm","Summarizing a Variable within Categories");
menu7[5]=new Array("m7_22.htm","Selecting Observations");
menu7[6]=new Array("m7_25.htm","Enhancing Charts");
menu7[7]=new Array("m7_28.htm","Using RUN-Group Processing");
menu7[8]=new Array("m7_30.htm","Viewing and Storing Charts");
menu7[9]=new Array("m7_36.htm","Additional Features");
menu7[10]=new Array("m7_38.htm","Lesson Summary");
menu7[11]=new Array("m7_39.htm","Lesson Quiz");
menu7[12]=new Array("m7_40.htm","End of Lesson");

//Contents for lesson 8
var menu8=new Array();  
menu8[0]=new Array("m8_1.htm","Lesson Overview");
menu8[1]=new Array("m8_2.htm","Assigning Descriptive Labels");
menu8[2]=new Array("m8_4.htm","Formatting Data Values");
menu8[3]=new Array("m8_6.htm","Specifying Titles and Footnotes");
menu8[4]=new Array("m8_14.htm","Controlling HBAR Statistics");
menu8[5]=new Array("m8_16.htm","Controlling VBAR Statistics");
menu8[6]=new Array("m8_19.htm","Exporting Graphs");
menu8[7]=new Array("m8_24.htm","Sizing Graphs");
menu8[8]=new Array("m8_31.htm","Creating Interactive Graphs");
menu8[9]=new Array("m8_37.htm","Additional Features");
menu8[10]=new Array("m8_38.htm","Lesson Summary");
menu8[11]=new Array("m8_39.htm","Lesson Quiz");
menu8[12]=new Array("m8_40.htm","End of Lesson");

//Contents for lesson 9
var menu9=new Array();  
menu9[0]=new Array("m9_1.htm","Lesson Overview");
menu9[1]=new Array("m9_2.htm","Tasks in Creating Drill-Down Graphs");
menu9[2]=new Array("m9_3.htm","Creating the Initial Chart");
menu9[3]=new Array("m9_4.htm","Creating a Variable for Link Locations");
menu9[4]=new Array("m9_6.htm","Defining Values for Link Locations");
menu9[5]=new Array("m9_9.htm","Setting ODS HTML Options");
menu9[6]=new Array("m9_12.htm","Attaching Links to the Primary Chart");
menu9[7]=new Array("m9_16.htm","Creating the Secondary Charts and Tables");
menu9[8]=new Array("m9_25.htm","Complete Program and Output");
menu9[9]=new Array("m9_27.htm","Lesson Summary");
menu9[10]=new Array("m9_28.htm","Lesson Quiz");
menu9[11]=new Array("m9_29.htm","End of Lesson");

//Contents for lesson 50
var menu50=new Array();  
menu50[0]=new Array("m50_1.htm","Lesson Overview");
menu50[1]=new Array("m50_2.htm","Basic Concepts");
menu50[2]=new Array("m50_9.htm","Using Automatic Macro Variables");
menu50[3]=new Array("m50_13.htm","Using User-Defined Macro Variables");
menu50[4]=new Array("m50_19.htm","Processing Macro Variables");
menu50[5]=new Array("m50_27.htm","Displaying Macro Variable Values in the SAS Log");
menu50[6]=new Array("m50_31.htm","Using Macro Functions to Mask Special Characters");
menu50[7]=new Array("m50_37.htm","Using Macro Functions to Manipulate Character Strings");
menu50[8]=new Array("m50_49.htm","Using SAS Functions with Macro Variables");
menu50[9]=new Array("m50_52.htm","Combining Macro Variable References with Text");
menu50[10]=new Array("m50_61.htm","Lesson Summary");
menu50[11]=new Array("m50_62.htm","Lesson Quiz");
menu50[12]=new Array("m50_63.htm","End of Lesson");

//Contents for lesson 51
var menu51=new Array();  
menu51[0]=new Array("m51_1.htm","Lesson Overview");
menu51[1]=new Array("m51_2.htm","Creating a Macro Variable During DATA Step Execution");
menu51[2]=new Array("m51_15.htm","Creating Multiple Macro Variables During DATA Step Execution");
menu51[3]=new Array("m51_18.htm","Referencing Macro Variables Indirectly");
menu51[4]=new Array("m51_24.htm","Obtaining Macro Variable Values During DATA Step Execution");
menu51[5]=new Array("m51_27.htm","Creating Macro Variables During PROC SQL Step Execution");
menu51[6]=new Array("m51_34.htm","Working with PROC SQL Views");
menu51[7]=new Array("m51_36.htm","Using Macro Variables in SCL Programs");
menu51[8]=new Array("m51_39.htm","Lesson Summary");
menu51[9]=new Array("m51_40.htm","Lesson Quiz");
menu51[10]=new Array("m51_41.htm","End of Lesson");

//Contents for lesson 52
var menu52=new Array();  
menu52[0]=new Array("m52_1.htm","Lesson Overview");
menu52[1]=new Array("m52_2.htm","Basic Concepts");
menu52[2]=new Array("m52_11.htm","Developing and Debugging Macros");
menu52[3]=new Array("m52_16.htm","Using Macro Parameters");
menu52[4]=new Array("m52_27.htm","Understanding Symbol Tables");
menu52[5]=new Array("m52_38.htm","Processing Statements Conditionally");
menu52[6]=new Array("m52_48.htm","Processing Statements Iteratively");
menu52[7]=new Array("m52_53.htm","Using Arithmetic and Logical Expressions");
menu52[8]=new Array("m52_59.htm","Lesson Summary");
menu52[9]=new Array("m52_60.htm","Lesson Quiz");
menu52[10]=new Array("m52_61.htm","End of Lesson");


//Contents for lesson 53
var menu53=new Array();  
menu53[0]=new Array("m53_1.htm","Lesson Overview");
menu53[1]=new Array("m53_2.htm","Understanding Session-Compiled Macros");
menu53[2]=new Array("m53_3.htm","Storing Macro Definitions in External Files");
menu53[3]=new Array("m53_7.htm","Storing Macro Definitions in Catalog SOURCE Entries");
menu53[4]=new Array("m53_14.htm","Using the Autocall Facility");
menu53[5]=new Array("m53_23.htm","Using Stored Compiled Macros");
menu53[6]=new Array("m53_33.htm","Lesson Summary");
menu53[7]=new Array("m53_34.htm","Lesson Quiz");
menu53[8]=new Array("m53_35.htm","End of Lesson");

//Contents for lesson 54
var menu54=new Array();  
menu54[0]=new Array("m54_1.htm","Lesson Overview");
menu54[1]=new Array("m54_2.htm","Creating a Systematic Sample from a Known Number of Observations");
menu54[2]=new Array("m54_6.htm","Creating a Systematic Sample from an Unknown Number Of Observations");
menu54[3]=new Array("m54_10.htm","Creating a Random Sample with Replacement");
menu54[4]=new Array("m54_17.htm","Creating a Random Sample without Replacement");
menu54[5]=new Array("m54_19.htm","Using Indexes");
menu54[6]=new Array("m54_20.htm","Creating Indexes in the DATA Step");
menu54[7]=new Array("m54_24.htm","Managing Indexes with PROC DATASETS");
menu54[8]=new Array("m54_27.htm","Managing Indexes with PROC SQL");
menu54[9]=new Array("m54_30.htm","Documenting and Maintaining Indexes");
menu54[10]=new Array("m54_40.htm","Lesson Summary");
menu54[11]=new Array("m54_41.htm","Lesson Quiz");
menu54[12]=new Array("m54_42.htm","End of Lesson");

//Contents for lesson 55
var menu55=new Array();  
menu55[0]=new Array("m55_1.htm","Lesson Overview");
menu55[1]=new Array("m55_2.htm","Using a FILENAME Statement");
menu55[2]=new Array("m55_5.htm","Using an INFILE Statement");
menu55[3]=new Array("m55_18.htm","Appending SAS Data Sets");
menu55[4]=new Array("m55_25.htm","Additional Features");
menu55[5]=new Array("m55_26.htm","Lesson Summary");
menu55[6]=new Array("m55_27.htm","Lesson Quiz");
menu55[7]=new Array("m55_28.htm","End of Lesson");

//Contents for lesson 56
var menu56=new Array();  
menu56[0]=new Array("m56_1.htm","Lesson Overview");
menu56[1]=new Array("m56_2.htm","Performing a Match-Merge without a Common Variable");
menu56[2]=new Array("m56_8.htm","Using PROC SQL to Join Data without a Common Variable");
menu56[3]=new Array("m56_10.htm","Comparing DATA Step Match-Merges and PROC SQL Joins");
menu56[4]=new Array("m56_17.htm","Combining Summary Data and Detail Data");
menu56[5]=new Array("m56_27.htm","Using an Index to Combine Data");
menu56[6]=new Array("m56_36.htm","Lesson Summary");
menu56[7]=new Array("m56_37.htm","Lesson Quiz");
menu56[8]=new Array("m56_38.htm","End of Lesson");

//Contents for lesson 57
var menu57=new Array();  
menu57[0]=new Array("m57_1.htm","Lesson Overview");
menu57[1]=new Array("m57_2.htm","Using Multidimensional Arrays");
menu57[2]=new Array("m57_8.htm","Using Stored Array Values");
menu57[3]=new Array("m57_15.htm","Using PROC TRANSPOSE");
menu57[4]=new Array("m57_20.htm","Merging the Transposed Data Set");
menu57[5]=new Array("m57_25.htm","Lesson Summary");
menu57[6]=new Array("m57_26.htm","Lesson Quiz");
menu57[7]=new Array("m57_27.htm","End of Lesson");

//Contents for lesson 58
var menu58=new Array();  
menu58[0]=new Array("m58_1.htm","Lesson Overview");
menu58[1]=new Array("m58_2.htm","Creating Custom Formats Using the VALUE Statement");
menu58[2]=new Array("m58_7.htm","Creating Custom Formats Using the PICTURE Statement");
menu58[3]=new Array("m58_11.htm","Managing Custom Formats");
menu58[4]=new Array("m58_16.htm","Using Custom Formats");
menu58[5]=new Array("m58_23.htm","Creating Formats From SAS Data Sets");
menu58[6]=new Array("m58_29.htm","Creating SAS Data Sets From Custom Formats");
menu58[7]=new Array("m58_33.htm","Lesson Summary");
menu58[8]=new Array("m58_34.htm","Lesson Quiz");
menu58[9]=new Array("m58_35.htm","End of Lesson");

//Contents for lesson 59
var menu59=new Array();  
menu59[0]=new Array("m59_1.htm","Lesson Overview");
menu59[1]=new Array("m59_2.htm","Using the MODIFY Statement");
menu59[2]=new Array("m59_3.htm","Modifying All Observations in a SAS Data Set");
menu59[3]=new Array("m59_6.htm","Modifying Observations Using a Transaction Data Set");
menu59[4]=new Array("m59_14.htm","Modifying Observations Located by an Index");
menu59[5]=new Array("m59_20.htm","Controlling the Update Process");
menu59[6]=new Array("m59_25.htm","Understanding Integrity Constraints");
menu59[7]=new Array("m59_27.htm","Placing Integrity Constraints on a Data Set");
menu59[8]=new Array("m59_31.htm","Documenting Integrity Constraints");
menu59[9]=new Array("m59_32.htm","Removing Integrity Constraints");
menu59[10]=new Array("m59_34.htm","Understanding Audit Trails");
menu59[11]=new Array("m59_35.htm","Initiating and Reading Audit Trails");
menu59[12]=new Array("m59_39.htm","Controlling Data in the Audit Trail");
menu59[13]=new Array("m59_46.htm","Controlling the Audit Trail");
menu59[14]=new Array("m59_48.htm","Understanding Generation Data Sets");
menu59[15]=new Array("m59_49.htm","Initiating Generation Data Sets");
menu59[16]=new Array("m59_52.htm","Processing Generation Data Sets");
menu59[17]=new Array("m59_58.htm","Lesson Summary");
menu59[18]=new Array("m59_59.htm","Lesson Quiz");
menu59[19]=new Array("m59_60.htm","End of Lesson");

//Contents for lesson 70
var menu70=new Array();  
menu70[0]=new Array("m70_1.htm","Lesson Overview");
menu70[1]=new Array("m70_2.htm","Viewing SELECT Statement Syntax");
menu70[2]=new Array("m70_3.htm","Displaying All Columns");
menu70[3]=new Array("m70_5.htm","Limiting the Number of Rows Displayed");
menu70[4]=new Array("m70_6.htm","Eliminating Duplicate Rows from Output");
menu70[5]=new Array("m70_8.htm","Subsetting Rows by Using Conditional Operators");
menu70[6]=new Array("m70_17.htm","Subsetting Rows by Using Calculated Values");
menu70[7]=new Array("m70_21.htm","Enhancing Query Output");
menu70[8]=new Array("m70_26.htm","Summarizing and Grouping Data");
menu70[9]=new Array("m70_40.htm","Subsetting Data by Using Subqueries");
menu70[10]=new Array("m70_41.htm","Subsetting Data by Using Noncorrelated Subqueries");
menu70[11]=new Array("m70_51.htm","Subsetting Data by Using Correlated Subqueries");
menu70[12]=new Array("m70_57.htm","Validating Query Syntax");
menu70[13]=new Array("m70_59.htm","Additional Features");
menu70[14]=new Array("m70_60.htm","Lesson Summary");
menu70[15]=new Array("m70_61.htm","Lesson Quiz");
menu70[16]=new Array("m70_62.htm","End of Lesson");

//Contents for lesson 71
var menu71=new Array();  
menu71[0]=new Array("m71_1.htm","Lesson Overview");
menu71[1]=new Array("m71_2.htm","Understanding Joins");
menu71[2]=new Array("m71_3.htm","Generating a Cartesian Product");
menu71[3]=new Array("m71_6.htm","Using Inner Joins");
menu71[4]=new Array("m71_16.htm","Using Outer Joins");
menu71[5]=new Array("m71_23.htm","Creating an Inner Join with Outer Join-Style Syntax");
menu71[6]=new Array("m71_24.htm","Comparing SQL Joins and DATA Step Match-Merges");
menu71[7]=new Array("m71_29.htm","Using In-Line Views");
menu71[8]=new Array("m71_33.htm","Joining Multiple Tables and Views");
menu71[9]=new Array("m71_38.htm","Lesson Summary");
menu71[10]=new Array("m71_39.htm","Lesson Quiz");
menu71[11]=new Array("m71_40.htm","End of Lesson");

//Contents for lesson 72
var menu72=new Array();
menu72[0]=new Array("m72_1.htm","Lesson Overview"); 
menu72[1]=new Array("m72_2.htm","Understanding Set Operations");
menu72[2]=new Array("m72_9.htm","Using the EXCEPT Set Operator");
menu72[3]=new Array("m72_15.htm","Using the INTERSECT Set Operator");
menu72[4]=new Array("m72_20.htm","Using the UNION Set Operator");
menu72[5]=new Array("m72_25.htm","Using the OUTER UNION Set Operator");
menu72[6]=new Array("m72_29.htm","Comparing Outer Unions and Other SAS Techniques");
menu72[7]=new Array("m72_31.htm","Lesson Summary");
menu72[8]=new Array("m72_32.htm","Lesson Quiz");
menu72[9]=new Array("m72_33.htm","End of Lesson");

//Contents for lesson 73
var menu73=new Array();
menu73[0]=new Array("m73_1.htm","Lesson Overview"); 
menu73[1]=new Array("m73_2.htm","Understanding Methods of Creating Tables");
menu73[2]=new Array("m73_3.htm","Creating an Empty Table by Defining Columns");
menu73[3]=new Array("m73_8.htm","Displaying the Structure of a Table"); 
menu73[4]=new Array("m73_10.htm","Creating an Empty Table That Is Like Another Table"); 
menu73[5]=new Array("m73_13.htm","Creating a Table from a Query Result"); 
menu73[6]=new Array("m73_16.htm","Inserting Rows of Data into a Table"); 
menu73[7]=new Array("m73_25.htm","Creating a Table That Has Integrity Constraints"); 
menu73[8]=new Array("m73_31.htm","Handling Errors in Row Insertions"); 
menu73[9]=new Array("m73_35.htm","Displaying Integrity Constraints for a Table");
menu73[10]=new Array("m73_37.htm","Updating Values in Existing Table Rows"); 
menu73[11]=new Array("m73_48.htm","Deleting Rows in a Table");
menu73[12]=new Array("m73_50.htm","Altering Columns in a Table");
menu73[13]=new Array("m73_56.htm","Dropping Tables");
menu73[14]=new Array("m73_58.htm","Lesson Summary");
menu73[15]=new Array("m73_59.htm","Lesson Quiz");
menu73[16]=new Array("m73_60.htm","End of Lesson");

//Contents for lesson 74
var menu74=new Array();
menu74[0]=new Array("m74_1.htm","Lesson Overview");
menu74[1]=new Array("m74_2.htm","Understanding Indexes");
menu74[2]=new Array("m74_4.htm","Deciding Whether to Create an Index");
menu74[3]=new Array("m74_8.htm","Creating an Index");
menu74[4]=new Array("m74_11.htm","Displaying Index Specifications");
menu74[5]=new Array("m74_13.htm","Managing Index Usage");
menu74[6]=new Array("m74_20.htm","Dropping Indexes");
menu74[7]=new Array("m74_23.htm","Lesson Summary");
menu74[8]=new Array("m74_24.htm","Lesson Quiz");
menu74[9]=new Array("m74_25.htm","End of Lesson");

//Contents for lesson 75
var menu75=new Array();
menu75[0]=new Array("m75_1.htm","Lesson Overview"); 
menu75[1]=new Array("m75_2.htm","Creating and Using PROC SQL Views");
menu75[2]=new Array("m75_6.htm","Displaying the Definition for a PROC SQL View");
menu75[3]=new Array("m75_9.htm","Managing PROC SQL Views");
menu75[4]=new Array("m75_14.htm","Updating PROC SQL Views");
menu75[5]=new Array("m75_16.htm","Dropping PROC SQL Views");
menu75[6]=new Array("m75_19.htm","Lesson Summary");
menu75[7]=new Array("m75_20.htm","Lesson Quiz");
menu75[8]=new Array("m75_21.htm","End of Lesson");

//Contents for lesson 76
var menu76=new Array();
menu76[0]=new Array("m76_1.htm","Lesson Overview"); 
menu76[1]=new Array("m76_2.htm","Specifying SQL Options");
menu76[2]=new Array("m76_3.htm","Controlling Execution");
menu76[3]=new Array("m76_7.htm","Controlling Output"); 
menu76[4]=new Array("m76_13.htm","Testing and Evaluating Performance"); 
menu76[5]=new Array("m76_16.htm","Resetting Options"); 
menu76[6]=new Array("m76_19.htm","Using Dictionary Tables"); 
menu76[7]=new Array("m76_26.htm","Lesson Summary");
menu76[8]=new Array("m76_27.htm","Lesson Quiz");
menu76[9]=new Array("m76_28.htm","End of Lesson");

//Contents for lesson 300 - EG1.3 and Learning Edition version
var menu300=new Array();  
menu300[0]=new Array("m300_1.htm","Lesson Overview");
menu300[1]=new Array("m300_2.htm","Understanding SAS Enterprise Guide and SAS Software");
menu300[2]=new Array("m300_3.htm","Using the Main SAS Enterprise Guide Windows");
menu300[3]=new Array("m300_7.htm","Viewing SAS Libraries and Files");
menu300[4]=new Array("m300_10.htm","Writing and Submitting Code");
menu300[5]=new Array("m300_15.htm","Viewing Results");
menu300[6]=new Array("m300_19.htm","Managing Your Workspace");
menu300[7]=new Array("m300_21.htm","Getting Help");
menu300[8]=new Array("m300_23.htm","Lesson Summary");
menu300[9]=new Array("m300_24.htm","Lesson Quiz");
menu300[10]=new Array("m300_25.htm","End of Lesson");

//Contents for lesson 1600 - EG1.3 and Learning Edition version
var menu1600=new Array();
menu1600[0]=new Array("m1600_1.htm","Lesson Overview");
menu1600[1]=new Array("m1600_2.htm","Defining SAS Libraries");
menu1600[2]=new Array("m1600_6.htm","Viewing the Contents of a SAS Library");
menu1600[3]=new Array("m1600_9.htm","Referencing Files in SAS Libraries");
menu1600[4]=new Array("m1600_13.htm","Setting System Options");
menu1600[5]=new Array("m1600_24.htm","Viewing System Options");
menu1600[6]=new Array("m1600_26.htm","Additional Features");
menu1600[7]=new Array("m1600_27.htm","Lesson Summary");
menu1600[8]=new Array("m1600_28.htm","Lesson Quiz");
menu1600[9]=new Array("m1600_29.htm","End of Lesson");

//Contents for lesson  200 - EG1.3 and Learning Edition version
var menu200=new Array();
menu200[0]=new Array("m200_1.htm","Lesson Overview");
menu200[1]=new Array("m200_2.htm","Opening a Stored SAS Program");
menu200[2]=new Array("m200_7.htm","Editing SAS Programs");
menu200[3]=new Array("m200_15.htm","Interpreting Error Messages");
menu200[4]=new Array("m200_17.htm","Correcting Errors");
menu200[5]=new Array("m200_20.htm","Detecting and Resolving Common Problems");
menu200[6]=new Array("m200_29.htm","Additional Features");
menu200[7]=new Array("m200_31.htm","Lesson Summary");
menu200[8]=new Array("m200_32.htm","Lesson Quiz");
menu200[9]=new Array("m200_33.htm","End of Lesson");

//Contents for lesson 5300 - EG1.3 and Learning Edition version
var menu5300=new Array();  
menu5300[0]=new Array("m5300_1.htm","Lesson Overview");
menu5300[1]=new Array("m5300_2.htm","Understanding Session-Compiled Macros");
menu5300[2]=new Array("m5300_3.htm","Storing Macro Definitions in External Files");
menu5300[3]=new Array("m5300_7.htm","Using the Autocall Facility");
menu5300[4]=new Array("m5300_16.htm","Using Stored Compiled Macros");
menu5300[5]=new Array("m5300_26.htm","Lesson Summary");
menu5300[6]=new Array("m5300_27.htm","Lesson Quiz");
menu5300[7]=new Array("m5300_28.htm","End of Lesson");

//////////////// end of menu code ///////////////////////////////////////////
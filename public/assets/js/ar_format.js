function arformat(tw){
  //var t =  <%-JSON.stringify(twt)%>
cleantext(tw);
ardate(tw);


//  document.getElementById("demo").innerHTML  = JSON.stringify(t.created_at) ;
 return (tw) ;
}
function ardate(tw){
  var tweetDate = tw.created_at ;


  var ds = tweetDate.split(' ');
  var formatedDate = ds[1]+" "+ds[2]+", "+ds[5]+" "+ds[3];


      formatedDate = new Date(formatedDate );
      // this is to enable months to show in arabic
   var months = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
              "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
// converts it to arabic month
  var armonth = months[formatedDate.getMonth()] ;
  var screendate =  formatedDate.getDate()+" "+ months[formatedDate.getMonth()]+" "+formatedDate.getFullYear()+" "+ds[3] ;
  tw.created_at = screendate;

  //return (screendate) ;
}
function cleantext(tw){

var twEntities = tw.entities ;
var text = tw.full_text;
  //remove media url
    if(typeof twEntities.media !== 'undefined'){
  var m = twEntities.media ;
  for (var i = 0, len = m.length; i < len; i++) {
  text = text.replace( m[i].url , "");
  }
  }

  //remove urls
    if(typeof twEntities.urls !== 'undefined'){
  var ur = twEntities.urls ;
  for (var i = 0, len = ur.length; i < len; i++) {
  text = text.replace( ur[i].url , "");
  }
}
tw.full_text = text ;

}

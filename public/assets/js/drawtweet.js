
  var bbg = new Image ;
      bbg.src = "/assets/images/footer.png";
      bbg.crossOrigin = "Anonymous";

  var favimg = new Image;
      favimg.src = "/assets/images/fav.png";
      favimg.crossOrigin = "Anonymous";
  var rtwimg = new Image ;
      rtwimg.src = "/assets/images/retw.png";
      rtwimg.crossOrigin = "Anonymous";
  var Vimg = new Image ;
      Vimg.src ="/assets/images/Verf.png";
      Vimg.crossOrigin = "Anonymous";


function Draw(tw){
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);

var maxWidth = 1050;
var lineHeight = 80;
var mar_x = (canvas.width - maxWidth) / 2;
var x = canvas.width - mar_x ;
var y = 330;
var text = document.getElementById("mytext").value;
text = text.replace(/\n/g, " ");
context.font = '40pt ArHelvet';
context.fillStyle = '#333';


/// get the user profiles text
  var tsusrname = tw.user.screen_name;
  var tusrname = tw.user.name;

/// the counter and date text
  var favcount = tw.favorite_count;
  var rtwcount = tw.retweet_count;
  var screendate = tw.created_at;
  var ds = screendate.split(' ') ;
  screendate = ds[0]+" "+ds[1]+" "+ds[2];
  var ttime = (ds[3]).slice(0,-3);
  var screenmonth = (screendate.split(' '))[1];


  // images



  var Pimg = new Image ;
      Pimg.src = (tw.user.profile_image_url_https).replace("_normal", "");
//  Pimg.src = "/assets/images/footer.png";
      Pimg.crossOrigin = "Anonymous";

  var Vuser = tw.user.verified;
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

      Pimg.onload = function() {


      var footer_y = measure_Text(context, text, x, y, maxWidth, lineHeight);
      canvas.height = footer_y + 175 ;
      var cy = footer_y + 145 ;

        var sHeight = canvas.height;
        ctx.save();
          ctx.rect(0,0,1200,footer_y+50)
          ctx.fillStyle = "white";
            ctx.fill();
         ctx.restore();

        context.font = '25pt ArHelvet';
        var rtwwidth = ctx.measureText(rtwcount).width ;
        var favwidth = ctx.measureText(favcount).width ;
    var count_ico_marg = 8 ;


        var imgdownFac = 1.5 ;
        context.fillStyle = '#a5a5a5';
        context.font = '25pt ArHelvet';
        context.textAlign="right";
          ctx.drawImage(bbg, 0, footer_y-75);

          var rtwimgx = (x - (rtwwidth/2)- ((54/imgdownFac)/2))
          ctx.drawImage(rtwimg, rtwimgx , (cy - 70) ,54/imgdownFac,39/imgdownFac );
          context.fillText( rtwcount, x, cy);


         var favx = (x - rtwwidth - 50);
            context.fillText( favcount, favx, cy);
          var favimgx = favx - ((44/imgdownFac)/2) - (favwidth/2) ;
            ctx.drawImage(favimg, favimgx , (cy - 70) ,44/imgdownFac,39/imgdownFac );

            context.textAlign="left";
        var date_w = context.measureText(screendate).width ;
      var dateposx = ( mar_x+ 50);
          context.fillText( screendate, dateposx, cy);
          //context.fillText( ttime, dateposx, cy - 50);
      // draw the circle around user profile picture
      var  pimgw = 200 ;
      var pimgh = 200 ;
          circleMask(Pimg,x-200 ,60,pimgw,pimgh,pimgh/2);

           if (Vuser == true ){

             context.font = 'bold 40pt ArHelvet';
              var userlength = ctx.measureText(tusrname).width;
              var xusr = x - 230  ;
              var vimgx = xusr - userlength - 70 ;
              ctx.drawImage(Vimg, vimgx, 110,50,50);



              }
            //  console.log(measure_Text(context, text, x, y, maxWidth, lineHeight));

          typetext() ;
      };
function circleMask(img,x,y,w,h,r) {
       ctx.save();
       ctx.beginPath();
         ctx.arc(x+(w/2),y+(h/2), r, 0, Math.PI*2,true); // you can use any shape
         //ctx.stroke();
         ctx.clip();
         ctx.drawImage(img, x, y, w, h);
         ctx.restore();

      }







    // this is my wrap modified version for arabic colored and drawing it to the canvas in the same time // thisis the most importent function ///////////////////////////////////////////////////////////
function typetext() {
      context.font = '40pt ArHelvet';
      context.fillStyle = 'black';
      wrapTextcolor(context, text, x, y, maxWidth, lineHeight);
      //wrapText(context, text, x, y, maxWidth, lineHeight);




           context.dir = "ltr" ;
           context.font = 'bold 40pt ArHelvet';
          context.fillStyle = '#333';
           context.textAlign="right";
           var xusr = x - 230 ;
           context.fillText(tusrname, xusr , 150);

               context.font = '30pt ArHelvet';
               context.fillStyle = '#a5a5a5';
           context.fillText(tsusrname+'@', xusr , 220);
  }



}


function measure_Text(context, text, x, y, maxWidth, lineHeight) {
      var words = text.split(' ');
      var line = '';
      context.textAlign="right";
      context.font = '40pt ArHelvet';
      for(var n = 0; n < words.length; n++) {

        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        // check for full line if do it will write it to the canvas
        if (testWidth > maxWidth && n > 0) {
          var line_W = line.split(' ');
          var xw = x ;
          for(var i = 0; i < line_W.length; i++) {
            var lw = line_W[i] + ' ';
            // if the line starts with # @ it will flip here i'm coloring it and draw it in the right spot /////////////////////////
            if(lw.startsWith("#")|| lw.startsWith("@") ){
          //    context.fillStyle = '#63cdf1';
            //    context.fillText(lw, xw, y);
            //    context.fillStyle = 'black';
            }else{

          //    context.fillText(lw, xw, y);
            }

            var metrics = context.measureText(lw);
            var ww = metrics.width;
             xw = xw - ww ;
          }
          // start a new line

          line = words[n]+ ' ';
          y += lineHeight;
        }
        else {
          line = testLine;
        }
      }




     // context.fillText(line, x, y);
    // console.log(y);

      return y ;
    }

// this is my wrap modified version for arabic colored and drawing it to the canvas in the same time // thisis the most importent function ///////////////////////////////////////////////////////////
function wrapTextcolor(context, text, x, y, maxWidth, lineHeight) {
  // aligning text to right
      context.textAlign="right";
      // split text to words



      var words = text.split(' ');
      // the line separator
      var line = '';
      //loop in words
      for(var n = 0; n < words.length; n++) {

        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        // check for full line if do it will write it to the canvas
        if (testWidth > maxWidth && n > 0) {
          var line_W = line.split(' ');
          var xw = x ;
          for(var i = 0; i < line_W.length; i++) {
            var lw = line_W[i] + ' ';
            // if the line starts with # @ it will flip here i'm coloring it and draw it in the right spot /////////////////////////
            if(lw.startsWith("#")|| lw.startsWith("@") ){
              context.fillStyle = '#63cdf1';
                context.fillText(lw, xw, y);
                context.fillStyle = 'black';
            }else{

              context.fillText(lw, xw, y);
            }

            var metrics = context.measureText(lw);
            var ww = metrics.width;
             xw = xw - ww ;
          }
          // start a new line

          line = words[n]+ ' ';
          y += lineHeight;
        }
        else {
          line = testLine;
        }
      }
    //  console.log(y);

      ///the last line

          //var line_W = line.split(" ");
          var xw = x ;
           var Liney = line.match(/[^\r\n]+/g);

           var line_W = [] ;
            for(var i = 0; i < Liney.length; i++) {
            line_W = line_W.concat(Liney[i].split(" "));
            }
          // loop in last line words


          for(var i = 0; i < line_W.length; i++) {
            var lw = line_W[i] ;
            var llw = lw.length ;
              // if the line starts with # @ it will flip here i'm coloring it and draw it in the right spot /////////////////////////
            if( lw.startsWith("#")|| lw.startsWith("@")){
              context.fillStyle = '#63cdf1';
              lw = lw+' ';
                context.fillText(lw, xw, y);

                context.fillStyle = 'black';
            }else{
              lw = lw+' ';

              context.fillText(lw, xw, y);
            }

            var metrics = context.measureText(lw);
            var ww = metrics.width;
             xw = xw - ww ;
          }

    }

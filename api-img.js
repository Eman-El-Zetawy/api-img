 var photo = document.getElementById("photo");
 var picture = document.getElementById("picture");
 var value ,newSrc , ul=[] , txt =[] , l ; 
 const my = new Headers();
          my.append('authorization' , 'Bearer xEpYEON0z20mHSOmx-0wVbYGqtNRAOwXAJfj') ; 
          my.append('Content-Type','application/json'); 
          fetch('https://gorest.co.in/public-api/photos', { method :'GET', headers: my 
          }).then(response=>response.json()).then(data=>{console.log(data) , img1(data);}  );
function img1(data){
            var indx =[]  , ss=[] ;
        l= cont (data , indx);
            ftxt (indx , data , txt );
            fss (indx , data , ss);
            fuul(indx , data ,ul);
            draw_div_img(indx , ss ) ;
            var  img = document.getElementsByTagName("img");
            indx.forEach(r=>{img[r].addEventListener("click",click_image); });
        }
function cont (data ,m){
                const l = data.result.length ; 
                for(let i =0 ; i<l ; i++){ m.push(i);}
                return l ;}
function ftxt (indx , data , txt ){  
             indx.forEach(r => { txt.push(data.result[r].title) ; });} 
 function fss (indx , data , ss ){
             indx.forEach(r=>{ ss.push(data.result[r].thumbnail) ;});}
 function fuul( indx , data , ul ){
             indx.forEach(r=>{ul.push(data.result[r].url);}) ;   }
 function draw_div_img (indx , ss  ){ 
                indx.forEach(r=>{ 
                picture.innerHTML +='<div class="class-div"><img src="'+ss[r] +'"  class="class-img" id="'+r+'"/></div>' ;
                } ); }
function click_image (event ){
                value = event.target.getAttribute("id");
                draw(ul[value]);
                }
function click_x (){
                photo.innerHTML =" ";
                photo.style="position : unset ";
                }
function move(event){
            var id = event.target.getAttribute("id");
            if(id=="left"){ 
               if(value > 1){ return draw(ul[--value]); }
                else  if(value == 1){  return draw(ul[--value]); }  return ;  }
            if( id=="right"){
                if( value <(l-2)){ return  draw(ul[++value]); }
                else  if(value== (l-2)){   return  draw(ul[++value]);  }
                    return ;  }  }
function draw (src){
        photo.innerHTML ='<img  src=' + src + ' class="new_img" / > ';
        photo.innerHTML +='<a href="#" class="box_x" onclick="click_x()">X</a>' ; 
        photo.style ="position: absolute ";
        photo.innerHTML +=' <p class="para">'+txt[value]+'</p>';
        photo.innerHTML +='<a href="#" id="left" class="left" onclick="move(event)">'+'<a href="#" id="left" onclick="move(event)" class="back">back</a>'+'</a><a  href="#" id="right" class="right" onclick="move(event)">'+'<a href="#"  id="right" class="next" onclick="move(event)" >next</a>'+'</a>';
        if(value==l-1){   document.getElementsByClassName("next")[0].style.color ="gainsboro";}                                                                                                                                                                         
        if(value==0){   document.getElementsByClassName("back")[0].style.color ="gainsboro";}
                }
 var photo = document.getElementById("photo");
 var showa = document.getElementById("a");
 var picture = document.getElementById("picture");
 var value ,array=[] , array_url=[],array_text=[],array_indexs=[],array_src=[],b=0 , h='https://gorest.co.in/public-api/photos?page=' , p=1 ;

 const my = new Headers();
          my.append('authorization' , 'Bearer xEpYEON0z20mHSOmx-0wVbYGqtNRAOwXAJfj') ; 
          my.append('Content-Type','application/json'); 
          main ();
        ;
    function main(){ 
          fetch(h+(p++) , { method :'GET', headers: my 
          }).then(response=>response.json()).then(data=>{array.push(data.result) ,appl(array) ;}  );
 }
function appl(array){
            var index =[]   ;

           array[0].forEach(r=>index.push((r.id)-1));
           array[b].forEach(r=>array_indexs.push((r.id)-1));
           index.forEach(r=>array_text.push(array[b][r].title));
           index.forEach(r=>array_src.push(array[b][r].thumbnail));
           index.forEach(r=>array_url.push(array[b][r].url));

            draw_all_img(array_indexs , array_src) ;

            showa.innerHTML ='<a href ="#" onclick="show()">SHOR MORE</a>';

            array_indexs.forEach(r=>{
                document.getElementsByClassName("class-img")[r].addEventListener("click",click_image);
            });
            b++;

            console.log(document.getElementsByClassName("class-img") , array_text.length);
            // console.log(array_indexs , index , array);

          }

            
 function draw_all_img (array_indexs , array_src ){ 
                array_indexs.forEach(r=>{ 
                picture.innerHTML +='<div class="class-div"><img src="'+array_src[r] +'"  class="class-img" id="'+r+'"/></div>' ;
                } );
            }

            function show(){
                main();
                        }
function click_image (event ){
                value = event.target.getAttribute("id");
                console.log(value);
                draw(array_url[value]);
                }
function click_x (){
                photo.innerHTML =" ";
                photo.style="position : unset ";
                }
function move(event){
            var id = event.target.getAttribute("id");
            if(id=="left"){ 
               if(value > 0){ return draw(array_url[--value]); }
                // else  if(value == 1){  return draw(ul[--value]); } 
                 return ;  }
            if( id=="right"){
                if( value <(array_indexs.length-1)){ return  draw(array_url[++value]); }
                // else  if(value== (l-2)){   return  draw(ul[++value]);  }
                    return ;  }  }
function draw (src){
        photo.innerHTML ='<img  src=' + src + ' class="new_img" / > ';
        photo.innerHTML +='<a href="#" class="box_x" onclick="click_x()">X</a>' ; 
        photo.style ="position: absolute ";
        photo.innerHTML +=' <p class="para">'+array_text[value]+'</p>';
        photo.innerHTML +='<a href="#" id="left" class="left" onclick="move(event)">'+'<a href="#" id="left" onclick="move(event)" class="back">back</a>'+'</a>'+'<a  href="#" id="right" class="right" onclick="move(event)">'+ '<a href="#"  id="right" class="next" onclick="move(event)" >next</a>'+'</a>';
        if(value==array_indexs.length-1){   document.getElementsByClassName("next")[0].style.color ="gainsboro";}                                                                                                                                                                         
        if(value==0){   document.getElementsByClassName("back")[0].style.color ="gainsboro";}
                }
    var photo = document.getElementById("photo");
    var showa = document.getElementById("a");
    var picture = document.getElementById("picture");
    var value, index = [],
        array = [],
        array_url = [],
        array_text = [],
        array_indexs = [],
        array_src = [],
        b = 0,
        h = 'https://gorest.co.in/public-api/photos?page=',
        p = 1;
    const my = new Headers();
    my.append('authorization', 'Bearer xEpYEON0z20mHSOmx-0wVbYGqtNRAOwXAJfj');
    my.append('Content-Type', 'application/json');
    main();

    function main() {
        fetch(h + (p++), {
            method: 'GET',
            headers: my
        }).then(response => response.json()).then(data => {
            array.push(data.result), appl(array);
        });
    }

    function appl(array) {
        var INT = [];
        array[b].forEach(r => array_indexs.push((r.id) - 1));
        array[b].forEach(r => INT.push((r.id) - 1));
        index.push(INT);
        index[0].forEach(r => array_text.push(array[b][r].title));
        index[0].forEach(r => array_src.push(array[b][r].thumbnail));
        index[0].forEach(r => array_url.push(array[b][r].url));
        draw_all_img(index[b], array_src);
        showa.innerHTML = '<a href ="#" class="aa"  onclick="main()">SHOR MORE</a>';
        array_indexs.forEach(r => {
            document.getElementsByClassName("class-img")[r].addEventListener("click", click_image);
        });
        b++;
    }
  let i=0  ;
    function draw_all_img(ind, array_src) {
        const di = document.createElement("DIV");
           picture.appendChild(di);
           //di.setAttribute("id", 'a'+i);
           di.id='a'+i ; 
           di.class="picture";
           ind.forEach(r => {
           document.getElementById('a'+i).innerHTML += '<div class="class-div"><img src="' + array_src[r] + '"class="class-img" id="' + r + '"/></div>';
        }); i++; 
    }
  
    function click_image(event) {
        value = event.target.getAttribute("id");
        console.log(value);
        draw(array_url[value]);
    }

    function click_x() {
        photo.innerHTML = " ";
        photo.style = "position : unset ";
    }

    function move(event) {
        var id = event.target.getAttribute("id");
        if (id == "left") {
            if (value > 0) {
                return draw(array_url[--value]);
            }
            return;
        }
        if (id == "right") {
            if (value < (array_indexs.length - 1)) {
                return draw(array_url[++value]);
            }
            return;
        }
    }

    function draw(src) {
        photo.innerHTML = '<img  src=' + src + ' class="new_img" / > ';
        photo.innerHTML += '<a href="#" class="box_x" onclick="click_x()">X</a>';
        photo.style = "position: absolute ";
        photo.innerHTML += ' <p class="para">' + array_text[value] + '</p>';
        photo.innerHTML += '<a href="#" id="left" class="left" onclick="move(event)">' + '<a href="#" id="left" onclick="move(event)" class="back">back</a>' + '</a>' + '<a  href="#" id="right" class="right" onclick="move(event)">' + '<a href="#"  id="right" class="next" onclick="move(event)" >next</a>' + '</a>';
        if (value == array_indexs.length - 1) {
            document.getElementsByClassName("next")[0].style.color = "gainsboro";
        }
        if (value == 0) {
            document.getElementsByClassName("back")[0].style.color = "gainsboro";
        }
    }
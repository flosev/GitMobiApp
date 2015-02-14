$(function(){
    document.getElementById('spanArea').innerHTML = "24";
    $.getJSON('response.json', function(data) {

        for(var i=0;i<data.response.listings.length;i++){
            /*$('#listings').append('<tr><td>' + $( "<img>" ).attr( "src", "=", data.response.listings[i].thumb_url) +*/
            var price = data.response.listings[i].price_formatted;
            var ttl = data.response.listings[i].title;

            $('#listings').append('<tr class="icons" onclick="detail\('+i+'\)"><td width="20%"><img height="80%" width="80%" src="'+  data.response.listings[i].thumb_url+'" >'+

            '\<td width="60%">' + price +

            '\<br>' + ttl + '\</tr>');
             //пытался повесить обработчик
           /* $('#listings').live('click', function(event){
                var newWin = window.open('choice.html', 'example');
                newWin.focus();

                newWin.onload = function() {

                    // создать div в документе нового окна
                    var div = newWin.document.createElement('div');

                    div.innerHTML = 'Добро пожаловать!   =';
                    newWin.document.getElementById("price").innerHTML=price;
                    newWin.document.getElementById("title").innerHTML=ttl;
                    *//*newWin.document.getElementById("title").innerHTML=ttl;
                    newWin.document.getElementById("bed").innerHTML=bed;
                    newWin.document.getElementById("bath").innerHTML=bath;
                    newWin.document.getElementById("summary").innerHTML=sum;*//*
                    div.style.fontSize = '30px';

                    var body = newWin.document.body;
                    // вставить первым элементом в новое body
                    body.insertBefore(div, body.firstChild);
                }

                event.preventDefault(); // отменяем действие по умолчанию, но не трогаем bubbling - чтобы не мешать другим обработчикам
            }); */ //окончание обработчика

        }
    });
});

function detail(pf){
    var newWin = window.open('choice.html', 'example');
    newWin.focus();

    newWin.onload = function() {
        /*function back(){
            self.close();
        };*/

        $.getJSON('response.json', function(data) {

           /* newWin.document.getElementById('price').innerText=data.response.listings[pf].price_formatted;*/
            newWin.document.getElementById("title").innerHTML=data.response.listings[pf].title;

            /*$( "<img>" ).attr( "src", data.response.listings[pf].img_url ).appendTo( newWin.document.getElementById("pict"));*/
            newWin.document.getElementById("bed").innerHTML=data.response.listings[pf].bedroom_number;
            newWin.document.getElementById("bath").innerHTML=data.response.listings[pf].bathroom_number;
            newWin.document.getElementById("summary").innerHTML=data.response.listings[pf].summary;
        });
        div.style.fontSize = '30px';

      /*  var body = newWin.document.body;
        // вставить первым элементом в новое body
        body.insertBefore(div, body.firstChild);*/
    }
};


$("fgf").on("click", function(event){
    var str = "( " + event.pageX + ", " + event.pageY + " )";
    $("span").text("Клик, это звучит гордо! Особенно в координатах " + str);
});
/*<a href="./commodity.do?id=${commodity.id}">${commodity.price}</a>*/
$('p').on('click', /*"li",*/ function(){
    var txt = $(this).text(); // вытащим текст из нажатого элемента
    alert('Вы нажали на элемент с текстом - «' + txt + '»'); // выведем сообщение с текстом
    /*var i=1;*/
        window.open("choice.html", 'fg');

});
/*function upperMe(){
 var params = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
 var element = document.getElementById("output");
 var options = element.onclick instanceof Function ? element.onclick() : {};
 var txt = $(this).text();
 window.open("choice.html", '_self');

 };*/


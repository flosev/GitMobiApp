$(function(){

    $.getJSON('response.json', function(data) {
        document.getElementById('spanArea').innerHTML = data.response.listings.length;
        for(var i=0;i<data.response.listings.length;i++){
            var price = data.response.listings[i].price_formatted;
            var ttl = data.response.listings[i].title;

            $('#listings').append('<tr class="icons" onclick="detail\('+i+'\)"><td width="30%" heigth="30%"><img height="80%" width="80%" src="'+  data.response.listings[i].thumb_url+'" >'+

            '\<td width="60%">' + price +

            '\<br>' + ttl + '\</tr>');
             //неудачная попытка повесить обработчик
           /* $('#listings').live('click', function(event){
                var newWin = window.open('choice.html', 'example');
                newWin.focus();

                newWin.onload = function() {

                    // создать div в документе нового окна
                    var div = newWin.document.createElement('div');

                    div.innerHTML = 'Добро пожаловать!   =';
                    newWin.document.getElementById("price").innerHTML=price;
                    newWin.document.getElementById("title").innerHTML=ttl;
                    newWin.document.getElementById("title").innerHTML=ttl;
                    newWin.document.getElementById("bed").innerHTML=bed;
                    newWin.document.getElementById("bath").innerHTML=bath;
                    newWin.document.getElementById("summary").innerHTML=sum;
                    div.style.fontSize = '30px';

                    var body = newWin.document.body;
                    // вставить первым элементом в новое body
                    body.insertBefore(div, body.firstChild);
                }

                event.preventDefault(); // отменяем действие по умолчанию, но не трогаем bubbling - чтобы не мешать другим обработчикам
            }); */
        }
    });
});

function detail(pf){
    $.getJSON('response.json', function(data) {

        var output= '<body>Property Details '+
         '<nobr><input type="button" style="margin-left:50%;" value="back" onclick="window.open(\'index.html\',\'_self\')"/></nobr>'+
         '<br><div class="item" id="price">'+data.response.listings[pf].price_formatted+'</div>' +
         '<div class="item" id="title">'+data.response.listings[pf].title+'</div>' +
         '<img height="70%" width="90%" id="pict" src="'+data.response.listings[pf].img_url+'"/>' +
         '<div class="item" id="bed">bed -  '+data.response.listings[pf].bedroom_number+
         '   bathroom - '+data.response.listings[pf].bathroom_number+'</div>'+
         '<div class="item" id="summary">'+data.response.listings[pf].summary+'</div></body>';

        var newWin = window.open('choice.html', '_self');newWin.document.write(output);
    newWin.focus();

          //В браузере работает, в Phonegap -нет...
            /*newWin.document.getElementById('price').innerHTML=data.response.listings[pf].price_formatted;
            newWin.document.getElementById("title").innerHTML=data.response.listings[pf].title;
            $( "<img>" ).attr( "src", data.response.listings[pf].img_url ).appendTo( newWin.document.getElementById("pict"));
            newWin.document.getElementById("bed").innerHTML=data.response.listings[pf].bedroom_number;
            newWin.document.getElementById("bath").innerHTML=data.response.listings[pf].bathroom_number;
            newWin.document.getElementById("summary").innerHTML=data.response.listings[pf].summary;*/


    });
};



'use strict';

$(function () {    
    $('button').click(function(){    
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function(data) {
        console.log(data);
            
        var paragraf = $('p');
        var paragrafText = $(document.createTextNode('User ID jest rowne: ' + data.imie + ' UserName jest rowne ' + data.nazwisko + ' User URL jest rowne ' + data.zawod));
        $('p').append(paragrafText);
        $('body').append(paragraf);
        });
    });
});
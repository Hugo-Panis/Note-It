(function () {
    'use strict';
    $(() => {

        $.ajax({
            url: '../json/is_connected.php',
            method: 'GET'
        }).done(function(data){
            $('.bjrPseudo').html('bonjour ' + data.user);
        });


        //affiche les évènements déjà existants stockés dans la base de données
        $.ajax({
            url: '../json/evenement.php',
            method: 'GET'
        }).done(function(data){
            console.log(data);
            $('.event').append('<div class="newEvent"></div>')
            $('.newEvent').css({
                    'border' : '1px solid rgba(0, 0, 0, .20)',
                    'border-radius' : '4px',
                    'background' : 'url("https://source.unsplash.com/random")',
                    'color' : '#D3D3D3',
                    'display' : 'block',
                    'font-size' : '25px',
                    'text-shadow' : '0px 0px 3px black',
                    'padding' : '20px',
                    'margin' : ' 10px auto',
                    'width' : '500px'
                    }).html(data);
        });


        $('#bouton').click(function () {
            $('.event').append('<div class="newEvent">' +
                '<input class="newIn" type="text" name="nameEvent" placeholder="Nom">' +
                '<br>' +
                '<button id="OK">OK</button>' +
                '</div>').css({'display' : 'inline-bloc','margin' : 'auto', 'text-align' : 'center'});
            console.log('newEvent');
            $(this).css('display', 'none');

            $('#OK').click(function () {
                console.log('ca marche');

                $.ajax({
                    url: '../json/evenement.php',
                    method: 'POST',
                    data: $('.newin').val()
                });

                $('.newEvent:last-child').html($('.newIn').val());
                $('.newEvent:last-child').css({
                    'border' : '1px solid rgba(0, 0, 0, .20)',
                    'border-radius' : '4px',
                    'background' : 'url("https://source.unsplash.com/random")',
                    'color' : '#D3D3D3',
                    'display' : 'block',
                    'font-size' : '25px',
                    'text-shadow' : '0px 0px 3px black',
                    'padding' : '20px',
                    'margin' : ' 10px auto',
                    'width' : '500px'});

                $.ajax({
                    url: '../json/evenement.php',
                    method: 'POST',

                });

                $('#bouton').css('display', 'block');
            })
        });

    })
})();
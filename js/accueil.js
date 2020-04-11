(function () {
    'use strict';
    $(() => {

        $.ajax({
            url: '../json/login.php',
            method: 'GET',
            data: 'pseudo'
        }).done(function(data){
            $('.bjrPseudo').html('bonjour ' + data.pseudo);
        });

        $('#bouton').click(function () {
            $('.event').append('<div class="newEvent">' +
                '<input class="newIn" type="text" name="nameEvent" placeholder="Nom">' +
                '<button id="OK">OK</button>' +
                '</div>').css({'display' : 'inline-bloc','margin' : 'auto', 'text-align' : 'center'});
            console.log('newEvent');
            $(this).css('display', 'none');

            $('#OK').click(function () {
                console.log('ca marche');

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
                    url: '../json/evenements.php',
                    method: 'POST',

                })

                $('#bouton').css('display', 'block');
            })
        });

    })
})();
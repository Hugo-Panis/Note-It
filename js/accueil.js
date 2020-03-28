(function () {
    'use strict';
    $(() => {

        let newEvent = $('<div class="newEvent">' +
            '<input class="newIn" type="text" name="nameEvent" placeholder="Nom">' +
            '<button id="OK">OK</button>' +
            '</div>');
        newEvent.css({
            'display' : 'flex',
            'width' : '450px',
            'margin' : 'auto'});

        $('#bouton').click(function () {
            $('.event').append(newEvent);
            console.log('newEvent');
            $(this).css('display', 'none');

            $('#OK').click(function () {
                console.log('ca marche');

                $('.newEvent').html($('.newIn').val());
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
                    'width' : '500px'});

                $('#bouton').css('display', 'block');
            })
        });

    })
})();
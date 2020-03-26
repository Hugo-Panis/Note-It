(function () {
    'use strict';
    $(() => {

        let newEvent = $('<div class="newEvent">' +
            '<input class="newIn" type="text" name="nameEvent" placeholder="Nom">' +
            '<button class="OK" type="submit">OK</button>' +
            '</div>');
        newEvent.css({
            'display' : 'flex'});

        $('#bouton').click(function () {
            $('.event').prepend(newEvent);
            console.log('newEvent');
            $(this).css('display', 'none');
        });

        $('.OK').click(function () {
            $.ajax()
        })

        ;
    })
})();
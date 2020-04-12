(function() {
    'use strict';
    $(() => {

        /* verifie si l'utilisateur est connecté */
        $.ajax({
            url: '../json/is_connected.php',
            method: 'GET'
        })
            .done(function (data) {
                console.log(data);
                //si tu es deja connecté:
                if (data.isConnected === true) {
                    $('#icon').click(function () {
                                    $.ajax({
                                        url: '../json/logout.php',
                                        method: 'GET'
                                    })
                                    .done(function () {
                                        console.log("pb de connexion");
                                        window.location.href = '../html/index.html';
                                    })
                    })

                } else {
                    window.location.href = '../html/index.html';
                }
            });
    });

})();
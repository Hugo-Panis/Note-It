(function(){
    'use strict';
    $(() =>{

        // envoyer les variables issues d'un formulaire HTML à un script PHP en AJAX
        $('#login-form').submit(function() {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            })
                //si la combi user/pass est ok :
                .done(function(data) {
                    console.log(data);
                    if(data.success === true) {
                        window.location.href = '../accueil.html';
                    } else {
                        $('#message')
                            .html(data.message)
                            .fadeOut()
                            .fadeIn();
                    }
                })
                .fail(function() {
                    $('body').html('Erreur fatale');
                });
            return false;
        });

        $('#register-form').submit(function () {
            $.ajax({
                url: $(this).attr('action'),
                method: $(this).attr('method'),
                data: $(this).serialize()
            })
        });


        $('.lien').click(function(){
            if ($('#change').attr('name') === 'connexion') {
                $('#change')
                    .html('<h3>Créez votre compte :</h3>\n' +
                        '<br>\n' +
                        '<div id="message" style="display:none"></div>\n' +
                        '<br>\n' +
                        '<form action="../json/register.php" method="POST" id="register-form">\n' +
                        '    <input type="text" name="pseudo" placeholder="Pseudo" class="input">\n' +
                        '    <br>\n' +
                        '    <input type="text" name="prenom" placeholder="Prénom" class="input">\n' +
                        '    <br>\n' +
                        '    <input type="password" name="nom" placeholder="Nom" class="input">\n' +
                        '    <br>\n' +
                        '    <input type="password" name="password" placeholder="Mot de passe" class="input">\n' +
                        '    <br>\n' +
                        '    <button type="submit" class="submit">Créer mon compte</button>\n' +
                        '</form>\n' +
                        '<br>\n' +
                        '<a href="index.html" class="lien">Je possède déjà un compte</a>');
                $('#change').attr('name', "creation");
            } else {
                $('#change')
                    .html('<h3>Connectez-vous :</h3>\n' +
                        '        <br>\n' +
                        '        <div id="message" style="display:none"></div>\n' +
                        '        <br>\n' +
                        '        <form action="../json/login.php" method="post" id="login-form">\n' +
                        '            <input class="input" type="text" name="mail" placeholder="Adresse e-mail">\n' +
                        '            <br>\n' +
                        '            <input class="input" type="password" name="password" placeholder="Mot de passe" >\n' +
                        '            <br>\n' +
                        '            <button type="submit" class="submit">Continuer</button>\n' +
                        '        </form>\n' +
                        '        <br>\n' +
                        '        <a class="lien">Pas encore de compte ?</a>');
                $('#change').attr('name', 'connexion');
            }
        })
    });

}) ();
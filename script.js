$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Empêche l'envoi normal du formulaire
        
        // Récupérer les données du formulaire
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        // Simuler une réponse du serveur
        $('#formResponse').removeClass('hidden').text('Merci ' + name + ', votre message a été envoyé avec succès !');

        // Réinitialiser le formulaire
        $('#contactForm')[0].reset();
    });
});

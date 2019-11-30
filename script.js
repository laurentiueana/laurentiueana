// $(document).ready(function () {
//     $('.navigation__list').on('click', 'li:first', function() {
//         $.ajax('sursa.html', {
//             beforeSend: function() {
//                 $('.main__item--title').last().text('Loading');
//             }
//         }).done(function(response) {
//             $('.baner__text').html(response).fadeIn('000').animate({top: '+20px', right: '+50px;'})
//         }).always(function(){
//             $('.main__item--title').first().text('Completed');
//         })


//     })
// })

$(document).ready(function() {
    $('.navigation__list').on('click', 'li:first', function(){
        $.ajax('sursa.html')
        .done(function(response){
            $('section .row.main').append(response);
        })
    })
})
var description
$(document).ready(function () {
  $('.colaborador').mouseenter(function () {
    $(this).find('.descripcion').fadeIn()
    description = $(this).find('.descripcion').html()
  })

  $('.colaborador').mouseleave(function () {
    $(this).find('.descripcion').fadeOut()
  })

  $('.descripcion').click(function () {
    showColaborator(this)
    $('.colaborador').fadeOut()
    $('.colaborador-unico').show()
})


$(document).on('click', '.volver', function () {
    hideObjets()
    $('.colaborador').removeClass('activo')
    $('.colaborador').fadeIn()
})
})

function hideObjets () {
    $('.descripcion').hide()
    $('.colaborador-unico').hide()
    $('.volver').remove()
}

function showColaborator (e) {
    $('.colaborador-unico').show()
    $(this).addClass('activo')
    $(".colaborador-unico").children().html(description).show();
    $('.colaborador-unico').children().append('<button class="volver">Volver</button>')
    $('.volver').css({
        'color': 'red'
    })
}
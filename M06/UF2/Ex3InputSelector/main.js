$('#camposelector').on('input', e => {
  $('.selecionado').removeClass('selecionado')
  const input = $('#camposelector').val()
  $(input).addClass('selecionado')
})

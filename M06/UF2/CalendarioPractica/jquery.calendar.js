jQuery.fn.initCalendar = function (config) {
  $('.calendar').on('click', function (event) {})
  CalendarConfig = {
    background: 'grey',
    days: 50
  }
  jQuery.extend(CalendarConfig, config)
  this.createCalendar()
}

jQuery.fn.createCalendar = function () {
  $('.create').on('click', function (event) {
    let wrapper = $('<div class="calendar"></div>')
    $('body').append(wrapper)
    console.log(this)
    for (let index = 1; index <= CalendarConfig.days; index++) {
      $('.calendar').append('<div class="day">' + index + '</div>')
    }
  })
}

jQuery.fn.changeColor = function () {
  $('#changeColor').on('input', function (e) {
    console.log($(this).val())
    $('.calendar').css({
      'background-color': $(this).val()
    })
  })
}
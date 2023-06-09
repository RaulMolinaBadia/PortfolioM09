$(document).ready(function () {
  var seatsReserved = 0
  var seatsPremiumReserved = 0
  $('#ex1Resultat .exemple').html('')
  function setPremiumSeats () {
    var a = $('.row').find('.premium')
    $.each(a, function (indexInArray, valueOfElement) {
      if (!$(valueOfElement).hasClass('occupied')) {
        $(valueOfElement).css({
          'background-color': '#9196f3'
        })
      }
    })
  }

  function setReservedSeats () {
    $('.seat').click(function (e) {
      if (!$(this).hasClass('occupied')) {
        $(this).toggleClass('reserved')
      }
      countSeatsReserved()
      setPriceSeats()
    })
  }

  function countSeatsReserved () {
    seatsPremiumReserved = 0
    seatsReserved = 0
    var a = $('.row').find('.reserved')
    $.each(a, function (indexInArray, valueOfElement) {
      if ($(valueOfElement).hasClass('reserved')) {
        if ($(valueOfElement).hasClass('premium')) {
          seatsPremiumReserved++
        } else {
          seatsReserved++
        }
      }
    })
  }
  function setPriceSeats () {
    var result = $('#ex1Resultat .exemple')
    result.html('')
    var priceSeat = 5 * seatsReserved
    var pricePremium = 8 * seatsPremiumReserved
    result.html(pricePremium + priceSeat)
  }

  function setNumSeat () {
    $('.seat').mouseenter(function () {
      var seatNum = $(this).data('seat')
      var seatLetter = $(this).parent().data('row')

      $(this).html(`${seatLetter} ${seatNum}`)
    })
    $('.seat').mouseleave(function () {
      $(this).html('')
    })
  }
  setPremiumSeats()
  setReservedSeats()
  setNumSeat()

  var jsonData1 = [
    {
      date: '2022/10/22',
      resume: 'Metasports Padel',
      type: 'Altres',
      import: 15.1,
      balance: 5896.31,
      Details:
        'Metasports Padel. Subscripcio mensual\n Titular Pepito de los palotes.'
    },
    {
      date: '2022/10/20',
      resume: 'Mercadona SA',
      type: 'Alimentació',
      import: 87.34,
      balance: 5983.65,
      Details: 'Mercadona SA. Tarjeta de crèdit ...8118'
    },
    {
      date: '2022/10/18',
      resume: 'Orange SA',
      type: 'Casa',
      import: 42.51,
      balance: 6026.16,
      Details: 'Factura Nº 20221532156872\n Titular Pepito de los palotes\n'
    },
    {
      date: '2022/10/15',
      resume: 'Tallers Pepito SL',
      type: 'Altres',
      import: -387.68,
      balance: 6413.84,
      Details: 'Tallers Pepito SL. Tarjeta de crèdit ...8118'
    },
    {
      date: '2022/10/12',
      resume: 'Tan bo com a casa',
      type: 'Oci',
      import: -36.12,
      balance: 6449.96,
      Details: 'Restaurant Tan bó com a casa. Tarjeta de crèdit ...8118'
    },
    {
      date: '2022/10/08',
      resume: 'Hipoteca 2%',
      type: 'Credit',
      import: -487.15,
      balance: 6937.11,
      Details: ''
    },
    {
      date: '2022/10/05',
      resume: 'Iberdrola S.A',
      type: 'Casa',
      import: -46.35,
      balance: 6983.46,
      Details:
        'Factura Nº 20221532156872\n Titular Pepito de los palotes\n CUPS 08654 2103 56404'
    }
  ]

  var jsonData2 = [
    {
      date: '2022/10/1',
      resume: 'Nomina Setembre',
      type: 'Altres',
      import: 1587.1,
      balance: 5396.36,
      Details:
        'Metasports Padel. Subscripcio mensual\n Titular Pepito de los palotes.'
    },
    {
      date: '2022/09/20',
      resume: 'Mercadona SA',
      type: 'Alimentació',
      import: 76.89,
      balance: 5808.97,
      Details: 'Mercadona SA. Tarjeta de crèdit ...8118'
    },
    {
      date: '2022/09/18',
      resume: 'Orange SA',
      type: 'Casa',
      import: 42.51,
      balance: 5766.46,
      Details: 'Factura Nº 20221532156872\n Titular Pepito de los palotes\n'
    },
    {
      date: '2022/09/08',
      resume: 'Hipoteca 2%',
      type: 'Credit',
      import: -487.15,
      balance: 6937.11,
      Details:
        'Hipoteca 2%\n titular: Pepito de los palotes\n ref catrastral: 90243871 12834 128347 12849'
    }
  ]
  $('#resultatEx2').movimentsCC(jsonData1)
  $('#resultatEx2').addMovimentsCC(jsonData2)
})

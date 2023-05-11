var jsonData1 = 0
var jsonData2 = 0

jQuery.fn.movimentsCC = function (jsonData) {
  jsonData1 = jsonData.length
  console.log(jsonData)
  let table = $('<table class="tableBanc"></table>')
  var data = $('<tr class="data"><td>data</td> </tr>')
  var concepte = $('<tr class="concepte"><td>concepte</td> </tr>')
  var tipusImport = $('<tr class="tipusImport"><td>tipusImport</td> </tr>')
  var saldo = $('<tr class="saldo"><td>saldo</td> </tr>')
  $('#resultatEx2').append(table)
  $(table).append(data)
  $(table).append(concepte)
  $(table).append(tipusImport)
  $(table).append(saldo)
  for (let index = 0; index < jsonData.length; index++) {
    $('.data').append(`<td data-dataid='${index}'>${jsonData[index].date}</td>`)
    $('.concepte').append(
      `<td data-idconcepte='${index}'>${jsonData[index].resume}</td>`
    )
    $('.tipusImport').append(
      `<td data-tipusid='${index}'>${jsonData[index].type}</td>`
    )
    $('.saldo').append(
      `<td data-saldoid='${index}'>${jsonData[index].import}</td>`
    )
  }

  $('.data td').click(function (e) {
    console.log(e.target);
    $(this).append(
      '<td class="detalles">' + jsonData[0].Details + '</td>'
    )
  })
}

jQuery.fn.addMovimentsCC = function (jsonData) {
  jsonData2 = jsonData.length
  var id = jsonData1
  console.log($('table tr td'))
  for (let index = 0; index < jsonData.length; index++) {
    $('.data').append(`<td data-dataid='${id}'>${jsonData[index].date}</td>`)
    $('.concepte').append(
      `<td data-idconcepte='${id}'>${jsonData[index].resume}</td>`
    )
    $('.tipusImport').append(
      `<td data-tipusid='${id}'>${jsonData[index].type}</td>`
    )
    $('.saldo').append(
      `<td data-saldoid='${id}'>${jsonData[index].import}</td>`
    )
    id++
  }
}

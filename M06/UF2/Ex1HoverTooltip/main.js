$(document).ready(() => {
    $('.btnContainer p').hide()
})
$('.btnContainer button').on('mouseenter' , (e) => {
    $('.btnContainer p').fadeOut(200)
    let element = e.currentTarget.parentElement.children[1]
    $(element).fadeIn(500)
})

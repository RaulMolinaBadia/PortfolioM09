jQuery.fn.initDialog = function (config) {
  dialogConfig = {
    width: "50vh",
    height: "50vh",
    background: "grey",
    scroll: false,
  };
  jQuery.extend(dialogConfig, config);
};

jQuery.fn.createDialog = function () {
  let wrapper = $('<div class="dialogWrapper"></div>');
  //ficas el div dins del body
  $("body").append(wrapper);
  //ficas el div del dialeg dins del wrapper
  wrapper.append(this);
  this.css({
    height: dialogConfig.height,
    width: dialogConfig.width,
    maxHeight: dialogConfig.height,
    maxWidth: dialogConfig.width,
  });

  wrapper.css({
    "background-color": dialogConfig.background,
  });
};

//initdialog solo se llama una vez al principio

jQuery.fn.showDialog = function () {
  //le añadimos la clase al padre que es la clase dialogoWrapper que hemos creado en el createDialog
  $(this).parent().addClass("dialogShow");
  if (!dialogConfig.scroll) {
    $("body").addClass("hideScroll");
  }
};

jQuery.fn.hideDialog = function () {
  this.parent().removeClass("dialogShow");
  $("body").removeClass("hideScroll");
};

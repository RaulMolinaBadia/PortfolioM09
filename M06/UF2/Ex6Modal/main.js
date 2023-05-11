$(document).ready(function () {
  $(document).initDialog({
    height: "500px",
    width: "500px",
    background: "#fff",
    scroll: false,
  });

  $("#dadesUsuariDialog").createDialog();
});

function showDialeg() {
  $("#dadesUsuariDialog").showDialog();
}

function sentData() {
  $("#dadesUsuariDialog").hideDialog();
}

function cancelDialog() {
  $("#dadesUsuariDialog").hideDialog();
}

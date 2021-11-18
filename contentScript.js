const rimshotButton =
  '<div class="bem-TopBar_Body_Button rimshot-button">🥁</div>';

var rimshot = new Audio(chrome.runtime.getURL("rimshot.mp3"));

const designerReady = setInterval(function () {
  if ($(".bem-TopBar_Body_PreviewButton").length) {
    insertRimshotButton();
    clearInterval(designerReady);
  }
}, 100);

function insertRimshotButton() {
  $('.bem-TopBar_Body_SyncStatus').after(rimshotButton);
}

$(document).on("click", ".rimshot-button", function () {
  rimshot.volume = 0.1;
  rimshot.play();
});
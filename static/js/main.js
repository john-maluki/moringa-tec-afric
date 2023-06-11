const help_form = document.querySelector("#help .help-form");
const help_icon = document.querySelector("#help .svg-help-icon");
const help_form_icon = document.querySelector("#help .help-form .help-title");

const open_help_form = () => {
  help_form.style.display = "block";
  help_icon.style.display = "none";
};

const close_help_form = () => {
  help_form.style.display = "none";
  help_icon.style.display = "block";
};

help_icon.addEventListener("click", open_help_form);
help_form_icon.addEventListener("click", close_help_form);

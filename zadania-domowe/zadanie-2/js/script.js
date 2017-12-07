$.validator.methods.email = function(value, element, no_multiple) {
  if (this.optional(element)) {
    return true;
  }
  if (!element.multiple || !no_multiple) {
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      value
    );
  } else {
    var emails = value.split(/[,]+/); // split element by ,
    valid = true;
    for (var i in emails) {
      value = emails[i];
      valid =
        valid &&
        $.validator.methods.email.call(this, $.trim(value), element, false);  }
    return valid;
  }
};
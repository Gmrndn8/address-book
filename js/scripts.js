//business logic
function Contact(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//user-interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedage = $("input#age").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedage);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".age").text(newContact.age);
    })

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});

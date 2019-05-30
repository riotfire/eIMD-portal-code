// Hiding the main navigation of the iHealthSpot theme
jQuery('#pgc-w5bb657353ce70-1-2').html('<h1 class="eimd-portal-header"><a href="https://www.einfectionmd.com/allegianthealth/">Allegiant Healthcare</a></h1>').show();




// Function to prep the form data before sending
jQuery.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   jQuery.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};

jQuery.fn.eimdPushLog = function(form, url, button, buttonLabel){
  var jqxhr = jQuery.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: form.serializeObject(),
  }).success( function(e){
      alert('Saved Record'); // Tell the user the form has submitted correctly.
      form.trigger('reset'); // Reset the form
      button.html(buttonLabel); // Reset the button label to the original value to indicate it is ready for another save
      console.log(e);
    });
}


// Hand Washing Form
var eimdAuditForm = jQuery('#eimdAudit'),
    eimdUrl = jQuery('#eimdLogURL').val(),
    eimdSubmitButton = jQuery('#submit-form'),
    eimdSubmitButtonLabel = jQuery('#submit-form').html(),
    eimdSubmitButtonLoading = "Please Wait...";

jQuery(eimdSubmitButton).on('click', function(e) {
  e.preventDefault(); // Don't refresh the page on click
  eimdSubmitButton.html(eimdSubmitButtonLoading); // Change the button label to indicate the form is being submitted

  // Push form data to log
  eimdAuditForm.eimdPushLog(eimdAuditForm,eimdUrl,eimdSubmitButton,eimdSubmitButtonLabel);

});

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


// Hand Washing Form 
var hwForm = jQuery('#hwlog'),
    hwUrl = 'https://script.google.com/macros/s/AKfycbzvXdTpzL-ZrEN1oGg-cTJflKCNoe-Q1t-wKjePNE_Kka6TQEgB/exec',
    hwSubmitButton = jQuery('#submit-form'),
    hwSubmitButtonLabel = jQuery('#submit-form').html(),
    hwSubmitButtonLoading = "Please Wait...";

jQuery(hwSubmitButton).on('click', function(e) {
  e.preventDefault(); // Don't refresh the page on click
  
  hwSubmitButton.html(hwSubmitButtonLoading); // Change the button label to indicate the form is being submitted

  var jqxhr = jQuery.ajax({
    url: hwUrl,
    method: "GET",
    dataType: "json",
    data: hwForm.serializeObject(),
  }).success( function(){ 
      alert('Saved Record'); // Tell the user the form has submitted correctly.
      hwForm.trigger('reset'); // Reset the form
      hwSubmitButton.html(hwSubmitButtonLabel); // Reset the button label to the original value to indicate it is ready for another save
    });
});

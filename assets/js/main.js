// The Real Deal

(function() {

  $(document).ready(function() {

    // Select radio buttons with <span> elements
    console.log($('form span'));
    $('form span').click(function(e) {
      $(this).prev('input').prop('checked', true);
      $(this).parent('li').removeClass('error');
    });

    // Close modal window when clicking on outside of it
    $(".modal").on('click', function(e) {
      if(e.target == this || e.target == $('.close')[0]){ 
        // only if the target itself has been clicked
        location.hash = 'close';
      }
    });

  });

}());


var validator = new FormValidator('set_1', [
  {name:'q1',rules:'required'}, 
  {name:'q2',rules:'required'}, 
  {name:'q3',rules:'required'}, 
  {name:'q4a',rules:'required'}, 
  {name:'q4b',rules:'required'}, 
  {name:'q5',rules:'required'}, 
  {name:'q6',rules:'required'}, 
  {name:'q7',rules:'required'}, 
  {name:'q8',rules:'required'}, 
  {name: 'q9',rules: 'required'}, 
  {name: 'q10',rules: 'required'},
  {name: 'q11',rules: 'required'}
], function(errors, event) {

  test_fields(errors, event, this.form);

});

var test_fields = function(errors, event, form) {

  $('li').removeClass('error');
  $('p.error-message').removeClass('visible');
  console.log(errors);

  if (errors.length > 0) {
    for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
      console.log('Question ' + errors[i].name + ' is required');
      $('input[name="' + errors[i].name + '"]').parent('li').addClass('error');
    }

    $(form).children('p.error-message').addClass('visible');

  } else {

    event.preventDefault();
    console.log(form);

    submit_section(form);

    //location.hash = 'success';
    
  }

}

var submit_section = function(form) {

  console.log(form);

  if (form.length > 0) {

    var $fields_array = $(form).serializeArray();

    console.log('fields: ', $fields_array);

    incorrect_answers = 0;

    for (var j = 0; j < $fields_array.length; j++) {
      console.log("field: ", $fields_array[j]);
      console.log("correct answer: ", answers_json[$fields_array[j].name]);
      if ($fields_array[j].value == answers_json[$fields_array[j].name]) {
        console.log('#' + $fields_array[j].name + ' correct');
      } else {
        $('input[type="radio"][name="' + $fields_array[j].name + '"][value="' + answers_json[$fields_array[j].name] + '"]').addClass('selected');
        $('input[type="text"][name="' + $fields_array[j].name + '"]').val(answers_json[$fields_array[j].name]).addClass('selected');
      }
    }

  }

};


var answers_json = {
  "q1"   : "please respond",
  "q2"   : "tailcoat",
  "q3"   : "tuxedo",
  "q4a"  : "memorial day",
  "q4b"  : "labor day",
  "q5"   : "gloves",
  "q6"   : "true",
  "q7"   : "false",
  "q8"   : "true",
  "q9"   : "true",
  "q10"  : "false",
  "q11"  : "true",
  "q12a" : "first", 
  "q12b" : "last",
  "q13"  : "street",
  "q14"  : "senior",
  "q15"  : "right",
  "q16"  : "hostess",
  "q17"  : "female",
  "q18a" : "right",
  "q18b" : "host",
  "q19a" : "guest of honor", 
  "q19b" : "left",
  "q20"  : "chair",
  "q21"  : "right",
  "q22a" : "alone",
  "q22a" : "embarrassment",
  "q23"  : "rise",
  "q24"  : "false",
  "q25"  : "true",
  "q26a" : "16",
  "q26b" : "20",
  "q27"  : "8",
  "q28"  : "left",
  "q29"  : "left",
  "q30"  : "right",
  "q31"  : "left",
  "q32"  : "dish beneath",
  "q33a" : "salad plate",
  "q33b" : "coffee cup",
  "q33c" : "place card",
  "q34a" : "white wine",
  "q34a" : "champagne",
  "q35"  : "white",
  "q36a" : "glass",
  "q36b" : "sip",
  "q37a" : "under",
  "q37b" : "above",
  "q38"  : "fork",
  "q39a" : "one third",
  "q39b" : "one half",
  "q40"  : "palate",
  "q41"  : "three",
  "q42"  : "plate",
  "q43"  : "round",
  "q44"  : "butter spreader",
  "q45"  : "dessert spoon and fork",
  "q46"  : "water goblet",
  "q47"  : "champagne flute",
  "q48"  : "red wine glass",
  "q49"  : "white wine glass",
  "q50"  : "butter plate",
  "q51"  : "service plate",
  "q52"  : "place card",
  "q53"  : "napkin",
  "q54"  : "salad fork",
  "q55"  : "dinner fork",
  "q56"  : "one inch from the edge of the table",
  "q57"  : "dinner fork",
  "q58"  : "salad knife",
  "q59"  : "dinner spoon",
  "q60"  : "soup spoon",
  "q61"  : "fork",
  "q62"  : "fork",
  "q63"  : "spoons",
  "q64"  : "false",
  "q65"  : "true",
  "q66"  : "false",
  "q67a" : "to",
  "q67b" : "insure",
  "q67c" : "proper",
  "q67d" : "service",
  "q68"  : "15, 20 percent",
  "q69a"  : "$4.35", 
  "q69b" : "5.80",
  "q70a"  : "$5.25",
  "q70b" : "7.00",
}
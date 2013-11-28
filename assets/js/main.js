// The Real Deal

(function() {

  $(document).ready(function() {

    console.log($('form span'));
    $('form span').click(function(e) {
      $(this).prev('input').prop('checked', true);
      $(this).parent('li').removeClass('error');
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

  $('li').removeClass('error');
  $('p.error-message').removeClass('visible');
  console.log(errors);
  if (errors.length > 0) {
    for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
      console.log('Question ' + errors[i].name + ' is required');
      $('input[name="' + errors[i].name + '"]').parent('li').addClass('error');
    }

    $(this.form).children('p.error-message').addClass('visible');

  } else {

    event.preventDefault();
    console.log(this.form);

    submit_section(this.form);
    
  }
});

var submit_section = function(form) {

  console.log(form);

  if (form.length > 0) {

    var $fields_array = $(form).serializeArray();

    console.log('fields: ', $fields_array);

    incorrect_answers = 0;

    for (var j = 0; j < $fields_array.length; j++) {
      console.log("field: ", $fields_array[j]);
      console.log("answer: ", answers_json['q1']);
      if ($fields_array[j].value == answers_json[$fields_array.name]) {
        console.log(answers_json[$fields_array.name]);
      }
    }

  }

};

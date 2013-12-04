
/* This doesn't work ... yet. Womp. */
forms = [
  {name: 'set_1', fields: ['q1','q2','q3', 'q4a','q4b','q5','q6','q7','q8','q9','q10','q11']},
  {name: 'set_2', fields: ['q12a','q12b','q13','q14']}

]

var requireds = {};

for (var j = 0; j < forms.length; j++) {

  console.log(forms[j]['name']);

  requireds[forms[j]['name']] = {};

  for (var i = 0; i < forms[j]['fields'].length; i++) {
    requireds[forms[j]['name']][i] = {name: forms[j]['fields'][i], rules: 'required'};
  }

  var validator = new FormValidator(
    forms[j]['name'], 
    [requireds[forms[j]['name']]], 
    function(errors, event) {

      test_fields(errors, event, this.form);

    }
  );

}


/**
 * Enable header links to scroll user to appropriate vertical location on page
*/
// $('header ul a').click(function(e) {
//   var sectionID = $(this).attr('href');
//   var section   = $('section' + sectionID);
//   if (section.length > 0) {
//     e.preventDefault();
//     log(section);
//     log(section[0].offsetTop);
//     $('body,html').animate({scrollTop: section[0].offsetTop-50},400, 'swing');
//     log($('body'));
//   }
// });

/**
* Enable logo to scroll user to top of page
*/
// $('header h1 a').click(function(e) {
//   e.preventDefault();
//   $('body,html').animate({scrollTop: 0},600, 'swing');
// });

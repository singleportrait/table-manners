
/* This doesn't work ... yet. Womp. */
// forms = [
//   {name: 'set_1', fields: ['q1','q2','q3', 'q4a','q4b','q5','q6','q7','q8','q9','q10','q11']},
//   {name: 'set_2', fields: ['q12a','q12b','q13','q14']}

// ]

// var requireds = {};

// for (var j = 0; j < forms.length; j++) {

//   console.log(forms[j]['name']);

//   requireds[forms[j]['name']] = {};

//   for (var i = 0; i < forms[j]['fields'].length; i++) {
//     requireds[forms[j]['name']][i] = {name: forms[j]['fields'][i], rules: 'required'};
//   }

//   var validator = new FormValidator(
//     forms[j]['name'], 
//     [requireds[forms[j]['name']]], 
//     function(errors, event) {

//       test_fields(errors, event, this.form);

//     }
//   );

// }
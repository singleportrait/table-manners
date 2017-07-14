/* The Real Deal */

var debug = false;

var text_breakpoint = 650;

function log() {
  if (debug) {
    console.log.apply(console, arguments);
  }
}

$(document).ready(function() {

  /* Scroll images on 'scrollable' containers to the middle horizontally
   * if the screen is narrow enough */
  window_width = $(window).width();

  if (window_width < text_breakpoint) {
    var $scrollable_images = $('.scrollable_wide_image');

    $scrollable_images.each(function() {
      var $image_container = $(this);
      var updated_scroll_position = (($image_container.find('img').width() - window_width) / 2);

      if ($image_container.hasClass('scrollable_wide_image--not_centered')) {
        updated_scroll_position -= 40; // account for plates not being in the 'center'
      }

      $image_container.scrollLeft(updated_scroll_position);
    });
  }

  /* Select radio buttons with <span> elements */
  $('form span').click(function(e) {
    $(this).prev('input').prop('checked', true);
    $(this).parent('li').removeClass('error');
  });

  /* Close modal window when clicking on outside of it */
  $('.modal').on('click', function(e) {
    if(e.target == this || e.target == $('.close')[0]){
      // only if the target itself has been clicked
      location.hash = 'close';
    }
  });

  /* Dropdown menu: toggle on and off, close if you select a menu item, close if you click elsewhere on page */
  $('#toggle_dropdown').on('click',function(e) {
    $('#contents').toggleClass('display');
    e.preventDefault();
  });

  $('#contents').on('click', function(e) {
    if(e.target && e.target.nodeName == 'A') {
      $('#contents').toggleClass('display');
    }
  });

  $(document).on('click', function() {
    var $target = $(event.target);
    var $contents = $('#contents');
    if (!$target.closest('#contents').length && !$target.closest('#toggle_dropdown').length && $contents.hasClass('display')) {
      $contents.removeClass('display');
    }
  });

  /* Set up validation for all forms */
  // Having to do this all literally sucks, but I have to refactor later
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
    {name:'q9',rules:'required'},
    {name:'q10',rules:'required'},
    {name:'q11',rules:'required'}
  ], function(errors, event) {
    check_required(errors, event, this.form);
  });
  var validator = new FormValidator('set_2', [
    {name:'q12a',rules:'required'},
    {name:'q12b',rules:'required'},
    {name:'q13',rules:'required'},
    {name:'q14',rules:'required'}
  ], function(errors, event) {
    check_required(errors, event, this.form);
  });
  var validator = new FormValidator('set_3', [
    {name:'q15',rules:'required'},
    {name:'q16',rules:'required'},
    {name:'q17',rules:'required'},
    {name:'q18a',rules:'required'},
    {name:'q18b',rules:'required'},
    {name:'q19a',rules:'required'},
    {name:'q19b',rules:'required'}
  ], function(errors, event) {
    check_required(errors, event, this.form);
  });
  var validator = new FormValidator('set_4', [
    {name:'q20',rules:'required'},
    {name:'q21',rules:'required'},
    {name:'q22a',rules:'required'},
    {name:'q22b',rules:'required'},
    {name:'q23',rules:'required'},
    {name:'q24',rules:'required'},
    {name:'q25',rules:'required'}
  ], function(errors, event) {
    check_required(errors, event, this.form);
  });
  var validator = new FormValidator('set_5', [
    {name:'q26a',rules:'required'},
    {name:'q26b',rules:'required'},
    {name:'q27',rules:'required'},
    {name:'q28',rules:'required'},
    {name:'q29',rules:'required'},
    {name:'q30',rules:'required'},
    {name:'q31',rules:'required'},
    {name:'q32',rules:'required'},
    {name:'q33a',rules:'required'},
    {name:'q33b',rules:'required'},
    {name:'q33c',rules:'required'}
  ], function(errors, event) {
    check_required(errors, event, this.form);
  });
  var validator = new FormValidator('set_6', [
    {name:'q34a',rules:'required'},
    {name:'q34b',rules:'required'},
    {name:'q35',rules:'required'},
    {name:'q36a',rules:'required'},
    {name:'q36b',rules:'required'},
    {name:'q37a',rules:'required'},
    {name:'q37b',rules:'required'},
    {name:'q38',rules:'required'},
    {name:'q39a',rules:'required'},
    {name:'q39b',rules:'required'}
  ], function(errors, event) {
    check_required(errors, event, this.form);
  });
  var validator = new FormValidator('set_7', [
    {name:'q40',rules:'required'},
    {name:'q41',rules:'required'},
    {name:'q42',rules:'required'},
    {name:'q43',rules:'required'},
    {name:'q44',rules:'required'},
    {name:'q45',rules:'required'},
    {name:'q46',rules:'required'},
    {name:'q47',rules:'required'},
    {name:'q48',rules:'required'},
    {name:'q49',rules:'required'},
    {name:'q50',rules:'required'},
    {name:'q51',rules:'required'},
    {name:'q52',rules:'required'},
    {name:'q53',rules:'required'},
    {name:'q54',rules:'required'},
    {name:'q55',rules:'required'},
    {name:'q57',rules:'required'},
    {name:'q58',rules:'required'},
    {name:'q59',rules:'required'},
    {name:'q60',rules:'required'}
  ], function(errors, event) {
    check_required(errors, event, this.form);
  });
  var validator = new FormValidator('set_8', [
    {name:'q61',rules:'required'},
    {name:'q62',rules:'required'},
    {name:'q63',rules:'required'}
  ], function(errors, event) {
    check_required(errors, event, this.form);
  });
  var validator = new FormValidator('set_9', [
    {name:'q64',rules:'required'},
    {name:'q65',rules:'required'},
    {name:'q66',rules:'required'}
  ], function(errors, event) {
    check_required(errors, event, this.form);
  });
  var validator = new FormValidator('set_10', [
    {name:'q67a',rules:'required'},
    {name:'q67b',rules:'required'},
    {name:'q67c',rules:'required'},
    {name:'q67d',rules:'required'},
    {name:'q68a',rules:'required'},
    {name:'q68b',rules:'required'},
    {name:'q69a',rules:'required'},
    {name:'q69b',rules:'required'},
    {name:'q70a',rules:'required'},
    {name:'q70c',rules:'required'}
  ], function(errors, event) {
    check_required(errors, event, this.form);
  });


  var check_required = function(errors, event, form) {

    $('li').removeClass('error');
    $('p.error-message').removeClass('visible');

    log(errors);

    if (errors.length > 0) {
      for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
        $('input[name="' + errors[i].name + '"]').parent('li').addClass('error');
      }

      $(form).children('p.error-message').addClass('visible');

    } else {

      event.preventDefault();

      Quiz.submit_section(form);

      location.hash = 'success';

    }

  }


});


/* Quiz object */

var Quiz = {

  // Save points scored
  completed_questions_with_score: {},

  // Save points & grade per section
  sections: {},

  // Total points scored
  total_points: function() {
    var total_points = 0;
      $.each(this.completed_questions_with_score, function(p,v) {
        log(p, ': ', v);
        total_points += v;
      });
    return total_points;
  },

  // Update HTML with total points
  update_points: function() {
    $('#total_points, #conclusion_points').html(this.total_points());
  },

  // Update modal with section points
  update_modal: function(form_set) {
    $('#section_points').html(this.sections[form_set].correct);
    $('#section_total').html(this.sections[form_set].total);

    this.update_message(form_set);
  },

  // Update message in modal based on grade
  update_message: function(form_set) {

    var success_message = '';

    var grade = this.sections[form_set].grade;

    if (grade <= .25) {
      success_message = "Not very proper, my friend.";
    } else if (grade <= .50) {
      success_message = "Well, who can keep all those forks straight, anyway?";
    } else if (grade <= .75) {
      success_message = "You're almost ready for dinner!";
    } else {
      success_message = "A toast in your honor, special guest.";
    }

    $('#success_message').html(success_message);

  },

  // Submit section to correct answers
  submit_section: function(form) {

    if (form.length > 0) {

      var fields = $(form).serializeArray();

      log('fields: ', fields);

      var total_correct = 0;
      var total_questions = fields.length;

      for (var i = 0; i < total_questions; i++) {

        var field_name = fields[i].name;
        var field_value = fields[i].value;

        var clean_field_value = field_value.toLowerCase().trim();

        var correct_answers = this.answer_key[field_name];

        log('field: ', fields[i]);
        log('correct answer(s): ', correct_answers);

        var answered_correctly = false;

        $.each(correct_answers, function(index, answer) {
          if (clean_field_value == answer) {
            answered_correctly = true;
            return;
          }
        });

        if (answered_correctly) {

          // Correct
          this.completed_questions_with_score[field_name] = 1;

          total_correct++;

        } else {

          // Incorrect
          this.completed_questions_with_score[field_name] = 0;

          var correct_radio = $('input[type="radio"][name="' + field_name + '"][value="' + correct_answers + '"]');

          $(correct_radio).addClass('correct');
          $(correct_radio).siblings('input[type="radio"]').addClass('incorrect');

          $('input[type="text"][name="' + field_name + '"]')
            .val(correct_answers[0])
            .addClass('correct');
        }
      }

      log(total_correct + ' answers correct out of ' + total_questions);

      var form_set = $(form).attr('name');

      this.sections[form_set] = {
        'correct': total_correct,
        'total':   total_questions,
        'grade':   total_correct / total_questions
      }

      this.update_modal(form_set);

      this.update_points();

      $(form).find('input[type="submit"]').attr('disabled', 'disabled')

    }

  },

  // All tha answers
  answer_key: {
    "q1"   : ["please respond"],
    "q2"   : ["tailcoat"],
    "q3"   : ["tuxedo"],
    "q4a"  : ["memorial day"],
    "q4b"  : ["labor day"],
    "q5"   : ["gloves"],
    "q6"   : ["true"],
    "q7"   : ["false"],
    "q8"   : ["true"],
    "q9"   : ["true"],
    "q10"  : ["false"],
    "q11"  : ["true"],
    "q12a" : ["first"],
    "q12b" : ["last"],
    "q13"  : ["street"],
    "q14"  : ["senior"],
    "q15"  : ["right"],
    "q16"  : ["hostess"],
    "q17"  : ["female"],
    "q18a" : ["right"],
    "q18b" : ["host"],
    "q19a" : ["guest of honor"],
    "q19b" : ["left"],
    "q20"  : ["chair"],
    "q21"  : ["right"],
    "q22a" : ["alone"],
    "q22b" : ["embarrassment"],
    "q23"  : ["rise"],
    "q24"  : ["false"],
    "q25"  : ["true"],
    "q26a" : ["16", "sixteen"],
    "q26b" : ["20", "twenty"],
    "q27"  : ["8", "eight"],
    "q28"  : ["left"],
    "q29"  : ["left"],
    "q30"  : ["right"],
    "q31"  : ["left"],
    "q32"  : ["accompanying"],
    "q33a" : ["salad plate"],
    "q33b" : ["coffee cup"],
    "q33c" : ["place card"],
    "q34a" : ["white", "white wine"],
    "q34b" : ["champagne", "champagne flute"],
    "q35"  : ["white"],
    "q36a" : ["glass"],
    "q36b" : ["drink"],
    "q37a" : ["under"],
    "q37b" : ["above"],
    "q38"  : ["fork"],
    "q39a" : ["one-third", "one third", "1/3"],
    "q39b" : ["halfway", "one-half", "one half", "1/2"],
    "q40"  : ["palate"],
    "q41"  : ["3", "three"],
    "q42"  : ["plate"],
    "q43"  : ["flatware"],
    "q44"  : ["butter plate"],
    "q45"  : ["butter knife", "butter spreader"],
    "q46"  : ["water goblet", "water glass", "water"],
    "q47"  : ["champagne flute", "champagne"],
    "q48"  : ["red wine glass", "red wine", "red"],
    "q49"  : ["white wine glass", "white wine", "white"],
    "q50"  : ["dessert spoon and fork", "dessert fork and spoon", "dessert spoon & fork", "dessert fork & spoon"],
    "q51"  : ["place card", "placecard"],
    "q52"  : ["napkin"],
    "q53"  : ["service plate"],
    "q54"  : ["salad fork"],
    "q55"  : ["dinner fork"],
    /* "q56"  : ["one inch from the edge of the table"], */
    "q57"  : ["dinner knife"],
    "q58"  : ["salad knife"],
    "q59"  : ["teaspoon", "tea spoon"],
    "q60"  : ["soup spoon"],
    "q61"  : ["fork"],
    "q62"  : ["fork"],
    "q63"  : ["spoons"],
    "q64"  : ["true"],
    "q65"  : ["true"],
    "q66"  : ["false"],
    "q67a" : ["to", "o"],
    "q67b" : ["insure", "nsure"],
    "q67c" : ["proper", "roper"],
    "q67d" : ["service", "ervice"],
    "q68a" : ["15", "fifteen"],
    "q68b" : ["20", "twenty"],
    "q69a" : ["$4.35", "4.35"],
    "q69b" : ["$5.80", "5.80"],
    "q70a" : ["$5.25", "5.25"],
    "q70b" : ["$7.00", "7.00"],
  }

  /* To get # of questions total:
   * Object.keys(this.answer_key).length;
   */

}

'use strict';

(function(module) {
  
  var viewSorting = {};
  var newAuthorArray = [];

  viewSorting.filterAuthorEntries = function() {
    viewSorting.testArray = Entry.allEntries.map(function(entry) {
      return eval(entry.authors);
    })
    .reduce(function(fullArray, currentArray) {
      return fullArray.concat(currentArray);
    })
    .filter(function(name, index, array){
      return array.indexOf(name) === index;
    })
  };

  viewSorting.makeAuthorOptionTags = function(filterArray) {
    console.log(filterArray);
    filterArray.forEach(function(currentAuthor) {
      var optionTag = '<option value="' + currentAuthor + '">' + currentAuthor + '</option>';
      $('#authors-filter').append(optionTag);
      console.log('filterArray kicked-off');
    });
      viewSorting.selectAuthor = function() {
      $('#authors-filter').on('change', function() {
        if($(this).val()) {
          var authorName = $(this).val();
          $('article').hide();
          $('article h3:contains("' + authorName + '")').parent().fadeIn(350);
        } else {
          $('article').not('.template').fadeIn(350);
        }
      });
    };
  };
  viewSorting.switchTabs = function() {
    $('#home-tab').on('click', function() {
      $('#about-me').hide();
      $('#articles').fadeIn(350);
      $('article').not('.template').fadeIn(350);
      $('authors-filter').val('');
    });
    $('#about-tab').on('click', function() {
      $('#articles').hide();
      $('#about-me').fadeIn(350);
    });
  };

  $(window).resize(function() {
    if($(window).width() >= '650') {
      $('#articles').show();
      $('#about-me').show();
    }
  });

  module.viewSorting = viewSorting;

})(window);
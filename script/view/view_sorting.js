'use strict';

(function(module) {

  var viewSorting = {};

  viewSorting.filterAuthorEntries = function() {
    viewSorting.filteredAuthors = Entry.allEntries.map(function(entry) {
      return eval(entry.authors);
    })
    .reduce(function(fullArray, currentArray) {
      return fullArray.concat(currentArray);
    })
    .filter(function(name, index, array){
      return array.indexOf(name) === index;
    });
  };

  viewSorting.makeAuthorOptionTags = function() {
    viewSorting.filteredAuthors.forEach(function(currentAuthor) {
      var optionTag = '<option value="' + currentAuthor + '">' + currentAuthor + '</option>';
      $('#authors-filter').append(optionTag);
      // console.log('filterArray kicked-off');
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

  $(viewSorting).resize(function() {
    if($(window).width() <= '950') {
      $('#about-me').hide();
    } else {
      $('#about-me').show();
    }
  });

  module.viewSorting = viewSorting;

})(window);

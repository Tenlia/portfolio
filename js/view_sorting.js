'use strict';

(function(module) {
  
  var viewSorting = {};
  var newAuthorArray = [];

  viewSorting.fillFilters = function() {
    return (Entry.allEntries).map(function(authorArray) {
      var smallAuthorArray = eval(authorArray.authors);
      newAuthorArray.push(smallAuthorArray);
      newAuthorArray.reduce(function(mergedAuthorArray, current, index, array) {
        $.merge(mergedAuthorArray, current);
        return mergedAuthorArray;
      }, [])
      .reduce(function(authorFilterArray, currentAuthor, index, array) {
        if(authorFilterArray.indexOf(currentAuthor) === -1) {
          authorFilterArray.push(currentAuthor);
        }
        return authorFilterArray;
      }, []);
    })
    console.log(authorFilterArray);
    authorFilterArray.each(function(author) {
      var optionTag = '<option value="' + author + '">' + author + '</option>';
      $('#authors-filter').append(optionTag);
    });
  };

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
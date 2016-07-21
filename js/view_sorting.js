'use strict';

(function(module) {
  
  var viewSorting = {};

  viewSorting.fillFilters = function() {
    (Entry.allEntries).map(function(authorArray) {
      var newAuthorArray = [];
      // var smallAuthorArray = 
      // console.log(smallAuthorArray);
      newAuthorArray.push((authorArray.authors).valueOf());
      console.log(newAuthorArray);
      return newAuthorArray;
    });
    // .reduce(function(mergedAuthorArray, currentAuthorsArray, index, array){
    //   console.log(mergedAuthorArray, currentAuthorsArray);
    //   return mergedAuthorArray.concat(currentAuthorsArray);
    // }, []);
    // .reduce(function(authorFilterArray, currentAuthor, index, array) {
    //   if(authorFilterArray.indexOf(currentAuthor) === -1) {
    //     authorFilterArray.push(currentAuthor);
    //   }
    //   return authorFilterArray;
    // }, []);
    // $(authorFilterArray).each(function(author) {
    //   optionTag = '<option value="' + author + '">' + author + '</option>';
    //   $('#authors-filter').append(optionTag);
    // });
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
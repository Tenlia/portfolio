'use strict';

var viewSorting = {};

viewSorting.fillFilters = function() {
  var aArray = [];
  for(var o in Entry.allEntries) {
    for(var i = 0; i < Entry.allEntries[o].authors.length; i++) {
      if(!JSON.stringify(aArray).includes(Entry.allEntries[o].authors[i])) {
        aArray.push(Entry.allEntries[o].authors[i]);
      }
    }
  }
  var authorNames, optionTag;
  for(var i = 0; i < aArray.length; i++) {
    optionTag = '<option value="' + aArray[i] + '">' + aArray[i] + '</option>';
    $('#authors-filter').append(optionTag);
  }
};

viewSorting.selectAuthor = function() {
  $('#authors-filter').on('change', function() {
    if($(this).val()) {
      var x = $(this).val();
      $('article').hide();
      $('article h3:contains("' + x + '")').parent().fadeIn(350);
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

viewSorting.fillFilters();
viewSorting.selectAuthor();
viewSorting.switchTabs();

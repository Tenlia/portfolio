var viewSorting = {};

viewSorting.fillFilters = function() {
  $('article').not('template').each(function() {
    var authorNames, optionTag;
    authorNames = $(this).find('h3').text();
    optionTag = '<option value="' + authorNames + '">' + authorNames + '</option>';
    $('#authors-filter').append(optionTag);
  });
};

viewSorting.selectAuthor = function() {
  $('#authors-filter').on('change', function() {
    if($(this).val()) {
      $('article').hide();
      $('article[data-authors"' + $(this).val() + '"]').fadeIn(350);
    } else {
      $('article').not('.template').fadeIn(350);
    }
  });
};

viewSorting.switchTabs = function() {
  $('#home-tab').on('click', function() {
    $('#about-me').hide();
    $('#articles').show();
    $('article').not('.template').fadeIn(350);
    $('authors-filter').val('');
  });
  $('#about-tab').on('click', function() {
    $('#articles').hide();
    $('#about-me').fadeIn(350);
  });
};

viewSorting.fillFilters();
viewSorting.selectAuthor();
viewSorting.switchTabs();

var simplemdeJQuery = null;

if (typeof jQuery !== 'undefined') {
  simplemdeJQuery = jQuery;
} else if (typeof django !== 'undefined') {
  //use jQuery come with django admin
  simplemdeJQuery = django.jQuery
} else {
  console.error('Cant find jQuery, please make sure your have jQuery imported for markdown editor.');
}

if (!!simplemdeJQuery) {
  simplemdeJQuery(function() {
    simplemdeJQuery.each(simplemdeJQuery('.markdown-editor'), function(i, elem) {
      if (typeof elem.SimpleMDE !== 'undefined') return;
      var uuid = simplemdeJQuery(elem).attr('data-uuid');
      var simplemde = new SimpleMDE({
        element: elem,
        placeholder: "Write paragraph text in Markdown syntax using the toolbar.",
        status: false,
        forceSync: true,
        toolbar: ["bold", "italic", "|", "link", "|", "preview"],
        autosave: {
          enabled: true,
          uniqueId: uuid,
        },
      });
      elem.SimpleMDE = simplemde;
    });
  });
}

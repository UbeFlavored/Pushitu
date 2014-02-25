$('#navTabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})

$('#navTabs a:last').tab('show');

$(function () { 
    $("[data-toggle='tooltip']").tooltip(); 
  
});


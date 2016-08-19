$('.container').each(function(){
    $(this).addClass('hidden')
});

$(document).ready(function(){ 
    $('.container').each(function(){
        $(this).fadeTo(1200,1);
        $(this).removeClass('hidden');
    });
});

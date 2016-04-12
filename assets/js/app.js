    var bHeight = 0;

    $( ".desc" ).each(function( i ) {
    if(bHeight < $( this ).height()){
    bHeight = $( this ).height();
        }
    });

    

    $( ".desc" ).each(function( i ) {
        $( this ).height(bHeight);
    });


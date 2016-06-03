( function ( window, document, undefined ) {
    var toggle = document.getElementById( "toggle" );
    var menu   = document.getElementById( "menu" );
    var main   = document.getElementById( "main" );

    toggle.addEventListener( "click", function ( event ) {
        event.preventDefault();

        toggle.classList.toggle( "open" );
        menu.classList.toggle( "open" );
        main.classList.toggle( "open" );
    } );
} )( window, window.document );

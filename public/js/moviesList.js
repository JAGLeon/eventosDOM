const qs = ( data ) => {
    document.querySelector( data );
};

let $body = qs( 'body' ),
$logo = qs( '.logoDH' ),
$h1 = qs( 'h1' );

$logo.addEventListener('mouseover', () => {
    $body.style.backgroundColor = '#7f7f7f';
    $body.classList.add('fondoMoviesList');
    $h1.innerHTML = 'LISTADO DE PELÍCULAS';
    $h1.style.color = 'white';
    $h1.style.backgroundColor = 'teal';
    $h1.style.padding = '20px';
})
const qs = (data) => {
    document.querySelector(data);
};

let $h1 = qs( 'h1' ),
$section = qs( 'section' ),
$logo = qs( '.logoDH' ),
$article = qs( 'article' ),
$inpTitle = qs( '#titulo' );

$h1.innerHTML = 'AGREGAR PELICULAS';
$h1.classList.add( 'titulo' );
$article.classList.add( 'fondoTransparente' );
$section.classList.add( 'fondoCRUD' );

$h1.addEventListener('mouseover',function(){
    this.style.color = 'red';
    console.log(this)
});

$h1.addEventListener('mouseleave',function(){
    this.style.color = 'black';
});

let estadoSecreto = 0;

$inpTitle.addEventListener('keyup',(e) => {
     switch (estadoSecreto) {
         case 0:
             e.key == 's' ? estadoSecreto++ : (estadoSecreto = 0);
             break;
         case 1:
             e.key == 'e' ? estadoSecreto++ : (estadoSecreto = 0);
             break;
         case 2:
             e.key == 'c' ? estadoSecreto++ : (estadoSecreto = 0);
             break;
         case 3:
             e.key == 'r' ? estadoSecreto++ : (estadoSecreto = 0);
             break;
         case 4:
             e.key == 'e' ? estadoSecreto++ : (estadoSecreto = 0);
             break;
         case 5:
             e.key == 't' ? estadoSecreto++ : (estadoSecreto = 0);
             break;
         case 6:
             e.key == 'o' ? alert('Secreto Mágico') : (estadoSecreto = 0);
             break;
         default:
             alert('Vuelve a intentarlo');
             estadoSecreto = 0;
     }
})
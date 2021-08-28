let correct=0
let score =0

game()

$('.option').on('click', guess)

function guess(){
    let index = $('.option').index(this)
    if(index === correct){
        alert('Muy bien!!!!!!!!!!!!!!')
        score++
    }else{
        alert('Intentalo de nuevo')
        score = 0
    }
    $('.score span').text(score)
    game()
}

function game(){
    correct = Math.floor(Math.random()*2);
    $('.option').each(function(index) {
        let color = generateColor();
        $(this).css('background-color', color) // como this nos deja un color aleatorio para cada circulo
        if (index === correct) {
            $('.question').text(color)
        }
    })
}



function generateColor(){
    return 'rgb(' + random() + ', ' + random() + ', ' + random() + ')'
}
function random(){
    return Math.floor(Math.random()*255)
}









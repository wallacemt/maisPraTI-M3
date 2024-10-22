document.addEventListener("DOMContentLoaded", () => {
    let swiper = new Swiper(".swiper", {

        direction:'horizontal',
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });  
    document.addEventListener('keydown', (event) => {
        if(event.key === 'ArrowRight'){
            swiper.slideNext();
        }else if(event.key === 'ArrowLeft'){
            swiper.slidePrev();
        }
    })

    const gameInput = document.getElementById("gameInput");

    gameInput.addEventListener("keypress", (event) => {
        if(event.key === "Enter") {
            let searcGame = gameInput.value.trim().toUpperCase()
            switch(searcGame){
                case "MARIO":
                    gameInput.value = "";
                    swiper.slideTo(0);
                    break
                case "POKEMON":
                    gameInput.value = "";
                    swiper.slideTo(1);
                    break
                case "ZELDA":
                    gameInput.value = "";
                    swiper.slideTo(2);
                    break
                default:
                    alert(`Jogo ${searcGame} não foi encontrado`);
                    gameInput.value = "";
                    break
            }
        } 
    })

})


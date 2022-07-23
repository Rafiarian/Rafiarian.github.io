let songSrc = "Audip/cantiktanpabedak.mp3"

const songTitle = document.getElementsByClassName('audio-player-title')
const fillBar = document.getElementById('fill')
const currentSecondsTime = document.getElementById('current-time-seconds-song')
const currentMinutesTime = document.getElementById('current-time-minutes-song')

const song = new Audio()

const playSong = () => {
  song.src = songSrc
  song.play()
}

function playOrPauseSong(){           
    if(song.paused){
        playSong()
        song.play();
        $("#play img").attr("src","./img/pause-button.png");
      }
      else{
        song.pause();
        $("#play img").attr("src","./img/play-button.png");
    }
  }


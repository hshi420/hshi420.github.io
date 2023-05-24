
window.onload = function(){
    
    
    
    var sound = new Howl({
        src: ['../mp3/Joe_Hisaishi_Studio_Ghibli_Experience_Part_1.mp3'],
        spatial: true, // Enable spatial audio
        loop: true, 
        volume: 0.5, 
        sprite: { 
            intro: [0, 100000],
            chorus: [100000, 200000],
            outro: [200000, 300000]
        }
    });
    
    

    
    const stereoNeg = document.getElementById('stereo-neg');
    const stereoMid = document.getElementById('stereo-mid');
    const stereoPos = document.getElementById('stereo-pos');
    
    function setStereoValue(value) {
        switch(value) {
            case "-1":
            sound.stereo(-1);
            break;
            case "0":
            sound.stereo(0);
            break;
            case "1":
            sound.stereo(1);
            break;
            default:
            break;
        }
    }
    
    stereoNeg.addEventListener('change', function() {
        setStereoValue(this.value);
    });
    
    stereoMid.addEventListener('change', function() {
        setStereoValue(this.value);
    });
    
    stereoPos.addEventListener('change', function() {
        setStereoValue(this.value);
    });
    
    const rateSlider = document.getElementById('rate-slider');
    rateSlider.addEventListener('input', function() {
        sound.rate(parseFloat(this.value));
    });
    
        
    sound.pos(0, 0, 0); // Set the position of the audio source

    //listener position and orientation
    var audioContext = Howler.ctx;
    var listener = audioContext.listener;
    
    listener.forwardX.value = 0;
    listener.forwardY.value = 0;
    listener.forwardZ.value = 0;
    listener.upX.value = 0;
    listener.upY.value = 0;
    listener.upZ.value = 0;
    
    listener.positionX.value = 10;
    listener.positionY.value = 0;
    listener.positionZ.value = 0;
    
    var button = document.getElementById('play');
    
    
    button.addEventListener('click', function(){
        
        var soundId = sound.play('outro');
    })
    var button = document.getElementById('pause');
    
    
    button.addEventListener('click', function(){
        sound.pause();
    }    )
    
    
}


/*

function update() {
    // Calculate the position and forward vector of the listener
    var listenerX = Math.sin(headYaw) * Math.cos(headPitch) * listenerDistance;
    var listenerY = Math.sin(headPitch) * listenerDistance;
    var listenerZ = Math.cos(headYaw) * Math.cos(headPitch) * listenerDistance;
    
    var listenerForwardX = -Math.sin(headYaw) * Math.sin(headRoll) - Math.cos(headYaw) * Math.sin(headPitch) * Math.cos(headRoll);
    var listenerForwardY = Math.cos(headPitch) * Math.cos(headRoll);
    var listenerForwardZ = -Math.cos(headYaw) * Math.sin(headRoll) + Math.sin(headYaw) * Math.sin(headPitch) * Math.cos(headRoll);
    
    var listenerUpX = Math.sin(headYaw) * Math.cos(headPitch + Math.PI / 2);
    var listenerUpY = Math.sin(headPitch + Math.PI / 2);
    var listenerUpZ = Math.cos(headYaw) * Math.cos(headPitch + Math.PI / 2);
    
    // Calculate the position of the audio source
    var soundX = Math.sin(soundYaw) * Math.cos(soundPitch) * soundDistance;
    var soundY = Math.sin(soundPitch) * soundDistance;
    var soundZ = Math.cos(soundYaw) * Math.cos(soundPitch) * soundDistance;
    
    // Update the listener position and orientation
    listener.setPosition(listenerX, listenerY, listenerZ);
    listener.setOrientation(listenerForwardX, listenerForwardY, listenerForwardZ, listenerUpX, listenerUpY, listenerUpZ);
    
    // Update the audio source position
    sound.pos(soundX, soundY, soundZ);
    
    requestAnimationFrame(update);
}

requestAnimationFrame(update);
*/









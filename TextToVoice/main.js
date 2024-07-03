let speech = new SpeechSynthesisUtterance();
let voiceSelect = document.getElementById("typ");

// Voices güncellendiğinde seçim menüsünü güncelleyen fonksiyon
function populateVoiceList() {
    let voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = "";

    voices.forEach(function(element) {
        let option = document.createElement("option");
        option.textContent = element.name;
        option.value = element.name;
        voiceSelect.appendChild(option);
    });
}

// Voices güncellendiğinde seçim menüsünü yenile
speechSynthesis.onvoiceschanged = function() {
    populateVoiceList();
};

// Speak butonuna tıklama olayı
document.querySelector("button").addEventListener("click", function() {
    let text = document.querySelector("textarea").value;
    speech.text = text;

    // Seçilen sesi ayarla
    let selectedVoice = voiceSelect.value;
    speech.voice = speechSynthesis.getVoices().find(voice => voice.name === selectedVoice);

    // Sesli okuma işlemi
    window.speechSynthesis.speak(speech);
});
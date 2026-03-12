const palettes = [
    {
        // Default retro
        '--bg-color': '#E6E6F2',
        '--text-color': '#2C2C2C',
        '--primary-color': '#5C2D91',
        '--secondary-color': '#FAF837',
        '--primary-shadow': 'purple',
        '--nav-hover-bg': 'rgba(186, 139, 240, 0.5)',
        '--scrollbar-thumb': 'rgba(66, 245, 102, 0.5)',
        '--button-bg': '#00D1A0',
        '--button-hover': '#00B38C',
        '--campaign-bg': 'rgba(112, 156, 143, 1)',
        '--info-bg': '#9B4D96',
        '--info-border': 'rgba(105, 55, 115, 1)',
        '--info-hover-bg': 'rgba(0, 179, 140, 1)',
        '--info-hover-border': 'rgba(0, 115, 90)',
        '--additional-bg': '#3d854f',
        '--contact-text': '#E6E6F2',
        '--contact-link': '#D1A1E2',
        '--footer-bg': '#2A1A70'
    },
    {
        // Sangue
        '--bg-color':'#F3E6E6',
        '--text-color':'#1A0A0A',
        '--primary-color':'#7A0F12',
        '--secondary-color':'#D61F26',
        '--primary-shadow':'rgba(122,15,18,0.8)',
        '--nav-hover-bg':'rgba(214,31,38,0.25)',
        '--scrollbar-thumb':'rgba(160,18,22,0.5)',
        '--button-bg':'#A01216',
        '--button-hover':'#D61F26',
        '--campaign-bg':'rgba(64,6,7,0.9)',
        '--info-bg':'#7A0F12',
        '--info-border':'rgba(38,4,5,1)',
        '--info-hover-bg':'#A01216',
        '--info-hover-border':'#4A0506',
        '--additional-bg':'#260304',
        '--contact-text':'#F3E6E6',
        '--contact-link':'#FF3A3F',
        '--footer-bg':'#050000'
    },
    {
        // Morte
        '--bg-color':'#E8E8E8',
        '--text-color':'#0A0A0A',
        '--primary-color':'#2B2B2B',
        '--secondary-color':'#6F6F6F',
        '--primary-shadow':'rgba(30,30,30,0.8)',
        '--nav-hover-bg':'rgba(111,111,111,0.25)',
        '--scrollbar-thumb':'rgba(90,90,90,0.5)',
        '--button-bg':'#3A3A3A',
        '--button-hover':'#6F6F6F',
        '--campaign-bg':'rgba(18,18,18,0.9)',
        '--info-bg':'#2B2B2B',
        '--info-border':'rgba(10,10,10,1)',
        '--info-hover-bg':'#3A3A3A',
        '--info-hover-border':'#151515',
        '--additional-bg':'#121212',
        '--contact-text':'#E8E8E8',
        '--contact-link':'#AFAFAF',
        '--footer-bg':'#050505'
    },
    {
        // Conhecimento
        '--bg-color': '#140904ff',
        '--text-color': '#F2D58A',
        '--primary-color': '#8B4A1F',
        '--secondary-color': '#E3B24A',
        '--primary-shadow': '#5C2E12',
        '--nav-hover-bg': 'rgba(227,178,74,0.35)',
        '--scrollbar-thumb': 'rgba(201,132,47,0.55)',
        '--button-bg': '#C9842F',
        '--button-hover': '#A96A23',
        '--campaign-bg': 'rgba(122,74,30,1)',
        '--info-bg': '#D6A53A',
        '--info-border': 'rgba(110,63,24,1)',
        '--info-hover-bg': 'rgba(230,175,70,1)',
        '--info-hover-border': 'rgba(145,90,34,1)',
        '--additional-bg': '#6E3F18',
        '--contact-text': '#F2D58A',
        '--contact-link': '#F0C75A',
        '--footer-bg': '#140A05'
    },
    {
        // Energia
        '--bg-color': '#0B0820',
        '--text-color': '#F5E6FF',
        '--primary-color': '#FF2E8A',
        '--secondary-color': '#5EE6FF',
        '--primary-shadow': '#5C0F3D',
        '--nav-hover-bg': 'rgba(255,46,138,0.35)',
        '--scrollbar-thumb': 'rgba(94,230,255,0.45)',
        '--button-bg': '#E31C79',
        '--button-hover': '#B51461',
        '--campaign-bg': 'rgba(75,16,60,1)',
        '--info-bg': '#C91F86',
        '--info-border': 'rgba(94,18,73,1)',
        '--info-hover-bg': 'rgba(255,70,170,1)',
        '--info-hover-border': 'rgba(132,24,100,1)',
        '--additional-bg': '#2A0F3F',
        '--contact-text': '#F5E6FF',
        '--contact-link': '#5EE6FF',
        '--footer-bg': '#060312'
    },
    {
        // Medo
        '--bg-color': '#E9ECEC',
        '--text-color': '#2F3335',
        '--primary-color': '#8A9497',
        '--secondary-color': '#C7CED0',
        '--primary-shadow': '#5A6266',
        '--nav-hover-bg': 'rgba(138,148,151,0.35)',
        '--scrollbar-thumb': 'rgba(120,130,134,0.45)',
        '--button-bg': '#9FA8AA',
        '--button-hover': '#7E878A',
        '--campaign-bg': 'rgba(150,160,164,1)',
        '--info-bg': '#B8C0C2',
        '--info-border': 'rgba(110,118,121,1)',
        '--info-hover-bg': 'rgba(175,185,188,1)',
        '--info-hover-border': 'rgba(95,102,105,1)',
        '--additional-bg': '#6F777B',
        '--contact-text': '#F4F6F7',
        '--contact-link': '#AAB3B6',
        '--footer-bg': '#1E2224'
    },
    {
        // D&D
        '--bg-color': '#E8DFC8',
        '--text-color': '#3B2F24',
        '--primary-color': '#8C2F2F',
        '--secondary-color': '#C9A24A',
        '--primary-shadow': '#5A3A2A',
        '--nav-hover-bg': 'rgba(200, 175, 130, 0.45)',
        '--scrollbar-thumb': 'rgba(143, 175, 122, 0.6)',
        '--button-bg': '#4C6F8F',
        '--button-hover': '#3E5C76',
        '--campaign-bg': 'rgba(168, 176, 140, 1)',
        '--info-bg': '#6B7C9A',
        '--info-border': 'rgba(85, 95, 120, 1)',
        '--info-hover-bg': 'rgba(76, 111, 143, 1)',
        '--info-hover-border': 'rgba(58, 84, 112, 1)',
        '--additional-bg': '#5A6A4A',
        '--contact-text': '#E8DFC8',
        '--contact-link': '#D4B46A',
        '--footer-bg': '#2A2118'
    }
];

// Apply a random palette on load
const randomPalette = palettes[Math.floor(Math.random() * palettes.length)];
for (const [property, value] of Object.entries(randomPalette)) {
    document.documentElement.style.setProperty(property, value);
}

// ---------------------------------------------
// Abrir a secção de "informações" quando clicar
// ---------------------------------------------
const buttons = document.querySelectorAll('.info');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const campaign = button.closest('.campaign');
        campaign.classList.toggle('active');
    });
});

// ---------------------------------------------
// Music Controller
// ---------------------------------------------
const songs = [
    { title: "BRUTAL", src: "audio/BRUTAL.webm" },
    { title: "O Bruto", src: "audio/O Bruto.webm" },
    { title: "A Sangria", src: "audio/A Sangria.webm" },
    { title: "O Rato", src: "audio/O Rato.webm" },
    { title: "O Profeta", src: "audio/O Profeta.webm" },
    { title: "Enigma", src: "audio/Enigma.webm" },
    { title: "Coitado", src: "audio/Coitado.webm" },
    { title: "Obsoleto", src: "audio/Obsoleto.webm" },
    { title: "Prole", src: "audio/Prole.webm" },
    { title: "Final Girl", src: "audio/Final Girl.webm" }
];

// Shuffle the songs array for a random playlist on load
for (let i = songs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [songs[i], songs[j]] = [songs[j], songs[i]];
}

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const stopBtn = document.getElementById('stop-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const volumeSlider = document.getElementById('volume-slider');
const songTitleDisplay = document.getElementById('song-title');

function loadSong(index) {
    audioPlayer.src = songs[index].src;
    songTitleDisplay.textContent = songs[index].title;
}

function playSong() {
    audioPlayer.play();
    playPauseBtn.innerHTML = '&#10074;&#10074;'; // Pause icon
}

function pauseSong() {
    audioPlayer.pause();
    playPauseBtn.innerHTML = '&#9654;'; // Play icon
}

function stopSong() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playPauseBtn.innerHTML = '&#9654;';
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
}

playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

stopBtn.addEventListener('click', stopSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

volumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

audioPlayer.addEventListener('ended', nextSong);

// Initialize volume and load first song
audioPlayer.volume = volumeSlider.value;
loadSong(currentSongIndex);

// Fade out controller after 3 seconds of inactivity
let hideTimeout;
const musicController = document.getElementById('music-controller');

function resetHideTimeout() {
    musicController.classList.remove('hidden');
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        musicController.classList.add('hidden');
    }, 3000);
}

// Listen to various events to reset the inactivity timer
window.addEventListener('mousemove', resetHideTimeout);
window.addEventListener('scroll', resetHideTimeout);
window.addEventListener('touchstart', resetHideTimeout);
window.addEventListener('click', resetHideTimeout);
window.addEventListener('keydown', resetHideTimeout);

// Don't fade out if the user is hovering over the controller itself
musicController.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
});
musicController.addEventListener('mouseleave', resetHideTimeout);

// Start the timer when the page loads
resetHideTimeout();
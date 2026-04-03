/**
 * 8-Bit Sound Manager (Web Audio API)
 * Generates classic arcade tones without external assets.
 */

class SoundManager {
  constructor() {
    this.context = null;
    this.isMuted = false;
  }

  init() {
    if (!this.context) {
      this.context = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  playTone(freq, type, duration, volume = 0.1) {
    if (this.isMuted) return;
    this.init();
    
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();

    osc.type = type; // 'square' for NES, 'triangle' for softer tones
    osc.frequency.setValueAtTime(freq, this.context.currentTime);

    gain.gain.setValueAtTime(volume, this.context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.context.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.context.destination);

    osc.start();
    osc.stop(this.context.currentTime + duration);
  }

  // --- Sound Presets ---

  playCoin() {
    // Classic Mario/Arcade coin: Two notes (B5 -> E6)
    this.playTone(987.77, 'square', 0.1, 0.05);
    setTimeout(() => this.playTone(1318.51, 'square', 0.4, 0.05), 100);
  }

  playBlip() {
    // Short UI click
    this.playTone(440, 'square', 0.05, 0.02);
  }

  playBossSiren() {
    // Menacing sliding tone
    if (this.isMuted) return;
    this.init();
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(110, this.context.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, this.context.currentTime + 0.5);

    gain.gain.setValueAtTime(0.1, this.context.currentTime);
    gain.gain.linearRampToValueAtTime(0, this.context.currentTime + 0.6);

    osc.connect(gain);
    gain.connect(this.context.destination);

    osc.start();
    osc.stop(this.context.currentTime + 0.6);
  }
}

export const soundManager = new SoundManager();

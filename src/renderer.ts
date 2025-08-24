import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    // load assets here later
  }

  create() {
    const { width, height } = this.scale;
    const text = this.add
      .text(width / 2, height / 2, 'Defense Game (Phaser)', {
        font: '24px Arial',
        color: '#ffffff',
      })
      .setOrigin(0.5);

    this.cameras.main.setBackgroundColor('#1d1d2b');
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#9d1b1bff',
  scene: [MainScene],
  parent: 'game-container',
};

window.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const game = new Phaser.Game(config);
});

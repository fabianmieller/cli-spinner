const ora = require('ora');

const throbber = ora({
    text: ' Work ...',
    spinner: {
      frames: ['🙂', '😂', '😝', '😎', '🤓'],
      interval: 300,
    },
  }).start();

  setTimeout(() => {
    throbber.stopAndPersist({
        symbol: '😀 👍',
        text: ' Finished!',
    });
  }, 1000 * 5);

const fs = require('fs');

module.exports = {
  home: (req, res) => res.sendFile('index.html'),
  upload: async (req, res) => {
    try {
      await fs.unlink(req.file.path, () =>
        console.log(`${req.file.filename} deleted`)
      );
    } catch (err) {
      console.log(`Error deleting file: ${err}`);
    }
    res.json({ fileSize: req.file.size });
  },
};

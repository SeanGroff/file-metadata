module.exports = {
  home: (req, res) => res.sendFile('index.html'),
  upload: (req, res) => {
    console.log(req.file);
    res.json({ hello: 'world' });
  },
};

module.exports = {

showMovies(req, res) {
res.format({
      json() {
        res.json(res.locals);
      },
      html() {
        res.render('index');
      },
    });
  },

  handleCreate(req, res) {
    // res.redirect(`movies/${res.locals.newId}`);
  },
  sendJSON(req, res) {
    res.json(res.locals);
  },
  send404(err, req, res, next) {
    // console.log(err);
    res.sendStatus(404);
  },
  showOne(req, res) {
    res.json(res.locals);
  },
  handleUpdate(req, res) {
    res.json(res.locals);
  },
  handleDestroy(req, res) {
    res.sendStatus(204);
  },
};

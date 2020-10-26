const { Book, Genre } = require("../models/sequelize");
const createError = require("http-errors");

// Display list of all Genre.
exports.genre_list = async function (req, res) {
  try {

    //res.send("tt");
    const genre_list = await Genre.findAll({
      order: [["name", "ASC"]],
    });
    res.render("genre_list", { title: "Genre List", genre_list });
  } catch (error) {
    next(error);
  }
};

// Display detail page for a specific Genre.
exports.genre_detail = async function (req, res, next) {
  try {
    const genreId = req.params.id;
    const genre = await Genre.findByPk(genreId, {
      include: Book
    });
    if (genre !== null) {
      res.render("genre_detail", { title: "Genre Detail", genre})
    } else {
      next(createError(404, "Genre not found"));
    }
  } catch (error) {
    next(error);
  }
};

// Display Genre create form on GET.
exports.genre_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre create GET");
};
// Handle Genre create on POST.
exports.genre_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre create POST");
};
// Display Genre delete form on GET.
exports.genre_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre delete GET");
};
// Handle Genre delete on POST.
exports.genre_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre delete POST");
};
// Display Genre update form on GET.
exports.genre_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre update GET");
};
// Handle Genre update on POST.
exports.genre_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Genre update POST");
};

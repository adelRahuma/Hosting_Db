const db = require("../db/connection");
const { postArticleMdl, updateVotes ,delCommentMdl} = require("../modles/postModel");

const postArticle = (req, res, next) => {
  const { article_id } = req.params;
  const { username, body } = req.body[0];

  postArticleMdl(article_id, username, body)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      next(err);
    });
};
function patcharticle_id(req, res, next) {
  const { article_id } = req.params;
  const { inc_votes } = req.body;
  updateVotes(article_id, inc_votes)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      next(err);
    });
}
function delComment(req, res, next) {
  const { comment_id: id } = req.params;
  delCommentMdl(id)
    .then((data) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
}
module.exports = { postArticle, patcharticle_id, delComment };


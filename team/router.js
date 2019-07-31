const {Router} = require('express')
const Team = require('./model')

const router = new Router()

router.get('/team', (req, res, next) => {
  Team.findAll(req.body)
  .then(list=>res.send(list))
  .catch(next)
})
router.post('/team', (req, res, next) => {
  Team.create(req.body)
  .then(list=>res.send(list))
  .catch(next)
})
router.get('/team/:id', (req, res, next) => {
  Team.findByPk(req.params.id)
      .then(user => {
          if (!user) {
              res.status(404).end()
          } else {
              res.json(user)
          }
      })
      .catch(next)
})

router.put(
  '/team/:id',
  (request, response, next) => {
    Team
      .findByPk(request.params.id)
      .then(team => team.update(request.body))
      .then(team => response.send(team))
      .catch(next)
  }
)

router.delete('/team/:id',(req,res,next) => {
  Team.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(num => res.send({ num }))
  .catch(next)
})

module.exports = router
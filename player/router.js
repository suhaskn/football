const {Router} = require('express')
const Player = require('./model')

const router = new Router()

router.get('/player', (req, res, next) => {
  Player.findAll(req.body)
  .then(list=>res.send(list))
  .catch(next)
})
router.post('/player', (req, res, next) => {
  Player.create(req.body)
  .then(list=>res.send(list))
  .catch(next)
})
router.get('/player/:id', (req, res, next) => {
  Player.findByPk(req.params.id)
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
  '/player/:id',
  (request, response, next) => {
    Player
      .findByPk(request.params.id)
      .then(team => team.update(request.body))
      .then(team => response.send(team))
      .catch(next)
  }
)

router.delete('/player/:id',(req,res,next) => {
  Player.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(num => res.send({ num }))
  .catch(next)
})

module.exports = router
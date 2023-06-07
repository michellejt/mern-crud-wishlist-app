// routes/api/wishes.js

const express = require('express');
const router = express.Router();

// Load Wish model
const Wish = require('../../models/wishes');

// @route GET api/wishes/test
// @description tests wishes route
// @access Public
router.get('/test', (req, res) => res.send('wishes route testing!'));

// @route GET api/wishes
// @description Get all wishes
// @access Public
router.get('/', (req, res) => {
  Wish.find()
    .then(wishes => res.json(wishes))
    .catch(err => res.status(404).json({ nowishesfound: 'No wishes found' }));
});

// @route GET api/wishes/:id
// @description Get single wish by id
// @access Public
router.get('/:id', (req, res) => {
  Wish.findById(req.params.id)
    .then(wish => res.json(wish))
    .catch(err => res.status(404).json({ nowishfound: 'No Wish found' }));
});

// @route GET api/wishes
// @description add/save wish
// @access Public
router.post('/', (req, res) => {
  Wish.create(req.body)
    .then(wish => res.json({ msg: 'Wish added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this wish' }));
});

// @route GET api/wishes/:id
// @description Update wish
// @access Public
router.put('/:id', (req, res) => {
  Wish.findByIdAndUpdate(req.params.id, req.body)
    .then(wish => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/wishes/:id
// @description Delete wish by id
// @access Public
router.delete('/:id', (req, res) => {
  Wish.findByIdAndRemove(req.params.id, req.body)
    .then(wish => res.json({ mgs: 'Wish entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a wish' }));
});

module.exports = router;
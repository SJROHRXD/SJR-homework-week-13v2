const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: {
        model: Product,
      },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one tag  🧁🧁✨✨🌻🌻
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!tagData) {
      res.status(404).json({message: "NO DATA FOR THIS ID 🧁✨🐱‍👤" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new tag  🧁🧁✨✨🌻🌻
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });
    if (!tagData) {
      res.status(404).json({ message: "NAME THIS TAG PLZ ⚡" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update tag  🧁🧁✨✨🌻🌻
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!tagData[0]) {
      res.status(404).json({message: "NO DATA FOR THIS ID 🧁✨🐱‍👤" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json;
  }
});

// delete tag  🧁🧁✨✨🌻🌻
router.delete('/:id', async (req, res) => {
  try {
    // get product and destroy by id
    // check if there is data
    // return new data after deleted
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (!tagData) {
      res.status(404).json({message: "NO DATA FOR THIS ID 🧁✨🐱‍👤" });
    return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
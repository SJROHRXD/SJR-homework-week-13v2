const router = require('express').Router();
const { Category, Product } = require('../../models');
const { findByPk } = require('../../models/Product');

// The `/api/categories` endpoint
// http://localhost:3001/api/categories

  // find all categories  🧁🧁✨✨🌻🌻
  // be sure to include its associated Products
router.get('/', async (req, res) => {
try {
  const categoryData = await Category.findAll()
    res.status(200).json(categoryData);
    // console.log("Passing categoryData")
  } catch (err) {
  res.status(500).json(err)
  }
});

  // find one category by its `id` value  🧁🧁✨✨🌻🌻
  // be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    // request parameter id; feeding ID and searching DB for match
    const categoryData = await Category.findByPk(req.params.id, {
      // including any children Products; for example sports will return associated sports products
      include: [{ model: Product }]
    })
    if (!categoryData) {
      // if there's no matching category, then error message
      res.status(404).json({ message: "NO DATA FOR THIS ID 🧁✨🐱‍👤" })
      return;
    }
    // otherwise, returns data
    res.status(200).json(categoryData)
  } catch (err) {
  res.status(500).json(err)
  // display error for server
  }
});

// create a new category  🧁🧁✨✨🌻🌻
router.post('/', (req, res) => {

});

// update a category by its `id` value  🧁🧁✨✨🌻🌻
router.put('/:id', (req, res) => {

});

// delete category  🧁🧁✨✨🌻🌻
router.delete('/:id', async (req, res) => {
  try {
    // get product and destroy by id
    // check if there is data
    // return new data after deleted
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (!categoryData) {
      res.status(404).json({message: "NO DATA FOR THIS ID 🧁✨🐱‍👤"})
    return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
const { recipes, categories } = require('../../utils/data.js')
const { formatCount } = require('../../utils/util.js')

Page({
  data: {
    recipes: [],
    filteredRecipes: [],
    selectedCuisine: 'all',
    selectedTaste: 'all',
    selectedDifficulty: 'all'
  },

  onLoad(options) {
    const { id, name } = options
    this.setData({ recipes })
    if (name && name !== 'undefined') {
      this.setData({ selectedCuisine: name })
    }
    this.filterRecipes()
  },

  onShow() {
    if (this.data.recipes.length === 0) {
      this.setData({ recipes })
      this.filterRecipes()
    }
  },

  selectCuisine(e) {
    const cuisine = e.currentTarget.dataset.cuisine
    this.setData({ selectedCuisine: cuisine })
    this.filterRecipes()
  },

  selectTaste(e) {
    const taste = e.currentTarget.dataset.taste
    this.setData({ selectedTaste: taste })
    this.filterRecipes()
  },

  selectDifficulty(e) {
    const difficulty = e.currentTarget.dataset.difficulty
    this.setData({ selectedDifficulty: difficulty })
    this.filterRecipes()
  },

  filterRecipes() {
    let results = [...this.data.recipes]
    const { selectedCuisine, selectedTaste, selectedDifficulty } = this.data

    if (selectedCuisine !== 'all') {
      results = results.filter(r => r.category === selectedCuisine)
    }

    if (selectedTaste !== 'all') {
      results = results.filter(r => r.taste.includes(selectedTaste))
    }

    if (selectedDifficulty !== 'all') {
      results = results.filter(r => r.difficulty === selectedDifficulty)
    }

    this.setData({ filteredRecipes: results })
  },

  formatCount(num) {
    return formatCount(num)
  },

  goToDetail(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/recipe-detail/recipe-detail?id=${id}`
    })
  }
})

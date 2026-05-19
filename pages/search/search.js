const { recipes } = require('../../utils/data.js')
const { formatCount, debounce } = require('../../utils/util.js')

Page({
  data: {
    searchKeyword: '',
    searchMode: 'recipe',
    searchResults: [],
    selectedIngredients: [],
    searchHistory: [],
    hotSearches: ['红烧肉', '麻婆豆腐', '清蒸鱼', '糖醋排骨', '番茄炒蛋'],
    commonIngredients: ['鸡蛋', '猪肉', '牛肉', '鸡肉', '豆腐', '土豆', '番茄', '青菜', '香菇', '虾']
  },

  onLoad() {
    this.loadSearchHistory()
  },

  loadSearchHistory() {
    try {
      const history = wx.getStorageSync('searchHistory')
      if (history) {
        this.setData({ searchHistory: history })
      }
    } catch (e) {
      console.error('加载搜索历史失败', e)
    }
  },

  saveSearchHistory(keyword) {
    let history = this.data.searchHistory.filter(h => h !== keyword)
    history.unshift(keyword)
    if (history.length > 10) {
      history = history.slice(0, 10)
    }
    this.setData({ searchHistory: history })
    wx.setStorageSync('searchHistory', history)
  },

  onInput: debounce(function(e) {
    const keyword = e.detail.value
    this.setData({ searchKeyword: keyword })
    if (keyword && this.data.searchMode === 'recipe') {
      this.performSearch(keyword)
    }
  }, 300),

  onSearch(e) {
    const keyword = e.detail.value || this.data.searchKeyword
    if (!keyword.trim()) return
    
    this.saveSearchHistory(keyword)
    this.performSearch(keyword)
  },

  performSearch(keyword) {
    const results = recipes.filter(recipe => {
      const titleMatch = recipe.title.includes(keyword)
      const categoryMatch = recipe.category.includes(keyword)
      
      const ingredientMatch = Object.values(recipe.ingredients).flat().some(ing => 
        ing.name.includes(keyword)
      )
      return titleMatch || categoryMatch || ingredientMatch
    })
    this.setData({ searchResults: results })
  },

  switchMode(e) {
    const mode = e.currentTarget.dataset.mode
    this.setData({ 
      searchMode: mode,
      searchResults: []
    })
    
    if (mode === 'ingredient' && this.data.selectedIngredients.length > 0) {
      this.searchByIngredients()
    }
  },

  addIngredient(e) {
    const ingredient = e.detail.value || e.target.dataset.ingredient
    if (!ingredient || !ingredient.trim()) return
    
    if (!this.data.selectedIngredients.includes(ingredient)) {
      this.setData({
        selectedIngredients: [...this.data.selectedIngredients, ingredient]
      })
      this.searchByIngredients()
    }
  },

  quickAddIngredient(e) {
    const ingredient = e.currentTarget.dataset.ingredient
    if (!this.data.selectedIngredients.includes(ingredient)) {
      this.setData({
        selectedIngredients: [...this.data.selectedIngredients, ingredient]
      })
      this.searchByIngredients()
    }
  },

  removeIngredient(e) {
    const index = e.currentTarget.dataset.index
    const ingredients = [...this.data.selectedIngredients]
    ingredients.splice(index, 1)
    this.setData({ selectedIngredients: ingredients })
    
    if (ingredients.length > 0) {
      this.searchByIngredients()
    } else {
      this.setData({ searchResults: [] })
    }
  },

  searchByIngredients() {
    const ingredients = this.data.selectedIngredients
    const results = recipes.filter(recipe => {
      const allIngredients = Object.values(recipe.ingredients).flat()
      return ingredients.some(ing => 
        allIngredients.some(recipeIng => recipeIng.name.includes(ing))
      )
    })
    
    results.sort((a, b) => {
      const countA = this.countMatchedIngredients(a, ingredients)
      const countB = this.countMatchedIngredients(b, ingredients)
      return countB - countA
    })
    
    this.setData({ searchResults: results })
  },

  countMatchedIngredients(recipe, ingredients) {
    const allIngredients = Object.values(recipe.ingredients).flat()
    return ingredients.filter(ing => 
      allIngredients.some(recipeIng => recipeIng.name.includes(ing))
    ).length
  },

  searchTag(e) {
    const keyword = e.currentTarget.dataset.keyword
    this.setData({ searchKeyword: keyword })
    this.saveSearchHistory(keyword)
    this.performSearch(keyword)
  },

  clearSearch() {
    this.setData({
      searchKeyword: '',
      searchResults: []
    })
  },

  clearHistory() {
    wx.showModal({
      title: '提示',
      content: '确定清空搜索历史吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({ searchHistory: [] })
          wx.removeStorageSync('searchHistory')
        }
      }
    })
  },

  formatCount(num) {
    return formatCount(num)
  },

  goToDetail(e) {
    const { id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/recipe-detail/recipe-detail?id=${id}`
    })
  },

  goBack() {
    wx.navigateBack()
  }
})

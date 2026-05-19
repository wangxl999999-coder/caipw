const { recipes, comments } = require('../../utils/data.js')
const { formatCount, showToast } = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    recipe: {},
    comments: [],
    isFavorited: false,
    isLiked: false
  },

  onLoad(options) {
    const { id } = options
    this.loadRecipe(id)
    this.loadComments()
    this.checkFavorite(id)
  },

  loadRecipe(id) {
    const recipe = recipes.find(r => r.id === parseInt(id))
    if (recipe) {
      this.setData({ recipe })
      app.addHistory(recipe)
    }
  },

  loadComments() {
    this.setData({ comments })
  },

  checkFavorite(id) {
    const isFavorited = app.isFavorite(parseInt(id))
    this.setData({ isFavorited })
  },

  formatCount(num) {
    return formatCount(num)
  },

  toggleFavorite() {
    const { recipe, isFavorited } = this.data
    if (isFavorited) {
      app.removeFavorite(recipe.id)
      showToast('已取消收藏')
    } else {
      app.addFavorite(recipe)
      showToast('收藏成功')
    }
    this.setData({ isFavorited: !isFavorited })
  },

  toggleLike() {
    const { isLiked, recipe } = this.data
    if (!isLiked) {
      recipe.likes += 1
      this.setData({ recipe })
    }
    this.setData({ isLiked: !isLiked })
    showToast(isLiked ? '已取消点赞' : '点赞成功')
  },

  shareRecipe() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },

  addToShoppingList() {
    const { recipe } = this.data
    const allIngredients = [
      ...recipe.ingredients.main,
      ...(recipe.ingredients.auxiliary || []),
      ...recipe.ingredients.seasoning
    ]
    app.addToShoppingList(allIngredients)
    showToast('已加入购物清单')
  },

  playVideo() {
    showToast('视频教程开发中')
  },

  goToComment() {
    wx.navigateTo({
      url: `/pages/comment/comment?recipeId=${this.data.recipe.id}`
    })
  },

  onShareAppMessage() {
    const { recipe } = this.data
    return {
      title: `我发现了一道美食：${recipe.title}`,
      path: `/pages/recipe-detail/recipe-detail?id=${recipe.id}`
    }
  },

  onShareTimeline() {
    const { recipe } = this.data
    return {
      title: `美食推荐：${recipe.title}`,
      query: `id=${recipe.id}`
    }
  }
})

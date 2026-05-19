App({
  globalData: {
    userInfo: null,
    isLogin: false,
    favorites: [],
    history: [],
    shoppingList: []
  },

  onLaunch() {
    this.loadUserInfo()
    this.loadFavorites()
    this.loadHistory()
    this.loadShoppingList()
  },

  loadUserInfo() {
    try {
      const userInfo = wx.getStorageSync('userInfo')
      if (userInfo) {
        this.globalData.userInfo = userInfo
        this.globalData.isLogin = true
      }
    } catch (e) {
      console.error('加载用户信息失败', e)
    }
  },

  loadFavorites() {
    try {
      const favorites = wx.getStorageSync('favorites')
      if (favorites) {
        this.globalData.favorites = favorites
      }
    } catch (e) {
      console.error('加载收藏失败', e)
    }
  },

  loadHistory() {
    try {
      const history = wx.getStorageSync('history')
      if (history) {
        this.globalData.history = history
      }
    } catch (e) {
      console.error('加载浏览记录失败', e)
    }
  },

  loadShoppingList() {
    try {
      const shoppingList = wx.getStorageSync('shoppingList')
      if (shoppingList) {
        this.globalData.shoppingList = shoppingList
      }
    } catch (e) {
      console.error('加载购物清单失败', e)
    }
  },

  saveUserInfo(userInfo) {
    this.globalData.userInfo = userInfo
    this.globalData.isLogin = true
    wx.setStorageSync('userInfo', userInfo)
  },

  addFavorite(recipe) {
    const index = this.globalData.favorites.findIndex(item => item.id === recipe.id)
    if (index === -1) {
      this.globalData.favorites.unshift(recipe)
      wx.setStorageSync('favorites', this.globalData.favorites)
      return true
    }
    return false
  },

  removeFavorite(recipeId) {
    const index = this.globalData.favorites.findIndex(item => item.id === recipeId)
    if (index !== -1) {
      this.globalData.favorites.splice(index, 1)
      wx.setStorageSync('favorites', this.globalData.favorites)
      return true
    }
    return false
  },

  isFavorite(recipeId) {
    return this.globalData.favorites.some(item => item.id === recipeId)
  },

  addHistory(recipe) {
    const index = this.globalData.history.findIndex(item => item.id === recipe.id)
    if (index !== -1) {
      this.globalData.history.splice(index, 1)
    }
    this.globalData.history.unshift(recipe)
    if (this.globalData.history.length > 50) {
      this.globalData.history = this.globalData.history.slice(0, 50)
    }
    wx.setStorageSync('history', this.globalData.history)
  },

  addToShoppingList(ingredients) {
    ingredients.forEach(item => {
      const exist = this.globalData.shoppingList.find(i => i.name === item.name)
      if (!exist) {
        this.globalData.shoppingList.push({
          ...item,
          checked: false
        })
      }
    })
    wx.setStorageSync('shoppingList', this.globalData.shoppingList)
  }
})

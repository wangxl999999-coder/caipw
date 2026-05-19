const { showToast } = require('../../utils/util.js')

Page({
  data: {
    coverImage: '',
    recipeName: '',
    categories: ['家常菜', '川菜', '湘菜', '粤菜', '甜品', '早餐', '减脂', '儿童餐'],
    categoryIndex: 0,
    difficulty: '简单',
    cookTime: '',
    taste: '咸鲜',
    ingredients: [{ name: '', amount: '' }],
    steps: [{ image: '', description: '' }],
    tips: ''
  },

  uploadCover() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      success: (res) => {
        this.setData({ coverImage: res.tempFiles[0].tempFilePath })
      }
    })
  },

  onNameInput(e) {
    this.setData({ recipeName: e.detail.value })
  },

  onCategoryChange(e) {
    this.setData({ categoryIndex: parseInt(e.detail.value) })
  },

  selectDifficulty(e) {
    this.setData({ difficulty: e.currentTarget.dataset.value })
  },

  onTimeInput(e) {
    this.setData({ cookTime: e.detail.value })
  },

  selectTaste(e) {
    this.setData({ taste: e.currentTarget.dataset.value })
  },

  addIngredient() {
    this.setData({
      ingredients: [...this.data.ingredients, { name: '', amount: '' }]
    })
  },

  onIngredientNameInput(e) {
    const index = e.currentTarget.dataset.index
    const ingredients = [...this.data.ingredients]
    ingredients[index].name = e.detail.value
    this.setData({ ingredients })
  },

  onIngredientAmountInput(e) {
    const index = e.currentTarget.dataset.index
    const ingredients = [...this.data.ingredients]
    ingredients[index].amount = e.detail.value
    this.setData({ ingredients })
  },

  deleteIngredient(e) {
    const index = e.currentTarget.dataset.index
    if (this.data.ingredients.length > 1) {
      const ingredients = [...this.data.ingredients]
      ingredients.splice(index, 1)
      this.setData({ ingredients })
    }
  },

  addStep() {
    this.setData({
      steps: [...this.data.steps, { image: '', description: '' }]
    })
  },

  uploadStepImage(e) {
    const index = e.currentTarget.dataset.index
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      success: (res) => {
        const steps = [...this.data.steps]
        steps[index].image = res.tempFiles[0].tempFilePath
        this.setData({ steps })
      }
    })
  },

  onStepDescInput(e) {
    const index = e.currentTarget.dataset.index
    const steps = [...this.data.steps]
    steps[index].description = e.detail.value
    this.setData({ steps })
  },

  deleteStep(e) {
    const index = e.currentTarget.dataset.index
    if (this.data.steps.length > 1) {
      const steps = [...this.data.steps]
      steps.splice(index, 1)
      this.setData({ steps })
    }
  },

  onTipsInput(e) {
    this.setData({ tips: e.detail.value })
  },

  publishRecipe() {
    if (!this.data.recipeName.trim()) {
      showToast('请输入菜谱名称')
      return
    }
    if (!this.data.cookTime.trim()) {
      showToast('请输入烹饪时间')
      return
    }

    wx.showModal({
      title: '提示',
      content: '菜谱发布功能开发中，数据已保存',
      showCancel: false,
      success: () => {
        wx.navigateBack()
      }
    })
  }
})

const app = getApp()
const { showToast } = require('../../utils/util.js')

Page({
  data: {
    activeTool: '',
    inputValue: '100',
    fromUnit: 'g',
    toUnit: 'spoon',
    resultValue: '6.7',
    timerSeconds: 300,
    timerDisplay: '05:00',
    isRunning: false,
    timerInterval: null,
    customMinute: '',
    customSecond: '',
    shoppingList: []
  },

  onLoad() {
    this.loadShoppingList()
  },

  onUnload() {
    if (this.data.timerInterval) {
      clearInterval(this.data.timerInterval)
    }
  },

  loadShoppingList() {
    this.setData({
      shoppingList: app.globalData.shoppingList
    })
  },

  goToConverter() {
    this.setData({ activeTool: 'converter' })
  },

  goToTimer() {
    this.setData({ activeTool: 'timer' })
  },

  goToShoppingList() {
    this.loadShoppingList()
    this.setData({ activeTool: 'shopping' })
  },

  goToBabyFood() {
    wx.navigateTo({
      url: '/pages/baby-food/baby-food'
    })
  },

  onInputValue(e) {
    const value = e.detail.value
    this.setData({ inputValue: value })
    this.convert()
  },

  selectFromUnit(e) {
    const unit = e.currentTarget.dataset.unit
    this.setData({ fromUnit: unit })
    this.convert()
  },

  selectToUnit(e) {
    const unit = e.currentTarget.dataset.unit
    this.setData({ toUnit: unit })
    this.convert()
  },

  convert() {
    const { inputValue, fromUnit, toUnit } = this.data
    const value = parseFloat(inputValue) || 0
    
    let grams = value
    if (fromUnit === 'spoon') grams = value * 15
    if (fromUnit === 'ml') grams = value
    
    let result = grams
    if (toUnit === 'spoon') result = grams / 15
    if (toUnit === 'ml') result = grams
    
    this.setData({ resultValue: result.toFixed(1) })
  },

  toggleTimer() {
    if (this.data.isRunning) {
      clearInterval(this.data.timerInterval)
      this.setData({ isRunning: false })
    } else {
      const interval = setInterval(() => {
        if (this.data.timerSeconds <= 0) {
          clearInterval(interval)
          this.setData({ isRunning: false })
          wx.showModal({
            title: '提醒',
            content: '时间到！',
            showCancel: false
          })
          return
        }
        this.setData({ timerSeconds: this.data.timerSeconds - 1 })
        this.updateTimerDisplay()
      }, 1000)
      this.setData({ timerInterval: interval, isRunning: true })
    }
  },

  resetTimer() {
    clearInterval(this.data.timerInterval)
    this.setData({
      timerSeconds: 300,
      isRunning: false,
      timerInterval: null
    })
    this.updateTimerDisplay()
  },

  setPresetTime(e) {
    const time = parseInt(e.currentTarget.dataset.time)
    clearInterval(this.data.timerInterval)
    this.setData({
      timerSeconds: time,
      isRunning: false,
      timerInterval: null
    })
    this.updateTimerDisplay()
  },

  onMinuteInput(e) {
    this.setData({ customMinute: e.detail.value })
  },

  onSecondInput(e) {
    this.setData({ customSecond: e.detail.value })
  },

  setCustomTime() {
    const minute = parseInt(this.data.customMinute) || 0
    const second = parseInt(this.data.customSecond) || 0
    const totalSeconds = minute * 60 + second
    if (totalSeconds > 0) {
      clearInterval(this.data.timerInterval)
      this.setData({
        timerSeconds: totalSeconds,
        isRunning: false,
        timerInterval: null,
        customMinute: '',
        customSecond: ''
      })
      this.updateTimerDisplay()
    } else {
      showToast('请输入有效时间')
    }
  },

  updateTimerDisplay() {
    const minutes = Math.floor(this.data.timerSeconds / 60)
    const seconds = this.data.timerSeconds % 60
    this.setData({
      timerDisplay: `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    })
  },

  addShoppingItem(e) {
    const name = e.detail.value?.trim()
    if (name) {
      const newItem = { name, checked: false }
      this.setData({
        shoppingList: [...this.data.shoppingList, newItem]
      })
      app.globalData.shoppingList = this.data.shoppingList
      wx.setStorageSync('shoppingList', this.data.shoppingList)
    }
  },

  toggleCheckItem(e) {
    const index = e.currentTarget.dataset.index
    const list = [...this.data.shoppingList]
    list[index].checked = !list[index].checked
    this.setData({ shoppingList: list })
    app.globalData.shoppingList = list
    wx.setStorageSync('shoppingList', list)
  },

  deleteShoppingItem(e) {
    const index = e.currentTarget.dataset.index
    const list = [...this.data.shoppingList]
    list.splice(index, 1)
    this.setData({ shoppingList: list })
    app.globalData.shoppingList = list
    wx.setStorageSync('shoppingList', list)
  },

  clearShoppingList() {
    wx.showModal({
      title: '提示',
      content: '确定清空购物清单吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({ shoppingList: [] })
          app.globalData.shoppingList = []
          wx.removeStorageSync('shoppingList')
        }
      }
    })
  },

  exportShoppingList() {
    const items = this.data.shoppingList.map(item => item.name).join('、')
    if (items) {
      wx.setClipboardData({
        data: `买菜清单：${items}`,
        success: () => showToast('已复制到剪贴板')
      })
    }
  }
})

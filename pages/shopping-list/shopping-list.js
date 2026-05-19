const app = getApp()
const { showToast } = require('../../utils/util.js')

Page({
  data: {
    shoppingList: [],
    newItem: '',
    checkedCount: 0
  },

  onShow() {
    this.loadShoppingList()
  },

  loadShoppingList() {
    const list = app.globalData.shoppingList || []
    const checkedCount = list.filter(item => item.checked).length
    this.setData({
      shoppingList: list,
      checkedCount
    })
  },

  onInput(e) {
    this.setData({ newItem: e.detail.value })
  },

  addItem(e) {
    const name = e.detail.value?.trim() || this.data.newItem.trim()
    if (!name) return

    const exist = this.data.shoppingList.find(item => item.name === name)
    if (exist) {
      showToast('该食材已在清单中')
      return
    }

    const newList = [...this.data.shoppingList, { name, checked: false }]
    app.globalData.shoppingList = newList
    wx.setStorageSync('shoppingList', newList)
    this.setData({
      shoppingList: newList,
      newItem: ''
    })
    this.updateCheckedCount()
  },

  toggleCheck(e) {
    const index = e.currentTarget.dataset.index
    const list = [...this.data.shoppingList]
    list[index].checked = !list[index].checked
    app.globalData.shoppingList = list
    wx.setStorageSync('shoppingList', list)
    this.setData({ shoppingList: list })
    this.updateCheckedCount()
  },

  deleteItem(e) {
    const index = e.currentTarget.dataset.index
    const list = [...this.data.shoppingList]
    list.splice(index, 1)
    app.globalData.shoppingList = list
    wx.setStorageSync('shoppingList', list)
    this.setData({ shoppingList: list })
    this.updateCheckedCount()
  },

  clearAll() {
    if (this.data.shoppingList.length === 0) return
    
    wx.showModal({
      title: '提示',
      content: '确定清空购物清单吗？',
      success: (res) => {
        if (res.confirm) {
          app.globalData.shoppingList = []
          wx.removeStorageSync('shoppingList')
          this.setData({
            shoppingList: [],
            checkedCount: 0
          })
        }
      }
    })
  },

  updateCheckedCount() {
    const count = this.data.shoppingList.filter(item => item.checked).length
    this.setData({ checkedCount: count })
  },

  exportList() {
    const items = this.data.shoppingList.map(item => item.name).join('、')
    if (items) {
      wx.setClipboardData({
        data: `购物清单：${items}`,
        success: () => showToast('已复制到剪贴板')
      })
    } else {
      showToast('清单为空')
    }
  }
})

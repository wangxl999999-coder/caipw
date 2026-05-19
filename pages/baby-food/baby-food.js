const { babyFood } = require('../../utils/data.js')

Page({
  data: {
    babyFood: [],
    filteredFood: [],
    selectedAge: 'all'
  },

  onLoad() {
    this.setData({ babyFood, filteredFood: babyFood })
  },

  selectAge(e) {
    const age = e.currentTarget.dataset.age
    this.setData({ selectedAge: age })
    this.filterFood()
  },

  filterFood() {
    const { babyFood, selectedAge } = this.data
    if (selectedAge === 'all') {
      this.setData({ filteredFood: babyFood })
    } else {
      this.setData({
        filteredFood: babyFood.filter(f => f.age === selectedAge)
      })
    }
  }
})

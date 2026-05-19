const { comments } = require('../../utils/data.js')
const { showToast } = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    comments: [],
    inputText: ''
  },

  onLoad() {
    this.setData({ comments })
  },

  onInput(e) {
    this.setData({ inputText: e.detail.value })
  },

  sendComment() {
    if (!app.globalData.isLogin) {
      showToast('请先登录')
      return
    }

    const text = this.data.inputText.trim()
    if (!text) return

    const newComment = {
      id: Date.now(),
      user: app.globalData.userInfo?.nickname || '美食爱好者',
      avatar: app.globalData.userInfo?.avatar || 'https://picsum.photos/100/100?random=' + Date.now(),
      content: text,
      time: '刚刚',
      likes: 0
    }

    this.setData({
      comments: [newComment, ...this.data.comments],
      inputText: ''
    })

    showToast('评论成功')
  },

  likeComment(e) {
    const index = e.currentTarget.dataset.index
    const comments = [...this.data.comments]
    comments[index].likes += 1
    this.setData({ comments })
  },

  replyComment() {
    showToast('回复功能开发中')
  }
})

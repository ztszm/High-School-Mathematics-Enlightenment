import list from './back-top';
Page({
    data: {
        type: 'round',
        showBackTop: false,
        rowCol: [{ size: '327rpx', borderRadius: '24rpx' }, 1, { width: '61%' }],
        list,
    },
    onLoad(options) {
        const that = this;
        const data = JSON.parse(options.data);
        that.setData({list:data})
        console.log(data);
    },
    onPageScroll(e) {
        this.setData({ showBackTop: e.scrollTop > 100 });
    },
    onBtnClick(e) {
        const { source: type } = e.currentTarget.dataset;
        this.setData({
            type,
        });
        wx.pageScrollTo({ duration: 300, scrollTop: 1000 });
    },
});

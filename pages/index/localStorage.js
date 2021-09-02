module.exports = {
	get(key) {
		return JSON.parse(wx.getStorageSync(key));
	},

	set(key, value) {
		wx.setStorageSync(key, JSON.stringify(value));
	},

	remove(ley) {
		wx.removeStorageSync(key);
	},
};

var LocalStorage = require('./localStorage');

function getExpireTimestamp(days) {
	return (
		new Date(new Date().setHours(23, 59, 59, 1000)).getTime() +
		days * 24 * 60 * 60 * 1000
	);
}

module.exports = {
	get(key) {
		const dbData = LocalStorage.get(key);

		if (dbData && dbData._time >= new Date().getTime()) {
			return dbData.data;
		}

		// 如果过期，即删除
		LocalStorage.remove(key);
		return null;
	},

	set(key, value, expires = 0) {
		const dbData = {
			data: value,
			_time: getExpireTimestamp(expires),
		};

		return LocalStorage.set(key, dbData);
	},

	remove(key) {
		LocalStorage.remove(key);
	},
};

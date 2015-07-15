var user = {
	insert:'INSERT INTO t_user(name, password) VALUES(?,?)',
	update:'update t_user set name=?, password=? where id=?',
	delete: 'delete from t_user where id=?',
	queryById: 'select * from t_user where id=?',
	queryByNameAndPwd:'select id from t_user where name=? and password=?',
	queryAll: 'select * from t_user'
};
 
module.exports = user;
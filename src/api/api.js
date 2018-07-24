import axios from 'axios';

// let base = 'http://localhost:8080/bebetterme';//本地服务接口地址

let base = 'http://106.14.159.20:8080/ssmbebetterme';//阿里云服务接口地址


//用户管理使用到的接口
//分页查询用户信息
// export const getUserListPage = params => { return axios.get(`${base}/user/getUsersByPageIndex`, { params: params }); };
//新增用户信息
export const addUser = params => { return axios.post(`${base}/user/saveUser`, params).then(res => res.data); };
//删除用户信息
export const removeUser = params => { return axios.get(`${base}/user/deleteUser`, { params: params }); };
//批量删除用户信息
export const batchRemoveUser = params => { return axios.post(`${base}/user/batchDeleteUser`, params).then(res => res.data); };
//修改用户信息
export const editUser = params => { return axios.post(`${base}/user/updateUser`, params).then(res => res.data); };
//分页查询用户信息，增加了按用户名查询
export const getUserList = params => { return axios.post(`${base}/user/getUerList`, params).then(res => res.data); };


//bebetter管理使用到的接口
//新增每日报告
export const addReport = params => { return axios.post(`${base}/bebetter/saveReport`, params).then(res => res.data); };
//删除报告
export const removeReport = params => { return axios.get(`${base}/bebetter/deleteReport`, { params: params }); };
//批量删除报告
export const batchRemoveReport = params => { return axios.post(`${base}/bebetter/batchDeleteReport`, params).then(res => res.data); };
//修改每日报告
export const editReport = params => { return axios.post(`${base}/bebetter/updateReport`, params).then(res => res.data); };
//根据查询条件获取报告列表
export const getReportList = params => { return axios.post(`${base}/bebetter/getReportList`, params).then(res => res.data); };
//获取总分
export const getSumScore = params => { return axios.get(`${base}/bebetter/getAllScore`).then(res => res.data); };




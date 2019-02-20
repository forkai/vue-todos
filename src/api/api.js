import axios from 'axios'

const requestLogin = params => axios.post(`/login`, params).then(res => res.data)

const getTodoList = params => axios.get(`/todo/list`, {params})

const getTodo = params => axios.get(`/todo/listId`, {params})

const addRecord = params => axios.post(`/todo/addRecord`, params).then(res => res.data)

const editTodo = params => axios.post(`/todo/editTodo`, params).then(res => res.data)
const editRecord = params => axios.post(`/todo/editRecord`, params).then(res => res.data)

const addTodo = params => axios.post(`/todo/addTodo`, params).then(res => res.data)

export {requestLogin, getTodoList, getTodo, addRecord, editTodo, editRecord, addTodo}

// export const editUser = params => axios.get(`${base}/user/edit`, { params})

// export const addUser = params => axios.get(`${base}/user/add`, { params })

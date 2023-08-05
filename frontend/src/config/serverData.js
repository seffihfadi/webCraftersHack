export const userQuery = (id) => {
  return `*[_type == 'users' && uniqID == '${id}']`
}

export const userByUnQuery = (username) => {
  return `*[_type == 'users' && uname == '${username}']`
}
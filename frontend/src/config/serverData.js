export const userQuery = (id) => {
  return `*[_type == 'users' && uniqID == '${id}']`
}

export const userByUnQuery = (username) => {
  return `*[_type == 'users' && uname == '${username}']`
}
export const userByTelQuery = (tel) => {
  return `*[_type == 'users' && tel == '${tel}']{
    ..., 
    services [] -> {
      desc,
      title,
      _id,
      price,
      isAvailable,
      img {
        asset -> {
          url
        }
      }
    }
  }`
}
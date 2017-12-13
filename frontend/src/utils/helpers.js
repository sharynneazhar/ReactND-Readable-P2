export const capitalize = (str = '') => {
  if (str === '')
    return str
  return typeof str !== 'string' ? '' : str[0].toUpperCase() + str.slice(1)
}

export const sortByDate = (list) => {
  return list.sort((a, b) => a.timestamp < b.timestamp)
}

export const sortByVotes = (list) => {
  return list.sort((a, b) => b.voteScore > a.voteScore)
}

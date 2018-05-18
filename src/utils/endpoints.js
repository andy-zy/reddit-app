const HOST = 'https://www.reddit.com'
const API_ROOT = '/r'

const endpoints = {
  getArticlesCategoryUrl: (category) => `${HOST}${API_ROOT}/${category}.json`,
}

export default endpoints
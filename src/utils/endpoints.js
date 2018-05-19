const HOST = 'https://www.reddit.com'
const API_ROOT = '/r'

const endpoints = {
  getArticlesCategoryUrl: (category, after = null, limit = 25) => (
    `${HOST}${API_ROOT}/${category}.json?after=${after}&limit=${limit}`
  ),
}

export default endpoints
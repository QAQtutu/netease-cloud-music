import { defineStore } from 'pinia';

interface SearchState {
  history: Array<String>;
}

export const useSearchStore = defineStore({
  id: 'search',
  state: (): SearchState => ({
    history: ['周杰伦', '克罗地亚狂想曲', '克罗地亚狂想曲', '克罗地亚狂想曲', '克罗地亚狂想曲', '克罗地亚狂想曲', '克罗地亚狂想曲']
  }),
  getters: {
  },
  actions: {
    removeHistory(keyword: String) {
      this.history = this.history.filter(x => x !== keyword)
      console.log(this.history)
    },
    async search(keyword: String): Promise<any> {
      return new Promise<any>((resolve, reject) => {
        if (keyword.length > 0) {
          this.history.push(keyword);
        }
        resolve(null)
      })
    }
  }
})
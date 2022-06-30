export const state = () => ({
  blogPosts: [],
  currentInformations: null,
});

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list;
  },
  setCurrentInformations(state, informations) {
    state.currentInformations = informations;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context(
      "~/content/blog/",
      false,
      /\.json$/
    );
    let blogPosts = files.keys().map(key => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit("setBlogPosts", blogPosts);


    //get current Informations
    let infoFiles = await require.context(
      "~/content/infos/",
      false,
      /\.json$/
    );
    let infoFile = files.keys().map(key => {
      let res = files(key);
      return res;
    });
    await commit("setCurrentInformations", infoFile);
  }
};

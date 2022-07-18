export const state = () => ({
  sidebarNavigation: [{
    title: '',
    subtitle: '',
    description: '',
    linkText: ''
  }],
  infos: [{
    title: '',
    content: '',
  }],
  mainMenus: [],
  subMenus: [],
});

export const getters = {
    getSidebarNav: (state) => JSON.parse(state.sidebarNavigation),
    
    getInfos: (state) => JSON.parse(state.infos),
    
    getMainMenus: (state) => JSON.parse(state.mainMenus),

    setSubMenus: (state) => JSON.parse(state.subMenus),
}

export const mutations = {
  setSidebarNavigation(state, payload) {
    state.sidebarNavigation = payload;
  },
  setInfos(state, payload) {
    state.infos = payload;
  },
  setMainMenus(state, payload) {
    state.mainMenus = payload;
  },
  setSubMenus(state, payload) {
    state.otherMenus = payload;
  },
};

export const actions = {
  async getSidebarNav({ commit }, callback) {
    const sidebarNav = await this.$content("sidebarNav").fetch();
    commit("setSidebarNavigation", sidebarNav);
  },
  async getInfos({ commit }, callback) {
    const infos = await this.$content("infos").fetch();
    commit("setInfos", infos);
  },
  async getMainMenus({ commit }, callback) {
    const mainMenu = await this.$content("menu")
      .where({ placed: "Startseite" })
      .fetch();
    commit("setMainMenus", mainMenu);
  },
  async getOtherMenus({ commit }, callback) {
    const subMenus = await this.$content("menu").fetch();
    commit("setSubMenus", subMenus);
  },
};
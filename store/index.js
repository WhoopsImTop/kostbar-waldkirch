export const state = () => ({
  sidebarNavigation: [],
  infos: null,
  mainMenus: [],
  otherMenus: [],
});

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
  setOtherMenus(state, payload) {
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
    console.log(infos);
    commit("setInfos", infos);
  },
  async getMainMenus({ commit }, callback) {
    const mainMenu = await this.$content("menu")
      .where({ placed: "Startseite" })
      .fetch();
    commit("setMainMenus", mainMenu);
  },
  getOtherMenus({ commit }, callback) {
    const subMenus = this.$content("menu").fetch();
    commit("setSubMenus", subMenus);
  },
};

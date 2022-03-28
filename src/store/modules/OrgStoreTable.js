const OrgStoreTable = {
  namespaced: true,
  state: {
    members: []
  },
  getters: {
    getMembers: (state, getters, rootState, rootGetters) => {
      let selectedItem = rootGetters["OrgStoreTree/getSelectedItem"]
      return state.members.filter( m => m.org_id.startsWith(selectedItem?.id) ) 
    }
  },
  mutations: {
    mutMembers: (state, payload) => {
      // TODO API 호출해서 데이터 가져옴
      state.members = payload 
    }
  },
  actions: {
    // actSelectOrgs: (context, payload) => {
    actMembers: (context) => {
      const sample =  [
        { "org_id": "SEARCH", "name": "검색 그룹장"},
        
        { "org_id": "NLP", "name": "NLP 그룹장"},
        { "org_id": "NLP-BASETECH", "name": "NLP 기반기술 본부장"},
        { "org_id": "NLP-BIGDATA", "name": "NLP 빅데이터 본부장"},
        { "org_id": "NLP-AIBUSIN", "name": "NLP AI사업 본부장"},
        { "org_id": "NLP-AIBUSIN-SALES", "name": "NLP AI사업 본부 영업 팀장"},
        { "org_id": "NLP-AIBUSIN-AI1", "name": "NLP AI사업 본부 AI1 팀장"},
        { "org_id": "NLP-AIBUSIN-AI2", "name": "NLP AI사업 본부 AI2 팀장"},
        { "org_id": "NLP-AIBUSIN-AI3", "name": "NLP AI사업 본부 AI3 팀장"},
        { "org_id": "NLP-AIBUSIN-AI4", "name": "NLP AI사업 본부 AI4 팀장"},
        { "org_id": "NLP-AIBUSIN-AI5", "name": "NLP AI사업 본부 AI5 팀장"},
        { "org_id": "NLP-AIBUSIN-AI6", "name": "NLP AI사업 본부 AI6 팀장"},
        { "org_id": "NLP-AIBUSIN-AI7", "name": "NLP AI사업 본부 AI7 팀장"},
        { "org_id": "NLP-AIBUSIN-AI8", "name": "NLP AI사업 본부 AI8 팀장"},
        { "org_id": "NLP-AIBUSIN-AI8", "name": "NLP AI사업 본부 AI8 팀원1"},
        { "org_id": "NLP-AIBUSIN-AI8", "name": "NLP AI사업 본부 AI8 팀원2"},
        { "org_id": "NLP-AIBUSIN-AI8", "name": "NLP AI사업 본부 AI8 팀원3"},
        { "org_id": "NLP-AIBUSIN-AI8", "name": "NLP AI사업 본부 AI8 팀원4"},
        { "org_id": "NLP-AIBUSIN-AI8", "name": "NLP AI사업 본부 AI8 팀원5"},

        { "org_id": "AI", "name": "AI 그룹장"},
        
        { "org_id": "COMMON", "name": "공용 그룹장"},
      ]
      context.commit('mutMembers', sample)
    }
  }
}

export default OrgStoreTable

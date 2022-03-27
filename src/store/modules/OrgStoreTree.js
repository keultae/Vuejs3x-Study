const OrgStoreTree = {
  namespaced: true,
  state: {
    selectedItem: null,
    orgs: []
  },
  getters: {
    getSelectedItem: state => state.selectedItem,
    getOrgs: state => state.orgs
  },
  mutations: {
    mutOrgs: (state, payload) => {
      state.orgs = payload 
    },
    muSelectedItem: (state, payload) => {
      state.selectedItem = payload 
    },
  },
  actions: {
    actSelectedItem: (context, payload) => {
      context.commit('muSelectedItem', payload)
    },
    // actSelectOrgs: (context, payload) => {
    actOrgs: (context) => {
      const sample = [
        {
          "name": "검색그룹",
          "id": "SEARCH",
          "type": "group"
        },
        {
          "name": "NLP그룹",
          "id": "NLP",
          "type": "group",
          "children": [
            {
              "name": "기반기술본부",
              "id": "NLP-BASETECH",
              "type": "bonbu"
            },
            {
              "name": "빅데이터본부",
              "id": "NLP-BIGDATA",
              "type": "bonbu"
            },
            {
              "name": "AI사업본부",
              "id": "NLP-AIBUSIN",
              "type": "bonbu",
              "children": [
                  {
                    "name": "영업팀",
                    "id": "NLP-AIBUSIN-SALES",
                    "type": "team"
                  },
                  {
                    "name": "AI1팀",
                    "id": "NLP-AIBUSIN-AI1",
                    "type": "team"
                  },
                  {
                    "name": "AI2팀",
                    "id": "NLP-AIBUSIN-AI2",
                    "type": "team"
                  },
                  {
                    "name": "AI3팀",
                    "id": "NLP-AIBUSIN-AI3",
                    "type": "team"
                  },
                  {
                    "name": "AI4팀",
                    "id": "NLP-AIBUSIN-AI4",
                    "type": "team"
                  },
                  {
                    "name": "AI5팀",
                    "id": "NLP-AIBUSIN-AI5",
                    "type": "team"
                  },
                  {
                    "name": "AI6팀",
                    "id": "NLP-AIBUSIN-AI6",
                    "type": "team"
                  },
                  {
                    "name": "AI7팀",
                    "id": "NLP-AIBUSIN-AI7",
                    "type": "team"
                  },
                  {
                    "name": "AI8팀",
                    "id": "NLP-AIBUSIN-AI8",
                    "type": "team"
                  }
                ]
            },
          ]
        },
        {
          "name": "AI그룹",
          "id": "AI",
          "type": "group"
        },
        {
          "name": "공용그룹",
          "id": "COMMON",
          "type": "group"
        }
      ]  
      context.commit('mutOrgs', sample)
    }
  },
}

export default OrgStoreTree

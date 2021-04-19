import { createSettersFromStateKeys } from '../utils/store-helper'

const initialState = {
  users: null,
  loading: false,
  userLoading: false,
  user: null,
}

//{} mówią o tym że bieżemy ten obiekt i wposujemy co wyciągamy z tego obiektu
export default ({ userApi }) => {
  const actions = {
    async fetchUsers({ commit }) {
      commit('setLoading', true)
      try {
        //nazywasz set + nazwa key w initialState
        //metoda commit służy do przypisania za pomocą 'set+'nazwaState', po przecinku tego co ma być wykonane
        // commit('setUsers', await userApi.getUsers())



        console.log(userApi)
        const data = [
          {
            "id": "0F8JIqi4zwvb77FGz6Wt",
            "lastName": "Fiedler",
            "firstName": "Heinz-Georg",
            "email": "heinz-georg.fiedler@example.com",
            "title": "mr",
            "picture": "https://randomuser.me/api/portraits/men/81.jpg"
          },
          {
            "id": "0P6E1d4nr0L1ntW8cjGU",
            "picture": "https://randomuser.me/api/portraits/women/74.jpg",
            "lastName": "Hughes",
            "email": "katie.hughes@example.com",
            "title": "miss",
            "firstName": "Katie"
          },
          {
            "id": "1Lkk06cOUCkiAsUXFLMN",
            "title": "mr",
            "lastName": "Aasland",
            "firstName": "Vetle",
            "picture": "https://randomuser.me/api/portraits/men/97.jpg",
            "email": "vetle.aasland@example.com"
          },
          {
            "id": "1OuR3CWOEsfISTpFxsG7",
            "picture": "https://randomuser.me/api/portraits/men/66.jpg",
            "lastName": "Vasquez",
            "email": "dylan.vasquez@example.com",
            "title": "mr",
            "firstName": "Dylan"
          },
          {
            "id": "1pRsh5nXDIH3pjEOZ17A",
            "lastName": "Vicente",
            "title": "miss",
            "firstName": "Margarita",
            "email": "margarita.vicente@example.com",
            "picture": "https://randomuser.me/api/portraits/women/5.jpg"
          },
          {
            "id": "3JAf8R85oIlxXd58Piqk",
            "email": "joey.oliver@example.com",
            "title": "mr",
            "firstName": "Joey",
            "lastName": "Oliver",
            "picture": "https://randomuser.me/api/portraits/men/61.jpg"
          },
          {
            "id": "5aZRSdkcBOM6j3lkWEoP",
            "picture": "https://randomuser.me/api/portraits/women/50.jpg",
            "email": "lilja.lampinen@example.com",
            "lastName": "Lampinen",
            "firstName": "Lilja",
            "title": "ms"
          },
          {
            "id": "5tVxgsqPCjv2Ul5Rc7gw",
            "email": "abigail.liu@example.com",
            "lastName": "Liu",
            "title": "miss",
            "picture": "https://randomuser.me/api/portraits/women/83.jpg",
            "firstName": "Abigail"
          },
          {
            "id": "6wy6UNkZueJfIUfq88d5",
            "picture": "https://randomuser.me/api/portraits/women/32.jpg",
            "firstName": "Melanie",
            "email": "melanie.pilz@example.com",
            "title": "miss",
            "lastName": "Pilz"
          },
          {
            "id": "7DbXNPWlNDR4QYVvFZjr",
            "email": "evan.carlson@example.com",
            "firstName": "Evan",
            "picture": "https://randomuser.me/api/portraits/men/80.jpg",
            "lastName": "Carlson",
            "title": "mr"
          },
          {
            "id": "8RQd4OVqvmV0I4UlWETQ",
            "email": "kitty.steward@example.com",
            "title": "ms",
            "firstName": "Kitty",
            "picture": "https://randomuser.me/api/portraits/women/78.jpg",
            "lastName": "Steward"
          },
          {
            "id": "8UfTdB7ctWt3Fl87d88Q",
            "firstName": "Vanessa",
            "picture": "https://randomuser.me/api/portraits/women/33.jpg",
            "email": "vanessa.ramos@example.com",
            "lastName": "Ramos",
            "title": "ms"
          },
          {
            "id": "8YL1aG0vwRBXTzeZ0jRC",
            "picture": "https://randomuser.me/api/portraits/women/85.jpg",
            "firstName": "Olaí",
            "email": "olai.gomes@example.com",
            "title": "mrs",
            "lastName": "Gomes"
          },
          {
            "id": "9N03J6vQj6MFq2UpUanW",
            "email": "constance.bourgeois@example.com",
            "lastName": "Bourgeois",
            "firstName": "Constance",
            "title": "miss",
            "picture": "https://randomuser.me/api/portraits/women/87.jpg"
          },
          {
            "id": "CNYttp1Jrgg3I2zfSeS4",
            "email": "kenneth.carter@example.com",
            "picture": "https://randomuser.me/api/portraits/men/40.jpg",
            "lastName": "Carter",
            "firstName": "Kenneth",
            "title": "mr"
          },
          {
            "id": "EiYwv4wPYXfKgEKyTUyN",
            "title": "mr",
            "firstName": "Sigmund",
            "picture": "https://randomuser.me/api/portraits/men/61.jpg",
            "lastName": "Myran",
            "email": "sigmund.myran@example.com"
          },
          {
            "id": "EvXSjRCdYryxUp3j1Akj",
            "picture": "https://randomuser.me/api/portraits/women/3.jpg",
            "email": "josefina.calvo@example.com",
            "lastName": "Calvo",
            "title": "mrs",
            "firstName": "Josefina"
          },
          {
            "id": "FLgxIsydJ28gBIIKZeMg",
            "email": "annabel.somby@example.com",
            "title": "ms",
            "firstName": "Annabel",
            "picture": "https://randomuser.me/api/portraits/women/35.jpg",
            "lastName": "Somby"
          },
          {
            "id": "FOxy7zUy2SiEN14mQazD",
            "lastName": "Brand",
            "title": "mr",
            "firstName": "Friedrich-Karl",
            "picture": "https://randomuser.me/api/portraits/men/7.jpg",
            "email": "friedrich-karl.brand@example.com"
          },
          {
            "id": "G19Ya7yxByl6bUXITXzT",
            "email": "sibylle.leibold@example.com",
            "firstName": "Sibylle",
            "picture": "https://randomuser.me/api/portraits/women/89.jpg",
            "title": "mrs",
            "lastName": "Leibold"
          }
        ]
        commit('setUsers', data)




        
      } finally {
        commit('setLoading', false)
      }
    },
    async fetchUser({ commit }, userId) {
      commit('setUserLoading', true)
      try {
      commit('setUser', await userApi.getUser(userId))
    } finally {
      commit('setUserLoading', false)
    }


      // console.log(userId)
      // const data = {
      //   "id": "0F8JIqi4zwvb77FGz6Wt",
      //   "phone": "0700-3090279",
      //   "lastName": "Fiedler",
      //   "firstName": "Heinz-Georg",
      //   "location": {
      //     "state": "Rheinland-Pfalz",
      //     "street": "4118, Schulstraße",
      //     "city": "Fellbach",
      //     "timezone": "-7:00",
      //     "country": "Germany"
      //   },
      //   "email": "heinz-georg.fiedler@example.com",
      //   "gender": "male",
      //   "title": "mr",
      //   "registerDate": "2020-03-07T00:42:32.221Z",
      //   "picture": "https://randomuser.me/api/portraits/men/81.jpg",
      //   "dateOfBirth": "1974-03-12T21:15:08.878Z"
      // }
      // commit('setUser', data)
    },
    async destroyUser({ commit }) {
      commit('setUser', null)
    },
    // async fetchLocation({ commit }) {
    //   commit('setLocation', await userApi.geocode())
    // }

  }

  const mutations = {}
  const getters = {}

  return {
    namespaced: true,
    //wypakowana lista initialState
    state: { ...initialState },
    actions,
    mutations: {
      ...createSettersFromStateKeys(initialState),
      ...mutations,
    },
    getters,
  }
}
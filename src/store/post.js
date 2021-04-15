import { createSettersFromStateKeys } from '../utils/store-helper'

const initialState = {
  posts: null,
  loading: false,
  post: null,
}

export default ({ postApi }) => {
  const actions = {
    async fetchPostsList({ commit }) {
      commit('setLoading', true)
      try {
        console.log(postApi)
        const data = 
        [
          {
            "owner": {
              "id": "uQrnqsqyh8FjSXAPc7oA",
              "email": "emilie.lambert@example.com",
              "title": "mrs",
              "picture": "https://randomuser.me/api/portraits/women/93.jpg",
              "firstName": "Emilie",
              "lastName": "Lambert"
            },
            "id": "UWdcOFTc7DfzOhI6LpI4",
            "image": "https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg",
            "publishDate": "2020-05-24T14:53:17.598Z",
            "text": "adult Labrador retriever",
            "tags": [
              "animal",
              "dog",
              "golden retriever"
            ],
            "link": "https://www.instagram.com/teddyosterblomphoto/",
            "likes": 43
          },
          {
            "owner": {
              "id": "t3k3dx7zDMAKjCEeXl9Q",
              "title": "mr",
              "picture": "https://randomuser.me/api/portraits/men/54.jpg",
              "firstName": "Marius",
              "email": "marius.larsen@example.com",
              "lastName": "Larsen"
            },
            "id": "VGyIwGVWeeurHv5bSZgx",
            "image": "https://img.dummyapi.io/photo-1510414696678-2415ad8474aa.jpg",
            "publishDate": "2020-05-24T07:44:17.738Z",
            "text": "ice caves in the wild landscape photo of ice near gray cliff",
            "tags": [
              "snow",
              "ice",
              "mountain"
            ],
            "link": null,
            "likes": 31
          },
          {
            "owner": {
              "id": "ykiaIBj7SJTlE0ITXFV9",
              "lastName": "Legrand",
              "firstName": "Charlotte",
              "email": "charlotte.legrand@example.com",
              "title": "ms",
              "picture": "https://randomuser.me/api/portraits/women/77.jpg"
            },
            "id": "gsMqbWehBe6UdwQz3h6U",
            "image": "https://img.dummyapi.io/photo-1515376721779-7db6951da88d.jpg",
            "publishDate": "2020-05-24T05:44:55.297Z",
            "text": "@adventure.yuki frozen grass short-coated black dog sitting on snow",
            "tags": [
              "dog",
              "pet",
              "canine"
            ],
            "link": null,
            "likes": 16
          },
          {
            "owner": {
              "id": "a9IzuhtufH0GNRAyHCoT",
              "firstName": "Karoline",
              "lastName": "Sviggum",
              "picture": "https://randomuser.me/api/portraits/women/61.jpg",
              "title": "mrs",
              "email": "karoline.sviggum@example.com"
            },
            "id": "RjkVphYP4p3N5SC5JOXh",
            "image": "https://img.dummyapi.io/photo-1581804928342-4e3405e39c91.jpg",
            "publishDate": "2020-05-23T22:56:11.424Z",
            "text": "Hiking with my dog in the woods. black labrador retriever on brown grass field during daytime",
            "tags": [
              "canine",
              "pet",
              "mammal"
            ],
            "link": "https://idiotknowledge.com/vc-es-prods/",
            "likes": 7
          },
          {
            "owner": {
              "id": "1pRsh5nXDIH3pjEOZ17A",
              "lastName": "Vicente",
              "title": "miss",
              "firstName": "Margarita",
              "email": "margarita.vicente@example.com",
              "picture": "https://randomuser.me/api/portraits/women/5.jpg"
            },
            "id": "5zNq7oqJ0RWtPcY5ZiWR",
            "image": "https://img.dummyapi.io/photo-1574457547512-5b1646994eea.jpg",
            "publishDate": "2020-05-23T18:52:32.613Z",
            "text": "Two boys hug their dogs in a leaf pile in the fall. smiling boys with dogs",
            "tags": [
              "dog",
              "human",
              "animal"
            ],
            "link": "https://www.flashesofun.com/",
            "likes": 28
          },
          {
            "owner": {
              "id": "GorKRYsi8zHkLq9siyfU",
              "title": "miss",
              "picture": "https://randomuser.me/api/portraits/women/13.jpg",
              "firstName": "Kayla",
              "lastName": "Bredesen",
              "email": "kayla.bredesen@example.com"
            },
            "id": "f8FuXRIKHhPN3kgcMIEf",
            "image": "https://img.dummyapi.io/photo-1498534928137-473daa67f5c4.jpg",
            "publishDate": "2020-05-23T14:42:22.808Z",
            "text": "Bone salt and pepper schnauzer puppy",
            "tags": [
              "dog",
              "animal",
              "pet"
            ],
            "link": null,
            "likes": 18
          },
          {
            "owner": {
              "id": "G19Ya7yxByl6bUXITXzT",
              "email": "sibylle.leibold@example.com",
              "firstName": "Sibylle",
              "picture": "https://randomuser.me/api/portraits/women/89.jpg",
              "title": "mrs",
              "lastName": "Leibold"
            },
            "id": "yQcszPMv7lCYE4Naw6aQ",
            "image": "https://img.dummyapi.io/photo-1576707064479-3139e7e8aace.jpg",
            "publishDate": "2020-05-23T12:55:22.576Z",
            "text": "Sleeping dogs lie two dogs lying on black textile",
            "tags": [
              "animal",
              "canine",
              "dog"
            ],
            "link": "http://studionorthcreative.com",
            "likes": 19
          },
          {
            "owner": {
              "id": "PVkLEL3izK4eY3HzVCZ9",
              "email": "emre.asikoglu@example.com",
              "firstName": "Emre",
              "title": "mr",
              "picture": "https://randomuser.me/api/portraits/men/23.jpg",
              "lastName": "Aşıkoğlu"
            },
            "id": "otWSAPSX6NFtFxjeVRgv",
            "image": "https://img.dummyapi.io/photo-1500879747858-bb1845b61beb.jpg",
            "publishDate": "2020-05-22T22:27:12.912Z",
            "text": "Dog in a forest at sunset dog in forest with sun rays",
            "tags": [
              "dog",
              "animal",
              "golden retriever"
            ],
            "link": "http://www.waguluz.de",
            "likes": 242
          },
          {
            "owner": {
              "id": "NnAaDOwHshqreJE34qfV",
              "lastName": "Hawkins",
              "firstName": "Tomothy",
              "title": "mr",
              "email": "tomothy.hawkins@example.com",
              "picture": "https://randomuser.me/api/portraits/men/48.jpg"
            },
            "id": "DsTBGsaCVcdzIrTCt3JQ",
            "image": "https://img.dummyapi.io/photo-1568572933382-74d440642117.jpg",
            "publishDate": "2020-05-22T20:05:03.653Z",
            "text": "black and white Husky",
            "tags": [
              "dog",
              "animal",
              "husky"
            ],
            "link": "https://instagram.com/ashgoldy",
            "likes": 79
          },
          {
            "owner": {
              "id": "jpxJ6CnDgBUcqmMTczMh",
              "email": "edina.barbosa@example.com",
              "firstName": "Édina",
              "title": "ms",
              "lastName": "Barbosa",
              "picture": "https://randomuser.me/api/portraits/women/28.jpg"
            },
            "id": "BedpuMf63tNGYR5bWLMc",
            "image": "https://img.dummyapi.io/photo-1579562243430-4732bcb09d91.jpg",
            "publishDate": "2020-05-22T07:50:38.093Z",
            "text": "Milo durmiendo después de un largo día de jugar en el río brown short coated dog lying on white textile",
            "tags": [
              "dog",
              "pet",
              "animal"
            ],
            "link": null,
            "likes": 17
          },
          {
            "owner": {
              "id": "mCynCk9ntQGzX9uxgqDx",
              "title": "mr",
              "firstName": "Leevi",
              "picture": "https://randomuser.me/api/portraits/men/67.jpg",
              "email": "leevi.savela@example.com",
              "lastName": "Savela"
            },
            "id": "ptjY6Vmu4lbzk9B4FgPO",
            "image": "https://img.dummyapi.io/photo-1568480541687-16c2f73eea4c.jpg",
            "publishDate": "2020-05-22T06:33:02.593Z",
            "text": "Gratitude short-coated tan dog on seashore",
            "tags": [
              "dog",
              "beach",
              "shoreline"
            ],
            "link": null,
            "likes": 12
          },
          {
            "owner": {
              "id": "5aZRSdkcBOM6j3lkWEoP",
              "picture": "https://randomuser.me/api/portraits/women/50.jpg",
              "email": "lilja.lampinen@example.com",
              "lastName": "Lampinen",
              "firstName": "Lilja",
              "title": "ms"
            },
            "id": "2tOsDzbDHVUKxItKon1w",
            "image": "https://img.dummyapi.io/photo-1517884467367-ac2e21e46d0b.jpg",
            "publishDate": "2020-05-22T03:10:54.820Z",
            "text": "@adventure.yuki peekaboo adult short-coated black dog selective focus photography",
            "tags": [
              "pet",
              "canine",
              "grey"
            ],
            "link": null,
            "likes": 43
          },
          {
            "owner": {
              "id": "IBeNBzh2TC0G3uNJTxfs",
              "lastName": "Roussel",
              "title": "mrs",
              "firstName": "Angelica",
              "picture": "https://randomuser.me/api/portraits/women/53.jpg",
              "email": "angelica.roussel@example.com"
            },
            "id": "xC6wSox6Se58XMOIW5VY",
            "image": "https://img.dummyapi.io/photo-1548658146-f142deadf8f7.jpg",
            "publishDate": "2020-05-21T22:15:26.266Z",
            "text": "front view of black and white puppy sitting on brown sofa",
            "tags": [
              "dog",
              "grey",
              "puppy"
            ],
            "link": "https://www.danlincoln.com",
            "likes": 92
          },
          {
            "owner": {
              "id": "b7rf3uChfwFsOWoUB686",
              "lastName": "Dubois",
              "picture": "https://randomuser.me/api/portraits/women/11.jpg",
              "firstName": "Cléa",
              "title": "miss",
              "email": "clea.dubois@example.com"
            },
            "id": "LfncXUomey78DvkFY3Ma",
            "image": "https://img.dummyapi.io/photo-1535008652995-e95986556e32.jpg",
            "publishDate": "2020-05-21T15:53:26.275Z",
            "text": "Random man walking with his dogs man and dogs on the seashore",
            "tags": [
              "human",
              "ocean",
              "nature"
            ],
            "link": "https://www.instagram.com/takemeoutphotography/",
            "likes": 15
          },
          {
            "owner": {
              "id": "uABrZcuHGJnanoxlt53c",
              "email": "elliot.walker@example.com",
              "lastName": "Walker",
              "picture": "https://randomuser.me/api/portraits/men/53.jpg",
              "title": "mr",
              "firstName": "Elliot"
            },
            "id": "0OiV6pelYdA8Y5k4zzt8",
            "image": "https://img.dummyapi.io/photo-1580734075803-ac9cdb54fb03.jpg",
            "publishDate": "2020-05-21T15:15:02.703Z",
            "text": "Majestic looking dog on a lake white and brown short coated dog on snow covered ground during daytime",
            "tags": [
              "dog",
              "canine",
              "animal"
            ],
            "link": null,
            "likes": 3
          },
          {
            "owner": {
              "id": "EiYwv4wPYXfKgEKyTUyN",
              "title": "mr",
              "firstName": "Sigmund",
              "picture": "https://randomuser.me/api/portraits/men/61.jpg",
              "lastName": "Myran",
              "email": "sigmund.myran@example.com"
            },
            "id": "R3J9hGpoqQ7JeHsWJxbp",
            "image": "https://img.dummyapi.io/photo-1558556249-076e42967a24.jpg",
            "publishDate": "2020-05-21T07:03:58.248Z",
            "text": "two puppies next to each other",
            "tags": [
              "dog",
              "animal",
              "canine"
            ],
            "link": null,
            "likes": 27
          },
          {
            "owner": {
              "id": "uABrZcuHGJnanoxlt53c",
              "email": "elliot.walker@example.com",
              "lastName": "Walker",
              "picture": "https://randomuser.me/api/portraits/men/53.jpg",
              "title": "mr",
              "firstName": "Elliot"
            },
            "id": "HmJ0SvFnl8FY84bcKnzq",
            "image": "https://img.dummyapi.io/photo-1556526588-a0bd9b5a42c3.jpg",
            "publishDate": "2020-05-21T02:10:33.421Z",
            "text": "two white dogs",
            "tags": [
              "canine",
              "dog",
              "pet"
            ],
            "link": null,
            "likes": 54
          },
          {
            "owner": {
              "id": "q2PJeghNP3z6PYLbkJlq",
              "picture": "https://randomuser.me/api/portraits/men/41.jpg",
              "title": "mr",
              "lastName": "Degner",
              "firstName": "Eckard",
              "email": "eckard.degner@example.com"
            },
            "id": "F5AoCjgcUgDye9uX22jA",
            "image": "https://img.dummyapi.io/photo-1575495679620-2ff225c75d5a.jpg",
            "publishDate": "2020-05-20T21:49:33.321Z",
            "text": "A picture of my golden doodle, Yogi Bear white dog",
            "tags": [
              "pet",
              "animal",
              "mammal"
            ],
            "link": null,
            "likes": 20
          },
          {
            "owner": {
              "id": "7DbXNPWlNDR4QYVvFZjr",
              "email": "evan.carlson@example.com",
              "firstName": "Evan",
              "picture": "https://randomuser.me/api/portraits/men/80.jpg",
              "lastName": "Carlson",
              "title": "mr"
            },
            "id": "GuAuBwKRGVYCr3cxyp6r",
            "image": "https://img.dummyapi.io/photo-1549937334-e94f33e69787.jpg",
            "publishDate": "2020-05-20T21:00:40.371Z",
            "text": "long-coated brown dog",
            "tags": [
              "dog",
              "pet",
              "mammal"
            ],
            "link": null,
            "likes": 5
          },
          {
            "owner": {
              "id": "6wy6UNkZueJfIUfq88d5",
              "picture": "https://randomuser.me/api/portraits/women/32.jpg",
              "firstName": "Melanie",
              "email": "melanie.pilz@example.com",
              "title": "miss",
              "lastName": "Pilz"
            },
            "id": "43cuR7ZUPkwQp8GU7u3f",
            "image": "https://img.dummyapi.io/photo-1564849444446-f876dcef378e.jpg",
            "publishDate": "2020-05-20T18:51:23.478Z",
            "text": "A feral cat short-fur gray and orange cat on green grass during daytime",
            "tags": [
              "plant",
              "mammal",
              "pet"
            ],
            "link": null,
            "likes": 40
          }
        ]
        commit('setPosts', data)
      //   commit('setPosts', await postApi.getPostsList())
      } finally {
        commit('setLoading', false)
      }
    },
    // async fetchSinglePost({ commit }, postId) {
    //   commit('setPost', await postApi.getSinglePost(postId))
    // },
    // async fetchUserPosts({ commit }, userId) {
    //   commit('setUserPosts', await postApi.getUserPostsList(userId))
    // },
    // async getPostsByTag({ commit }, tagTitle) {
    //   commit('setTagPosts', await postApi.getPostsByTag(tagTitle))
    // }
  }

  const mutations = {}
  const getters = {}

  return {
    namespaced: true,
    state: { ...initialState },
    actions,
    mutations: {
      ...createSettersFromStateKeys(initialState),
      ...mutations,
    },
    getters,
  }
}
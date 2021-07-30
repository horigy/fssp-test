export default {
    state: {
      filialsList: [
        {
            id: 1,
            name: 'Москва',
        },
        {
            id: 2,
            name: 'Московская область',
        },
        {
            id: 3,
            name: 'Санкт-петербург',
        },
        {
            id: 4,
            name: 'Краснодар',
        },
        {
            id: 5,
            name: 'Екатеринбург',
        },
        {
            id: 6,
            name: 'Челябинск',
        },
        {
            id: 7,
            name: 'Казань',
        },
        {
            id: 8,
            name: 'Красноярск',
        },
        {
            id: 9,
            name: 'Республика Дагестан',
        },
        {
            id: 10,
            name: 'Республика Башкортостан',
        },
        {
            id: 11,
            name: 'Ростов-на-Дону',
        },
        {
            id: 12,
            name: 'Самара',
        },
        {
            id: 13,
            name: 'Нижний Новгород',
        },
        {
            id: 14,
            name: 'Новосибирск',
        },
        {
            id: 15,
            name: 'Пермский край',
        }
      ]
    },
    mutations: {},
    actions: {},
    getters: {
      getFilials (state) {
        return state.filialsList
      }
    }
  }
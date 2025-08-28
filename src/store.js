export const initialStore = () => {
  return {
    message: null,
    todos: [
      { id: 1, title: "Make the bed", background: null },
      { id: 2, title: "Do my homework", background: null }
    ],
    starWars: {
      people: [],
      vehicles: [],
      planets: [],
      favorites: []
    }
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task': {
      const { id, color } = action.payload
      return {
        ...store,
        todos: store.todos.map((todo) =>
          (todo.id === id ? { ...todo, background: color } : todo)
        )
      };
    }
    case 'set_starwars': {
      const { feature, results } = action.payload;
      return {
        ...store,
        starWars: {
          ...store.starWars,
          [feature]: [...results]
        }
      }
    }
    case 'add_favorite': {
      const { featureFav, name, uid } = action.payload
      return {
        ...store,
        starWars: {
          ...store.starWars,
          favorites: [...store.starWars.favorites, { featureFav, name, uid }]
        }
      }
    }
    case 'delete_favorite': {
      const favoritesUpdate = action.payload
      return {
        ...store,
        starWars: {
          ...store.starWars,
          favorites: [...favoritesUpdate]
        }
      }
    }
    default:
      throw Error('Unknown action.');
  }
}

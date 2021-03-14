const ListBook = {
  setup (props, context) {
    const books = Vue.reactive([])
    const fetchBooks = () => {
      fetch('http://localhost:5000/books.json')
        .then(response => {
          return response.json()
        })
        .then(data => {
          books.push(...data)
        })
    }
    fetchBooks()

    return {
      books
    }
  },
  template: `
    <div>
      <h2> List Book </h2>
      <ul>
        <li v-for="(book, index) in books">
          <router-link :to="'/book/'+book.id">{{ book.title }}</router-link>
        </li>
      </ul>
    </div>
  `
}

export default ListBook
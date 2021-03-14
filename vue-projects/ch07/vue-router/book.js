const Book = {
  props: ['id'],
  setup (props, context) {
    const book = Vue.reactive({})
    const route = VueRouter.useRoute()
    const { id } = route.params // get params id
    const router = VueRouter.useRouter()

    const fetchBook = (id) => {
      fetch('http://localhost:5000/books.json')
        .then(response => {
          return response.json()
        })
        .then(data => {
          const currentBook = data.find(book => book.id == id);
          if (currentBook) Object.assign(book, { ...currentBook })
          else {
            alert("Buku tidak ditemukan")
            router.push('/list-book')
          }
        })
    }

    if (id > 0) fetchBook(id)

    return {
      book
    }
  },
  template: `
    <div>
      <h2> Detail Book </h2>
      <p>{{ book }}</p>
    </div>
  `
}

export default Book
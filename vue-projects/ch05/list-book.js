export const ListBook = {
  data () {
    return {
      books: ['laravel', 'Vue']
    }
  },
  template: `
    <ul>
      <li v-for="(book, index) in books">
        <slot :book="book"></slot>
      </li>
    </ul>
  `
}
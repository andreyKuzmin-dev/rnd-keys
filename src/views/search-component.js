export default {
    props: {title: String},
    name: 'search-component',
    data() {
        return {
            searchStr: '',
        }
    },
    mounted() {
        
    },
    methods: {
        search() {
            this.$emit('searchByAuthor', {author: this.searchStr});
        },
        searchByEnter(e) {
            if (e.key !== 'Enter') return;
            this.search();
        }
    },
}
export default {
    name: 'select-component',
    props: {title: String, options: Array},
    data() {
        return {
            selected: '',
            showOptions: false,
        }
    },
    mounted() {
        
    },
    methods: {
        openOptions() {
            if (this.showOptions) {
                this.showOptions = false;
                return;
            }
            this.showOptions = true;
        },
        closeOptions() {
            this.showOptions = false;
        },
        selectOption(option) {
            this.selected = option;
            this.closeOptions();
            this.$emit('searchByGame', {game: this.selected});
        }
    },
}
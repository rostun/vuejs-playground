export default {
   data () {
      return {
         food_input: '',
         end_input: '',
      }
   },
   methods: {
      DisplayFood() {
         this.end_input = this.food_input;
      },
   },
};
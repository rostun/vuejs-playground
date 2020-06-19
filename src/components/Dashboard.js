import axios from 'axios';

export default {
   data() {
      return {
         select_input: '',
         food_input: '',
         options: {},
      }
   },
   beforeMount() {
      this.DisplayFood();
   },
   methods: {
      DisplayFood() {
         axios.get('https://habitica.com/api/v3/content', {
            crossDomain: true,
            transformResponse: [
               (data) => {
                  let _res = JSON.parse(data);
                  return _res.data;
               }
            ]
         })
         .then((response) => {
            this.food_input = this.select_input;
            this.options = response.data.food;
            this.$emit('foodData', response.data.food);
            this.$emit('petData', response.data.petInfo);
         });
      },
      SubmitFood() {
         this.$emit('foodInput', this.food_input);
      }
   },
};
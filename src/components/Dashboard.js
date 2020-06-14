import axios from 'axios';

export default {
   data() {
      return {
         search_input: '',
         food_input: '',
      }
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
            this.$emit('foodInput', this.food_input);
            this.$emit('foodData', response.data.food);
            this.$emit('petData', response.data.petInfo);
         });

         this.food_input = this.search_input;
      },
   },
};
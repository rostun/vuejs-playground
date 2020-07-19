import axios from 'axios';

export default {
   data() {
      return {
         select_input: null,
         food_input: null,
         pet_input: null,
         food_options: {},
         pet_options: {},
      }
   },
   beforeMount() {
      this.DisplayOptions();
   },
   methods: {
      DisplayOptions() {
         axios.get('https://habitica.com/api/v3/content', {
            transformResponse: [
               (data) => {
                  let _res = JSON.parse(data);
                  return _res.data;
               }
            ]
         })
         .then((response) => {
            this.food_options = response.data.food;
            this.pet_options = response.data.petInfo;
            this.$emit('foodData', response.data.food);
            this.$emit('petData', response.data.petInfo);
         });
      },
      SubmitFood() {
         this.select_input = this.food_input;
         this.$emit('foodInput', this.food_input);
      },
      SubmitPet() {
         this.select_input = this.pet_input;
         this.$emit('petInput', this.pet_input);
      }
   },
};
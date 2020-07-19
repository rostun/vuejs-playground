export default {
   props: {
      pet_data: { type: Object },
      food_data: { type: Object },
      food_input: { type: Object },
      pet_input: { type: Object },
   },
   data() {
      return {
         pets_filtered: [],
         food_filtered: [],
      }
   },
   methods: {
      filterFood() {
         const _foods = Object.values(this.food_data);
         
         if(!_foods.length || this.food_input === null) return [];
         
         return _foods.filter((food) => food.key === this.food_input.key);
      },
      filterPets() {
         const _pets = Object.values(this.pet_data);

         if(!_pets.length || this.food_input === null) return [];
         if(this.food_input.key === 'Saddle') return _pets;

         return _pets.filter((pet) =>{
            if(pet.type === 'special') return false;
            return pet.potion.toLowerCase() === this.food_input.target.toLowerCase()
         });
      },
   }
};
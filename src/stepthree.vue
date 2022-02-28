<template>
<div v-if="step3">
<Form @submit="onSubmit"  v-slot="{ errors }" class="formstyle">
                    
                        <div class="flex justify-between items-center gap-2">

                            <!-- Industries -->
                            <div class="flex flex-col w-1/2 gap-y-1">
                                <label for="profile_type">Sector/ Industry Interests (Select Multiple)</label>
                                <Field as="select" class="rounded-md border-gray-300 sectorIn"   name="preferred_college_locations_test" multiple="multiple">
                                    <option v-for="industrie in industries" v-bind:value="industrie.id" :key="industrie.id"> {{industrie.name}}</option>
                                     
                                      
                                </Field>

                                <div class="invalid-feedback">{{errors.preferred_college_locations_test}}</div>
                                 
                            </div>

                            <!-- Industries streams-->
                            <div class="flex flex-col w-1/2 gap-y-1">
                                <label for="profile_type">Stream Interests (Select Multiple)</label>
                                <Field as="select" class="rounded-md border-gray-300 streamIn"   name="preferred_college_locations_test" multiple="multiple">
                                    <option v-for="stream in streams" v-bind:value="stream.id" :key="stream.id"> {{stream.name}}</option>
                                      
                                </Field>

                                <div class="invalid-feedback">{{errors.preferred_college_locations_test}}</div>
                                 
                            </div>

                             
                             
                        </div>


                        <div class="flex justify-between items-center gap-2">

                            <!-- Specialization specialization-->
                            <div class="flex flex-col w-1/2 gap-y-1">
                                <label for="profile_type">Specialization Interests (Select Multiple)</label>
                                <Field as="select" class="rounded-md border-gray-300 specIn"   name="preferred_college_locations_test" multiple="multiple">
                                     <option v-for="special in specialization" v-bind:value="special.id" :key="special.id"> {{special.name}}</option>
                                      
                                </Field>

                                <div class="invalid-feedback">{{errors.preferred_college_locations_test}}</div>
                                 
                            </div>

                            <!-- Career  careers-->
                            <div class="flex flex-col w-1/2 gap-y-1">
                                <label for="profile_type">Career Interests (Select Multiple)</label>
                                <Field as="select" class="rounded-md border-gray-300 cI"   name="preferred_college_locations_test" multiple="multiple">
                                    <option v-for="career in careers" v-bind:value="career.id" :key="career.id"> {{career.name}}</option>
                                      
                                </Field>

                                <div class="invalid-feedback">{{errors.preferred_college_locations_test}}</div>
                                 
                            </div>

                             
                             
                        </div>

                        <div class="flex justify-between items-center gap-2">

                            <!-- Specialization specialization-->
                            <div class="flex flex-col w-1/2 gap-y-1">
                                <label for="profile_type">Select Your Interests</label>
                                <Field as="select" class="rounded-md border-gray-300 specIn"   name="preferred_college_locations_test" multiple="multiple">
                                     <option v-for="special in specialization" v-bind:value="special.id" :key="special.id"> {{special.name}}</option>
                                      
                                </Field>

                                <div class="invalid-feedback">{{errors.preferred_college_locations_test}}</div>
                                 
                            </div>

                            <!-- Career  careers-->
                            <div class="flex flex-col w-1/2 gap-y-1">
                                <label for="profile_type">Select Your Top 3 Skills</label>
                                <Field as="select" class="rounded-md border-gray-300 cI"   name="preferred_college_locations_test" multiple="multiple">
                                    <option v-for="career in careers" v-bind:value="career.id" :key="career.id"> {{career.name}}</option>
                                      
                                </Field>

                                <div class="invalid-feedback">{{errors.preferred_college_locations_test}}</div>
                                 
                            </div>

                             
                             
                        </div>

                        


                         

                         
                        <div class="flex flex-col">     
                            <div class="mt-2 w-full flex space-x-3">
                                <button v-on:click="cancel2" class="py-3 px-16 font-medium text-gray-700 border border-gray-300 rounded-md" type="button">Cancel</button>
                                <button class="py-3 px-16 font-medium bg-dark-blue text-gray-100 text-gray shadow-lg rounded-md" type="submit">Save</button>

                                <p v-if="loading" class="plswait" style="color:green">Please Wait...<i class="fa fa-spinner fa-spin" style="font-size:24px"></i></p>
                            </div>
                        </div>
                    </form>
                    </div>
</template>

<style type="text/css">
  .invalid-feedback{
    color: red;
  }
</style>

<script>
import auth from './auth'

import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';



export default {


  name: 'stepthree',
  components: {
  
   Form,
   Field,
 
  
     
  },data(){

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    //const schema = Yup.object().shape();

     
    return {
        loading: false,
        "step3": true,
        "industries":'',
        "streams":'',
        "specialization":'',
        "careers":'',
        "softskills":'',
        
    }
  },methods:{

   
    onSubmit(values){

            // const image = e.target.files[0];
            // console.log(image); return false;

            auth.post('v1/update_basic_step',values).then((response) => {
                //console.log(response);
                this.$toast.success("You have Successfully Updated!");
                auth.get('v1/user').then((response) => {
                    this.form1 = false;
                    this.formDetail1 = true;
                    this.user = response.data.data[0];
                })

            });
            // display form values on success
            // alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
        },
 
    click(){
        this.form1 = !this.form1;
        //this.formDetail1 = false;
        },
    

    cancel2(){
        //alert();
        this.step3 = false;
        //this.formDetail1 = true;
    }
     


    
  },mounted(){

        // industries
        auth.get('v1/industries').then((response) => {
            this.industries = response.data.data;
            //console.log('>>>>>>>>',this.industries)
        })
        auth.get('v1/education-streams').then((response) => {
            this.streams = response.data.data;
           // console.log('>>>>>>>>',this.streams)
        })
        auth.get('v1/specialization-streams').then((response) => {
            this.specialization = response.data.data;
           // console.log('>>>>>>>>',this.specialization)
        })

        auth.get('v1/careers').then((response) => {
            this.careers = response.data.data;
            //console.log('>>>>>>>>',this.careers)
        })
        auth.get('v1/hard-skills').then((response) => {
            this.softskills = response.data.data;
            console.log('>>>>>>>>',this.softskills)
        })
     
        $('.sectorIn').select2({placeholder: "Select"});
        $('.streamIn').select2({placeholder: "Select"});
        $('.specIn').select2({placeholder: "Select"});
        $('.cI').select2({placeholder: "Select"});
        
  }
   }
</script>

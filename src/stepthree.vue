<template>
<div v-if="step3">
<Form @submit="onSubmit" ref="ref"  v-slot="{ errors }" class="formstyle">
                    
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
                                <Field as="select" class="rounded-md border-gray-300 specIn sp"   name="preferred_college_locations_test" multiple="multiple">
                                     <option v-for="hskill in hard_skills" v-bind:value="hskill.id" :key="hskill.id"> {{hskill.name}}</option>
                                      
                                </Field>

                                <div class="invalid-feedback">{{errors.preferred_college_locations_test}}</div>
                                 
                            </div>

                            <!-- Career  careers-->
                            <div class="flex flex-col w-1/2 gap-y-1">
                                <label for="profile_type">Select Your Top 3 Skills</label>
                                <Field as="select" class="rounded-md border-gray-300 cI sftskill"   name="preferred_college_locations_test" multiple="multiple">
                                    <option v-for="softskill in softskills" v-bind:value="softskill.id" :key="softskill.id"> {{softskill.name}}</option>
                                      
                                </Field>

                                <div class="invalid-feedback">{{errors.preferred_college_locations_test}}</div>
                                 
                            </div>

                             
                             
                        </div>
                        <h3>Qualified Entrance Exam</h3>
                         <div class="flex justify-between items-center gap-2" v-for="(input,k) in inputs" :key="k">

                            <!-- Specialization specialization-->
                            <div class="flex flex-col w-1/3 gap-y-1">
                                <label for="profile_type">Exam {{k+1}}</label>
                                <select as="select" class="rounded-md border-gray-300 exam ff"   name="preferred_college_locations_test" :id="'sel_'+k">
                                    <option value="" selected>Select</option>
                                     <option v-for="exam in exams" v-bind:value="exam.id" :key="exam.id"> {{exam.name}}</option>
                                      
                                </select>
                                 <span>
                            <i style="color: white" class="fa fa-plus1" @click="add(k)" v-show="k == inputs.length-1">Add</i> 
                            <i style="color: white" class="fa fa-remove1" @click="remove(k)" v-show="k || ( !k && inputs.length > 1)">Remove</i>

                            </span>
                                 
                                 
                            </div>


                             <div class="flex flex-col w-1/3 gap-y-1" style="">
                                <label for="profile_type">Score Type</label>
                                
                                <select as="select" class="rounded-md border-gray-300 type"   name="preferred_college_locations_test" :id="k">
                                     <option value="" selected>select</option>
                                     <option value="percentage">Percentage</option>
                                     <option value="grade">Grade</option>
                                     <option value="cgpa">Cgpa</option>
                                      
                                </select>
                                 <span>
                            <i style="color: white" class="fa fa-plus1" @click="add(k)" v-show="k == inputs.length-1">Add</i> 
                            <i style="color: white" class="fa fa-remove1" @click="remove(k)" v-show="k || ( !k && inputs.length > 1)">Remove</i>

                            </span>
                                 
                                 
                            </div>



                            <!-- Career  careers-->
                            <div class="flex flex-col w-1/3 gap-y-1">
                                <label for="profile_type">Score</label>
                                <div :class='"common A"+k'>
                                    <Field :class="'rounded border-gray-300 d score'+k" type="text"   name="percentage" placeholder="71.4%" ></Field>
                                </div>


                                <div :class='"common B"+k' style="display: none">
                                    <Field as="select" :class="'rounded border-gray-300 d score'+k"   name="preferred_college_locations_test">
                                     <option  v-for="(g, i) in grade" :value="g">{{g}}</option>
                                      
                                      
                                </Field>
                                </div>
                                
                                <div :class='"common C"+k' style="display: none">
                                    <Field as="select" :class="'rounded border-gray-300 d score'+k"   name="preferred_college_locations_test">
                                     <option  v-for="(n, i) in 10" :value="n">{{i+1}}</option>
                                      
                                      
                                </Field>
                                </div>
                                 
                                 <span>
                            <i style="color: #023a9b;" class="fa fa-plus-circle" @click="add(k)" v-show="k == inputs.length-1"></i>&nbsp;
                            <i style="color: red" class="fa fa-minus-circle" @click="remove(k)" v-show="k || ( !k && inputs.length > 1)"></i>

                            </span>
                            </div>
                        

                            
                                 
                             

                            
                             

                             
                             
                        </div>





                    <!-- <div class="flex justify-between items-center gap-2">

                    <div class="form-group" v-for="(input,k) in inputs" :key="k">
                    <input type="text" class="form-control" v-model="input.name">
                    <span>
                    <i class="fas fa-minus-circle" @click="remove(k)" v-show="k || ( !k && inputs.length > 1)"></i>
                    <i class="fas fa-plus-circle" @click="add(k)" v-show="k == inputs.length-1"></i>
                    </span>
                    </div>
                    </div> -->

                        


                         

                         
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
  .fa {
     
    cursor: pointer;
}
.border-gray-300 {
    
    height: 35px;
    padding-top: 4px;
}
select.rounded.border-gray-300.d {
    width: 275px;
}
</style>

<script>





 
    $(document).on('change','.type',function() {
            var id = $(this).attr('id');
            var val = $(this).val();
           // alert(val);
            $('#'+id).val(val);

            if(val =="grade"){
                $('.A'+id).hide();
                $('.B'+id).show();
                $('.C'+id).hide();
            }else if(val =="cgpa"){
                //alert('cg')
                $('.A'+id).hide();
                $('.B'+id).hide();
                $('.C'+id).show();
            }else if(val =="percentage"){
                $('.A'+id).show();
                $('.B'+id).hide();
                $('.C'+id).hide();
            }
            
             
        })

 

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
        "grade":['A','A+',"B","B+","C","F"],
        "exams":'',
        "examval":'',
        "streams":'',
        "specialization":'',
        "careers":'',
        "softskills":'',
        "hard_skills":'',

        inputs: [
            {
                name: 'rrr'
            }
        ]
        
    }
  },methods:{

    refresh(){
        setTimeout( function(){


            //alert();
            //$('.exam').select2({placeholder: "Select"});
            $('.score').select2({placeholder: "Select"});
            },0);
            
    },

    add(index) {
            this.refresh();



            this.inputs.push({ name: '' });

            
            
        },
        remove(index) {
            this.inputs.splice(index, 1);
        },

   
    onSubmit(values){

        var examId =[];
        $('.ff').each(function(index, value) {
            var val1 = $("#sel_"+index).val();
            var type = $("#"+index).val();
            var score = $(".score"+index).val();

            if(type =="grade"){

                var obj = {
                "entrance_exam_id":val1,
                "score_type":type,
                "score_in_grade":score,
                }

                 
            }else if(type =="cgpa"){
                var obj = {
                "entrance_exam_id":val1,
                "score_type":type,
                "score_in_cgpa":score,
                }
                
            }else if(type =="percentage"){
                 var obj = {
                "entrance_exam_id":val1,
                "score_type":type,
                "score_in_percentage":score,
                }
            }

            

            examId.push(obj);
        });

            //  var examId =[];

            // examId.push($('.exam').val());
            let array = {
                "hard_skills":$('.sp').val(),
                "soft_skills":$('.sftskill').val(),
                "specialization_interests":$('.specIn').val(),
                "education_stream_interests":$('.streamIn').val(),
                "industry_interests":$('.sectorIn').val(),
                "career_interests":$('.cI').val(),
                "entrance_exams":examId,
                
            }


         console.log(array);

         //return

             
            auth.post('v1/update_extended_skills_interests',array).then((response) => {
                //console.log(response);
                this.$toast.success("You have Successfully Updated!");
                // auth.get('v1/user').then((response) => {
                //     this.form1 = false;
                //     this.formDetail1 = true;
                //     this.user = response.data.data[0];
                // })

            });
            // display form values on success
            // alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
        },
 
    click(){
        this.form1 = !this.form1;
        //this.formDetail1 = false;
        },
    

    cancel2(){
        //  alert();
        this.step3 = false;
        //this.formDetail1 = true;
    }
     


    
  },mounted(){

        
        //$('#sel_0').val(1);
        $(document).on('change','.ff',function() {
            var id1 = $(this).attr('id');
            var val1 = $(this).val();
            //alert(val1);
            $(this).val(val1);
   
        })


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
        auth.get('v1/soft-skills').then((response) => {
            this.softskills = response.data.data;
            //console.log('>>>>>>>>',this.softskills)
        })

        auth.get('v1/hard-skills').then((response) => {
            this.hard_skills = response.data.data;
            //console.log('>>>>>>>>',this.softskills)
        })

        auth.get('v1/exams/certifications').then((response) => {
            //this.softskills = response.data.data;
            //console.log('>>>>>>>>',certifications)
        })

        auth.get('v1/exams/entrance').then((response) => {
           // this.softskills = response.data.data;
            //console.log('>>>>>>>>',entrance)
        })

        auth.get('v1/exams').then((response) => {
            this.exams = response.data.data;
            //console.log('>>>>>>>>',this.exams)
        })
     
        $('.sectorIn').select2({placeholder: "Select"});
        $('.streamIn').select2({placeholder: "Select"});
        $('.specIn').select2({placeholder: "Select"});
        $('.cI').select2({placeholder: "Select"});
        this.refresh();
       // $('#sel_0 option[value="51"]').prop('selected', true)
        //$("#sel_0 option[value='1']").attr('selected', 'selected');


        
  }
   }
</script>

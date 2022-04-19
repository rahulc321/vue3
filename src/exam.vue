<template>
<Header />
<!-- For Loader -->
<loading v-model:active="loader" :can-cancel="false" />
<!-- For Loader -->
<section class="container">
    <nav class="flex mt-9" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 desktop:space-x-3">
        <li class=""> <a href="#" class="text-gray-500 hover:text-gray-700"> Home </a> </li>
        <li class="flex items-center">
          <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          <router-link to="/dashboard">
          <a href="javascript:;" class="text-gray-600 hover:text-gray-700 ml-1 desktop:ml-2 text-sm font-medium">My Dashboard</a>
          </router-link>
        </li>
        <li aria-current="page" class="flex items-center">
          <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          <span class="text-gray-400 ml-1 desktop:ml-2 text-sm font-medium">My Exam</span>
        </li>
      </ol>
      </nav>
  </section>


<div class="container mt-8" v-if="f">
<center>
  <p class="text-dark-blue text-sm desktop:text-lg">To find exam that match your profile, Please use "Find my Exams" button below</p>
  <button v-on:click="search" class="w-full bg-dark-blue px-8 py-2 rounded-lg text-white tablet:w-1/6 desktop:ml-1">Find my Exams</button></center>
</div>

  <!-- Search form -->
  <div class="container mt-8" v-if="a">
  


    <h2 class="text-2xl">Filters:</h2>
    <form action="" class="mt-3" @submit="search">
      <div class="flex space-y-3 flex-col tablet:w-full tablet:flex-row tablet:flex-wrap tablet:gap-y-4 tablet:space-y-0">
        <div class="flex items-center gap-x-2 tablet:w-1/3">
          <label class="" for="profile_type">Exam Label</label>
          <select class="w-4/5 flex-1 rounded-md border-gray-300" v-model="examLabel" id="profile_type">
            <option value="NATIONAL" selected="">National</option>
             
          </select>
        </div>
        
        <div class="flex items-center gap-x-6 tablet:w-1/3">
          <label class="w-1/5 tablet:pl-2" for="profile_type">Govt./Private</label>
          <select class="w-4/5 flex-1 rounded-md border-gray-300" v-model="is_govt"  id="profile_type">
            <option value="1">Govt</option>
            <option value="0">Private</option>
          </select>
        </div>

        <div class="flex items-center gap-x-2 tablet:w-1/3">
          <label class="w-1/1 tablet:pl-1" for="profile_type">Type Of exam</label>
          <select class="w-2/2 flex-1 rounded-md border-gray-300" v-model="type"  id="profile_type">
            <option value="CERTIFICATION">CERTIFICATION</option>
            <option value="Entrance Exam">Entrance Exam</option>
          </select>
        </div>

        <div class="flex justify-between items-center gap-3 tablet:w-full desktop:w-1/2">
          <div class="flex w-1/2 items-center gap-x-2">
            <label class="" for="profile_type">Exam Rating</label>
            <select class="flex-grow rounded-md border-gray-300" v-model="hot_rating" name="profile_type" id="profile_type">
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div class="flex w-1/2 items-center gap-x-2">
            <label class="" for="profile_type">matchScore</label>
            <select class="flex-grow rounded-md border-gray-300" v-model="match_score" name="profile_type" id="profile_type">
              <option value="40+">40+</option>
              <option value="40-">40-</option>
            </select>
          </div>
        </div>


        <!-- Filter properties -->
        <div class="absolute top-30 right-10 shadow-lg bg-white p-5 w-100 min-h-40 rounded-lg z-10"   v-if="isApply">
           
           <div class="flex justify-between items-center gap-2">

            <div class="flex flex-col w-1/2 gap-y-1">
                <label for="profile_type"> Conducted By</label>
                <select   class="rounded-md border-gray-300" name="gender" id="profile_type"  >
                <option value="" selectted>Select</option>
                  <option value="Amazon">Amazon</option>
                   
                </select>
                 
              </div>

              <div class="flex flex-col w-1/2 gap-y-1">
                <label for="profile_type"> Mode of Exam</label>
                <select   class="rounded-md border-gray-300" name="gender" id="profile_type"  >
                <option value="" selectted>Select</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                   
                </select>
                 
              </div>  
               
            </div>


             <div class="flex justify-between items-center gap-2">

            <div class="flex flex-col w-1/2 gap-y-1">
                <label for="profile_type">Defficulty Label</label>
                <select   class="rounded-md border-gray-300" name="gender" id="profile_type"  >
                <option value="" selectted>Select</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                 
              </div>

              <div class="flex flex-col w-1/2 gap-y-1">
                <label for="profile_type">Applibale For</label>
                <select   class="rounded-md border-gray-300" name="gender" id="profile_type"  >
                <option value="" selectted>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">other</option>
                </select>
                 
              </div>  
               
            </div>

            <div class="flex justify-between items-center gap-2">

            <div class="flex flex-col w-1/2 gap-y-1">
                <label for="profile_type">Education Stream</label>
                <select   class="rounded-md border-gray-300" name="gender" id="profile_type"  >
                <option value="" selectted>Select</option>
                <option  v-for="stream in streams" :value="stream.id" :key="stream.id">{{stream.name}}</option>
                </select>
                 
              </div>

                
               
            </div>

            <button type="reset" v-on:click="apply" class="border-b text-blue-600 text-sm border-blue-600">Apply</button>
             
             
           
          <span class="absolute top-0 right-0" x-on:click="isShowing = false">
            <svg v-on:click="apply" class="w-12 h-12 cursor-pointer" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15.5" cy="15.5002" r="7.57773" transform="rotate(45 15.5 15.5002)" fill="#DCF6FF" stroke="#95DCF4" stroke-width="0.415051" stroke-linecap="round"/>
              <rect x="17.8613" y="12.5322" width="1.24515" height="7.47091" transform="rotate(45 17.8613 12.5322)" fill="#003A9B"/>
              <rect x="18.7419" y="17.5215" width="1.24515" height="7.47091" transform="rotate(135 18.7419 17.5215)" fill="#003A9B"/>
            </svg>              
          </span>
        </div>



        <button class="w-full bg-dark-blue px-8 py-2 rounded-lg text-white tablet:w-1/6 desktop:ml-5">Search</button>
        <a href="javascript:;" v-on:click="hideshow" class="hidden tablet:flex items-center ml-20 border-gray-500 border-b px-2">
          More Filter
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" width="24" height="24"
            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>
    </form>

    <div class="mt-5" v-if="noresult">
      <!-- Empty search results -->
      <div class="relative p-12 w-3/5 tablet:text-center tablet:pl-24 desktop:w-full">
        <p class="text-dark-blue text-sm desktop:text-lg">No results yet. Please search to find matching college!! </p>
        <img class="absolute top-6 right-0 tablet:left-8 tablet:transform tablet:-scale-x-1 desktop:left-auto desktop:right-1/4 desktop:scale-x-100 " src="./assets/images/spiral_arrow.svg" alt="">
      </div>
    </div>
  </div>


  <!-- Filter result -->
  <section class="container mt-8" v-if="!noresult">
    <!-- Heading & Filter-->
     
    <!-- Certificate Table -->
    <div class="overflow-x-auto bg-white rounded-lg shadow">
      <table class="border-collapse table-auto w-full whitespace-no-wrap bg-white relative example sec" id="example1">
        <thead>
          <tr class="text-left">
            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm"> No. </th>

            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm sticky1"> Action </th>

            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm"> Exam </th>
            <!--  -->
            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm"> Full Name </th>

            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm"> Conducted By </th>

            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm"> Education Stream </th>

            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm">Govt./Private</th>

            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm"> Nationality </th>
            <!--  -->
            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm">  Type of Exam </th>
            
            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm"> Hot Exam Rating </th>
            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm"> matchScore </th>
             
          </tr>
        </thead>
        <tbody>
        <tr v-for="(exam,key) in searchResult">
         <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm">{{key+1}}</span>
              </td>


              <td class="sticky1">
                <button v-on:click="saveExam" :data="exam.match_score" :exam_id="exam.id" class="text-white px-2 text-xs rounded-sm py-1.5 bg-green-600 saveExam"> Save </button>
              </td>
  
              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm">{{exam.name}}</span>
              </td>
  
              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm">{{exam.full_name}}</span>
              </td>

              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm">{{exam.authority}}</span>
              </td>
              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm">
                  <span v-for="(stream,i) in exam.education_streams">
                  <span v-if="i != 0">, </span>{{stream.name}}</span>

                </span>
              </td>
              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm">
                <span v-if="exam.is_govt==1">Govt</span>
                <span v-else>Public</span>

                </span>
              </td>

              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm"> 

                <span v-for="(nationality,i) in exam.allowed_nationalities">
                  <span v-if="i != 0">, </span>{{nationality.name}}</span>




                </span>
              </td>

              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm"> {{exam.type}} </span>
              </td>
  
              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm"> {{exam.hot_rating}} </span>
              </td>
  
              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm">{{exam.match_score}}</span>
              </td>
  
              
              
            </tr>
         

           
        </tbody>
      </table>
       
  
    </div>
  </section>


  <section class="container mt-8">
    <!-- Heading & Filter-->
    <div class="flex justify-between items-center mb-3">
      <h2 class="text-2xl">My Saved Results</h2>
      <div    class="relative">
       

        
      </div>
    </div>
    <!-- Certificate Table -->
    <div class="overflow-x-auto bg-white rounded-lg shadow">
      <table class="border-collapse table-auto w-full whitespace-no-wrap bg-white relative example ssss" id="example">
        <thead>
          <tr class="text-left">

          <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm"> No. </th>


          <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm sticky1"> Action </th>

            
            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm"> Exam </th>

            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm"> Full Name </th>

            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm"> Conducted By </th>

            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm"> Education Stream </th>

            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm">Govt./Private</th>

            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm"> Nationality </th>
            <!--  -->

            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm">  Type of Exam </th>
            
            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm"> Hot Exam Rating </th>
            <th class="bg-gray-100 sticky top-0 border-b border-blue-200 px-4 py-2 text-dark-blue font-semibold tracking-wide text-sm"> matchScore </th>
            
          </tr>
        </thead>
        <tbody>

        <tr v-for="(exam,key) in exams">

          <td>
          <span class="text-gray-700 px-4 py-2 flex items-center text-sm">{{key+1}}</span>
          </td>


          <td class="sticky1">
          <button v-on:click="remove" data="`+examlen[j].match_score+`" :exam_id="exam.id" class="text-white px-2 text-xs rounded-sm py-1.5 bg-red-600 saveExam"> Remove </button>
          </td>


         
  
              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm">{{exam.name}}</span>
              </td>
  
              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm">{{exam.full_name}}</span>
              </td>

              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm">{{exam.authority}}</span>
              </td>
              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm">
                  <span v-for="(stream,i) in exam.education_streams">
                  <span v-if="i != 0">, </span>{{stream.name}}</span>

                </span>
              </td>
              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm">
                <span v-if="exam.is_govt==1">Govt</span>
                <span v-else>Private</span>

                </span>
              </td>

              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm"> 

                <span v-for="(nationality,i) in exam.allowed_nationalities">
                  <span v-if="i != 0">, </span>{{nationality.name}}</span>




                </span>
              </td>

              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm"> {{exam.type}} </span>
              </td>
  
              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm"> {{exam.hot_rating}} </span>
              </td>
  
              <td>
                <span class="text-gray-700 px-4 py-2 flex items-center text-sm">{{exam.match_score}}</span>
              </td>
  
              
              
            </tr>
         

           
        </tbody>
      </table>
       
  
    </div>
  </section>

<button @click="saveExam" id="saveExam" style="display: none">Click Me!</button>
<button @click="remove" id="remove" style="display: none">Click Me!</button>
    
<Footer />

</template>
 <style type="text/css">
  tr.border-b.border-blue-200.odd {
    background: #e6e9eb !important;
}
tr.even {
    /* background: red; */
    background-color: #e1d7d7 !important;
}
div#example_length {
    margin-bottom: 19px;
}
.dataTables_wrapper .dataTables_length select {
    width: 53px !important;
}
td {
    white-space: nowrap;
}
.sticky1{
   
  left: 0;
  position: sticky;

  /* Displayed on top of other rows when scrolling */
  z-index: 9999;
}

.p-5 {
    padding: 1.25rem;
    width: 32%;
}
</style>
<script>

import auth from './auth'
//import $ from 'jquery'
import Loading from 'vue-loading-overlay';
import Header from './layout/header.vue'
import Footer from './layout/footer.vue'




export default {
name: 'exam',
 props: {

  },
   components: {
        Loading,
        Header,
        Footer,


    },
   data(){
    return {
          isApply:false,
          loader:true,
          f:true,
          a:false,
          isShowing:false,
          noresult:true,
          searchResult:[],
          examLabel:'all',
          is_govt:'all',
          type:'',
          hot_rating:'all',
          match_score:'all',
          authority:'all',
          mode_of_exam:'MCQ',
          applicable_courses:'',
          difficulty_level:'all',
          education_streams:'1',
          "streams":"",
          exams:[]
     
    }
   },methods:{

    apply(){
      this.isApply = false;
    },
    hideshow(){
      this.isApply = !this.isApply;
    },

     saveExam: function (event) {
        var obj = {
            "exam_id":event.target.getAttribute('exam_id'),
            "match_score":event.target.getAttribute('data'),
       }
      $('.ssss').DataTable().destroy();
       auth.post('v1/save_exam',obj).then((response) => {
          this.$toast.success("Exam successfully Added!");
         this.listExam();

       });
      },

       remove(event) {

        var obj = {
            "exam_id":event.target.getAttribute('exam_id')
            
       }
      this.exams = []
      $('.ssss').DataTable().destroy();
       auth.post('v1/remove_exam',obj).then((response) => {
         this.$toast.success("Exam successfully Removed!");
         this.listExam();
       });

       
      },
      

      search(event){
          event.preventDefault();

          var examLabel = this.examLabel;
          var is_govt = this.is_govt;
          var type = this.type;
          var hot_rating = this.hot_rating;
          var match_score = this.match_score;
          // alert(examLabel);
          // this.a = true;

          this.noresult= false;
          this.loader = true;
          

          auth.get('v1/exams/search?exam_level='+this.examLabel+'&is_govt='+this.is_govt+'&type='+this.type+'&hot_rating='+this.hot_rating+'&match_score='+this.match_score+'&mode_of_exam='+this.mode_of_exam+'&authority='+this.authority+'&difficulty_level='+this.difficulty_level+'&applicable_courses='+this.applicable_courses+'&education_streams='+this.education_streams+'').then((response) => {
            this.searchResult = response.data.data;
             this.f = false;
             this.a = true;
            this.loader = false;
            setTimeout(() => {
            $('.example').DataTable();
            }, 150);
          
           
        })
      },


      listExam(){

        this.loader = true;
        auth.get('v1/get_saved_exams').then((response) => {
          this.exams = response.data.data;
          this.loader = false;
          setTimeout(() => {
            $('.ssss').DataTable();
          // var table  = $('.ssss').DataTable();
          //alert();
          //table.ajax.params({name: 'test'});
         // table.draw();

            }, 150);
        })
      },
     
    

   },created() {
    this.listExam();


    auth.get('v1/qualifying-exam-streams').then((response) => {
            this.streams = response.data.data;
            //console.log(response);   
        })
   }
}
</script>
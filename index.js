// var toggle = document.querySelector(".ul-list");
//        function appear(){
//         if(toggle.style.display=='none'){
//           toggle.style.display='block';
//         }
//         else{
//           toggle.style.display='none';
//         }
//        }


       
function appear() {
         document.querySelector(".ul-list").classList.toggle("display");
        }

       
        var text = document.querySelector(".text-div");
        function hover(){
            if(document.getElementsByClassName(".image").style.hover){
                text.style.display = 'block';
            }
        }
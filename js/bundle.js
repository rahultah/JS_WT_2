console.log("connected")
function displayRadioValue() { 
    var ele = document.getElementsByName('inlineRadioOptions');
    var genre
      
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked)
        window.genre = ele[i].value  
        // document.getElementById("radioresults").innerHTML
        //         =window.genre; 
    } 
} 


        let movies = [];
        const addMovie = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let movie = {
                id: new Date().getTime(),
                title: document.getElementById('movietitle').value,
                year: document.getElementById('relyear').value,
                lead: document.getElementById('actor').value

            }
            movies.push(movie);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();
            buildTable(movies)
            
            
            

            function buildTable(data){
                movies = []
                var table = document.getElementById('myTable')
                for (var i = 0; i < data.length; i++){
                    var row = `<tr>
                                    <td>${data[i].id}</td>
                                    <td>${data[i].title}</td>
                                    <td>${data[i].year}</td>
                                    <td>${data[i].lead}</td>

                                    <td>${window.genre}</td>

                                   

                                    
                              </tr>`
                    table.innerHTML += row
        
        
                }
            }


            //Comment out if you need to display JSON in your main HTML
            // console.warn('added' , {movies} );
            // let pre = document.querySelector('#msg pre');
            // pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

             


        }
        let data = JSON.stringify(movies);  

       
{
    console.log('success');
}
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addMovie);
        });

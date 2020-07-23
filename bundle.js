console.log("connected")


        let movies = [];
        const addMovie = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let movie = {
                id: Date.now(),
                title: document.getElementById('title').value,
                year: document.getElementById('yr').value
            }
            movies.push(movie);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();
            buildTable(movies)

            function buildTable(data){
                var table = document.getElementById('myTable')
                for (var i = 0; i < data.length; i++){
                    var row = `<tr>
                                    <td>${data[i].title}</td>
                                    <td>${data[i].year}</td>
                                    
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

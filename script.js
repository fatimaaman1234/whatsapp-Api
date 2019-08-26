axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(function(response) {
        // handle success
        console.log("SUCESS");
        console.log(response);
        for (let index = 0; index < response.data.length; index++) {

            let message = response.data[index];
            document.querySelector("div").innerHTML += `
         <div id="profile"> 
         <img src="${message.profilePic}"> <h2>${message.name}</h2> 
         </div>
         <div class="info"> 
        
         <p id="time">${message.time.slice(0, 8)}</p>
           <span id="unread">${message.numbUnread}</span>
          <p id="firstline">${message.firstLine}</p>  
        </div>
          `
        }
    })

.catch(function(error) {
        // handle error
        console.log(error);
    })
    .finally(function() {
        // always executed
    });
const formAdmin = document.querySelector("#form_admin");
const users = JSON.parse(localStorage.getItem("users")) || [];
const divuser= document.getElementById("add");

formAdmin.addEventListener("submit" ,(e)=> {
    e.preventDefault();
    f_name=formAdmin.fisrt_name.value;
    l_name=formAdmin.last_name.value;
    idUser= Math.floor(Math.random() * 1000);
    hidd="hidden";
             user={fisrt_name:f_name,last_name:l_name,idUser,hid:hidd}
            
             const unique = users.find((usera) => usera.fisrt_name == f_name);
        
             console.log(unique);
            if (!unique) 
                {
                    users.push(user);
                    save(users);
    
                }
                else
                {
                    alert("user deja existe")  
                }
            
           
            function save(users) {
                localStorage.setItem("users", JSON.stringify(users));    
                }
                location. reload();  
               
        });
        
        const addTableUser = (users) => {

            let userHtml = `
            
                    <tr>
                    <td>  ${users.fisrt_name} </td>
                    <td>  ${users.last_name} </td>
                    
                   
                    <td> <button class="delete " onclick = "deleteUser(${users.idUser})"  >DELETE </button> </td>
                    
                    <td> <button class="modifer " onclick = "zonModif(${users.idUser})">show user </button>   </td>
                    <td><input class="input" id="newfisrt" ${users.hid} value=" ${users.fisrt_name}"  ></td>
                    <td><input class="input" id="newlast" ${ users.hid} value="${users.last_name} "  ></td>
                    <td> <button class="modifer " onclick = "modiferUser(${users.idUser})">MODIF </button>   </td>
                   
                    </td>
                 
                    </tr>
              `;
        
              divuser.innerHTML += userHtml;
        
        };
        users.forEach(user => {       
            addTableUser(user);
            
        });
        
        
        const deleteUser = (id) => {
           
            const filtered = users.filter(user =>user.idUser !== id);
            
            localStorage.setItem('users', JSON.stringify(filtered))
           
             window.location.reload()
        
        }
        
        
        
        const modiferUser = (id) => {
           
            newfirst=document.getElementById("newfisrt").value;
            newlast=document.getElementById("newlast").value;
                console.log(newfirst,newlast);
          let use = users.find((user) => user.idUser == id);
            
                users.map(user=> {
                    if (user.idUser == use.idUser) {
                        user.fisrt_name=newfirst;
                        user.last_name=newlast;
                        user.hid="hidden"; 
                    }
                        return  user
                               });
                   localStorage.setItem('users', JSON.stringify(users))
                   window.location.reload()     
        
        }   
        const zonModif = (id) => {
                
          let use = users.find((user) => user.idUser == id);
            
                users.map(user=> {
                    if (user.idUser == use.idUser) {
                      user.hid="visible";     
                    }
                        return  user
                               });
                   localStorage.setItem('users', JSON.stringify(users))
                   window.location.reload()     
        
        }   
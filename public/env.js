// send data to the server
const submitProject=(project)=>{
  $.ajax({
    url: '/api/projects',
    contentType: 'application/json',
    data: JSON.stringify(project), // access in body
    type: 'POST',
    success: function(result) {
        alert('Project Succesfully submitted')
    }
});
}


const newProject=()=>{
  let name = $('#name').val()
  let title = $('#title').val()
  let video = $('#video').val()
  let image = $('#image').val()
  let description = $('#description').val()
  
  let project={name,title,video,image,description
  }
  console.log(project)
  //submitProject(project)

}


const requestProjects=()=>{
  $.get('/api/projects',(projects)=>{
    if(projects.length>0){
      console.log(projects)
      listProjects(projects)
    }
  })
}




const testButtonFunction=()=>{
  //alert('Thank you for clicking')
}


// connect to the socket

let socket = io();


socket.on('number', (msg) => {
    //console.log('Random number: ' + msg);
})

//appensa the project row with objects of type project 
listProjects=(projects)=>{
  projects.forEach(project => {
    console.log(project)
    let item='<div class="card col l4">'+
      '<div class="card-image waves-effect waves-block waves-light">'+
       ' <img class="activator" src="'+project.image+'">'+
      '</div>'+
      '<div class="card-content">'+
        '<span class="card-title activator grey-text text-darken-4">'+project.title+'<i class="material-icons right">more_vert</i></span>'+
        '<p><a href="'+project.video+'">Youtube Video</a></p><p>'+project.name+'</p>'+
      '</div>'+
      '<div class="card-reveal">'+
       ' <span class="card-title grey-text text-darken-4">'+project.title+'<i class="material-icons right">close</i></span>'+
        '<p>'+project.description+'</p>'+
     '</div>'+
    '</div>'          
    
    $('#listProjects').append(item)
  });

}


// INITIALIZATION 

$(document).ready(function(){
  console.log('Ready')

  // get data and build the ui component
  //listProjects(dummyData)

  //bind the button
  $('#testButton').click(testButtonFunction)

  //test get call
  $.get('/test?user_name="Fantastic User"',(result)=>{
    console.log(result)
  })

  /// modal window initialize
  $('.modal').modal();
  //requestProjects()


})

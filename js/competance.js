
// J'affiche description 

var selectTitle = document.querySelectorAll(".skill-title");
var selectDescription = document.querySelectorAll(".skill-description");

 // je selectionne skill title

// J'enleve decription
for (let index = 0; index < selectTitle.length; index++) {
    // supp title and add description
    selectTitle[index].addEventListener("click", function() { 
        this.parentElement.querySelector('.skill-description').classList.remove('hover'); //select la description en question
        this.style.display = 'none';
    }); 
    for (let i = 0; i < selectDescription.length; i++) {
        selectDescription[i].addEventListener("click", function() { 
            this.parentElement.querySelector('.skill-description').classList.add('hover'); //select la description en question 
            this.parentElement.querySelector('.skill-title').style.display = 'block';  
            
    });
}
}









/*

      this.parentElement.querySelector('.skill-group-c1>.skill-items>.skill-title').classList.add('hover');
this.style.display = 'none';


      for (var i = 0; i < 5; i++) {
    debugger;
    document.querySelector('.skill-group-c1:nth-child(' + i + ')').addEventListener('click', function() {
                document.querySelector('.skill-group-c1>.skill-description').classList.remove('hover');
                document.querySelector('.skill-title').style.display = 'none';               
            });
        };

for (var i = 0; i < selectDescription.length; i++) {
    selectDescription[i].addEventListener('click', function() {
                document.querySelector('.skill-group-c1>.skill-description').classList.add('hover');
                document.querySelector('.skill-group-c1>.skill-title').style.display = 'block';               
            });
        };



        OKKKK

        for (let index = 0; index < selectTitle.length; index++) {
    // supp title and add description
    selectTitle[index].addEventListener("click", function() { 
        this.parentElement.querySelector('.skill-description').classList.remove('hover'); //select la description en question
        this.style.display = 'none';
    });
    for (let i = 0; i < selectDescription.length; i++) {
        selectDescription[i].addEventListener("click", function() { 
            this.parentElement.querySelector('.skill-description').classList.add('hover'); //select la description en question 
            this.parentElement.querySelector('.skill-title').style.display = 'block';  
            
    });
}
}
        
        */
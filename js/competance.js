
// J'affiche description 

// FOR COMP1
$( document ).ready(function() {
   $('.skill-title1').on('click', function() { // Quand je cloque sur skill title
    $('.skill-title1').addClass('hover-title'); // j'eface toute les class
    this.parentElement.querySelector('.skill-description').classList.remove('hover'); 
   });
});

$( document ).ready(function() {
    $('.skill-description').on('click', function() {
     $('.skill-title1').removeClass('hover-title');
     $('.skill-description').addClass('hover');
    });
 });

// FOR COMP2
 $( document ).ready(function() {
    $('.skill-title2').on('click', function() { // Quand je cloque sur skill title
     $('.skill-title2').addClass('hover-title'); // j'eface toute les class
     this.parentElement.querySelector('.skill-description').classList.remove('hover'); 
    });
 });
 
 $( document ).ready(function() {
     $('.skill-description').on('click', function() {
      $('.skill-title2').removeClass('hover-title');
      $('.skill-description').addClass('hover');
     });
  });

// FOR COMP3
$( document ).ready(function() {
    $('.skill-title3').on('click', function() { // Quand je cloque sur skill title
     $('.skill-title3').addClass('hover-title'); // j'eface toute les class
     this.parentElement.querySelector('.skill-description').classList.remove('hover'); 
    });
 });
 
 $( document ).ready(function() {
     $('.skill-description').on('click', function() {
      $('.skill-title3').removeClass('hover-title');
      $('.skill-description').addClass('hover');
     });
  });

// FOR COMP4
$( document ).ready(function() {
    $('.skill-title4').on('click', function() { // Quand je cloque sur skill title
     $('.skill-title4').addClass('hover-title'); // j'eface toute les class
     this.parentElement.querySelector('.skill-description').classList.remove('hover'); 
    });
 });
 
 $( document ).ready(function() {
     $('.skill-description').on('click', function() {
      $('.skill-title4').removeClass('hover-title');
      $('.skill-description').addClass('hover');
     });
  });






/*
Premier axe de dévelopemennt
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
        
        */
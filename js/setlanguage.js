var sub_title = "Student - Tutor - Computer Programmer";
var sub_title_fr = "Étudiant - Tuteur - Développeur de logiciels";
var all_about_me = "All about Me";
var all_about_me_fr = "Tout sur Moi";
var intro = "I'm currently in my third year of university, specializing in Computer Science at the University of Ottawa with a minor in Linguistics. I am a Dean's Honour List student. I consider myself a well-rounded student, but I'm especially strong in math, computer science, and French. I've tutored for over 3 years and tutored everything from 2nd-grade French Immersion to Calculus and Vectors. I consider myself an excellent tutor because I am patient and can adapt my sessions to every tutee's individual needs.";
var intro_fr = "Je suis actuellement en deuxième année en Informatique à l'Université d'Ottawa, avec une mineure en Linguistique. Je suis membre des palmarès du doyen. Je me considère comme étudiant équilibré, mais, je suis notamment fort en maths, en informatique et en FLS/FLÉ. J'ai d'expérience avec les élèves d'élémentaire jusqu'au lycée et de l'immersione française à l'écriture au calcul. Je crois que je suis tuteur formidable parce que je suis patient et je peux adapter mes tutoriels pour quelconque élève.";
var my_interests = "My interests include swimming, films, and languages. In high school, I was actively involved in swim teams, and drama productions. Actually, I still swim - with the uOttawa Triathlon club! I'm certified in  the Principles of Healthy Child Development. I am also proud to have been awarded twice the Merit Award Bursary and Canadian Hearing Services National Scholarship. I have always been an avid learner, so I now enjoy sharing my knowledge with younger students to help them succeed as well.";
var my_interests_fr = "J'aime bien nager et je m'intéresse aussi aux films et aux langages. Au lycée, j'étais membre d'une équipe de natation et j'ai joué aux productions de drame. En fait, je nage encore avec le « uOttawa Triathlon club » ! Je suis certifié aux premiers secours et aux « Principles of Healthy Child Development ». Je suis fier d'avoir reçu aussi deux fois la bourse « Merit Award Bursary » et La Bourse d'Études des SCO. J'ai toujours aimé apprendre. Maintenant, j'aime partager cette connaissance avec mes élèves afin de les aider aussi reussir.";

$(function(){
    $(document).ready(setEnglish);
});

$(function(){
    $("#en").click(setEnglish);
});

$(function(){
    $("#fr").click(setFrench);
});

function setEnglish() {
    //Set the language buttons
    $("#en").attr("class","col-2 btn btn-outline-light mx-2");
    $("#fr").attr("class","col-2 btn btn-outline-dark text-light mx-2");

    //Translate the required text
    $("#subtitle").text(sub_title);
    $("#all_about_me").text(all_about_me);
    $("#intro").text(intro);
    $("#my_interests").text(my_interests);

    //Move to top
    // Derived from: https://howchoo.com/javascript/how-to-animate-scroll-in-jquery/
    $('html, body').animate({
        scrollTop: 0
    }, 500);
}

function setFrench() {
    //Set the language buttons
    $("#en").attr("class","col-2 btn btn-outline-dark text-light btn-sm mx-2");
    $("#fr").attr("class","col-2 btn btn-outline-light btn-sm mx-2");

    //Translate the required text
    $("#intro").text(intro_fr);
    $("#all_about_me").text(all_about_me_fr);
    $("#my_interests").text(my_interests_fr);
    $("#subtitle").text(sub_title_fr);

    //Move to top
    // Derived from: https://howchoo.com/javascript/how-to-animate-scroll-in-jquery/
    $('html, body').animate({
        scrollTop: 0
    }, 500);
}
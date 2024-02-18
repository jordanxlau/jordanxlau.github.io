var sub_title = "Student - Tutor - Computer Programmer";
var sub_title_fr = "Étudiant - Tuteur - Développeur de logiciels";

var all_about_me = "All about Me";
var all_about_me_fr = "Tout sur Moi";
var intro = "I'm currently in my third year of university, specializing in Computer Science at the University of Ottawa with a minor in Linguistics. I am a Dean's Honour List student. I consider myself a well-rounded student, but I'm especially strong in math, computer science, and French. I've tutored for over 3 years and tutored everything from 2nd-grade French Immersion to Calculus and Vectors. I consider myself an excellent tutor because I am patient and can adapt my sessions to every tutee's individual needs.";
var intro_fr = "Je suis actuellement en troisième année en Informatique à l'Université d'Ottawa, avec une mineure en Linguistique. Je suis membre des palmarès du doyen. Je me considère comme étudiant équilibré, mais, je suis notamment fort en maths, en informatique et en FLS/FLÉ. J'ai d'expérience avec les élèves d'élémentaire jusqu'au lycée et de l'immersione française à l'écriture au calcul. Je crois que je suis tuteur formidable parce que je suis patient et je peux adapter mes tutoriels pour quelconque élève.";
var my_interests = "My interests include swimming, films, and languages. In high school, I was actively involved in swim teams, and drama productions. Actually, I still swim - with the uOttawa Triathlon club! I'm certified in  the Principles of Healthy Child Development. I am also proud to have been awarded twice the Merit Award Bursary and Canadian Hearing Services National Scholarship. I have always been an avid learner, so I now enjoy sharing my knowledge with younger students to help them succeed as well.";
var my_interests_fr = "J'aime bien nager et je m'intéresse aussi aux films et aux langages. Au lycée, j'étais membre d'une équipe de natation et j'ai joué aux productions de drame. En fait, je nage encore avec le « uOttawa Triathlon club » ! Je suis certifié aux premiers secours et aux « Principles of Healthy Child Development ». Je suis fier d'avoir reçu aussi deux fois la bourse « Merit Award Bursary » et La Bourse d'Études des SCO. J'ai toujours aimé apprendre. Maintenant, j'aime partager cette connaissance avec mes élèves afin de les aider aussi reussir.";

var tutoring = "Tutoring";
var tutoring_fr = "J'enseigne...";
var display_warning = "NOTICE: This page may not display properly on mobile.";
var display_warning_fr = "ATTENTION: Cette page-web peut s'afficher incorrectement sur les mobiles.";

var personal_projects = "Personal Projects";
var personal_projects_fr = "Projets Personnels";
var research_interests = "I'm currently studying computer science at the University of Ottawa with a minor in linguistics. My research interests include computational linguistics, natural language processing, machine translation,  autonomous driving, computer vision and pure linguistics.";
var research_interests_fr = "J'étude actuellement l'informatique à l'Université d'Ottawa avec mineure en linguistique. Je m'interesse en linguistique computationelle, au traitement du langage naturel, en traduction automatique,  en conduite autonome, en traitement d'images et en linguistique théorique.";

var resources = "Resources";
var resources_fr = "Ressources";
var resources_description_fr = "Une suite des vidéos et feuilles de travail créées par moi pour mes élèves - et toi - en plusieurs sujets!";
var resources_description = "A collection of videos and accompanying practice worksheets I have created to help my tutees - and you - with a variety of topics!";
var download = "Download";
var download_fr = "Téléchargez (en anglais)"

$(function(){
    if(localStorage.getItem("en") == "true"){
        $(document).ready(setEnglish);
    } else {
        $(document).ready(setFrench);
    }
});

$(function(){
    $("#en").click(setEnglish);
    localStorage.setItem("en","true");
});

$(function(){
    $("#fr").click(setFrench);
    localStorage.setItem("en","false");
});

function setEnglish() {
    //Set the language buttons
    $("#en").attr("class","col-2 btn btn-light mx-2");
    $("#fr").attr("class","col-2 btn btn-dark mx-2");

    //Translate the required text
    $("#subtitle").text(sub_title);

    $("#all_about_me").text(all_about_me);
    $("#intro").text(intro);
    $("#my_interests").text(my_interests);

    $("#tutoring").text(tutoring);
    $("#display_warning").text(display_warning);
    
    $("#personal_projects").text(personal_projects);
    $("#research_interests").text(research_interests);

    $("#resources").text(resources);
    $("#resources_description").text(resources_description);
    $(".download").text(download);

    //Move to top
    // Derived from: https://howchoo.com/javascript/how-to-animate-scroll-in-jquery/
    $('html, body').animate({
        scrollTop: 0
    }, 500);
}

function setFrench() {
    //Set the language buttons
    $("#en").attr("class","col-2 btn-dark btn-sm mx-2");
    $("#fr").attr("class","col-2 btn-light btn-sm mx-2");

    //Translate the required text
    $("#subtitle").text(sub_title_fr);

    $("#intro").text(intro_fr);
    $("#all_about_me").text(all_about_me_fr);
    $("#my_interests").text(my_interests_fr);

    $("#tutoring").text(tutoring_fr);
    $("#display_warning").text(display_warning_fr);

    $("#personal_projects").text(personal_projects_fr);
    $("#research_interests").text(research_interests_fr);

    $("#resources").text(resources_fr);
    $("#resources_description").text(resources_description_fr);
    $(".download").text(download_fr);

    //Move to top
    // Derived from: https://howchoo.com/javascript/how-to-animate-scroll-in-jquery/
    $('html, body').animate({
        scrollTop: 0
    }, 500);
}
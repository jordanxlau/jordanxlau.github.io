var sub_title = "Student - Tutor - Computer Programmer";
var sub_title_fr = "Étudiant - Tuteur - Développeur de logiciels";

var all_about_me = "Who I Am";
var all_about_me_fr = "Qui Suis-Je?";
var intro = "I'm currently in my third year of university, specializing in Computer Science at the University of Ottawa with a minor in Linguistics. Last fall, I worked as a software developer with the Government of Canada. I am a Dean's Honour List student. I consider myself a well-rounded student, but I'm especially strong in math, computer science, and French. I am also proud to have been awarded twice the Merit Award Bursary and Canadian Hearing Services National Scholarship. My interests include swimming, rock climbing, and languages."
var intro_fr = "Je suis actuellement en troisième année en Informatique à l'Université d'Ottawa, avec une mineure en Linguistique. Cet automone, j'étais développeur de logiciels avec le Gouvernement Fédérale. Je suis membre des palmarès du doyen. Je me considère comme étudiant équilibré, mais, je suis notamment fort en maths, en informatique et en FLS/FLÉ. Je suis fier d'avoir reçu aussi deux fois la bourse « Merit Award Bursary » et La Bourse d'Études des SCO. J'aime bien nager et je m'intéresse aussi en escalade et aux langages."
var why_i_tutor = "Why I Tutor";
var why_i_tutor_fr = "Pourquoi suis-je un tuteur?";
var tutoring_intro = "I've tutored for almost 5 years and tutored everything from 2nd-grade French Immersion to Calculus and Vectors. I consider myself an excellent tutor because I am patient and can adapt my sessions to every tutee's individual needs. I'm certified in the Principles of Healthy Child Development. I have always been an avid learner, so I now enjoy sharing my knowledge with younger students to help them succeed as well.";
var tutoring_intro_fr = "J'ai plus que 4 ans d'expérience avec les élèves d'élémentaire jusqu'au lycée et de l'immersione française à l'écriture au calcul. Je crois que je suis tuteur formidable parce que je suis patient et je peux adapter mes tutoriels pour quelconque élève. Je suis certifié aux « Principles of Healthy Child Development ». J'ai toujours aimé apprendre, et maintenant, j'aime partager cette connaissance avec mes élèves afin de les aider aussi reussir.";

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
    $(document).ready(checkLanguage);
});

$(function(){
    $("#en").click(setEnglish);
});

$(function(){
    $("#fr").click(setFrench);
});

function checkLanguage(){
    if(localStorage.getItem("en") == "true"){
        setEnglish();
    } else {
        setFrench();
    }
}

function setEnglish() {
    //Set the language buttons
    localStorage.setItem("en","true");
    $("#en").attr("class","col-2 btn btn-light mx-2");
    $("#fr").attr("class","col-2 btn btn-dark mx-2");

    //Translate the required text
    $("#subtitle").text(sub_title);

    $("#all_about_me").text(all_about_me);
    $("#intro").text(intro);
    $("#tutoring_intro").text(tutoring_intro);
    $("#why_i_tutor").text(why_i_tutor);

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
    localStorage.setItem("en","false");
    $("#en").attr("class","col-2 btn-dark btn-sm mx-2");
    $("#fr").attr("class","col-2 btn-light btn-sm mx-2");

    //Translate the required text
    $("#subtitle").text(sub_title_fr);

    $("#intro").text(intro_fr);
    $("#all_about_me").text(all_about_me_fr);
    $("#tutoring_intro").text(tutoring_intro_fr);
    $("#why_i_tutor").text(why_i_tutor_fr);

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
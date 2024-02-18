var sub_title = "Student - Tutor - Computer Programmer";
var sub_title_fr = "Étudiant - Tuteur - Développeur de logiciels";

var all_about_me = "Who I Am";
var all_about_me_fr = "Qui Suis-Je?";
var intro = "I'm in my 3rd year of Computer Science (with a minor in Linguistics) at uOttawa. Last fall, I worked as a software developer with the Government of Canada. I am a Dean's Honour List student. I am also proud to have been awarded the Merit Award Bursary and Canadian Hearing Services National Scholarship. My interests include swimming, rock climbing, and languages."
var intro_fr = "Je suis en 3ème année en Informatique à uOttawa, avec une mineure en Linguistique. Cet automone, j'étais développeur de logiciels avec le Gouvernement Fédérale. Je suis membre des palmarès du doyen. Je suis fier d'avoir reçu aussi la bourse « Merit Award Bursary » et La Bourse d'Études des SCO. J'aime bien nager et je m'intéresse aussi en escalade et aux langages."
var why_i_tutor = "Why I Tutor";
var why_i_tutor_fr = "Pourquoi suis-je un tuteur?";
var tutoring_intro = "I've tutored for almost 5 years and tutored everything from 2nd-grade French Immersion to Calculus and Vectors. I am patient and always adapt my sessions to every tutee's individual needs. I'm certified in the Principles of Healthy Child Development. I have always been an avid learner, so I now enjoy sharing my knowledge with younger students to help them succeed as well.";
var tutoring_intro_fr = "J'ai plus que 4 ans d'expérience avec les élèves d'élémentaire jusqu'au lycée et de l'immersione française à l'écriture au calcul. Je suis patient et j'adapte mes tutoriels pour quelconque élève. Je suis certifié aux « Principles of Healthy Child Development ». J'ai toujours aimé apprendre, et maintenant, j'aime partager cette connaissance avec mes élèves afin de les aider aussi reussir.";

var tutoring = "Tutoring";
var tutoring_fr = "J'enseigne...";
var display_warning = "NOTICE: This page's display may be reduced on mobile.";
var display_warning_fr = "ATTENTION: L'affichage de cette page-web peut être réduit sur les mobiles.";
var testimonial1 = "In Jordan, I not only found an exceptional tutor but also a role model and mentor for my son. I saw continual improvement of my son's command of the subjects, and grades. I would highly recommend Jordan not only for his academic knowledge, but his teaching style, which delivers results. - Raouf, client";
var testimonial2 = "Jordan is an enthusiastic student who will apply himself to all worthy endeavours with vigor. He is largely recognized as the most genuinely nice student at Leaside. When tasked with a challenge, he always goes above and beyond and assumes a leadership role to help bring his team to greatness. - Sonya, coach";
var testimonial1_fr = "Dans Jordan, j'ai trouvé un tuteur exceptionel, mais aussi un modèle et mentor pour mon fils. J'ai vu une amélioration continuelle dans la maîtrise de mon fils de ses sujets et dans ses notes. Je recommanderais Jordan fortement non seulement pour son connaisance academique, mais pour sa style d'enseignement, qui donne des résultats. - Raouf, client, (traduit de l'anglais)";
var testimonial2_fr = "Jordan est un étudiant enthousiaste qui s'appliquera à tous les efforts dignes avec vigeur. Il est largement vu comme l'étudiant le plus sincèrement gentil à Leaside. Quand chargé d'un défi, il va toujours au-delà des attentes et il aide a mener son équipe à la grandeur. - Sonya, entraîneuse (traduit de l'anglais)";

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
    //Set the language and language buttons
    localStorage.setItem("en","true");
    $("#en").attr("class","col-2 btn btn-light mx-2");
    $("#fr").attr("class","col-2 btn btn-dark mx-2");

    //Translate the required banner text
    $("#subtitle").text(sub_title);

    //Translate the required Home Page text
    $("#all_about_me").text(all_about_me);
    $("#intro").text(intro);
    $("#tutoring_intro").text(tutoring_intro);
    $("#why_i_tutor").text(why_i_tutor);

    //Translate the required Tutoring Page text
    $("#tutoring").text(tutoring);
    $("#display_warning").text(display_warning);
    $('#testimonial1').text(testimonial1);
    $('#testimonial2').text(testimonial2);
    
    //Translate the required Personal Projects Page text
    $("#personal_projects").text(personal_projects);
    $("#research_interests").text(research_interests);

    //Translate the required Resources Page text
    $("#resources").text(resources);
    $("#resources_description").text(resources_description);
    $(".download").text(download);

    //Move to top
    $('html, body').animate({
        scrollTop: 0
    }, 500);
}

function setFrench() {
    //Set the language and language buttons
    localStorage.setItem("en","false");
    $("#en").attr("class","col-2 btn-dark btn-sm mx-2");
    $("#fr").attr("class","col-2 btn-light btn-sm mx-2");

    //Translate the required banner text
    $("#subtitle").text(sub_title_fr);

    //Translate the required Home Page text
    $("#intro").text(intro_fr);
    $("#all_about_me").text(all_about_me_fr);
    $("#tutoring_intro").text(tutoring_intro_fr);
    $("#why_i_tutor").text(why_i_tutor_fr);

    //Translate the required Tutoring Page text
    $("#tutoring").text(tutoring_fr);
    $("#display_warning").text(display_warning_fr);
    $('#testimonial1').text(testimonial1_fr);
    $('#testimonial2').text(testimonial2_fr);

    //Translate the required Personal Projects Page text
    $("#personal_projects").text(personal_projects_fr);
    $("#research_interests").text(research_interests_fr);

    //Translate the required Resources Page text
    $("#resources").text(resources_fr);
    $("#resources_description").text(resources_description_fr);
    $(".download").text(download_fr);

    //Move to top
    $('html, body').animate({
        scrollTop: 0
    }, 500);
}
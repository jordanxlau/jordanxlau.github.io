var sub_title = "Bilingual Student - Tutor - Computer Programmer";
var sub_title_fr = "Étudiant bilingue - Tuteur - Développeur de logiciels";

var all_about_me = "Who Am I?";
var all_about_me_fr = "Qui Suis-Je?";
var intro = "I'm in my 3rd year of Computer Science (with a minor in Linguistics) at uOttawa. Last fall, I worked as a software developer with the Government of Canada. I am a Dean's Honour List student and am proud to have been awarded the Merit Award Bursary and Canadian Hearing Services National Scholarship. My interests include swimming, rock climbing, and languages."
var intro_fr = "Je suis en 3ième année d'Informatique à uOttawa avec une mineure en Linguistique. Cet automne, j'ai occupé un poste de développeur de logiciels pour le Gouvernement Fédérale. Je suis membre des palmarès du doyen et fier d'avoir reçu la bourse « Merit Award Bursary » ainsi que La Bourse d'Études des SCO. Je pratique la natation et je m'intéresse aussi à l'escalade et aux langues."
var this_website = "This Website";
var this_website_fr = "Ce Site";
var this_website_explanation = "This website showcases me as a student, programmer and tutor! I've written the whole site myself with the help of Bootstrap. The translation was done by me and is activated with JQuery. It is hosted with GitHub Pages.";
var this_website_explanation_fr = "Ce site me présente comme étudiant, tuteur et développeur de logiciels! Je l'ai fait moi-même avec Bootstrap. La traduction est la mienne aussi, est elle est activée avec JQuery. Le site est publié sur GitHub Pages.";
var why_i_tutor = "Why I Tutor";
var why_i_tutor_fr = "Pourquoi Je Suis un Tuteur";
var tutoring_intro = "In over 4 years I have tutored everything from 2nd-grade French Immersion to Calculus and Vectors. I have always been an avid learner, so I now enjoy sharing my knowledge with younger students to help them succeed as well.";
var tutoring_intro_fr = "Dans plus que 4 ans, j'ai enseigné les élèves d'élémentaire jusqu'au lycée, en immersione française au calcul. Ayant toujours aimé apprendre, maintenant, j'aime partager mes connaissances avec mes élèves afin de les aider réussir.";
var tutoring_explanation = "Over 4 years of tutoring experience.\nSessions adapted to your individual needs.\nA tutor certified in the Principles of Healthy Child Development.\nEmail me to book a FREE consultation today!";
var tutoring_explanation_fr = "Plus que 4 ans d'expérience.\nTutoriels adaptés pour n'importe quel élève. Un tuteur avec un certificat en « Principles of Healthy Child Development ».\nM'envoyez un courriel aujoud'hui pour une consultation GRATUTIE.";

var tutoring = "Tutoring";
var tutoring_fr = "J'enseigne...";
var display_warning = "NOTICE: This page's display may be reduced on small screens.";
var display_warning_fr = "ATTENTION: L'affichage de cette page-web peut être réduit sur les écrans petits.";
var high_school_french = "High School French";
var high_school_french_fr = "Français (Lycée)";
var high_school_math = "High School Math";
var high_school_math_fr = "Maths (Lycée)";
var coding_for_all_ages = "Coding for All Ages";
var coding_for_all_ages_fr = "Programmation (Lycée et Élémentaire)"
var elementary_school_help = "Elementary School Help";
var elementary_school_help_fr = "Aide Générale (Élémentaire)";
var testimonial1 = "In Jordan, I not only found an exceptional tutor but also a role model and mentor for my son. I saw continual improvement of my son's command of the subjects, and grades. I would highly recommend Jordan not only for his academic knowledge, but his teaching style, which delivers results. - Raouf, client";
var testimonial2 = "Jordan is an enthusiastic student who will apply himself to all worthy endeavours with vigor. He is largely recognized as the most genuinely nice student at Leaside. When tasked with a challenge, he always goes above and beyond and assumes a leadership role to help bring his team to greatness. - Sonya, coach";
var testimonial1_fr = "Dans Jordan, j'ai trouvé un tuteur exceptionel, mais aussi un modèle et mentor pour mon fils. J'ai vu une amélioration continuelle dans la maîtrise de mon fils de ses sujets et dans ses notes. Je recommanderais Jordan fortement non seulement pour son connaisance academique, mais pour sa style d'enseignement, qui donne des résultats. - Raouf, client, (traduit de l'anglais)";
var testimonial2_fr = "Jordan est un étudiant enthousiaste qui s'appliquera à tous les efforts dignes avec vigeur. Il est largement vu comme l'étudiant le plus sincèrement gentil à Leaside. Quand chargé d'un défi, il va toujours au-delà des attentes et il aide a mener son équipe à la grandeur. - Sonya, entraîneuse (traduit de l'anglais)";

var personal_projects = "Personal Projects";
var personal_projects_fr = "Projets Personnels";
var research_interests = "My research/work interests include computational linguistics, natural language processing, machine translation,  autonomous driving, computer vision and pure linguistics.";
var research_interests_fr = "Je m'interesse en linguistique computationelle, au traitement du langage naturel, en traduction automatique,  en conduite autonome, en traitement d'images et en linguistique théorique.";

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
    $("#lang").click(resetLanguage);
});

function resetLanguage(){
    if(localStorage.getItem("en") == "false"){
        setEnglish();
        localStorage.setItem("en","true");
        $("#lang").text("FR");
    } else {
        setFrench();
        localStorage.setItem("en","false");
        $("#lang").text("EN");
    }
}

function checkLanguage(){
    if(localStorage.getItem("en") == "false"){
        $("#lang").text("EN");
        setFrench();
    } else {
        $("#lang").text("FR");
        setEnglish();
    }
}

function setEnglish() {
    //Translate the required banner text
    $("#subtitle").text(sub_title);

    //Translate the required Home Page text
    $("#this_website").text(this_website);
    $("#this_website_explanation").text(this_website_explanation);
    $("#all_about_me").text(all_about_me);
    $("#intro").text(intro);
    $("#tutoring_intro").text(tutoring_intro);
    $("#why_i_tutor").text(why_i_tutor);

    //Translate the required Tutoring Page text
    $("#tutoring").text(tutoring);
    $("#tutoring_explanation").text(tutoring_explanation);
    $("#display_warning").text(display_warning);
    $("#elementary").text(elementary_school_help);
    $("#coding").text(coding_for_all_ages);
    $("#french").text(high_school_french);
    $("#math").text(high_school_math);
    $('#testimonial1').text(testimonial1);
    $('#testimonial2').text(testimonial2);
    $("#resources").text(resources);
    $("#resources_description").text(resources_description);
    $(".download").text(download);
    
    //Translate the required Personal Projects Page text
    $("#personal_projects").text(personal_projects);
    $("#research_interests").text(research_interests);

    //Move to top
    $('html, body').animate({
        scrollTop: 0
    }, 0);
}

function setFrench() {
    //Translate the required banner text
    $("#subtitle").text(sub_title_fr);

    //Translate the required Home Page text
    $("#this_website").text(this_website_fr);
    $("#this_website_explanation").text(this_website_explanation_fr);
    $("#intro").text(intro_fr);
    $("#all_about_me").text(all_about_me_fr);
    $("#tutoring_intro").text(tutoring_intro_fr);
    $("#why_i_tutor").text(why_i_tutor_fr);

    //Translate the required Tutoring Page text
    $("#tutoring").text(tutoring_fr);
    $("#tutoring_explanation").text(tutoring_explanation_fr);
    $("#display_warning").text(display_warning_fr);
    $("#elementary").text(elementary_school_help_fr);
    $("#coding").text(coding_for_all_ages_fr);
    $("#french").text(high_school_french_fr);
    $("#math").text(high_school_math_fr);
    $('#testimonial1').text(testimonial1_fr);
    $('#testimonial2').text(testimonial2_fr);
    $("#resources").text(resources_fr);
    $("#resources_description").text(resources_description_fr);
    $(".download").text(download_fr);

    //Translate the required Personal Projects Page text
    $("#personal_projects").text(personal_projects_fr);
    $("#research_interests").text(research_interests_fr);

    //Move to top
    $('html, body').animate({
        scrollTop: 0
    }, 0);
}
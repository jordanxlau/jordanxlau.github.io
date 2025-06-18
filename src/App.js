function App({lang}) {
  var english = lang === 'en';

  var all_about_me = english ? "Who Am I?" : "Qui Suis-Je?";
  var intro = english ? "I'm in my final year of Computer Science (with a minor in Linguistics) at uOttawa. I have done two internships as a software developer with the Government of Canada. I am a Dean's Honour List student and am proud to have been awarded the Merit Award Bursary and Canadian Hearing Services National Scholarship. My interests include swimming, karate, and languages."
  : "Je suis en dernière année d'Informatique à uOttawa avec une mineure en Linguistique. J'étais deux fois un stagiaire en développment de logiciels pour le Gouvernement Fédérale. Je suis membre des palmarès du doyen et fier d'avoir reçu la bourse « Merit Award Bursary » ainsi que La Bourse d'Études des SCO. Je pratique la natation et le karaté, et je m'intéresse aussi aux langues."
  var this_website = english ? "This Website" : "Ce Site";
  var this_website_explanation = english ? "This website showcases me as a student, programmer and tutor! I've written the whole site myself with React. It is hosted with GitHub Pages."
  : "Ce site me présente comme étudiant, tuteur et développeur de logiciels! Je l'ai fait moi-même avec React. Le site est publié sur GitHub Pages.";
  var why_i_tutor = english ? "Why I Tutor" : "Pourquoi Je Suis un Tuteur";
  var tutoring_intro = english ? "In over 5 years, I have tutored everything from 2nd-grade French Immersion to Calculus and Vectors. I have always been an avid learner, so I now enjoy sharing my knowledge with younger students to help them succeed as well."
  : "Dans plus que 5 ans, j'ai enseigné les élèves d'élémentaire jusqu'au lycée, en immersione française au calcul. Ayant toujours aimé apprendre, maintenant, j'aime partager mes connaissances avec mes élèves afin de les aider réussir.";

  return (
    <>
      <div class = "container-fluid px-0 py-0 text-white bg-secondary text-left">
          <div class = "row mx-0">
              <div class = "col-md-6 px-0"><img class = "img-fluid" src = "images/jordan.jpg" alt=""></img></div>
              <div class = "col-md-6 p-3">
                  <h1><i><b>Jordan Lau</b></i></h1>
                  <h3>{this_website}</h3>
                  <p>{this_website_explanation}</p>
                  <h3>{all_about_me}</h3>
                  <p>{intro}</p>
                  <br />
                  <h3>{why_i_tutor}</h3>
                  <p>{tutoring_intro}</p>
                  <br />
                  <a class = "btn btn-lg btn-outline-light" href = "downloadables/Jordan Lau Technical Resume.pdf" style={{margin: 3}} open>Technical Resume</a>
                  <a class = "btn btn-lg btn-outline-light" href = "downloadables/Jordan Lau Teaching Resume.pdf" style={{margin: 3}} open>Teaching Resume</a>
              </div>
          </div>
      </div>
  </>
  );
}

export default App;

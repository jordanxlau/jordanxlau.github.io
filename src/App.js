function App({lang}) {
  let english = lang === 'en';

  let all_about_me = english ? "Who Am I?" : "Qui Suis-Je?";
  let intro = english ? "I recently finished my degree in Computer Science (with a minor in Linguistics) at uOttawa. I have done three internships as a software developer with the Government of Canada. I am a Dean's Honour List student and am proud to have been awarded the Merit Award Bursary and Canadian Hearing Services National Scholarship. My interests include swimming, karate, and languages."
  : "J'ai récemment terminé mon B.Sc. spécialisé en Informatique (avec une mineure en Linguistique) à uOttawa. J'étais trois fois un stagiaire en développment de logiciels pour le Gouvernement Fédérale. Je suis membre des palmarès du doyen et fier d'avoir reçu la bourse « Merit Award Bursary » ainsi que La Bourse d'Études des SCO. Je pratique la natation et le karaté, et je m'intéresse aussi aux langues."
  let this_website = english ? "This Website" : "Ce Site";
  let this_website_explanation = english ? "This website showcases me as a student, programmer and tutor! I've written the whole site myself with React. It is hosted with GitHub Pages."
  : "Ce site me présente comme étudiant, tuteur et développeur de logiciels! Je l'ai fait moi-même avec React. Le site est publié sur GitHub Pages.";
  let why_i_tutor = english ? "Why I Tutor" : "Pourquoi Je Suis un Tuteur";
  let tutoring_intro = english ? "In over 6 years, I have tutored everything from 2nd-grade French Immersion to Calculus and Vectors. I have always been an avid learner, so I now enjoy sharing my knowledge with younger students to help them succeed as well."
  : "Dans plus que 6 ans, j'ai enseigné les élèves d'élémentaire jusqu'au lycée, en immersione française au calcul. Ayant toujours aimé apprendre, maintenant, j'aime partager mes connaissances avec mes élèves afin de les aider réussir.";

  return (
    <>
      <div className = "container-fluid px-0 py-0 text-white bg-secondary text-left">
          <div className = "row mx-0">
              <div className = "col-md-6 px-0"><img className = "img-fluid" src = "images/jordan.jpg" alt=""></img></div>
              <div className = "col-md-6 p-3">
                  <h1><i><b>Jordan Lau</b></i></h1>
                  <h3>{this_website}</h3>
                  <p>{this_website_explanation}</p>
                  <h3>{all_about_me}</h3>
                  <p>{intro}</p>
                  <br />
                  <h3>{why_i_tutor}</h3>
                  <p>{tutoring_intro}</p>
                  <br />
                  <a className = "btn btn-lg btn-outline-light" href = "downloadables/Jordan Lau Technical Resume.pdf" style={{margin: 3}} open>Developer Resume</a>
                  <a className = "btn btn-lg btn-outline-light" href = "downloadables/Jordan Lau Teaching Resume.pdf" style={{margin: 3}} open>Tutor Resume</a>
              </div>
          </div>
      </div>
  </>
  );
}

export default App;

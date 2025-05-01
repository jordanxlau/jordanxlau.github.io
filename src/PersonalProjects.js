function PersonalProjects({lang}) {
    var english = lang === 'en';
    var personal_projects = english ? "Personal Projects" : "Projets Personnels";
    var research_interests = english ? "My research/work interests include computational linguistics, natural language processing, machine translation,  autonomous driving, computer vision and pure linguistics."
    : "Je m'interesse en linguistique computationelle, au traitement du langage naturel, en traduction automatique,  en conduite autonome, en traitement d'images et en linguistique théorique.";


    return (
        <div class = "container-fluid p-3 text-white text-left" style = {{backgroundImage: 'url("../images/computer.jpg")', backgroundSize: 'cover'}}>
            <h2>{personal_projects}</h2>
            <p>{research_interests}</p>
            {/* Programming Projects */}
            <p><b>Programming Projects (available on GitHub, <a class = "text-white" href ="https://github.com/jordanxlau" open>@jordanxlau</a>):</b>
                <br />
                <a class = "text-white" href="https://github.com/jordanxlau/comparison_of_language_pairs" open><u>Machine Translation for Different Language Pairs, 2025.</u></a>
                <br /><br />
                <a class = "text-white" href="https://github.com/jordanxlau/sign-language-detection" open><u>Hand Gesture Detection using Machine Learning, 2024.</u></a>
                <br /><br />
                <a class = "text-white" href="https://github.com/jordanxlau/deepl-vs-google-translation" open><u>DeepL vs Google Translate Study, 2024.</u></a>
                <br /><br />
                <a class = "text-white" href="https://github.com/CSI2132-G30/hotel" open><u>Hotel Management App, 2024</u></a>
                <br /><br />
                <a>This Website, 2024.</a>
                <br /><br />
                <a> Meme Classification using machine learning. 2024. </a>
                <br /><br />
                <a> Object Detection with DBScan, 2022. </a>
            </p>
            <img class = "container-sm px-4" src = "../images/dbscan.png" style = {{height: '50%', width: '50%', objectFit: 'fill'}} alt=""></img>
            <p class = "px-4">A point scene captured by LiDAR, being clustered by the DBScan algorithm I implemented.</p>
            {/* Papers */}
            <p><b>Papers:</b>
                <br />
                <a>Honours Project. 2025.</a>
                <br /><br />
                <a class = "text-white" href="../downloadables/Machine Translation for Different Language Pairs.pdf" open><u>Machine Translation for Different Language Pairs, 2025.</u></a>
                <br /><br />
                <a class = "text-white" href="../downloadables/Change in the Irish Palatalisation-Velarisation Contrast.pdf" open><u>Change in the Irish Palatalisation-Velarisation Contrast, 2024.</u></a>
                <br /><br />
                <a class = "text-white" href="../downloadables/Word Order in Kabyle Free or Fixed.pdf" open><u>Word Order in Kabyle: Free or Fixed?, 2023.</u></a>
                <br /><br />
                <a class = "text-white" href="../downloadables/The Ethical and Technological Challenges Facing Autonomous Driving.pdf" open><u>The Ethical and Technological Challenges Facing Autonomous Driving, 2021.</u></a>
            </p>
            {/* Presentations */}
            <p><b>Presentations:</b>
                <br />
                <a>Discussion of a paper on Syntax Graph CNNs for Sentiment Analysis, 2025.</a>
            </p>
        </div>
    );
}

export default PersonalProjects;
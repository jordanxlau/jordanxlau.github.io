function PersonalProjects({lang}) {
    var english = lang === 'en';
    var personal_projects = english ? "Personal Projects" : "Projets Personnels";
    var research_interests = english ? "My research/work interests include computational linguistics, natural language processing, machine translation,  autonomous driving, computer vision and pure linguistics."
    : "Je m'interesse en linguistique computationelle, au traitement du langage naturel, en traduction automatique,  en conduite autonome, en traitement d'images et en linguistique théorique.";


    return (
        <div class = "container-fluid p-3 text-white text-left" style = {{backgroundImage: 'url("images/computer.jpg")', backgroundSize: 'cover'}}>
            <h2>{personal_projects}</h2>
            <p>{research_interests}</p>
            
            <p>Programming Projects (available on GitHub, <a class = "text-white" href ="https://github.com/jordanxlau" open>@jordanxlau</a>):<br /><br />
            <a class = "text-white" href="https://github.com/jordanxlau/sign-language-detection" open>Hand Gesture Detection using Machine Learning, 2024.</a><br /><br />
            <a class = "text-white" href="https://github.com/jordanxlau/deepl-vs-google-translation" open>DeepL vs Google Translate Study, 2024.</a><br /><br />
            <a class = "text-white" href="https://github.com/CSI2132-G30/hotel" open>Hotel Management App, 2024</a><br /><br />
            <a class = "text-white" href="https://github.com/jordanxlau/jordanxlau.github.io">This Website, 2024.</a><br /><br />
                <p>Meme Classification using machine learning. 2024.</p><br /><br />
                <p>Object Detection with DBScan, 2022.</p><br /><br />
            </p>
            <img class = "container-sm px-4" src = "images/dbscan.png" style = {{height: '50%', width: '50%', objectFit: 'fill'}} alt=""></img>
            <p class = "px-4">A point scene captured by LiDAR, being clustered by the DBScan algorithm I implemented.</p>
            <p>Papers:<br />
                <a class = "text-white" href="downloadables/Change in the Irish Palatalisation-Velarisation Contrast.pdf" open>Change in the Irish Palatalisation-Velarisation Contrast. 2024.</a><br /><br />
                <a class = "text-white" href="downloadables/Word Order in Kabyle Free or Fixed.pdf" open>Word Order in Kabyle: Free or Fixed?. 2023.</a><br /><br />
                <a class = "text-white" href="downloadables/The Ethical and Technological Challenges Facing Autonomous Driving.pdf" open>The Ethical and Technological Challenges Facing Autonomous Driving, 2021.</a><br />
            </p>
        </div>
    );
}

export default PersonalProjects;
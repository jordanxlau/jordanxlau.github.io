function PersonalProjects({lang}) {
    var english = lang === 'en';
    var personal_projects = english ? "Programming Projects" : "Projets de Programmation";
    var research_interests = english ? "My interests include data science, applied and theoretical machine learning, natural language processing, audio processing and pure linguistics."
    : "Je m'interesse en sciences de données, en aprentissage en machine, au traitement du langage naturel, au traitement audio et en linguistique théorique.";


    return (
        <div>
            <div class = "container-fluid p-3 text-white text-left" style = {{backgroundImage: 'url("../images/computer.jpg")', backgroundSize: 'cover'}}>
                <h2>{personal_projects}</h2>
                <p>{research_interests}</p>
                <p>The projects I showcase below can be seen on my GitHub, <a class = "text-white" href ="https://github.com/jordanxlau" open>@jordanxlau</a>.
                    <br /><br />
                    <a class = "text-white" href="https://github.com/merlab/GONLP" open><u>Honours Project: Information Retrieval for Gene Ontology Annotation.</u></a>
                    <br /><br />
                    <a class = "text-white" href="https://github.com/jordanxlau/deepl-vs-google-translation" open><u>DeepL vs Google Translate Study.</u></a>
                    <br /><br />
                    <a class = "text-white" href="https://github.com/jordanxlau/sign-language-detection" open><u>Hand Gesture Detection using Machine Learning.</u></a>
                    <br /><br />
                    <a class = "text-white" href="https://github.com/CSI2132-G30/hotel" open><u>Hotel Management App.</u></a>
                    <br /><br />
                    <a>Machine Translation for Different Language Pairs.</a>
                    <br /><br />
                    <a>Object Detection with DBScan.</a>
                </p>
                <img class = "container-sm px-4" src = "../images/dbscan.png" style = {{height: '50%', width: '50%', objectFit: 'fill'}} alt=""></img>
                <p class = "px-4">A point scene captured by LiDAR, being clustered by the DBScan algorithm I implemented.</p>
            </div>
            <div class = "container-fluid p-3 bg-white text-left">
                <h2>Papers and Presentations</h2>
                <p>
                    <a class = "text-black" href="../downloadables/Machine Translation for Different Language Pairs.pdf" open><u>Machine Translation for Different Language Pairs. 2025.</u></a>
                    <br /><br />
                    <a class = "text-black" href="../downloadables/Change in the Irish Palatalisation-Velarisation Contrast.pdf" open><u>Change in the Irish Palatalisation-Velarisation Contrast. 2024.</u></a>
                    <br /><br />
                    <a class = "text-black" href="../downloadables/Word Order in Kabyle Free or Fixed.pdf" open><u>Word Order in Kabyle: Free or Fixed? 2023.</u></a>
                    <br /><br />
                    <a class = "text-black" href="../downloadables/The Ethical and Technological Challenges Facing Autonomous Driving.pdf" open><u>The Ethical and Technological Challenges Facing Autonomous Driving. 2022.</u></a>
                    <br /><br />
                    <a>Discussion of a paper on Syntax Graph CNNs for Sentiment Analysis. 2025.</a>
                </p>
                <iframe class = "px-4" width="560" height="315" src="https://www.youtube.com/embed/BFIjmmwBlT4?si=pIGabR8P_4FSqyid" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p class = "px-4">In this video of the presentation, I am the third speaker.</p>
            </div>
        </div>
    );
}

export default PersonalProjects;
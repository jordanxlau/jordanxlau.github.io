function Tutoring({lang}) {

    let english = lang === 'en';

    let tutoring_explanation = english ? "Over 5 years of tutoring experience.\nSessions adapted to your individual needs.\nA tutor certified in the Principles of Healthy Child Development.\nEmail me to book a FREE consultation today!"
    : "Plus que 5 ans d'expérience.\nTutoriels adaptés pour n'importe quel élève. Un tuteur avec un certificat en « Principles of Healthy Child Development ».\nEnvoyez-moi un courriel aujourd'hui pour une consultation GRATUITE.";
    let tutoring = english ? "Tutoring" : "J'enseigne...";
    // TODO: var display_warning = english ? "NOTICE: This page's display may be reduced on small screens." : "ATTENTION: L'affichage de cette page-web peut être réduit sur les écrans petits.";
    let high_school_french = english ? "High School French" : "Français (Lycée)";
    let high_school_math = english ? "High School Math" : "Maths (Lycée)";
    let coding_for_all_ages = english ? "Coding for All Ages" : "Programmation (Lycée et Élémentaire)"
    let elementary_school_help = english ? "Elementary School Help" : "Aide Générale (Élémentaire)";
    let testimonial1 = english ? "In Jordan, I not only found an exceptional tutor but also a role model and mentor for my son. I saw continual improvement of my son's command of the subjects, and grades. I would highly recommend Jordan not only for his academic knowledge, but his teaching style, which delivers results."
    : "Dans Jordan, j'ai trouvé un tuteur exceptionel, mais aussi un modèle et mentor pour mon fils. J'ai vu une amélioration continuelle dans la maîtrise de mon fils de ses sujets et dans ses notes. Je recommanderais Jordan fortement non seulement pour son connaisance academique, mais pour sa style d'enseignement, qui donne des résultats (traduit de l'anglais).";
    let testimonial2 = english ? "Jordan has been a very engaging and responsive tutor for my middle schooler. He has supported him to make ongoing progress during their one-on-one virtual sessions. I highly recommend reaching out if you are looking for remedial support or enrichment in the areas of Math, French and Writing."
    : "Jordan est un tuteur captivant et sensible à mon enfant en école intermédiaire. Il lui aide à progresser pendant leur séances virtuels en tête à tête. Je recommanderais contacter Jordan si vous cherchez le soutien correctif ou l'enrichissement dans en maths, en FLS et à l'ecriture (traduit de l'anglais).";
    let resources = english ? "Resources" : "Ressources";
    let resources_description = english ? "A collection of videos and accompanying practice worksheets I have created to help my tutees - and you - with a variety of topics!"
    : "Une suite des vidéos et feuilles de travail créées par moi pour mes élèves - et toi - en plusieurs sujets!";
    let download = english ? "Download" : "Téléchargez (en anglais)";

    return (
        <>
            <div className = "container-fluid p-3 text-white text-left">
                <h2>{tutoring}</h2>
                <p>{tutoring_explanation}</p>
            </div>
            <div  id = "book" className = "container-fluid text-white text-left">
                {/* First two Tutoring Options */}
                <div className = "row my-3">
                    <div className = "col mx-3 bg-primary">
                        {/* Each tutoring option has its own container */}
                        <div className = "container">
                            <div className = "row">
                                <div className = "col-sm-6 p-3">
                                    <p>Grade 1 to 8 - $35/hr</p>
                                    <h3>{elementary_school_help}</h3>
                                    <button className = "btn btn-outline-light btn-sm" data-toggle="modal" data-target="#booking">Request</button>
                                </div>
                                <div className = "col-sm-6">
                                    <img src = "../images/elementary.jpg" className = "pics image-fluid" alt = ""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col mx-3 bg-primary">
                        <div className = "container">
                            <div className = "row">
                                <div className = "col-sm-6 p-3">
                                    <p>Grade 1 to 12 - $40/hr</p>
                                    <h3>{coding_for_all_ages}</h3>
                                    <button className = "btn btn-outline-light btn-sm" data-toggle="modal" data-target="#booking">Request</button>
                                </div>
                                <div className = "col-sm-6">
                                    <img src = "../images/coding.jpg" className = "pics image-fluid" alt = ""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Second two Tutoring Options */}
                <div className = "row my-3">
                    <div className = "col mx-3 bg-primary">
                        <div className = "container">
                            <div className = "row">
                                <div className = "col-sm-6 p-3">
                                    <p>Grade 9 to 12 - $35/hr</p>
                                    <h3>{high_school_french}</h3>
                                    <button className = "btn btn-outline-light btn-sm" data-toggle="modal" data-target="#booking">Request</button>
                                </div>
                                <div className = "col-sm-6">
                                    <img src = "../images/french.jpg" className = "pics image-fluid" alt = ""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "col mx-3 bg-primary">
                        <div className = "container">
                            <div className = "row">
                                <div className = "col-sm-6 p-3">
                                    <p>Grade 9 to 12 - $40/hr</p>
                                    <h3>{high_school_math}</h3>
                                    <button className = "btn btn-outline-light btn-sm" data-toggle="modal" data-target="#booking">Request</button>
                                </div>
                                <div className = "col-sm-6">
                                    <img src = "../images/math.jpg" className = "pics image-fluid" alt = ""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            {/* The carousel's base code was copied from https://getbootstrap.com/docs/5.3/components/carousel/#how-it-works */}
            <div id = "testimonials" className = "bg-white justify-content-center">
                <div id="carousel" className = "carousel slide carousel-slide">
                    <div className = "carousel-inner">
                        <div className = "carousel-item text-center active">
                            <img src="../images/quotes1.jpg" className = "d-block mx-auto" height = "200px" alt = ""></img>
                            <div className = "carousel-caption text-black">
                            <p>{testimonial1}</p>
                            <p>Raouf, client</p>
                            </div>
                        </div>
                        <div className = "carousel-item text-center">
                            <img src="../images/quotes1.jpg" className = "d-block mx-auto" height = "200px" alt = ""></img>
                            <div className = "carousel-caption text-black">
                            <p>{testimonial2}</p>
                            <p>Jackie, client</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <script>
                    const CarouselElem = document.querySelector('#carousel')
                    const carousel = new bootstrap.Carousel(CarouselElem, {interval: 5000})
                </script> */}
            </div>

            {/* Booking Modal */}
            <dialog className = "modal fade" id="booking">
                <div className = "modal-dialog">
                    {/* Modal content */}
                    <div className = "modal-content">
                        <div className = "modal-header">
                            <h2>Booking:</h2>
                            <button type="button" className = "close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className = "modal-body">
                            <p>Please book by emailing <a href = "mailto:jordanxlau@yahoo.ca">jordanxlau@yahoo.ca</a></p>
                        </div>
                    </div>
                </div>
            </dialog>

            {/* Resources */}
            <div id = "resources_container" className = "container-fluid p-3 text-white text-left">
                <h2>{resources}</h2>
                <p>{resources_description}</p>
            </div>

            {/* Accordion from https://getbootstrap.com/docs/5.3/components/accordion/ */}
            <div className = "accordion p-3">
                <div className = "accordion-item">
                <h2 className = "accordion-header">
                    <button className = "accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Exponents Practice
                    </button>
                </h2>
                <div id="collapseOne" className = "accordion-collapse collapse">
                    <div className = "accordion-body">
                    <p>Grade 7 and up</p>
                    <p>Exponent problems covering basic exponentiation, exponentiation with negatives, the power of zero and fractional exponents.</p>
                    <br />
                    <a className = "border border-primary rounded-1 p-3" href = "downloadables/Exponents Practice.pdf" open>{download}</a>
                    </div>
                </div>
                </div>
                <div className = "accordion-item">
                <h2 className = "accordion-header">
                    <button className = "accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Linear Equations Practice
                    </button>
                </h2>
                <div id="collapseTwo" className = "accordion-collapse collapse">
                    <div className = "accordion-body">
                    <p>Grade 8</p>
                    <p>Linear equations with one variable.</p>
                    <br />
                    <a className = "border border-primary rounded-1 p-3" href = "downloadables/Linear Equations Practice.pdf" open>{download}</a>
                    </div>
                </div>
                </div>
                <div className = "accordion-item">
                <h2 className = "accordion-header">
                    <button className = "accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    The Replacement Test
                    </button>
                </h2>
                <div id="collapseThree" className = "accordion-collapse collapse">
                    <div className = "accordion-body">
                    <p>Grade 7 and up</p>
                    <p>Using the "replacement test" for determining the lexical category (ie. noun, verb, etc.) of a word.</p>
                    <br />
                    <a className = "border border-primary rounded-1 p-3" href = "downloadables/The Replacement Test.pdf" open>{download}</a>
                    </div>
                </div>
                </div>
            </div>

        </>
    );
}

export default Tutoring;
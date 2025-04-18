function Tutoring() {
    return (
        <div>
            <div class = "container-fluid p-3 text-white text-left">
                <h2 id = "tutoring">tutoring</h2>
                <p id = "tutoring_explanation">tutoring_explanation</p>
            </div>
            <div  id = "book" class = "container-fluid text-white text-left">
                {/* First two Tutoring Options */}
                <div class = "row my-3">
                    <div class = "col mx-3 bg-primary">
                        {/* Each tutoring option has its own container */}
                        <div class = "container">
                            <div class = "row">
                                <div class = "col-sm-6 p-3">
                                    <p>Grade 1 to 8 - $35/hr</p>
                                    <h3 id = "elementary">Elementary School Help</h3>
                                    <button class = "btn btn-outline-light btn-sm" data-toggle="modal" data-target="#booking">Request</button>
                                </div>
                                <div class = "col-sm-6">
                                    <img src = "images/elementary.jpg" class = "pics image-fluid" alt = ""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class = "col mx-3 bg-primary">
                        <div class = "container">
                            <div class = "row">
                                <div class = "col-sm-6 p-3">
                                    <p>Grade 1 to 12 - $40/hr</p>
                                    <h3 id="coding">coding</h3>
                                    <button class = "btn btn-outline-light btn-sm" data-toggle="modal" data-target="#booking">Request</button>
                                </div>
                                <div class = "col-sm-6">
                                    <img src = "images/coding.jpg" class = "pics image-fluid" alt = ""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Second two Tutoring Options */}
                <div class = "row my-3">
                    <div class = "col mx-3 bg-primary">
                        <div class = "container">
                            <div class = "row">
                                <div class = "col-sm-6 p-3">
                                    <p>Grade 9 to 12 - $35/hr</p>
                                    <h3 id = "french">french</h3>
                                    <button class = "btn btn-outline-light btn-sm" data-toggle="modal" data-target="#booking">Request</button>
                                </div>
                                <div class = "col-sm-6">
                                    <img src = "images/french.jpg" class = "pics image-fluid" alt = ""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class = "col mx-3 bg-primary">
                        <div class = "container">
                            <div class = "row">
                                <div class = "col-sm-6 p-3">
                                    <p>Grade 9 to 12 - $40/hr</p>
                                    <h3 id = "math">math</h3>
                                    <button class = "btn btn-outline-light btn-sm" data-toggle="modal" data-target="#booking">Request</button>
                                </div>
                                <div class = "col-sm-6">
                                    <img src = "images/math.jpg" class = "pics image-fluid" alt = ""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            {/* The carousel's base code was copied from https://getbootstrap.com/docs/5.3/components/carousel/#how-it-works */}
            <div id = "testimonials" class = "bg-white justify-content-center">
                <div id="carousel" class="carousel slide carousel-slide">
                    <div class="carousel-inner">
                        <div class="carousel-item text-center active">
                            <img src="images/quotes1.jpg" class="d-block mx-auto" height = "200px" alt = ""></img>
                            <div class="carousel-caption text-black">
                            <p id = "testimonial1">testimonial1</p>
                            <p>Raouf, client</p>
                            </div>
                        </div>
                        <div class="carousel-item text-center">
                            <img src="images/quotes1.jpg" class="d-block mx-auto" height = "200px" alt = ""></img>
                            <div class="carousel-caption text-black">
                            <p id = "testimonial2">testimonial2</p>
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
            <div class="modal fade" id="booking" role="dialog">
                <div class="modal-dialog">
                    {/* Modal content */}
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2>Booking:</h2>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <p>Please book by emailing <a href = "mailto:jordanxlau@yahoo.ca">jordanxlau@yahoo.ca</a></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Resources */}
            <div id = "resources_container" class = "container-fluid p-3 text-white text-left">
                <h2 id = "resources">resources</h2>
                <p id = "resources_description">resources_description</p>
            </div>

            {/* Accordion from https://getbootstrap.com/docs/5.3/components/accordion/ */}
            <div class="accordion p-3">
                <div class="accordion-item">
                <h2 id = "headerOne" class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Exponents Practice
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse">
                    <div class="accordion-body">
                    <p>Grade 7 and up</p>
                    <p>Exponent problems covering basic exponentiation, exponentiation with negatives, the power of zero and fractional exponents.</p>
                    <br />
                    <a class = "download border border-primary rounded-1 p-3" href = "downloadables/Exponents Practice.pdf" open>download</a>
                    </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 id = "headerTwo" class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Linear Equations Practice
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse">
                    <div class="accordion-body">
                    <p>Grade 8</p>
                    <p>Linear equations with one variable.</p>
                    <br />
                    <a class = "download border border-primary rounded-1 p-3" href = "downloadables/Linear Equations Practice.pdf" open>download</a>
                    </div>
                </div>
                </div>
                <div class="accordion-item">
                <h2 id = "headerThree" class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    The Replacement Test
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse">
                    <div class="accordion-body">
                    <p>Grade 7 and up</p>
                    <p>Using the "replacement test" for determining the lexical category (ie. noun, verb, etc.) of a word.</p>
                    <br />
                    <a class = "download border border-primary rounded-1 p-3" href = "downloadables/The Replacement Test.pdf" open>download</a>
                    </div>
                </div>
                </div>
            </div>

        </div>
    );
}

export default Tutoring;
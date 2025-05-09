function Banner({lang}) {
    var english = lang === 'en';

    var sub_title = english ? "Computer Scientist - Linguist - Tutor" : "Informaticien - Linguiste - Tuteur";
    
    return (
        <header class="p-3 text-white bg-primary">
            <div class = "row">
                <div class = "col-12">
                    <h1 style = {{marginLeft: 40}}>Jordan Lau</h1>
                </div>
                {/* <div class = "col-5 text-right">
                    <button id = "lang" class = "btn btn-sm btn-secondary text-primary mx-1" style = {{fontWeight: 1000}}></button>
                </div> */}
            </div>
            <div class = "row">
                <div class = "col-12">
                    <p id = "subtitle" style = {{marginLeft: 40}}>{sub_title}</p>
                </div>
            </div>
        </header>
    );
}

export default Banner;
function Banner() {
    return (
        <header class="p-3 text-white bg-primary">
            <div class = "row">
                <div class = "col-7">
                    <h1 style = {{marginLeft: 40}}>Jordan Lau</h1>
                </div>
                <div class = "col-5 text-right">
                    <button id = "lang" class = "btn btn-sm btn-secondary text-primary mx-1" style = {{fontWeight: 1000}}></button>
                </div>
            </div>
            <div class = "row">
                <div class = "col-12">
                    <p id = "subtitle" style = {{marginLeft: 40}}>subtitle</p>
                </div>
            </div>
        </header>
    );
}

export default Banner;
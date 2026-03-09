function Banner({lang}) {
    let english = lang === 'en';

    let sub_title = english ? "Computer Scientist - Linguist - Tutor" : "Informaticien - Linguiste - Tuteur";
    
    return (
        <header className = "p-3 text-white bg-primary">
            <div className = "row">
                <div className = "col-12">
                    <h1 style = {{marginLeft: 40}}>Jordan Lau</h1>
                </div>
                {/* <div className = "col-5 text-right">
                    <button id = "lang" className = "btn btn-sm btn-secondary text-primary mx-1" style = {{fontWeight: 1000}}></button>
                </div> */}
            </div>
            <div className = "row">
                <div className = "col-12">
                    <p id = "subtitle" style = {{marginLeft: 40}}>{sub_title}</p>
                </div>
            </div>
        </header>
    );
}

export default Banner;
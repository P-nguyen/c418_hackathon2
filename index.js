$(document).ready(initializeApp);

function initializeApp() {
    autoComplete( $("input"), _countries);
}

function capitalizeStr( inputStr ){
    return inputStr[0].toUpperCase() + inputStr.substring(1, inputStr.length);
}

function autoComplete( input$Ele, countryArray){

    input$Ele.on('input', function(event){

        let val = this.value; //this is the input dom element
        //close any open list.
        if (!val) {
            $(".autoCompleteBackground").text( "" );
            return false;} // this is when someone deletes previous inputs its a ''

        const filteredCountryArr = countryArray
                                    .filter( country => country.substr(0, val.length).toUpperCase() === val.toUpperCase());

        this.value = capitalizeStr(val);

        const autoCompString = filteredCountryArr
                                .splice(0,5)
                                .reduce( (fullString, country) => `${fullString} | ${country}`);

        $(".autoCompleteBackground").text( autoCompString );
    });
}
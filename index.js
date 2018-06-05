$(document).ready(initializeApp);

function initializeApp() {
    autoComplete( $("input"), _countries);
}

function capitalizeStr( inputStr ){
    return inputStr[0].toUpperCase() + inputStr.substring(1, inputStr.length);
}

function autoComplete( input$Ele, countryArray){
    let lastFoundCountries;

    input$Ele.on('input', function(){
        let val = this.value; //this is the input dom element
        //close any open list.
        if (!val) {
            $(".autoCompleteBackground").text( "" );
            lastFoundCountries = null;
            return;} // this is when someone deletes previous inputs its a ''

        let filteredCountryArr = countryArray
                            .filter( country => country.substr(0, val.length).toUpperCase() === val.toUpperCase() ? true : false );

        //this is a check to see if array has anything, if nothing exist then stop the function.
        if (filteredCountryArr.length === 0){
            return $(".autoCompleteBackground").text( "" );}

        this.value = capitalizeStr(val);

        lastFoundCountries = filteredCountryArr.splice(0,5);
        const autoCompString = autoCompleteString( lastFoundCountries );
        $(".autoCompleteBackground").text( autoCompString );

    });

    input$Ele.on("keypress", function(event){
        if(event.keyCode === 13){
            if(lastFoundCountries<1){
                return $(".autoCompleteBackground").text( "" );
            }

            this.value = lastFoundCountries[0];
            $(".autoCompleteBackground").text( autoCompleteString( lastFoundCountries ));
            lastFoundCountries.splice(0,1);
            return;
        }
    });

    function autoCompleteString( inputCountryArray ) {
        return inputCountryArray.reduce( (fullString, country) => `${fullString} | ${country}`);
    }
}
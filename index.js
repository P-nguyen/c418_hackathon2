$(document).ready(initializeApp);

function initializeApp() {
    let countryArray = CountryApi.getAllCountries();
    autoComplete( $("input"), countryArray);
}



function autoComplete( input$Ele, countryArray){
    let lastFoundCountries = [];
    $(".search-icon").on('click', sendCountryCode);

    input$Ele.on('input', function(){
        let val = this.value; //this is the input dom element
        //close any open list.
        if (!val) {
            $(".autoCompleteBackground").text( "" );
            lastFoundCountries = null;
            return;} // this is when someone deletes previous inputs its a ''

        let filteredCountryArr = countryArray
                            .filter( country => country.name.substr(0, val.length).toUpperCase() === val.toUpperCase() ? true : false );

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

            if(lastFoundCountries[0].name === this.value){
                lastFoundCountries.splice(0,1);
            }

            if(lastFoundCountries.length <1){
                this.value = '';
                $(".autoCompleteBackground").text( "" );
            }else{
                this.value = lastFoundCountries[0].name;
                $(".autoCompleteBackground").text( autoCompleteString( lastFoundCountries ));
            }
            return;
        }
    });

    function capitalizeStr( inputStr ){
        return inputStr[0].toUpperCase() + inputStr.substring(1, inputStr.length);
    }

    function autoCompleteString( inputCountryObj ) {
        const result = inputCountryObj.map( obj => obj.name);
        return result.reduce( (fullString, country) => `${fullString} | ${country}`);
    }

    function sendCountryCode(){
        try{
            let countryCode = lastFoundCountries[0].code;
            window.location.href = ( `resultPage.html?countrycode=${countryCode}` );
        }catch(err){
            console.log('no country selected');
        }
        return;
    }
}
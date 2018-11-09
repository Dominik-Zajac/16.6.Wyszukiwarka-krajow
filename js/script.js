$(function() {

    var urlCountryName = 'https://restcountries.eu/rest/v2/name/';
    var countriesList = $('#countries-list-value');
    var searchButton = $('#search');

    searchButton.click(searchCountries);

    /*---------- Downloading countries ----------*/
    function searchCountries() {
        var countryName = $('#country-name').val();
        if (countryName === '') {
            countryName = 'Poland'
        };
        $.ajax({
            url: urlCountryName + countryName,
            method: 'GET',
            success: showCountriesList
        });
    }

    /*---------- Adding a list ----------*/
    function showCountriesList(resp) {
        countriesList.empty();
        resp.forEach(function(item) {
            var $countryFlag = $('<img><td>').attr('src', item.flag).addClass('image-flag');
            var $countryName = $('<td>').text(item.name).addClass('title-list');
            var $countryCapital = $('<td>').text(item.capital).addClass('list-capital');
            var $countryBorders = $('<td>').text(item.topLevelDomain).addClass('list-borders');
            var $countryPopulation = $('<td>').text(item.population).addClass('list-population');
            var $countrySubregion = $('<td>').text(item.subregion).addClass('list-subregion');
            var $countryTimeZones = $('<td>').text('+ ' + item.callingCodes).addClass('list-timezones');

            countriesList.append($countryFlag)
                .append($countryName)
                .append($countryCapital)
                .append($countryBorders)
                .append($countryPopulation)
                .append($countrySubregion)
                .append($countryTimeZones);
        });
    }

});
$(document).ready(function () {
    $('#year').html(new Date().getFullYear());
    $('body').on('dragstart contextmenu', false);
    $('body').bind('cut copy paste', false);
    $.getJSON('continents.json', function (data) {
        var listItems = "<option disabled selected value></option>";
        $(data.continents).each(function (index, value) {
            listItems += "<option value='" + value.name + "'>" + value.name + "</option>";
        });
        $('#Continent').html(listItems);
    });
});
$('#Continent').change(function () {
    var continent = this.value;
    $.getJSON('countries.json', function (data) {
        var listItems = "<option disabled selected value></option>";
        $(data).each(function (index, value) {
            if (value.continent == continent) {
                listItems += "<option value='" + value.code + "'>" + value.name + "</option>";
            }
        });
        $('#Country').html(listItems);
    });
});
$('#Country').change(function () {
    var code = this.value;
    $('#flag').attr('src', "images/" + code.toLowerCase() + ".svg");
});

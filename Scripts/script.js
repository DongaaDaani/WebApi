$(document).ready(function () {  

    loadData();  
});  
  let cars=[]

function loadData() {  
    $.ajax({  
        url: "https://webtechcars.herokuapp.com/api/cars",  
        type: "GET",  
        contentType: "application/json;charset=utf-8",  
        dataType: "json",  
        success: function (result) { 
            cars=result; 
            var html = '';  
            $.each(result, function (key, item) {  
                html += '<tr>';  
                html += '<td>' + item._id + '</td>';  
                html += '<td>' + item.name + '</td>';  
                html += '<td>' + item.consumption + '</td>';  
                html += '<td>' + item.color + '</td>';  
                html += '<td>' + item.manufacturer + '</td>';  
                html += '<td>' + item.avaiable + '</td>';  
                html += '<td>' + item.year + '</td>';  
                html += '<td>' + item.horsepower + '</td>'; 
                html += '<td><a href="#" onclick="return getbyID(' + key + ')">Edit</a> | <a href="#" onclick="Delele(' + key + ')">Delete</a></td>';  
           
                html += '</tr>';  
            });  
            $('.tbody').html(html);  
        },  
        error: function (errormessage) {  
            alert(errormessage.responseText);  
        }  
    });  
}  
  

function Add() {  
    var res = validate();  
    if (res == false) {  
        return false;  
    } 
    var carObj = {  
        _id: $('#id').val(),  
        name: $('#name').val(),  
        consumption: $('#consumption').val(),  
        color: $('#color').val(),  
        manufacturer: $('#manufacturer').val() , 
        avaiable: $('#avaiable').val(),  
        year: $('#year').val(),  
        horsepower: $('#horsepower').val()        
    };  
    $.ajax({  
        url: "https://webtechcars.herokuapp.com/api/cars",  
        data: JSON.stringify(carObj),  
        type: "POST",  
        contentType: "application/json",  
        dataType: "json",  
        success: function (result) {  
            loadData();  
            $('#myModal').modal('hide');  
        },  
        error: function (errormessage) {  
            alert(errormessage.responseText);  
        }  
    });  
}  

function Delele(ID) {  
    let id = cars[ID]._id;
    var ans = confirm("Are you sure you want to delete this Record?");  
    if (ans) {  
        $.ajax({  
            url: "https://webtechcars.herokuapp.com/api/cars/" + id,  
            type: "DELETE",  
            contentType: "application/json;",  
            dataType: "json",  
            success: function (result) {  
                loadData();  
            },  
            error: function (errormessage) {  
                alert(errormessage.responseText);  
            }  
        });  
    }  
} 

function Delele2(ID) {  
    let id = cars[ID]._id;
        $.ajax({  
            url: "https://webtechcars.herokuapp.com/api/cars/" + id,  
            type: "DELETE",  
            contentType: "application/json;",  
            dataType: "json",  
            success: function (result) {  
                loadData();  
            },  
            error: function (errormessage) {  
                alert(errormessage.responseText);  
            }  
        });  
     
}  


function getbyID(CarID) {
    $('#name').css('border-color', 'lightgrey');  
    $('#country').css('border-color', 'lightgrey');  
    $('#founded').css('border-color', 'lightgrey');  
     let id = cars[CarID]._id;
        $.ajax({  
            url: "https://webtechcars.herokuapp.com/api/manufacturers",  
            type: "GET",  
            contentType: "application/json",  
            dataType: "json",  
            success: function (result) {  
             result=cars[CarID]
            $('#id').val(result._id);  
            $('#name').val(result.name);  
            $('#consumption').val(result.consumption);  
            $('#color').val(result.color);  
            $('#manufacturer').val(result.manufacturer);  
            $('#avaiable').val(result.avaiable);  
            $('#year').val(result.year);  
            $('#horsepower').val(result.horsepower);  
                $('#myModal').modal('show');               
                Delele2(CarID)
            },  
            error: function (errormessage) {  
                alert(errormessage.responseText);  
            }  
        });  
        return false;  
    }  



function clearTextBox() {  
    $('#id').val("");  
    $('#name').val("");  
    $('#consumption').val("");  
    $('#color').val("");  
    $('#manufacturer').val("");  
    $('#avaiable').val("");  
    $('#year').val("");  
    $('#horsepower').val("");   
    $('#btnAdd').show();  
}  


function validate() {  
    var isValid = true;  
    if ($('#name').val().trim() == "") {  
        $('#name').css('border-color', 'Red');  
        isValid = false;  
    }  
    else {  
        $('#name').css('border-color', 'lightgrey');  
    }  
    if ($('#consumption').val().trim() == "") {  
        $('#consumption').css('border-color', 'Red');  
        isValid = false;  
    }  
    else {  
        $('#consumption').css('border-color', 'lightgrey');  
    }  
    if ($('#color').val().trim() == "") {  
        $('#color').css('border-color', 'Red');  
        isValid = false;  
    }  
    else {  
        $('#color').css('border-color', 'lightgrey');  
    }  
    if ($('#manufacturer').val().trim() == "") {  
        $('#manufacturer').css('border-color', 'Red');  
        isValid = false;  
    }  
    else {  
        $('#manufacturer').css('border-color', 'lightgrey');  
    }  
    if ($('#avaiable').val().trim() == "") {  
        $('#avaiable').css('border-color', 'Red');  
        isValid = false;  
    }  
    else {  
        $('#avaiable').css('border-color', 'lightgrey');  
    }  
    if ($('#year').val().trim() == "") {  
        $('#year').css('border-color', 'Red');  
        isValid = false;  
    }  
    else {  
        $('#year').css('border-color', 'lightgrey');  
    }  
    if ($('#horsepower').val().trim() == "") {  
        $('#horsepower').css('border-color', 'Red');  
        isValid = false;  
    }  
    else {  
        $('#horsepower').css('border-color', 'lightgrey');  
    }  
    return isValid;  
}  

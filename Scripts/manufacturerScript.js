$(document).ready(function () {  
    loadData();  
    
});  
  
 
function loadData() {  
    $.ajax({  
        url: "https://webtechcars.herokuapp.com/api/manufacturers",  
        type: "GET",  
        contentType: "application/json;charset=utf-8",  
        dataType: "json",  
        success: function (result) {  
            var html = '';  
            cars=result; 
            $.each(result, function (key, item) {  
                html += '<tr>';  
                html += '<td>' + item._id + '</td>';  
                html += '<td>' + item.name + '</td>';  
                html += '<td>' + item.country + '</td>';  
                html += '<td>' + item.founded + '</td>';  
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
    var manufactureObj = {  
        _id: $('#id').val(),  
        name: $('#name').val(),  
        country: $('#country').val(),  
        founded: $('#founded').val(),  
    };  
    $.ajax({  
        url: "https://webtechcars.herokuapp.com/api/manufacturers",  
        data: JSON.stringify(manufactureObj),  
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
  


function getbyID(ManfID) {
    $('#name').css('border-color', 'lightgrey');  
    $('#country').css('border-color', 'lightgrey');  
    $('#founded').css('border-color', 'lightgrey');  
     let id = cars[ManfID]._id;
        $.ajax({  
            url: "https://webtechcars.herokuapp.com/api/manufacturers",  
            type: "GET",  
            contentType: "application/json",  
            dataType: "json",  
            success: function (result) {  
                result=cars[ManfID]
                $('#id').val(result._id);  
                $('#name').val(result.name);  
                $('#country').val(result.country);  
                $('#founded').val(result.founded);  
                $('#myModal').modal('show');               
                Delele2(ManfID)
            },  
            error: function (errormessage) {  
                alert(errormessage.responseText);  
            }  
        });  
        return false;  
    }  
       
function Delele(ID) {  
    let id = cars[ID]._id;
    var ans = confirm("Are you sure you want to delete this Record?");  
    if (ans) {  
        $.ajax({  
            url: "https://webtechcars.herokuapp.com/api/manufacturers/" + id,  
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
            url: "https://webtechcars.herokuapp.com/api/manufacturers/" + id,  
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
 
function clearTextBox() {  
    $('#id').val("");  
    $('#name').val("");  
    $('#country').val("");  
    $('#founded').val("");  
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
    if ($('#country').val().trim() == "") {  
        $('#country').css('border-color', 'Red');  
        isValid = false;  
    }  
    else {  
        $('#country').css('border-color', 'lightgrey');  
    }  
    if ($('#founded').val().trim() == "") {  
        $('#founded').css('border-color', 'Red');  
        isValid = false;  
    }  
    else {  
        $('#founded').css('border-color', 'lightgrey');  
    }  
    return isValid;  
}  


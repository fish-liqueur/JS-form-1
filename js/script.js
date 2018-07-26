$(document).ready(function () {
    $("#submit-btn").click(function () {
        var userForm = $("#user-data");
        var errorMsgs = "";
        var errorTypes = {firstName: "Укажите имя!", lastName: "Укажите фамилию!",
            wrongMail: "Введите настоящий адрес почты!", wrongPhone: "Введите российский номер телефона!",
            uncheckedBox: "Чтобы продолжить, необходимо предоставить согласие на обработку персональных данных!"};
        if (userForm.find(':input[name=first-name]').val().length < 1) {
            errorMsgs = errorsMsgsFunction (errorMsgs, errorTypes.firstName);
        }
        if (userForm.find(':input[name=last-name]').val().length < 1) {
            errorMsgs = errorsMsgsFunction (errorMsgs, errorTypes.lastName);
        }

        if (!validateEmail(userForm.find(':input[name=email]').val())) {
            errorMsgs = errorsMsgsFunction (errorMsgs, errorTypes.wrongMail);
        }
        if (!validatePhone(userForm.find(':input[name=telephone]').val())) {
            errorMsgs = errorsMsgsFunction (errorMsgs, errorTypes.wrongPhone);
        }
        if ($("#personal-data-check").prop("checked") === false) {
            errorMsgs = errorsMsgsFunction (errorMsgs, errorTypes.uncheckedBox);
        }
        if (errorMsgs.length > 0) {
            $("#search-error").html(errorMsgs);
        }
    });
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePhone(telephone) {
    var re = /^((\+7|7|8)+([0-9]){10})$/gm;
    return re.test(telephone);
}

function errorsMsgsFunction (errorMsgs, newMessage) {
return errorMsgs + "<p>" + newMessage + "</p>";
}
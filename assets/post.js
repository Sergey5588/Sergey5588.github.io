window.onload = function() {
    body = document.getElementsByTagName("body")[0];
}


body = document.body;

function dateDiffInDays(a, b) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

var userLang = navigator.language || navigator.userLanguage
console.log(userLang)
var isRussian = userLang == "ru-RU"


const bday = new Date('11/27/2009');
yo = Math.abs(dateDiffInDays(new Date(), bday)/365);
v = Math.floor(yo) + " y.o.";

document.getElementById('yo').textContent = v;
if (userLang == "ru-RU")
{
    document.body.style.fontFamily = "pixelRU"
    document.getElementById("skill_txt").innerHTML = "уверенно: C# и Unity, C++ и SFML, python, GDScript и godot.<br>поверхностно: html, css, javascript, lua, java, go";
    document.getElementById("skill_title").innerHTML = document.getElementById("skill_title").innerHTML.replace("Skills", "Навыки");
    
    body.innerHTML = body.innerHTML.replace("Contacts", "Контакты")
    body.innerHTML = body.innerHTML.replace("About me", "Обо мне")
    body.innerHTML = body.innerHTML.replace("Avatar", "Аватар")
    body.innerHTML = body.innerHTML.replace("y.o.", "лет")
    body.innerHTML = body.innerHTML.replace("from Russia", "из России")
    body.innerHTML = body.innerHTML.replace("+3 GMT", "+3 по Гринвичу")
}
function update()
{
    
    if (document.getElementsByClassName("window").length == 0) {
        
        window.open("https://shattereddisk.github.io/rickroll/rickroll.mp4")
        location.reload();
    }
    else {
        setTimeout(update, 50);
        
    }
        
}
update()
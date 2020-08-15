/** Add any JavaScript you need to this file. */
window.onload = (function(){
    var i11 = document.querySelector('#item1');
    var i12 = document.querySelector('#item2');
    var i13 = document.querySelector('#item3');
    var i14 = document.querySelector('#item4');
    var i15 = document.querySelector('#item5');
    var i16= document.querySelector('#item6');
    var i17= document.querySelector('#item7');
    var i18= document.querySelector('#item8');
    var i19= document.querySelector('#item9');
    var i110= document.querySelector('#item10');
    var i111= document.querySelector('#item11');
    var i112= document.querySelector('#item12');
    var elemsmart = document.querySelector('#smart');
    var elmeanalog = document.querySelector('#analog');
    elemsmart.addEventListener('click', function(){
        i11.classList.add('hidden');
        i12.classList.add('hidden');
        i13.classList.add('hidden');
        i14.classList.add('hidden');
        i15.classList.add('hidden');
        i16.classList.add('hidden');
        i17.classList.remove('hidden');
        i18.classList.remove('hidden');
        i19.classList.remove('hidden');
        i110.classList.remove('hidden');
        i111.classList.remove('hidden');
        i112.classList.remove('hidden');
    });
    elmeanalog.addEventListener('click', function(){
        i11.classList.remove('hidden');
        i12.classList.remove('hidden');
        i13.classList.remove('hidden');
        i14.classList.remove('hidden');
        i15.classList.remove('hidden');
        i16.classList.remove('hidden');
        i17.classList.add('hidden');
        i18.classList.add('hidden');
        i19.classList.add('hidden');
        i110.classList.add('hidden');
        i111.classList.add('hidden');
        i112.classList.add('hidden');
    });
});
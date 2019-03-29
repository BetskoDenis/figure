var h,
    d,
    res,
    w,
x,
y,
z;
function rectangle() {
    if (document.getElementById('check').checked) {
        //console.log('sdsd');
        document.getElementById('check2').checked = false;
        document.getElementById('check3').checked = false;
        document.getElementById('leg1').style.display = 'none';
        document.getElementById('leg2').style.display = 'none';
        document.getElementById('hypot').style.display = 'none';
        document.getElementById('diam').style.display = 'none';
        document.getElementById('height').style.display = 'block';
        document.getElementById('width').style.display = 'block';
    }
}
    function circle() {
        if (document.getElementById('check2').checked)
            //console.log('sdsd');
            document.getElementById('check').checked = false;
            document.getElementById('check3').checked = false;
            document.getElementById('leg1').style.display = 'none';
            document.getElementById('leg2').style.display = 'none';
            document.getElementById('hypot').style.display = 'none';
            document.getElementById('height').style.display = 'none';
            document.getElementById('width').style.display = 'none';
            document.getElementById('diam').style.display = 'block';

    }

function triangle() {
    if (document.getElementById('check3').checked)
    //console.log('sdsd');
        document.getElementById('check').checked = false;
    document.getElementById('check2').checked = false;
    document.getElementById('leg1').style.display = 'block';
    document.getElementById('leg2').style.display = 'block';
    document.getElementById('hypot').style.display = 'block';
    document.getElementById('height').style.display = 'none';
    document.getElementById('width').style.display = 'none';
    document.getElementById('diam').style.display = 'none';

}



function magic() {
    document.getElementById('one').style = '';
    if (document.getElementById('check').checked && document.getElementById('height').value !='' && document.getElementById('width').value !='') {
        document.getElementById('diam').value = '';
       document.getElementById('leg1').value = '';
       document.getElementById('leg2').value = '';
       document.getElementById('hypot').value = '';
        h = document.getElementById('height').value;
        w = document.getElementById('width').value;
        document.getElementById('one').style.width = w + 'px';
        document.getElementById('one').style.height = h + 'px';
        document.getElementById('one').style.display = 'block';
    } else if (document.getElementById('check2').checked && document.getElementById('diam').value !='') {
        document.getElementById('height').value = '';
        document.getElementById('width').value = '';
        document.getElementById('leg1').value = '';
        document.getElementById('leg2').value = '';
        document.getElementById('hypot').value = '';
        res = (3.14 * document.getElementById('diam').value) / 4;
        document.getElementById('one').style.height = res + 'px';
        document.getElementById('one').style.width = res + 'px';
        document.getElementById('one').style.borderRadius = '50%';
        document.getElementById('one').style.display = 'block';
    } else if (document.getElementById('check3').checked && document.getElementById('leg1').value !='' && document.getElementById('leg2').value !='' && document.getElementById('hypot').value != '')
    {
        document.getElementById('diam').value = '';
        document.getElementById('height').value = '';
        document.getElementById('width').value = '';

       x = document.getElementById('leg1').value;
       y = document.getElementById('leg2').value;
       z = document.getElementById('hypot').value;

        document.getElementById('one').style.height = res + 'px';
        document.getElementById('one').style.width = res + 'px';
        document.getElementById('one').style.borderRadius = '50%';
        document.getElementById('one').style.display = 'block';
    } else {alert('Бро, сделай свой выбор')}
}
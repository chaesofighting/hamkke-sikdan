/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function () {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if (currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

/*
document.getElementById('bmrForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activityLevel = parseFloat(document.getElementById('activityLevel').value);
    const syndrome = parseInt(document.getElementById('syndrome').value);

    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert('모든 값을 입력하세요.');
        return;
    }

    const bmr = calculateBMR(age, weight, height);
    const totalCalories = parseInt(bmr * activityLevel);

    if (syndrome == 1) {
        totalCalories -= 300;
    }

    document.getElementById('result').innerHTML = `<p class="lead">당신의 하루 필요 칼로리는 <strong>${totalCalories} kcal</strong> 입니다.</p>`;
});

function calculateBMR(age, weight, height) {
    return 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
}
*/

document.getElementById('bmrForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activityLevel = parseFloat(document.getElementById('activityLevel').value);
    const syndrome = parseInt(document.getElementById('syndrome').value);

    if (isNaN(age) || isNaN(weight) || isNaN(height) || isNaN(activityLevel) || isNaN(syndrome)) {
        alert('모든 값을 입력하세요.');
        return;
    }

    let bmr = calculateBMR(age, weight, height);
    let totalCalories = parseInt(bmr * activityLevel);

    if (syndrome === 1) {
        totalCalories -= 300; // Subtract 300 calories for Obesity
    }

    document.getElementById('result').innerHTML = `<p class="lead">당신의 하루 필요 칼로리는 <strong>${totalCalories} kcal</strong> 입니다.</p>`;
});

function calculateBMR(age, weight, height) {
    return 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
}
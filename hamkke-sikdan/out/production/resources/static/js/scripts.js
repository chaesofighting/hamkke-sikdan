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

    const rand = Math.floor(Math.random() * 4);

    document.getElementById('result').innerHTML = `<p class="lead">당신의 하루 필요 칼로리는 <strong>${totalCalories} kcal</strong> 입니다.</p>`;

});

function calculateBMR(age, weight, height) {
    return 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
}

document.getElementById('receiveDietRecommendationsBtn').addEventListener('click', function (e) {
    e.preventDefault();

    // New code for sending data to the backend
    sendDataToBackend(totalCalories, syndrome, rand);
});

function sendDataToBackend(totalCalories, syndrome, rand) {
    // Make an AJAX request to the Spring Boot backend endpoint
    $.ajax({
        url: 'http://localhost:8080/calculate', // Replace with your actual Spring Boot backend endpoint
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            totalCalories: totalCalories,
            syndrome: syndrome,
            rand: rand
        }),
        success: function (response) {
            // Handle the successful response from the backend
            console.log('Data sent successfully:', response);
            // Optionally, you can redirect to another page after a successful response
            window.location.href = 'index copy 2.html';
        },
        error: function (error) {
            // Handle errors during the AJAX request
            console.error('Error sending data:', error);
        }
    });
}
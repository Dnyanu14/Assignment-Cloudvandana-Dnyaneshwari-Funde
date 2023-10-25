function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const maleChecked = document.getElementById('male').checked;
    const femaleChecked = document.getElementById('female').checked;
    const gender = maleChecked ? 'Male' : (femaleChecked ? 'Female' : '');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    if (firstName && lastName && dob && country && gender && profession && email && mobile) {
        const message = `First Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dob}\nCountry: ${country}\nGender: ${gender}\nProfession: ${profession}\nEmail: ${email}\nMobile Number: ${mobile}`;

        alert(message);
        resetForm();
    } else {
        alert("Please fill out all the fields.");
    }
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

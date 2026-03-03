const STOREGE_KEY = 'feedback-form-state';

let formData = {
    email: "",
    message: "",
};

const form = document.querySelector('.feedback-form');

const zip = localStorage.getItem(STOREGE_KEY);
    let data = {};

if (zip) {
    try {
        data = JSON.parse(zip) || {};
    } catch {
        data = {};
    }
}
    form.elements.email.value = data.email || '';
    form.elements.message.value = data.message || '';

    formData = {
        email: data.email || "",
        message: data.message || "",
    };

form.addEventListener('input', e => {
   formData[e.target.name] = e.target.value; 
    const zip = JSON.stringify(formData);
    localStorage.setItem(STOREGE_KEY, zip);
});

form.addEventListener('submit', e => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    localStorage.removeItem(STOREGE_KEY);

    formData = { email: "", message: "" };
    form.reset();
})

<template>
    <div>
        <h2>Kontakt</h2>
        <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <p class="half-width">
            <label>Name:<input type="text" name="name" /></label>
        </p>
        <p class="half-width">
            <label>Email:<input type="email" name="email" /></label>
        </p>
        <p class="full-width">
            <label>Telefon:<input type="tel" name="phone" /></label>
        </p>
        <p class="full-width">
            <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
            <button type="submit">Nachricht senden</button>
        </p>
        </form>
    </div>
</template>

<script>
export default {
    layout: 'main',
    head() {
        return {
            title: 'Kontakt',
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: "description",
                    name: "description",
                    content: 'Kontaktformular'
                }
            ]
        };
    },
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin-top: 10px;
}

.half-width {
    width: 49%;
}

.full-width {
    width: 100%;
}

input, textarea{
    border: 2px solid var(--text-dark);
    border-radius: 5px;
    padding: 10px 15px;
}

button {
    padding: 10px 15px;
    background-color: var(--green-color);
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    transition: .3s ease-in-out;
    margin-top: 20px;
}

button:hover {
    background-color: var(--orange-color);
    transition: .3s ease-in-out;
    cursor: pointer;
}
</style>
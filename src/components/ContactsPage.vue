<template>
    <section class="contacts-container">
        <div class="contacts">
            <img src="../assets/pics/julia.jpg">
            <div>
                <h1>CONTACTS</h1>
                <p><strong>General Enquiries</strong> info@saltee.co.uk</p>
                <p><strong>PR & Marketing Enquiries</strong> patrick@saltee.co.uk</p>
                <p><strong>Sales Enquiries</strong> eleanor@saltee.co.uk</p>
                <p><strong>Office Address</strong> 11-15 High Street, Marlow, SL1 7AU</p>
            </div>
        </div>
  </section>
</template>

<style scoped>
@media (max-width: 539px) {
    img {
        display: none;
    }
    .contacts {
        width: 60%;
    }
    .contacts div {
        align-items: flex-start;
        width: 100%;
    }
    h1 {
        align-self: center;
    }
}
@media (min-width: 540px) and (max-width: 767px) {
    img {
        display: none;
    }
    .contacts {
        width: 60%;
    }
    .contacts div {
        align-items: flex-start;
        width: 100%;
    }
    h1 {
        align-self: center;
    }
}
@media (min-width: 768px) {
    * {
        background-color: white;
    }
    .contacts {
        width: 70%;
    }
    .contacts div {
        align-items: flex-start;
        width: 44%;
    }
}
@media (min-width: 992px) {
    * {
        background-color: white;
    }
    .contacts {
        width: 60%;
    }
    .contacts div {
        align-items: flex-start;
        width: 44%;
    }
}
.contacts-container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    background-color: #E2E2E2;
    margin-top: 5vh;
}
.contacts {
    display: flex;
    height: auto;
}
.contacts div {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    margin: 70px 40px;
    padding: 0;
    height: auto;
}
img {
    width: 45%;
    height: auto;
    margin: 0;
    padding: 0; 
}
</style>
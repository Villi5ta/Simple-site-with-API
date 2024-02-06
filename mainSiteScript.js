const wrapper = document.getElementById("wrapper")
const regUserWrapper = document.getElementById("reg-user-wrapper")

const fetchLocation = async () => {
    const response = await fetch("https://65bb531552189914b5bbbe2d.mockapi.io/locationReview")
    const locations = await response.json()
    console.log(locations);

    locations.forEach((site) => {
        const card = document.createElement("a")
        card.href = './location Page/location.html'
        card.setAttribute("class", "card")
        card.addEventListener("click", () => {
            localStorage.setItem('siteId', site.id)
        })

        const location = document.createElement("h2")
        const photo = document.createElement("img")
        const impressions = document.createElement("p")
        const grade = document.createElement("h3")
        const worthVisiting = document.createElement('h4')

        location.innerText = site.location
        photo.src = site.photo
        impressions.innerText = site.impressions
        grade.innerText = "Preemness indicator: " + site.grade + " / 10"
        worthVisiting.innerText = site.worthVisiting == true ? "TL;DR: Preem site, worth bringing your other half" : "TL;DR: Don't be a gonk, delta outta there"

        card.append(location)
        card.append(photo)
        card.append(impressions)
        card.append(grade)
        card.append(worthVisiting)

        wrapper.append(card)
    })
}

fetchLocation()

const fetchRegularReview = async () => {
    const regUserReview = localStorage.getItem('regUserReview');
    const review = JSON.parse(regUserReview);

    regUserWrapper.innerHTML = '';

    if (review) {
        const cardReg = document.createElement("a");
        cardReg.classList.add("card");

        cardReg.addEventListener("click", () => {
            localStorage.setItem('reviewID', review.id);
        });

        const location = document.createElement("h2");
        const photo = document.createElement("img");
        const impressions = document.createElement("p");
        const grade = document.createElement("h3");
        const worthVisiting = document.createElement('h4');

        location.innerText = review.location;
        photo.src = review.photo;
        impressions.innerText = review.impressions;
        grade.innerText = "Preemness indicator: " + review.grade + " / 10";
        worthVisiting.innerText = review.worthVisiting ? "TL;DR: Preem site, worth bringing your other half" : "TL;DR: Don't be a gonk, delta outta there";

        cardReg.append(location);
        cardReg.append(photo);
        cardReg.append(impressions);
        cardReg.append(grade);
        cardReg.append(worthVisiting);

        regUserWrapper.append(cardReg);
    }
}

fetchRegularReview();
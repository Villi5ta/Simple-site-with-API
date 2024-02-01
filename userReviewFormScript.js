const button = document.getElementById("button")

const userLocation = document.getElementById("location")
const userPhoto = document.getElementById("photo")
const userImpressions = document.getElementById("impressions")
const userRating = document.getElementById("grade")
const userRecommendation = document.getElementById("worthVisiting")

const message = document.getElementById("message")

button.addEventListener('click', async () => {
    const userReview = {
    location: userLocation.value,
    photo: userPhoto.value,
    impressions: userImpressions.value,
    grade: userRating.value > 10 || userRating.value < 0 ? "Invalid grade" : userRating.value,
    worthVisiting: userRecommendation.value.toLowerCase() == "yes" ? true : false,
    }

    console.log(userReview);

    const response = await fetch("https://65bb531552189914b5bbbe2d.mockapi.io/locationReview", 
    {
     method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userReview)
    })

    console.log(response);

    const addedReview = await response.json()

    console.log(addedReview);

    message.innerHTML = "Location was added successfully";

    setTimeout(() => {
        window.location.assign("./mainSite.html")
    }, 2000)

    
    
})
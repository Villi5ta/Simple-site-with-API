const buttonReg = document.getElementById("buttonReg")

const userLocation = document.getElementById("location-reg")
const userPhoto = document.getElementById("photo-reg")
const userImpressions = document.getElementById("impressions-reg")
const userRating = document.getElementById("grade-reg")
const userRecommendation = document.getElementById("worthVisiting-reg")

const message = document.getElementById("message")

buttonReg.addEventListener('click', async () => {

  // if(!location.value || !photo.value || !impressions.value  || !grade.value  || !worthVisiting.value ){
  //   return
  // }

    const regUserReview = {
    location: "Visitor content: " + userLocation.value,
    photo: userPhoto.value,
    impressions: userImpressions.value,
    grade: userRating.value > 10 || userRating.value < 0 ? "Invalid grade" : userRating.value,
    worthVisiting: userRecommendation.value.toLowerCase() == "yes" ? true : false,
    }

    console.log(regUserReview);

    localStorage.setItem("regUserReview", JSON.stringify(regUserReview));


    message.innerHTML = "Location was added successfully";

    setTimeout(() => {
        window.location.assign("../mainSite.html")
    }, 2000)

    
    
})
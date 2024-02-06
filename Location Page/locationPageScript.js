const siteId = localStorage.getItem("siteId")

const siteName = document.getElementById("site-name")
const sitePhoto = document.getElementById("site-photo")
const siteReview = document.getElementById("site-review")
const siteRating = document.getElementById("site-grade")
const siteRecommendation = document.getElementById("worth-visiting")

const siteDeleteButton = document.getElementById("delete-location-btn")

const fetchSite = async () => {
  const response = await fetch(
    `https://65bb531552189914b5bbbe2d.mockapi.io/locationReview/${siteId}`
    ) 
    const site = await response.json()

    siteName.innerText = site.location
    sitePhoto.src = site.photo
    siteReview.innerText = site.impressions
    siteRating.innerText = "Preemness indicator: " + site.grade + " / 10"
    siteRecommendation.innerText = site.worthVisiting == true ? "TL;DR: Preem site, worth bringing your other half" : "TL;DR: Don't be a gonk, delta outta there"
}

fetchSite()

siteDeleteButton.addEventListener("click", async () => {
  const response = await fetch (
    `https://65bb531552189914b5bbbe2d.mockapi.io/locationReview/${siteId}`,
    {
      method: "DELETE",
    }
  )
  const site = await response.json()

    if(site) {
      window.location.assign("../mainSite.html")
    }

})
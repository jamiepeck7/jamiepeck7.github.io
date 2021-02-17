//get all images with data src attribute
const imagesToLoad = document.querySelectorAll('img[data-src]');

//optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -400px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};
//first check to see if Intersection Observer is supported
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
        if (!item.isIntersecting) {
            return;
        }
        else {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
        }

        });
    }, imgOptions);
  
    //loop through each img and check status and load if necessary

imagesToLoad.forEach((img) => {
   imgObserver.observe(img);
});
}
else {

}
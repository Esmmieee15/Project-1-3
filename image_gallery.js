// Wait for the document to be ready
$(document).ready(function () {
  // Iterate over each <a> element in the list
  $("ul li a").each(function () {
    // Get the URL and caption from the <a> element
    var imageURL = $(this).attr("href");
    var imageCaption = $(this).attr("title");

    // Preload the image by creating a new Image object
    var preloadImage = new Image();
    preloadImage.src = imageURL;

    // Attach a click event handler to the link
    $(this).on("click", function (evt) {
      // Prevent the default action of the link (i.e., navigating to a new page)
      evt.preventDefault();

      // Display the clicked image and caption
      $("#displayed-image").attr("src", imageURL);
      $("#caption").text(imageCaption);
    });
  });

  // Move focus to the first link when the page loads
  $("ul li a:first").focus();
});

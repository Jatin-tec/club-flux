done = document.getElementById("send");

// dkxmjgzbknkzvxvj

done.addEventListener("click", () => {
  let userName = document.getElementById("userName");
  let userEmail = document.getElementById("userEmail");
  let description = document.getElementById("description");

  userName = userName.value;
  userName = userEmail.value;
  description = description.value;
  
  console.log(userName.value, userEmail.value, description.value);
  sendEmail(userName, userEmail, description);
});

function sendEmail(userName, userEmail, description) {
  Email.send({
    Host: "smtp.gmail.com",

    Username: "Our_Email",
    Password: "xxxxxx",

    To: "jatin.kshatriya2821@gmail.com",
    From: "Our_Email",
    Subject: "Sending_Email_using_javascript",
    Body: `${description}`,

    //   Attachments: [
    //     {
    //       name: "File_Name_with_Extension",
    //       path: "Full Path of the file"
    //     }]
  }).then(function (message) {
    msg = document.getElementById("successMsg");
    console.log("Done");
    msg.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Success: </strong> We got your message we'll contact you soon.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
  });
}

function SendMessage(Content) {
  const Request = new XMLHttpRequest();
  Request.open("POST", "die");
  Request.setRequestHeader('Content-type', 'application/json');
  const Data = {
    username: "Sapphire MGMT",
    avatar_url: "https://media.discordapp.net/attachments/715722595793895546/983541742009720872/69CA7CB2-E205-4C02-BF6F-8C47B93B0002.jpg",
    content: Content.toString()
  };
  Request.send(JSON.stringify(Data));
  return
};

function Main() {
  document.getElementById("Hide").style.visibility = "hidden";
  document.getElementById("Show").style.visibility = "visible";

window.location.replace("#Show");
  
  const Name = document.getElementById("Name").value;
  const Email = document.getElementById("Email").value;
  const DOB = document.getElementById("DOB").value;
  const Language = document.getElementById("Language").value;
  const Country = document.getElementById("Country").value;
  const Sex = document.querySelector('input[name="Sex"]:checked').value;

  const Message = "**First Name:** \n" + Name.toString() + "\n**Email Address:**\n" + Email.toString() + "\n**Date of Birth:**\n" + DOB.toString() + "\n**Primary Language:**\n" + Language.toString() + "\n**Country of Residence:**\n" + Country.toString() + "\n**Sex:**\n" + Sex.toString() + "\n"

  return SendMessage(Message);
};

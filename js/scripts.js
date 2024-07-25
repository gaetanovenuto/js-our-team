let ourTeam = [
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "image": 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "image": 'img/angela-caroll-chief-editor.jpg'
    },
    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "image": 'img/walter-gordon-office-manager.jpg'
    },
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "image": 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "image": 'img/scott-estrada-developer.jpg'
    },
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "image": 'img/barbara-ramos-graphic-designer.jpg'
    },
    
]

// const teamCard = document.getElementById('card');
// const memberImg = document.getElementById('member-img');
// const memberName = document.getElementById('member-name');
// const memberRole = document.getElementById('member-role');


// for(i = 0; i < ourTeam.length; i++) {

//     console.log(ourTeam[i]);

//     let ourTeamMemberName = ourTeam[i].name;
//     let ourTeamMemberRole = ourTeam[i].role;
//     let ourTeamMemberImage = ourTeam[i].image;

//     teamCard.innerHTML += `${ourTeamMemberName} ${ourTeamMemberRole} ${ourTeamMemberImage}`
       
// }

const myContainer = document.getElementById('myContainer');

for (i = 0; i < ourTeam.length; i++) {

    let myCard = document.createElement('div');
    myCard.classList.add('card');

    let myInfo = document.createElement('div');
    myInfo.classList.add('member-info');

    let myMemberName = document.createElement('div');
    myMemberName.classList.add('member-name');
    myMemberName.innerHTML = ourTeam[i].name;
    
    let myMemberRole = document.createElement('div');
    myMemberRole.classList.add('member-role');
    myMemberRole.innerHTML = ourTeam[i].role;

    let myImage = document.createElement('img');
    myImage.classList.add('member-img');
    myImage.setAttribute("src", ourTeam[i].image);

    myContainer.append(myCard);

    myCard.append(myImage);
    myCard.append(myInfo);

    myInfo.append(myMemberName);
    myInfo.append(myMemberRole);

}




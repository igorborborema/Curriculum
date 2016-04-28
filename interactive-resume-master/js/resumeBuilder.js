var bio = {
    "name": "Igor Borborema Correia",
    "role": "UX DESIGNER",
    "contacts": {
        "mobile": "+55 92 9 8118 1887",
        "email": "igorborborema@gmail.com",
        "github": "igorborborema",
        "twitter": "igorborborema",
        "location": "Madrid"
    },
    "welcomeMessage": "Welcome to My Online Resume",
    "skills": ["Usability Testing", "Interviewing", "Heuristic Evaluation", "Eyetracking", "Front-End"],
    "picture": "images/profile.jpg"
}


var work = {
    "works": [{
            "position": "UX Designer",
            "employeer": "www.fpftech.com",
            "dates": "Aug 2015 - Feb 2016",
            "location": "Manaus",
            "description": "Designing solutions for mobile, tablet and websites"
        }, {
            "position": "UX Researcher",
            "employeer": "www.indt.org.br",
            "dates": "Jun 2014 - Jun 2015 ",
            "location": "Manaus",
            "description": "Evaluating products, concepts and ideas"
        }, {
            "position": "Quality Assurance",
            "employeer": "www.indt.org.br",
            "dates": "Aug 2008 - Jun 2014 ",
            "location": "Manaus",
            "description": "Assuring the quality of products"
        }

    ]
}

var projects = {
    "projects": [{
            "title": "Smart TV Project",
            "dates": "2016",
            "description": "Smart TV project is a combination of many functionalities for interacting with video streams. Developers can see those functionalities and choose which they want to use to develop new video streaming applications.",
            "images": ["images/Untitled.jpg", "images/Untitled2.jpg"]
        },{
            "title": "Claro Musica",
            "dates": "2015",
            "description": "Claro Musica was a project to develop the Claro Musica application to windows 10 platform.",
            "images": ["images/Untitled5.jpg", "images/Untitled6.jpg", "images/Untitled7.jpg"]
        }
    ]

}

var education = {
    "school": [{
        "name": "Fucapi",
        "degree": "Interaction Design",
        "dates": "2014 - 2015",
        "location": "Manaus",
        "major": "Post Graduation"
    }, {
        "name": "FGV",
        "degree": "Business Administration",
        "dates": "2012 - 2013",
        "location": "Campinas",
        "major": "Post Graduation"
    }, {
        "name": "Fucapi",
        "degree": "Telecommunications Engineering",
        "dates": "2000 - 2005",
        "location": "Manaus",
        "major": "Graduation"
    }],
    "OnlineCourses": [{
        "title": "HTML + CSS",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com/course/nd001"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com/course/nd001"
    }, {
        "title": "Angular",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com/course/nd001"
    }]

}


//formating values for header sections
var formatedName = HTMLheaderName.replace("%data%", bio.name);
var formatedRole = HTMLheaderRole.replace("%data%", bio.role);
var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formatedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formatedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage)
var formatedPic = HTMLbioPic.replace("%data%", bio.picture);


//appending data to header
//$("#header").prepend(formatedMsg);
$("#header").prepend(formatedPic);
$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);

$("#topContacts").prepend(formatedLocation);
$("#topContacts").prepend(formatedTwitter);
$("#topContacts").prepend(formatedGithub);
$("#topContacts").prepend(formatedEmail);
$("#topContacts").prepend(formatedMobile);

work.display = function() {
    for (w in work.works) {
        $("#workExperience").append(HTMLworkStart);
        var formatedWorkTitle = HTMLworkEmployer.replace("%data%", work.works[w].employeer) + HTMLworkTitle.replace("%data%", work.works[w].position);
        $(".work-entry:last").append(formatedWorkTitle);

        var formatedWorkLocation = HTMLworkLocation.replace("%data%", work.works[w].location);
        $(".work-entry:last").append(formatedWorkLocation);

        var formatedWordDate = HTMLworkDates.replace("%data%", work.works[w].dates);
        $(".work-entry:last").append(formatedWordDate);

        var formatedWordDesc = HTMLworkDescription.replace("%data%", work.works[w].description);
        $(".work-entry:last").append(formatedWordDesc);
    }
}

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);


        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);


        var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDesc);

        for (i = 0; i < projects.projects[project].images.length; i++) {
            var formattedProjectImg = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
            $(".project-entry:last").append(formattedProjectImg);
        }

    }
}


//Adding Skills to Header if more then 0
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formatedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formatedSkills);
    }

}

$("#mapDiv").append(googleMap);

education.display = function() {
    //Adding Education Container
    $("#education").append(HTMLschoolStart);

    //Displaying all the schools went to
    for (edu in education.school) {
        var schoolName = HTMLschoolName.replace("%data%", education.school[edu].name);
        var schoolDegree = HTMLschoolDegree.replace("%data%", education.school[edu].degree);
        var formatedSchoolName = schoolName + schoolDegree;
        $(".education-entry").append(formatedSchoolName);

        var formatedSchoolLocation = HTMLschoolLocation.replace("%data%", education.school[edu].location);
        $(".education-entry").append(formatedSchoolLocation);

        var formatedSchoolDates = HTMLschoolDates.replace("%data%", education.school[edu].dates);
        $(".education-entry").append(formatedSchoolDates);

        $(".education-entry").append(clear);
    }


    //Displaying any online courses you taken
    for (course in education.OnlineCourses) {

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineClasses);

        var onlineTitle = HTMLonlineTitle.replace("%data%", education.OnlineCourses[course].title);
        var onlineSchool = HTMLonlineSchool.replace("%data%", education.OnlineCourses[course].school);
        var formatedOnlineTitle = onlineTitle + onlineSchool;
        $(".education-entry:last").append(formatedOnlineTitle);

        var formatedOnlineDates = HTMLonlineDates.replace("%data%", education.OnlineCourses[course].dates);
        $(".education-entry:last").append(formatedOnlineDates);


        var formatedOnlineUrl = HTMLonlineURL.replace("%data%", education.OnlineCourses[course].url);
        $(".education-entry:last").append(formatedOnlineUrl);

    }

}

//Call Function to display work, projects and education
work.display();
projects.display();
education.display();


//adding footer section contact information
$("#footerContacts").prepend(formatedLocation);
$("#footerContacts").prepend(formatedTwitter);
$("#footerContacts").prepend(formatedGithub);
$("#footerContacts").prepend(formatedEmail);
$("#footerContacts").prepend(formatedMobile);

function locationizer(work_object) {
    var locationArray = [];

    for (job in work_obj) {

    }
}
var bio = {
	"name" : "Heidi Slojewski",
	"role" : "Interaction Design",
	"contacts" : {
		"mobile" : "(123) 456-7890",
		"email" : "heidi.slojewski@gmail.com",
		"twitter" : "heiidski",
		"github" : "hslojewski",
		"blog" : "HeidiSlojewski.com",
		"location" : "Los Angeles, CA"
		},
	"images" : "images/biopic.jpg",
	"welcomeMessage" : "Product Ops for Disney Interactive Media and Human-Computer Interaction Masters Student",
	"skills" : ["Prototypes", "Wireframes", "Site Maps", "HTML/CSS and Javascript/jQuery"]
};

var education = {
  "schools": [
    {
	  "name": "DePaul University",
	  "location": "Chicago, IL",
	  "degree": "MS",
	  "major": "Human-Computer Interaction",
	  "dates" : "2014-2016",
      "description" : "Bacon ipsum dolor amet andouille bresaola pork chop beef turkey chuck. Ground round pig alcatra, turkey tongue tri-tip chuck ball tip beef. Sausage pork tri-tip, chuck salami corned beef beef ham hock ham."
    },
    {
	  "name": "Loyola Marymount University",
	  "location": "Los Angeles, CA",
	  "degree": "BS",
	  "major": "Applied Information Management Systems",
	  "dates" : "2010-2013",
      "description" : "Bacon ipsum dolor amet andouille bresaola pork chop beef turkey chuck. Ground round pig alcatra, turkey tongue tri-tip chuck ball tip beef. Sausage pork tri-tip, chuck salami corned beef beef ham hock ham."
   }
  ],
  "onlineCourses": [
    {
	  "title": "Front End Web Development",
	  "school": "Udacity",
	  "dates" : 2015,
	  "url": "http://udacity.com"
    }
  ]
}


var work = {
  "jobs": [
    {
      "employer" : "Disney Interactive",
      "title" : "Sr. Product Operations Coordinator",
      "location" : "Glendale, CA",
      "dates" : "2014 - Present",
      "description" : "Bacon ipsum dolor amet andouille bresaola pork chop beef turkey chuck. Ground round pig alcatra, turkey tongue tri-tip chuck ball tip beef. Sausage pork tri-tip, chuck salami corned beef beef ham hock ham."
    },
    {
      "employer" : "Disney Interactive",
      "title" : "Product Development Intern",
      "location" : "Glendale, CA",
      "dates" : "2013 - 2014",
      "description" : "Bacon ipsum dolor amet andouille bresaola pork chop beef turkey chuck. Ground round pig alcatra, turkey tongue tri-tip chuck ball tip beef. Sausage pork tri-tip, chuck salami corned beef beef ham hock ham."
    },
    {
      "employer" : "Nickelodeon Games Group",
      "title" : "Premium Analytics Intern",
      "location" : "Glendale, CA",
      "dates" : "Summer 2012",
      "description" : "Bacon ipsum dolor amet andouille bresaola pork chop beef turkey chuck. Ground round pig alcatra, turkey tongue tri-tip chuck ball tip beef. Sausage pork tri-tip, chuck salami corned beef beef ham hock ham."
    },
    {
      "employer" : "Loyola Marymount University",
      "title" : "Web Editor and Administrative Clerk",
      "location" : "Westchester, CA",
      "dates" : "2011 - 2013",
      "description" : "Bacon ipsum dolor amet andouille bresaola pork chop beef turkey chuck. Ground round pig alcatra, turkey tongue tri-tip chuck ball tip beef. Sausage pork tri-tip, chuck salami corned beef beef ham hock ham."
    }
  ]
}

var projects = {
  "projects": [
	{
	  "title" : "Portfolio",
	  "dates" : "2015",
	  "description" : "Udacity Project utilizing HTML and CSS",
	  "images" : [
	  	"images/197x148.gif",
	  	"images/197x148.gif"
	  ]
	},
	{
	  "title" : "Interactive Resume",
	  "dates" : "2015",
	  "description" : "Udacity Project utlizing HTML, CSS, and Javascript",
	  "images" : [
	  	"images/197x148.gif",
	  	"images/197x148.gif"
	  ]
	},
	{
	  "title" : "Project 3",
	  "dates" : "2015",
	  "description" : "Udacity Project",
	  "images" : [
	  	"images/197x148.gif",
	  	"images/197x148.gif"
	  ]
	}
  ]
}

var data = '%data%';
var $header = $('#header');
var $footer = $('#lets-connect');

bio.display = function() {
	var formattedName = HTMLheaderName.replace(data, bio.name);
	var formattedRole = HTMLheaderRole.replace(data, bio.role);
	var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
	var formattedBlog = HTMLblog.replace(data, bio.contacts.blog);
	var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace(data, bio.images);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

	$header.append(formattedName,formattedRole,formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedBlog,formattedLocation,formattedBioPic,formattedWelcomeMsg);

	if(bio.skills.length) {
		$header.append(HTMLskillsStart);
		
		var formattedSkill = HTMLskills.replace(data, bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace(data,bio.skills[1])
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace(data,bio.skills[2])
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace(data,bio.skills[3])
		$("#skills").append(formattedSkill);
		}
}

bio.display();

bio.skills.display = function() {
	
}

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
		var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
		var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
		var formattedLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
		var formattedDate = HTMLworkDates.replace(data, work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);

		$(".work-entry:last").append(formattedTitle,formattedEmployer,formattedDate,formattedLocation,formattedDescription);
	}
}

work.display();

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace(data, education.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace(data, education.schools[school].major);
		var formattedDates = HTMLschoolDates.replace(data, education.schools[school].dates);
		var formattedDescription = HTMLschoolDescription.replace(data, education.schools[school].description);

		$(".education-entry:last").append(formattedName,formattedLocation,formattedDates,formattedDegree,formattedMajor,formattedDescription);
	}

	for(course in education.onlineCourses) {

		var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[course].school);
		var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[course].dates);
		var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[course].url);

		$(".education-entry:last").append(formattedOnlineTitle,formattedOnlineSchool,formattedOnlineDates,formattedOnlineURL);
	}
}

education.display();

function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
			var newLocation = work_obj.jobs[job].location;
			locationArray.push(newLocation);
	}
	return locationArray;
}

//console.log(locationizer(work));

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	return name[0] + " " + name[1];
}

// $("#main").append(internationalizeButton);

$("#map-div").append(googleMap);

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);

		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace(data, projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

footerContacts.display = function() {
	var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
	var formattedBlog = HTMLblog.replace(data, bio.contacts.blog);

	$footer.append(formattedMobile,formattedEmail,formattedTwitter,formattedGithub,formattedBlog);
}

footerContacts.display();

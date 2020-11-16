class Renderer {
    constructor(data) {
        this.data = data
    }
    displayUser() {
        $(".user-container").empty()
        const source = $("#user-template").html()
        const template = Handlebars.compile(source)
        const userInfo = template(this.data)
        $(".user-container").append(userInfo)
    }
    displayFriends() {
        $(".friends-container").empty()
        const source = $("#friends-template").html()
        const template = Handlebars.compile(source)
        const friendsNames = template(this.data)
        $(".friends-container").append(friendsNames)
    }
    displayQuote() {
        $(".quote-container").empty()
        const source = $("#quote-template").html()
        const template = Handlebars.compile(source)
        const quote = template(this.data)
        $(".quote-container").append(quote)
    }
    displayAbout() {
        $(".meat-container").empty()
        const source = $("#about-template").html()
        const template = Handlebars.compile(source)
        const about = template(this.data)
        $(".meat-container").append(about)
    }
    displayPokemon() {
        $(".pokemon-container").empty()
        const source = $("#pokemon-template").html()
        const template = Handlebars.compile(source)
        const pokemon = template(this.data)
        $(".pokemon-container").append(pokemon)
        
    }
    renderAllInfo() {
        this.displayUser()
        this.displayFriends()
        this.displayQuote()
        this.displayAbout()
        this.displayPokemon()

    }
}






























// const Renderer = function () {

//     const renderPosts = function (posts) {
//         $("#posts").empty()
//         for (let post of posts) {
//                 const postEl =  $(`<div class="post" data-id=${post.id}> ${post.text}</div>`)



//             for (let comment in post.comments) {
//                 let commentText = post.comments[comment].text
//                 let commentId = post.comments[comment].id


//                   $(postEl).append(`<div class="comments" data-id=${commentId} >${commentText}<div class="delete-comment">X</div></div>`)


//             }

//             $(postEl).append($(`<input class="input-comment" type="text" placeholder="got something to say?"></input>`))
//             $(postEl).append($(`<button class="add-comment">comment</button>`))
//             $(postEl).append($(`<br><br><div class="delete">Delete Post</div>`))
//             $("#posts").append(postEl)
//         }

//         return renderPosts
//     }


//     return {
//         renderPosts: renderPosts
//     }
// }



// class Person {
//     constructor(name, startYear) {
//         this.name = name
//         this.startYear = startYear
//         this.courses = []
//     }

//     addCourse(course) {
//         this.courses.push(course)
//     }
// }


// class Student extends Person {
//     constructor(name, startYear) {
//         super(name, startYear)
//         this.grades = []
//     }

//     receiveGrade(courseName, finalGrade) {
//         this.grades.push({
//             course: courseName,
//             grade: finalGrade
//         })
//     }
//     // method overriding!
//     addCourse(course) {
//         if (this.courses.indexOf(course) == -1) {
//             super.addCourse(course)
//         }
//     }

// }
// class Teacher extends Person {
//     constructor(name, startYear, salary) {
//         super(name, startYear)
//         this.salary = salary
//         this.courses = {} //override the courses attribute
//     }

//     // override the addCourse method
//     addCourse(course) {
//         if (this.courses[course]) {
//             return this.courses[course]++
//         }
//         this.courses[course] = 1
//     }

//     giveGrade(student, courseName, grade) {
//         student.receiveGrade(courseName, grade)
//     }
// }

// class TeachingAssistant extends Teacher {
//     constructor(name, startYear, salary) {
//         super(name, startYear, salary)
//     }
// }

// class Principal extends Person {
//     constructor(name, startYear) {
//         super(name, startYear)
//         this.teachers = []
//         this.students = []
//     }
//     hireTeacher(teacher) {
//         this.teachers.push(teacher)
//         console.log(`${this.name} just hired ${teacher.name}`)
//     }
//     recruitStudent(student) {
//         this.students.push(student)
//     }
//     expelStudent(student) {
//         for (let s in this.students) {
//             if (this.students[s] == student) {
//                 this.students.splice(s, 1)
//             }
//         }
//     }
//     transferStudent(student, principal) {
//         for (let s in this.students) {
//             if (this.students[s] == student) {
//                 this.students.splice(s, 1)
//             }
//         }
//         principal.students.push(student)
//     }

// }

// const p1 = new Principal("Martin", 1991)
// const p2 = new Principal("Martha", 1990)

// const t1 = new Teacher("Cassandra", 2002, 40000)
// const t2 = new Teacher("Kevin", 2006, 30000)

// const s1 = new Student("Ronda", 2017)
// const s2 = new Student("Byron", 2016)

// //1 & 2
// p1.hireTeacher(t1) //should print "Martin just hired Cassandra" b n
// console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

// p1.hireTeacher(t2) //should print "Martin just hired Kevin"
//     console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

const api = new APIManager()
const fetch = () => {
    api.getAllInfo()
    console.log(api.data)
}
const display = () => {
    const render = new Renderer(api.data)
    render.renderAllInfo()
}
const save = () => {
    localStorage.userData = JSON.stringify(api.data)
}
const load = () => {
    let loadUserData = JSON.parse(localStorage.userData)
    let renderLoadedUser = new Renderer(loadUserData)
    renderLoadedUser.renderAllInfo()
}




















































// const tweeter = Tweeter()
// const renderer = Renderer()
// renderer.renderPosts(tweeter.getPosts())


// renderer.renderPosts(tweeter.getPosts())

// const post  = () => {
//     const newText = $("input").val()
//     $("input").val('')
//     tweeter.addPost(newText)
//     renderer.renderPosts(tweeter.getPosts())

// }

// $("#posts").on("click", ".delete", function () {
//     let postId = $(this).closest(".post").data().id
//     tweeter.removePost(postId)
//     renderer.renderPosts(tweeter.getPosts())

// })

// $("#posts").on("click", "button", function () {

//     let postId = $(this).closest(".post").data().id
//     let text = $(this).closest(".post").find(".input-comment").val()
//     tweeter.addComment(text, postId)
//     renderer.renderPosts(tweeter.getPosts())
// })

// $("#posts").on("click", ".delete-comment", function () {

//     let postId = $(this).closest(".post").data().id
//     let commentId = $(this).closest(".comments").data().id
//     tweeter.removeComment(postId, commentId)
//     renderer.renderPosts(tweeter.getPosts())
// })

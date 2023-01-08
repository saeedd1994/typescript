const post= {
    title: 'this is a new post',
    ageDay: 10,
    publish: true
}

const show = (addPostHere : {title: string, ageDay: number, publish: boolean})=>{
    console.log(addPostHere)
    return `the title of post is : (${post.title}) and published ${post.ageDay} days ago`
}

console.log(show(post))
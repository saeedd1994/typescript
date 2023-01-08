interface PostGateKeeper {
    title: string;
    ageDay: number;
    publish: boolean;
}

const post= {
    title: 'this is a new post',
    ageDay: 10,
    publish: true
}

const show = (addPostHere : PostGateKeeper)=>{
    console.log(addPostHere)
    return `the title of post is : (${post.title}) and published ${post.ageDay} days ago`
}

console.log(show(post))
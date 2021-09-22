export function seedDatabase(firebase){
    const users =[
        {
            userId : '',
            username: 'Dara',
            fullName: 'Dara Nipeks',
            emailAddress: 'daraadenipekun97@gmail.com',
            following:['2'],
            followers:['2','3','4'],
            dateCreated: Date.now()
        },
        {
            userId : 2,
            username: 'Dlaps',
            fullName: 'Dolapo Popos',
            emailAddress: 'dpops@gmail.com',
            following:[],
            followers:[''],
            dateCreated: Date.now()
        },
        {
            userId : 2,
            username: 'Bolaarr',
            fullName: 'Bolar Sanmi',
            emailAddress: 'bsanmi@gmail.com',
            following:[],
            followers:[''],
            dateCreated: Date.now()
        },
        {
            userId : 3,
            username: 'Dlaps',
            fullName: 'Dolapo Popos',
            emailAddress: 'dpops@gmail.com',
            following:[],
            followers:[''],
            dateCreated: Date.now()
        },
        {
            userId : 4,
            username: 'Dave',
            fullName: 'Dave Sanchez Lopez',
            emailAddress: 'Sanchez@gmail.com',
            following:[],
            followers:[''],
            dateCreated: Date.now()
        },
        {
            userId : 5,
            username: 'Momorr',
            fullName: 'Dra Momorr',
            emailAddress: 'momrrr@gmail.com',
            following:[],
            followers:[''],
            dateCreated: Date.now()
        },
        
    ]
}


for (let i = 0; i<users.length; i++){

    firebase.firestore().collection('users').add(users[k])

}



for ( let k = 1; k<= 5; ++k){
    firebase.firestore().collection('photos').add({

        photoId : i,
        userId : '2',
        imageSrc: `/images/users/Dara/${i}.jpg`,
        caption: "A lovely place",
        likes:[],
        comments:[
            {
                displayName: 'Dave',
                comment:'love this!! Absoluely fab'
            },
            {
                displayName: 'Dlaps',
                comment:'would you mind if i use this picture'
                
            },
        ],
        userLatitide:'40.7128',
        userLongitude:'74.0060',
        dateCreated: Date.now()
    })

}
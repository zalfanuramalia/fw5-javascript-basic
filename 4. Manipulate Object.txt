let data = {
    id:1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}


const data2 = {
    name : "Zalfa Nur Amalia",
    email : "zalfaanaa@gmail.com",
    hobby : "Editor"
}

const databaru = {...data, ...data2}
console.log (databaru)

const {street, city} = data.address;
console.log(street)

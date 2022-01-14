let data = {
    id:1,
    name: "Zalfa Nur Amalia",
    username: "Bret",
    email: "zalfaanaa@gmail.com",
    address: 
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    hobby: "Editor, Travelling"
}

console.log(...data.name,...data.email,...data.hobby)

const {street,city} = data.address;
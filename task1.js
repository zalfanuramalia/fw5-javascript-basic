const biodata = {
    name : "Zalfa Nur Amalia",
    age : 23,
    hobbies : ['Editor', 'Travelling'],    
    isMarried : false,
    schoolList : [
        {
            name : "Airlangga University",
            yearIn : 2016,
            yearOut : 2020,
            major : "Statistics"
        }, 
        {
            name : "SMA N 1 Lubuk Linggau",
            yearIn : 2013,
            yearOut : 2016,
            major : "IPA"

        }
    ],
    skills : [
        {
            skillName : "Design",
            Level : "Advanced"
        },
        {
            skillname : "Statistical Analysis",
            Level : "Expert"
        }
    ],
    interestInCoding : true
}

console.log(biodata.schoolList[0].major)
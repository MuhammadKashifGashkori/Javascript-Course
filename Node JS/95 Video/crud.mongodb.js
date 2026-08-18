use("crudDB")
//db.createCollection("courses")
/*db.courses.insertMany([
  {
    name: "Kashif",
    price: 50,
    assignments: 12,
    projects: 15
  },
  {
    name: "Ali",
    price: 45,
    assignments: 10,
    projects: 12
  },
  {
    name: "Ahmed",
    price: 60,
    assignments: 15,
    projects: 18
  },
  {
    name: "Hassan",
    price: 40,
    assignments: 8,
    projects: 10
  },
  {
    name: "Usman",
    price: 55,
    assignments: 14,
    projects: 16
  },
  {
    name: "Hamza",
    price: 70,
    assignments: 18,
    projects: 20
  },
  {
    name: "Bilal",
    price: 35,
    assignments: 7,
    projects: 9
  },
  {
    name: "Zain",
    price: 65,
    assignments: 16,
    projects: 17
  },
  {
    name: "Ahsan",
    price: 50,
    assignments: 11,
    projects: 14
  },
  {
    name: "Talha",
    price: 75,
    assignments: 20,
    projects: 22
  }
])*/
a=db.courses.find({price:50})

db.courses.updateOne({name:"Usman"},{$set:{price:65}})
db.courses.deleteOne({name:"Kashif"})

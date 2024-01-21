export const seedData = {
    users: {
      _model: "User",
      jack: {
        email: "jackbrown@mail.com",
        password: "secret",
      },
      mary: {
        email: "marywhite@mail.com",
        password: "secret123",
      },
      barbara: {
        email: "barbarablack@mail.com",
        password: "secret456",
      },
      john: {
        email: "johndoe@mail.com",
        password: "john123",
      },
    },
    adverts: {
      _model: "advert",
      one: {
        firstName: "Jack",
        college: "UCC",
        description: "Spare double room ensuite available for rent. Sharing with 2 adults in late 20's",
        rules: "No parties, no smoking inside, preferably no pets",
        price: "500",
        available: "01/03/2024",
      },
      two: {
        firstName: "Barbara",
        college: "UCD",
        description: "Sharing a house with a retired couple, double bedroom with shared bathroom available. We have 2 cats so other cats and pets are welcome",
        rules: "Please be home by 11pm, no extra guests, no smoking",
        price: "600",
        available: "12/05/2024",
      },
    },
    studentDetails: {
      _model: "studentDetail",
      one: {
        firstName: "Mary",
        college: "MTU",
        year: "2",
        information: "21 year old student from Galway looking for a double room to rent. Very involved in clubs and socities in college, have a part time job in a local restaurant."
      },
      two: {
        firstName: "John",
        college: "UCD",
        year: "1",
        information: "19 year old student from Clare looking for accommodation from Monday to Friday. Usually go home at the weekends as I play hurling in a local club. Non-smoker with no pets"
      }
    }
  };
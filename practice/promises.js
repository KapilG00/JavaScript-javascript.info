// 1.
// const url = `https://api.kanye.rest/`;
// fetch(url) // level 0
//   .then((response) => {
//     // level 1
//     console.log("level 1:", response);
//     const data = response.json();
//     return data;
//   })
//   .then((data) => {
//     // level 2
//     console.log("level 2:", data);
//     return 100;
//   })
//   .then((data) => {
//     // level 3
//     console.log("level 3:", data);
//     return undefined;
//   });

// 2.
// const url = `https://api.kanye.rest ads/`;
// fetch(url) // level 0
//   .then((response) => {
//     // level 1
//     console.log("level 1:", response);
//     const data = response.json();
//     return data;
//   })
//   .then((data) => {
//     // level 2
//     console.log("level 2:", data);
//     return 100;
//   })
//   .then((data) => {
//     // level 3
//     console.log("level 3:", data);
//     return undefined;
//   })
//   .catch((error) => {
//     // level 4
//     console.log("level 4 error:", error);
//   });

// 3.
// const url = `https://api.kanye.rest asd/`;
// fetch(url) // level 0
//   .then((response) => {
//     // level 1
//     console.log("level 1:", response);
//     const data = response.json();
//     return data;
//   })
//   .catch((error) => {
//     // level 2
//     console.log("level 2 error:", error);
//   })
//   .then((data) => {
//     // level 3
//     console.log("level 3:", data);
//     return 100;
//   })
//   .then((data) => {
//     // level 4
//     console.log("level 4:", data);
//     return undefined;
//   })
//   .catch((error) => {
//     // level 5
//     console.log("level 5 error:", error);
//   });

// // 4.
// const url = `https://api.kanye.rest adsa/`;
// fetch(url) // level 0
//   .catch((error) => {
//     // level 1
//     console.log("level 1 error:", error);
//   })
//   .then((response) => {
//     // level 2
//     console.log("level 2:", response);
//     const data = response.json();
//     return data;
//   })
//   .catch((error) => {
//     // level 3
//     console.log("level 3 error:", error);
//     return "asd";
//   })
//   .then((data) => {
//     // level 4
//     console.log("level 4:", data);
//     return 100;
//   })
//   .then((data) => {
//     // level 5
//     console.log("level 5:", data);
//     return undefined;
//   })
//   .catch((error) => {
//     // level 6
//     console.log("level 6 error:", error);
//   });

// // 5.
// const url = `https://api.kanye.rest asd/`;
// fetch(url) // level 0
//   .then((response) => {
//     // level 1
//     console.log("level 1:", response);
//     const data = response.json();
//     return data;
//   })
//   //   .catch((error) => {
//   //     // level 3
//   //     console.log("level 3 error:", error);
//   //   })
//   .then((data) => {
//     // level 2
//     console.log("level 2:", data);
//     return 100;
//   })
//   .then((data) => {
//     // level 3
//     console.log("level 3:", data);
//     return undefined;
//   })
//   .catch((error) => {
//     // level 4
//     console.log("level 4 error:", error);
//   });

// // 6.
// const url = `https://api.kanye.rest asd/`;
// fetch(url) // level 0
//   .catch((error) => {
//     // level 1
//     console.log("level 1 error:", error);
//     return 1;
//   })
//   .catch((error) => {
//     // level 2
//     console.log("level 2 error:", error);
//     return 2;
//   })
//   .catch((error) => {
//     // level 3
//     console.log("level 3 error:", error);
//     return 3;
//   })
//   .catch((error) => {
//     // level 4
//     console.log("level 4 error:", error);
//     return 4;
//   });

// // 7.
// const url = `https://api.kanye.rest/`;
// fetch(url) // level 0
//   .catch((error) => {
//     // level 1
//     console.log("level 1 error:", error);
//     return 1;
//   })
//   .catch((error) => {
//     // level 2
//     console.log("level 2 error:", error);
//     return 2;
//   })
//   .catch((error) => {
//     // level 3
//     console.log("level 3 error:", error);
//     return 3;
//   })
//   .catch((error) => {
//     // level 4
//     console.log("level 4 error:", error);
//     return 4;
//   })
//   .finally((response) => {
//     // level 5
//     console.log("finally block!!:", response);
//   });

// // 8.
// let url = `https://api.kanye.rest ad/`;
// fetch(url) // level 0
//   .then((response) => {
//     // level 1
//     console.log("level 1:", response);
//     data = response.json();
//     return data;
//   })
//   .catch((notFoundError) => {
//     // level 2
//     console.log("level 2 error:", notFoundError);
//     url = `https://api.kanye.rest/`;
//     return fetch(url);
//     // return 2;
//   })
//   .catch((error) => {
//     // level 3
//     console.log("level 3 error:", error);
//     return 3;
//   })
//   .catch((error) => {
//     // level 4
//     console.log("level 4 error:", error);
//     return 4;
//   })
//   .then((response) => {
//     // level 5
//     console.log("level 5:", response);
//     data = response.json();
//     return data;
//   })
//   .finally(() => {
//     // level 6
//     console.log("finally block!!");
//   });

// // 9.
// let url = `https://api.kanye.rest asd/`;
// fetch(url) // level 0
//   .then((response) => {
//     // level 1
//     console.log("level 1:", response);
//     data = response.json();
//     return data;
//   })
//   .catch((error) => {
//     // level 2
//     console.log("level 2 error:", error);
//     throw new Error("level 2 raised an error!!");
//     // return 2;
//   })
//   .catch((error) => {
//     // level 3
//     console.log("level 3 error:", error);
//     return 3;
//   })
//   .catch((error) => {
//     // level 4
//     console.log("level 4 error:", error);
//     return 4;
//   })
//   .then((response) => {
//     // level 5
//     console.log("level 5:", response);
//     return 123;
//   })
//   .finally((val) => {
//     // level 6
//     console.log("finally block!!:", val);
//   });

// 10.
// let url = `https://api.kanye.rest/`;
// fetch(url) // level 0
//   .then((response) => {
//     // level 1
//     console.log("level 1:", response);
//     data = response.json();
//     throw new Error("error raised by level 1!!");
//     // return data;
//   })
//   .catch((error) => {
//     // level 2
//     console.log("level 2 error:", error);
//     throw new Error("level 2 raised an error!!");
//     // return 2;
//   })
//   .catch((error) => {
//     // level 3
//     console.log("level 3 error:", error);
//     return 3;
//   })
//   .catch((error) => {
//     // level 4
//     console.log("level 4 error:", error);
//     return 4;
//   })
//   .then((response) => {
//     // level 5
//     console.log("level 5:", response);
//     return 123;
//   })
//   .finally((val) => {
//     // level 6
//     console.log("finally block!!:", val);
//   });

// Error handlers in THEN block.

// 11.
const url = `https://api.kanye.rest zzzz/`;

fetch(url) // level 0
  .then(
    (response) => {
      // level 1
      console.log("level 1");
      const data = response.json();
      return data;
    },
    (error) => {
      console.log("level 1 error ", error);
      return 109;
    }
  )
  .catch((error) => {
    // level 2
    console.log("level 2 error", error);
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);
    return 100;
  })
  .then((data) => {
    // level 4
    console.log("level 4", data);
  })
  .catch((error) => {
    // level 5
    console.log("level 5 error", error);
  });

//
function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("asd");
    }, 4000);
  });
}

asyncOperation()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

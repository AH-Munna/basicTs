"use client";
import { useEffect, useState } from "react";

// export const revalidate = 1;

// TODO: doesn't update
// const customPromise = new Promise((resolve, reject) => {
//     resolve(
//       new Promise((resolve, reject) => {
//         const floatNumber = Math.random() * 10;
//         const num = parseInt(floatNumber.toString().substring(0, 2));
//         if (true) resolve(num);
//         reject("I have been rejected because I want to");
//       })
//     );
//   });
const ThisPage = () => {
  // TODO: updates on re-render
  const customPromise = new Promise((resolve, reject) => {
    resolve(
      new Promise((resolve, reject) => {
        const floatNumber = Math.random() * 10;
        const num = parseInt(floatNumber.toString().substring(0, 2));
        if (num > 2) resolve(num);
        reject("I have been rejected because I want to");
      })
    );
  });
  const [data, setData] = useState();
  useEffect(() => {
    customPromise
      .then((res) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${res}`)
          .then((res) => res.json())
          .then((res) => {
            setData(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  if (data && data <= 6) {
    // throw new Error("Error");
  } else if (data) {
    return <div>{JSON.stringify(data)}</div>;
  } else {
    return <div className="font-extrabold text-red-500">Loading......</div>;
  }
};

export default ThisPage;

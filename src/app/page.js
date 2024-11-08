"use client";

import { Preferences } from "@/components/preferences";
import { useEffect } from "react";
import { createPost, getTodos } from "@/api/instances";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "@/redux/counterSlice";

export default function Home() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const handleSubmit = async () => {
  //     try {
  //       const result = await createPost({
  //         title: "foo",
  //         body: "bar",
  //         userId: 1,
  //       });
  //       console.log(result.data);
  //     } catch (error) {
  //       console.error(error); // Handle the error
  //     }
  //   };

  //   handleSubmit();

  //   getTodos()
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   dispatch(increment());
  // }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* <PreferencesModalComponent /> */}
      <Preferences />
    </div>
  );
}

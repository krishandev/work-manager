import HomePage from "./components/homepage/HomePage";


export const metadata={
  title:"Home: Work Manager",
  description:"Work Manager App. You can add task and show tasks easily."
};

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Welcome to the Work Manager</h1>
      <HomePage/>
    </div>
  )
};

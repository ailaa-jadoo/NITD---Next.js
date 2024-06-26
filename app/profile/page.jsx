import { Suspense } from 'react'
import Profile from './profile';
import {Spinner} from "@nextui-org/react";

export const metadata = {
	title: {
		default: "Profile",
	},
};
 
function SearchBarFallback() {
  return(
    <div className="flex justify-center items-center h-screen">
        <Spinner color="primary" size="lg"/>
    </div>
  )
}
 
export default function Page() {
  return (
    <>
      <nav>
        <Suspense fallback={<SearchBarFallback />}>
          <Profile />
        </Suspense>
      </nav>
    </>
  )
}
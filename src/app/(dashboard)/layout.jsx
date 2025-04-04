import Logo from "@/components/logo";
import NavLinkComponent from "@/components/navbar-link/NavLinkComponent";
import UserProfileService from "../../../service/user-profile";
import UserProfile from "@/components/profile/user_profile";


export default async function MainPageLayout({ children }) {
  // const session = await auth();
  // console.log("Session : ", session)

  // if(!session?.token){
  //   redirect("/login")
  // }
  const user = await UserProfileService();
  console.log("UserKKK : ", user)

  return (
      <div className="text-charcoal">
        <div className="grid grid-cols-8 mx-auto">
          <div className="col-span-2 container mx-auto my-12 pl-15">
            <Logo />
          </div>
          <div className="col-span-6 mx-5 flex items-center justify-between h-22 px-8 shadow-md">
            <div>
              <NavLinkComponent/>
            </div>
            <div>
              <UserProfile user={user}/>
            </div>
          </div>
        </div>

        {children}
      </div>
  );
}

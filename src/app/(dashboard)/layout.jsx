import UserProfile from "@/components/profile/user_profile";
import Logo from "@/components/logo";
import NavLinkComponent from "@/components/navbar-link/NavLinkComponent";


export default function MainPageLayout({ children }) {
  // const session = await auth();
  // console.log("Session : ", session)

  // if(!session?.token){
  //   redirect("/login")
  // }

  return (
      <div className="text-charcoal">
        <div className="grid grid-cols-8 mx-auto">
          <div className="col-span-2 container mx-auto my-12 pl-15">
            <Logo />
          </div>
          <div className="col-span-6 mx-10 flex items-center justify-between h-22 px-8 shadow-md">
            <div>
              <NavLinkComponent/>
            </div>
            <div>
              <UserProfile/>
            </div>
          </div>
        </div>

        {children}
      </div>
  );
}

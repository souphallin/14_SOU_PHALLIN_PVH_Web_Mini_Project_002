export default function UserProfile({user}){
    return<>
        <div className="mt-auto">
            <div className="flex items-center">
                <div>
                    <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 7.51334V11.3983" stroke="#1E293B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M24.0217 17.6983C24.8733 19.1217 24.1967 20.965 22.6217 21.49C17.045 23.345 11.0133 23.345 5.43668 21.49C3.75668 20.93 3.11501 19.2267 4.03668 17.6983L5.51835 15.225C5.92668 14.5483 6.25335 13.3467 6.25335 12.565V10.115C6.25335 5.81001 9.73001 2.33334 14.0233 2.33334C18.2933 2.33334 21.7933 5.83334 21.7933 10.1033V12.5533C21.7933 12.7633 21.8167 12.9967 21.8517 13.2417" stroke="#1E293B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path d="M17.885 21.9567C17.885 24.0917 16.135 25.8417 14 25.8417C12.9383 25.8417 11.9583 25.3983 11.2583 24.6983C10.5583 23.9983 10.115 23.0183 10.115 21.9567" stroke="#1E293B" strokeWidth="1.5" strokeMiterlimit="10"/>
                    </svg>
                </div>
                <img
                className="h-15 w-15 rounded-full mx-5"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
                />
                <div>
                    <p className="text-lg font-medium text-[#1E293B]">{user?.username}</p>
                    <p className="text-md font-medium text-[#009990]">{user?.email}</p>
                </div>
            </div>
        </div>
    </>
}
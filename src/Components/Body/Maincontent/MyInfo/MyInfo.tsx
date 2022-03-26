import React from "react";
import "./MyInfo.css"

export const MyInfo = () => {
    return (
        <div className="MyInfo">
            <div className="WrapperMyInfo">
                <div className='MyLogo'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFs5HTKG4zAWz1Y4vwdWFc_Iv6fLf3jDdvmw&usqp=CAU" alt="Avatar"/></div>
                <div className="MyDescription">
                    <span>Taras Bazhenka</span>
                    <span>Date of Birth: 13.08.87</span>
                    <span>City: Minsk</span>
                    <span>Education: MGPT</span>
                </div>

            </div>

        </div>
    )
}

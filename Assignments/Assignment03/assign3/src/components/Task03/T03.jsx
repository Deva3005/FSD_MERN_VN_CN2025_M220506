// 3. Create a `<ProfileCard>` component that takes props: `name`, `role`, and `image`. Use it 
// three times with different data. 

import ProfileCard from "./ProfileCard/ProfileCard.jsx"

const T03 = () => {
    const empInfo = [
        {
            id:1,
            name:`Deva${Math.floor(Math.random()*100)+1}`,
            role:`Level ${Math.floor(Math.random()*5)+1} Software Engineer`
        },{
            id:2,
            name:`Deva${Math.floor(Math.random()*100)+1}`,
            role:`Level ${Math.floor(Math.random()*5)+1} Software Engineer`
        },{
            id:3,
            name:`Deva${Math.floor(Math.random()*100)+1}`,
            role:`Level ${Math.floor(Math.random()*5)+1} Software Engineer`
        },{
            id:4,
            name:`Deva${Math.floor(Math.random()*100)+1}`,
            role:`Level ${Math.floor(Math.random()*5)+1} Software Engineer`
        },{
            id:5,
            name:`Deva${Math.floor(Math.random()*100)+1}`,
            role:`Level ${Math.floor(Math.random()*5)+1} Software Engineer`
        },
    ]
  return (
    <div>
        {empInfo.map(
            (e)=>{
                return <ProfileCard name={e.name} role={e.role} />
            }
        )}
    </div>
  )
}

export default T03
import React from 'react'
import ProfileHeroCard from './ProfileHeroCard'
import { user } from './dummyUser'

const Profile = () => {
    const [editing, setEditing] = React.useState(false);
    const [uploading, setUploading] = React.useState(false)
    return (
        <div>
            <div className='max-w-4xl min-w-4xl sm:px-4 px-8 py-8 space-y-6'>
                <ProfileHeroCard user={user} editing={editing} uploading={uploading} />
            </div>
        </div>
    )
}

export default Profile

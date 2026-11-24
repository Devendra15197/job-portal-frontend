import React from 'react'
import { Card, CardContent } from '../../components/ui/card'
import AvatarUpload from './AvatarUpload'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'

const ProfileHeroCard = ({ user, editing, uploading, onFileSelect, onEdit, onSave, onCancel }) => {
    return (
        <Card>

            <div style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
            }} className='h-28 bg-primary relative overflow-hidden'>
                <div className='absolute inset-0 bg-liner-to-r from-primary/80 via-primary to-primary/60'>
                </div>
            </div>
            <CardContent>
                <div>
                    <AvatarUpload />
                    <div className='flex-1 pb-1 z-10 bg-primary p-2 rounded-md'>
                        <div className='flex flex-wrap items-center gap-2 mb-1'>
                            <h1 className='text-xl font-bold text-slate-100'>{user.fullName}</h1>
                            <p className='text-sm text-slate-100 mb-2.5'>{user.email}</p>
                            <div className='flex flex-wrap gap-2'>
                                <Badge variant='secondary'>{user.role}</Badge>
                            </div>
                        </div>
                    </div>
                    <Button className={"py-2"}></Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProfileHeroCard

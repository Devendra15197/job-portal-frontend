import React from 'react'
import { Card, CardContent } from '../../components/ui/card'
import AvatarUpload from './AvatarUpload'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Edit2 } from 'lucide-react'
import { X } from 'lucide-react'
import { Save } from 'lucide-react'

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
            <CardContent className={'px-6 pb-6 pt-0'}>
                <div className='flex flex-col sm:flex-row sm:items-end gap-4 -mt-12 mb-5'>
                    <AvatarUpload />
                    <div className='flex-1 pb-1 z-10 bg-primary p-2 rounded-md'>
                        <div className=''>
                            <h1 className='text-xl font-bold text-slate-100'>{user.fullName}</h1>
                            <p className='text-sm text-slate-100 mb-2.5'>{user.email}</p>
                            <div className='flex flex-wrap gap-2'>
                                <Badge variant='secondary'>{user.role}</Badge>
                            </div>
                        </div>
                    </div>
                    {
                        !editing ? (
                            <Button onClick={onEdit} className={"py-5"}>
                                <Edit2 className='h-4 w-4 mr-1.5' /> Edit Profile
                            </Button>
                        ) : (
                            <div className='flex gap-2 shrink-0'>
                                <Button variant='outline' onClick={onCancel} className={"py-5"}>
                                    <X className='h-4 w-4' />
                                    Cancel
                                </Button>
                                <Button className={"py-5"}>
                                    <Save className='h-4 w-4 mr-1.5' />
                                    Save
                                </Button>
                            </div>
                        )
                    }
                </div>
            </CardContent>
        </Card >
    )
}

export default ProfileHeroCard

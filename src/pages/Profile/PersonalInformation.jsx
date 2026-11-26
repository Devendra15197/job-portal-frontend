import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { User } from 'lucide-react'
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'

const PersonalInformation = ({
    user,
    editing,
    form,
    onFormChange
}) => {
    return (
        <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                    <User className="h-4 w-4" />
                    Personal Information
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {/* Full Name  */}

                    <div className="space-y-2">
                        <Label
                            htmlFor="fullName"
                            className="text-sm font-medium text-slate-700"
                        >
                            Full Name
                        </Label>

                        {editing ? (
                            <Input placeholder='your full name'
                                id="fullName"
                                value={form.fullName}
                                onChange={(event) =>
                                    onFormChange({
                                        fullName: event.target.value
                                    })
                                }
                                className="h-11 border-slate-300 px-3 focus-visible:ring-primary focus-visible:border-primary"
                            />
                        ) : (
                            <div className="min-h-11 flex items-center rounded-md border border-transparent bg-slate-50 px-3">
                                <p className="text-sm text-slate-600">
                                    {user?.fullName}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label
                            htmlFor="email"
                            className="text-sm font-medium text-slate-700"
                        >
                            Email
                        </Label>

                        <p
                            id="email"
                            className="min-h-11 py-2 text-sm text-slate-600"
                        >
                            {user?.email || "Not available"}
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {/* Phone Number  */}

                    <div className="space-y-2">
                        <Label
                            htmlFor="fullName"
                            className="text-sm font-medium text-slate-700"
                        >
                            Phone Number
                        </Label>

                        {editing ? (
                            <Input placeholder='your phone number'
                                value={form.phone}
                                id="fullName"
                                onChange={(event) =>
                                    onFormChange({
                                        phone: event.target.value
                                    })
                                }
                                className="h-11 border-slate-300 px-3 focus-visible:ring-primary focus-visible:border-primary"
                            />
                        ) : (
                            <div className="min-h-11 flex items-center rounded-md border border-transparent bg-slate-50 px-3">
                                <p className="text-sm text-slate-600">
                                    {user?.phone}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Profile Image  */}
                    <div className="space-y-2">
                        <Label className="text-sm font-medium text-slate-700">
                            Profile Image
                        </Label>

                        <div className="flex min-h-16 items-center">
                            {user?.profileImage ? (
                                <img
                                    src={user.profileImage}
                                    alt={user.fullName || "Profile"}
                                    className="h-16 w-16 rounded-full border border-slate-200 object-cover"
                                />
                            ) : (
                                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-slate-50">
                                    <User className="h-8 w-8 text-slate-400" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};



export default PersonalInformation
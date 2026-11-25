import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { User } from 'lucide-react'
import { Label } from '../../components/ui/label'
import { Input } from '../../components/ui/input'

const AccountSecurityCard = ({
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
                    Account Security
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {/* Role  */}

                    <div className="space-y-2">
                        <Label
                            htmlFor="role"
                            className="text-sm font-medium text-slate-700"
                        >
                            Role
                        </Label>

                        <div className="min-h-11 flex items-center rounded-md border border-transparent bg-slate-50 px-3">
                            <p className="text-sm text-slate-600">
                                {user?.role}
                            </p>
                        </div>

                    </div>

                    {/* Account Status  */}
                    <div className="space-y-2">
                        <Label
                            htmlFor="fullName"
                            className="text-sm font-medium text-slate-700"
                        >
                            Account Status:
                        </Label>

                        <div className="min-h-11 flex items-center rounded-md border border-transparent bg-slate-50 px-3">
                            <p className="text-sm text-slate-600">
                                {user?.status}
                            </p>
                        </div>

                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {/* Sign in method */}

                    <div className="space-y-2">
                        <Label
                            htmlFor="signinmethod"
                            className="text-sm font-medium text-slate-700"
                        >
                            Sign-in method
                        </Label>
                        <div className="min-h-11 flex items-center rounded-md border border-transparent bg-slate-50 px-3">
                            <p className="text-sm text-slate-600">
                                Email & Password
                            </p>
                        </div>

                    </div>

                    {/* Profile Image  */}
                    <div className="space-y-2">
                        <Label className="text-sm font-medium text-slate-700">
                            Email Verified
                        </Label>

                        <p>Not Verified</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default AccountSecurityCard

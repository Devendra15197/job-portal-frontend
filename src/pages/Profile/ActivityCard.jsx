import React from 'react'

const ActivityCard = ({ user,
    editing,
    form }) => {
    return (
        <Card className="border-slate-200 shadow-sm">
            <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                    <User className="h-4 w-4" />
                    Activity Card
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Role */}
                    <div className="space-y-1">
                        <Label
                            htmlFor="role"
                            className="text-sm font-medium text-slate-700"
                        >
                            Role
                        </Label>

                        <p id="role" className="min-h-11 py-2 text-sm text-slate-600">
                            {user?.role || "Not available"}
                        </p>
                    </div>

                    {/* Account Status */}
                    <div className="space-y-1">
                        <Label
                            htmlFor="account-status"
                            className="text-sm font-medium text-slate-700"
                        >
                            Account Status
                        </Label>

                        <p
                            id="account-status"
                            className="min-h-11 py-2 text-sm text-slate-600"
                        >
                            {user?.status || "Not available"}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Sign-in method */}
                    <div className="space-y-1">
                        <Label
                            htmlFor="sign-in-method"
                            className="text-sm font-medium text-slate-700"
                        >
                            Sign-in method
                        </Label>

                        <p
                            id="sign-in-method"
                            className="min-h-11 py-2 text-sm text-slate-600"
                        >
                            Email & Password
                        </p>
                    </div>

                    {/* Email Verified */}
                    <div className="space-y-1">
                        <Label
                            htmlFor="email-verified"
                            className="text-sm font-medium text-slate-700"
                        >
                            Email Verified
                        </Label>

                        <p
                            id="email-verified"
                            className="inline-flex min-h-11 items-center py-2 text-sm"
                        >
                            <span className="rounded-full bg-amber-100 px-2.5 py-1 font-medium text-amber-700">
                                Not Verified
                            </span>
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}



export default ActivityCard

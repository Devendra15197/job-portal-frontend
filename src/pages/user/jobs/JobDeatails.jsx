import React from 'react'
import { Button } from '../../../components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'
import { job } from './DummyJob'
import { CheckCircle2 } from 'lucide-react'
import { Bookmark } from 'lucide-react'
import { Users } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Briefcase } from 'lucide-react'
import { DollarSign } from 'lucide-react'
import { Clock } from 'lucide-react'
import { Badge } from '../../../components/ui/badge'
import { Separator } from '../../../components/ui/separator'
import { Car } from 'lucide-react'
import { Share } from 'lucide-react'
import { User } from 'lucide-react'
import { Eye } from 'lucide-react'

const JobDeatails = () => {
    const location = [job.city, job.state, job.country].filter(Boolean).join(", ");

    return (
        <div className='p-8 max-w-7xl max-auto'>
            <Button variant='ghost'>
                <ArrowLeft />
                Back to jobs
            </Button>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>

                {/* Main Content  */}
                <div className='lg:col-span-2 space-y-6'>
                    <Card>
                        <CardContent>
                            <div className='flex items-start gap-4'>
                                {/* Company Logo  */}
                                <div>
                                    <img className='h-16 w-16 object-fill rounded-xl' src={job.company?.logoUrl} alt="" />
                                </div>
                                <div className='flex-1 min-w-0'>
                                    {/* Title Row + Bookmark  */}
                                    <div className='flex items-start justify-between gap-4 mb-2'>
                                        <div>
                                            <h3 className='text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug line-clamp-1'>
                                                {job.title}</h3>
                                            <div className='flex items-center gap-1.5 flex-wrap mt-0.5'>
                                                <span className='text-slate-700 font-medium text-sm'>
                                                    {job.company?.name}
                                                </span>
                                                <CheckCircle2 className='h-4 w-4 fill-primary text-white shrink-0' />
                                                <span className='text-slate-400 text-sm'>.{job.company?.industryType}</span>
                                                <span className='text-slate-400 text-sm'>.{job.company?.companySize}</span>
                                            </div>
                                            <p className='text-slate-400 text-xs mt-0.5 italic'>
                                                {job.company?.tagline}
                                            </p>
                                        </div>
                                        <Button variant='ghost'>
                                            <Bookmark />
                                        </Button>
                                    </div>

                                    {/* Job Details  */}
                                    <div className='flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-slate-600 mb-4'>
                                        <div className='flex items-center gap-1'>
                                            <MapPin className='h-4 w-4 shrink-0' />
                                            {location}
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <Briefcase className='h-4 w-4 shrink-0' />
                                            {job.jobType}
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <DollarSign className='h-4 w-4 shrink-0' />
                                            {job.minSalary}-{job.maxSalary}
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <Clock className='h-4 w-4 shrink-0' />
                                            Posted on {job.createdAt?.split("T")[0]}
                                        </div>
                                    </div>

                                    {/* Badges - Job Details  */}
                                    <div className='flex flex-wrap gap-2'>
                                        <Badge className={"bg-primary"}>{job.state}</Badge>
                                        <Badge variant='outline'>{job.experienceLevel}</Badge>
                                        <Badge variant='secondary'>{job.category?.name}</Badge>

                                        {job.skills.map((skill) => <Badge key={skill} variant='outline'>{skill.slug}</Badge>)}
                                    </div>

                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Description  */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                About the role
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-700 whitespace-pre-line leading-relaxed'>{job.description}</p>
                        </CardContent>
                    </Card>

                    {/* Responsibilities  */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Responsibilities
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-700 whitespace-pre-line leading-relaxed'>{job.responsibilities}</p>
                        </CardContent>
                    </Card>

                    {/* Requirements  */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Responsibilities
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-700 whitespace-pre-line leading-relaxed'>{job.requirements}</p>
                        </CardContent>
                    </Card>

                    {/* Benefits  */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Responsibilities
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-slate-700 whitespace-pre-line leading-relaxed'>{job.benefits}</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Apply Card  */}
                <div className='border'>
                    <Card>
                        <CardContent className={"space-y-4"}>
                            <Button className={"w-full py-5"}>
                                Apply Now
                            </Button>
                            <div className='flex gap-2 justify-between'>
                                <Button variant='outline' className={"w-[80%]"}>Save</Button>
                                <Button variant='outline' className={"w-[10%]"}>
                                    <Share />
                                </Button>
                            </div>

                            <Separator />
                            <div className='text-sm text-slate-600 space-y-2'>
                                <div className='flex items-center justify-between'>
                                    <span className='text-slate-500'>Job Type</span>
                                    <p className='text-slate-900 font-medium'>{job.jobType}</p>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <span className='text-slate-500'>Work Mode</span>
                                    <p className='text-slate-900 font-medium'>{job.workMode}</p>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <span className='text-slate-500'>Experience</span>
                                    <p className='text-slate-900 font-medium'>{job.experienceLevel}</p>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <span className='text-slate-500'>Salary</span>
                                    <p className='text-slate-900 font-medium'>₹{job.minSalary} - ₹{job.maxSalary}</p>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <span className='text-slate-500'>Openings</span>
                                    <p className='text-slate-900 font-medium'>{job.openings}</p>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <span className='text-slate-500'>Deadline</span>
                                    <p className='text-slate-900 font-medium'>{job.applicationDeadline}</p>
                                </div>
                            </div>

                            <Separator />

                            <div className='flex gap-4 text-xs text-slate-500'>
                                <span className='flex items-center gap-1'>
                                    <Users className='h-3.5 w-3.5' /> 20 applicants
                                </span>
                                <span className='flex items-center gap-1'>
                                    <Eye className='h-3.5 w-3.5' /> 150 views
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default JobDeatails
